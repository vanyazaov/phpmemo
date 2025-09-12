document.addEventListener('DOMContentLoaded', function() {
    // Сначала скрываем все back-стороны карточек
    document.querySelectorAll('.note-card-back').forEach(back => {
        back.style.display = 'none';
    });
    
    document.querySelectorAll('.note-card-front').forEach(front => {
        front.style.display = 'block';
    });

    // Обработка карточек
    const noteCards = document.querySelectorAll('.note-card');
    
    noteCards.forEach(card => {
        const showBtn = card.querySelector('.show-answer');
        const hideBtn = card.querySelector('.hide-answer');
        const front = card.querySelector('.note-card-front');
        const back = card.querySelector('.note-card-back');
        
        if (showBtn && hideBtn && front && back) {
            showBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                front.style.display = 'none';
                back.style.display = 'block';
            });
            
            hideBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                back.style.display = 'none';
                front.style.display = 'block';
            });
            
            // Закрытие по клику вне карточки
            document.addEventListener('click', function(e) {
                if (!card.contains(e.target)) {
                    back.style.display = 'none';
                    front.style.display = 'block';
                }
            });
        }
    });
});
