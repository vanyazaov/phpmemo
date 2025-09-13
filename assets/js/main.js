document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.note-card');
    
    // Восстанавливаем состояние карточек
    const savedState = JSON.parse(localStorage.getItem('noteCardsState') || '{}');
    
    cards.forEach(card => {
        const cardId = card.dataset.noteId;
        
        // Восстанавливаем сохраненное состояние
        if (savedState[cardId]) {
            card.classList.add('flipped');
        }
        
        card.addEventListener('click', function(event) {
            // Проверяем, был ли клик по кнопке
            if (event.target.closest('.btn-primary')) {
                return;
            }
            
            // Переворачиваем карточку
            this.classList.toggle('flipped');
            
            // Сохраняем состояние
            saveCardState(this);
        });
    });
    
    function saveCardState(card) {
        const cardId = card.dataset.noteId;
        const isFlipped = card.classList.contains('flipped');
        
        // Получаем текущее состояние
        const currentState = JSON.parse(localStorage.getItem('noteCardsState') || '{}');
        
        // Обновляем состояние для этой карточки
        if (isFlipped) {
            currentState[cardId] = true;
        } else {
            delete currentState[cardId];
        }
        
        // Сохраняем обратно
        localStorage.setItem('noteCardsState', JSON.stringify(currentState));
    }
    
    // Кнопка для сброса состояния
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Сбросить все карточки';
    resetButton.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 1000; padding: 10px; background: #ff4757; color: white; border: none; border-radius: 5px; cursor: pointer;';
    resetButton.addEventListener('click', function() {
        localStorage.removeItem('noteCardsState');
        cards.forEach(card => card.classList.remove('flipped'));
    });
    
    document.body.appendChild(resetButton);
});
