// Ждём, пока весь DOM загрузится
document.addEventListener('DOMContentLoaded', function() {
    // Находим все карточки на странице
    const cards = document.querySelectorAll('.card');
    
    // Для каждой карточки вешаем обработчик события
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // При клике переключаем класс 'flipped'
            this.classList.toggle('flipped');
        });
    });
});
