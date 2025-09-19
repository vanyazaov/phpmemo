document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.note-card');
    const progressStats = document.getElementById('progressStats');
    const progressText = document.getElementById('progressText');
    const progressFill = document.getElementById('progressFill');
    const storageKey = 'noteCardsState';
    const completedKey = 'noteCardsCompleted';
    
    let savedState = {};
    let completedCards = {};
    
    try {
        // Восстанавливаем состояние переворота
        savedState = JSON.parse(localStorage.getItem(storageKey) || '{}');
        // Восстанавливаем состояние изученности
        completedCards = JSON.parse(localStorage.getItem(completedKey) || '{}');
    } catch (e) {
        console.warn('Не удалось прочитать состояние карточек:', e);
    }

    // Восстанавливаем состояние и считаем прогресс
    let studiedCount = Object.keys(completedCards).length;
    
    cards.forEach(card => {
        const cardId = card.dataset.noteId;
        const markCompletedBtn = card.querySelector('.mark-completed');
        const markUncompletedBtn = card.querySelector('.mark-uncompleted');
        const hideAnswerBtn = card.querySelector('.hide-answer');
        
        // Восстанавливаем сохраненное состояние переворота
        if (savedState[cardId]) {
            card.classList.add('flipped');
        }
        
        // Восстанавливаем состояние изученности
        if (completedCards[cardId]) {
            card.classList.add('completed');
            markCompletedBtn.style.display = 'none';
            markUncompletedBtn.style.display = 'inline-block';
        }
        
        // Обработчик клика по карточке (только переворот)
        card.addEventListener('click', function(event) {
            if (event.target.closest('.btn') || event.target.closest('.answer-actions')) {
                return;
            }
            
            this.classList.toggle('flipped');
            saveCardState(this);
        });
        
        // Кнопка "Бито"
        markCompletedBtn.addEventListener('click', function(event) {
            event.stopPropagation();
            card.classList.add('completed');
            markCompletedBtn.style.display = 'none';
            markUncompletedBtn.style.display = 'inline-block';
            card.classList.remove('flipped');
            
            // Сохраняем состояние переворота (что карточка не перевернута)
            saveCardState(card);
            
            // Сохраняем и обновляем прогресс
            completedCards[cardId] = true;
            studiedCount++;
            saveCompletedState();
            updateProgressDisplay();
        });
        
        // Кнопка "В колоду"
        markUncompletedBtn.addEventListener('click', function(event) {
            event.stopPropagation();
            card.classList.remove('completed');
            markCompletedBtn.style.display = 'inline-block';
            markUncompletedBtn.style.display = 'none';
            card.classList.remove('flipped');
            
            // Сохраняем состояние переворота (что карточка не перевернута)
            saveCardState(card);
            
            // Удаляем из прогресса
            delete completedCards[cardId];
            studiedCount--;
            saveCompletedState();
            updateProgressDisplay();
        });
        
        // Кнопка "Скрыть ответ"
        /*hideAnswerBtn.addEventListener('click', function(event) {
            event.stopPropagation();
            card.classList.remove('flipped');
            saveCardState(card);
        });*/
    });
    
    // Инициализируем прогресс
    updateProgressDisplay();
    
    function saveCardState(card) {
        const cardId = card.dataset.noteId;
        const isFlipped = card.classList.contains('flipped');
        
        try {
            const currentState = JSON.parse(localStorage.getItem(storageKey) || '{}');
            
            if (isFlipped) {
                currentState[cardId] = true;
            } else {
                delete currentState[cardId];
            }
            
            localStorage.setItem(storageKey, JSON.stringify(currentState));
        } catch (e) {
            console.warn('Не удалось сохранить состояние переворота:', e);
        }
    }
    
    function saveCompletedState() {
        try {
            localStorage.setItem(completedKey, JSON.stringify(completedCards));
        } catch (e) {
            console.warn('Не удалось сохранить состояние изученности:', e);
        }
    }
    
    function updateProgressDisplay() {
        const total = cards.length;
        const percentage = total > 0 ? (studiedCount / total) * 100 : 0;
        
        progressText.textContent = `${studiedCount}/${total} изучено (${Math.round(percentage)}%)`;
        progressFill.style.width = `${percentage}%`;
        
        // Добавляем классы для разных уровней прогресса
        progressFill.className = 'progress-fill';
        if (percentage === 100) {
            progressFill.classList.add('complete');
        } else if (percentage >= 50) {
            progressFill.classList.add('halfway');
        }
    }
    
    // Кнопка сброса прогресса
    const resetButton = document.createElement('button');
    resetButton.textContent = '🔄 Сбросить прогресс';
    resetButton.className = 'reset-progress-btn';
    resetButton.addEventListener('click', function() {
        if (confirm('Сбросить весь прогресс?')) {
            localStorage.removeItem(completedKey);
            cards.forEach(card => {
                card.classList.remove('completed');
                const markCompletedBtn = card.querySelector('.mark-completed');
                const markUncompletedBtn = card.querySelector('.mark-uncompleted');
                
                markCompletedBtn.style.display = 'inline-block';
                markUncompletedBtn.style.display = 'none';
            });
            studiedCount = 0;
            completedCards = {};
            updateProgressDisplay();
        }
    });
    
    progressStats.appendChild(resetButton);
});
