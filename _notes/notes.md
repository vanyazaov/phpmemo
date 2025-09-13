---
layout: default
title: Все карточки
permalink: /notes/
---

<div class="notes-page">
    <div class="container">
        <h1 class="page-title">Все карточки</h1>
        
        <div class="notes-grid">
            {% for note in site.notes %}
            {% if note.card_id %} <!-- Пропускаем служебные файлы -->
                {% include note-card.html note=note %}
            {% endif %}
            {% endfor %}
        </div>
    </div>
</div>

<style>
/* Сетка карточек */
.notes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

/* Адаптивность */
@media (max-width: 768px) {
    .notes-grid {
        grid-template-columns: 1fr;
    }
}
</style>

<script>
// JavaScript для работы карточек на странице "Все записи"
document.addEventListener('DOMContentLoaded', function() {
    // Делегирование событий для всех карточек
    document.querySelector('.notes-grid').addEventListener('click', function(e) {
        const card = e.target.closest('.note-card');
        if (!card) return;
        
        if (e.target.classList.contains('show-answer')) {
            card.classList.add('show-answer');
        }
        
        if (e.target.classList.contains('hide-answer')) {
            card.classList.remove('show-answer');
        }
    });
});
</script>
