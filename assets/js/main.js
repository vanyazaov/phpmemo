// Ждём, пока весь DOM загрузится
document.addEventListener('DOMContentLoaded', function() {
    // Находим все карточки на странице
    const cards = document.querySelectorAll('.note-card');
    
    // Для каждой карточки вешаем обработчик события
    cards.forEach(card => {
        card.addEventListener('click', function(event) {
            if (event.target.closest('.btn-primary')) {
                return; // Прерываем выполнение, если клик был по кнопке
            }
            // При клике переключаем класс 'flipped'
            this.classList.toggle('flipped');
        });
    });
});
