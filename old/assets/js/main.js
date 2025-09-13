document.addEventListener('DOMContentLoaded', function() {
    // Обработка карточек
    const noteCards = document.querySelectorAll('.note-card');
    
    noteCards.forEach(card => {
        const showBtn = card.querySelector('.show-answer');
        const hideBtn = card.querySelector('.hide-answer');
        
        if (showBtn) {
            showBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                card.classList.add('show-back');
            });
        }
        
        if (hideBtn) {
            hideBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                card.classList.remove('show-back');
            });
        }
        
        // Закрытие по клику вне карточки
        document.addEventListener('click', function(e) {
            if (!card.contains(e.target)) {
                card.classList.remove('show-back');
            }
        });
    });
});
