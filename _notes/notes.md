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
