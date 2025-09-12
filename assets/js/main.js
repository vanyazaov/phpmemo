document.addEventListener('DOMContentLoaded', function() {
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
    
    // Плавная прокрутка для якорей
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
