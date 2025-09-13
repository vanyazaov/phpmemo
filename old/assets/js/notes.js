document.addEventListener('DOMContentLoaded', function() {
    // Показать/скрыть ответ
    document.querySelector('.show-answer')?.addEventListener('click', function() {
        document.querySelector('.note-card').classList.add('show-answer');
    });

    document.querySelector('.hide-answer')?.addEventListener('click', function() {
        document.querySelector('.note-card').classList.remove('show-answer');
    });

    // Переход на полную версию
    document.querySelector('.show-full')?.addEventListener('click', function() {
        window.location.href = window.location.href + '?from=card';
    });

    // Если пришли с карточки, сразу показываем ответ
    if (new URLSearchParams(window.location.search).get('from') === 'card') {
        document.querySelector('.note-card').classList.add('show-answer');
    }
});
