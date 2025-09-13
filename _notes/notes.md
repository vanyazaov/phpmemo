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
            <div class="note-preview note-preview-{{ note.card_type }}">
                <div class="note-preview-meta">
                    <div class="note-preview-icon">#{{ note.card_id }}</div>
                    <span class="note-preview-type">{{ note.card_type }}</span>
                </div>
                
                <h3 class="note-preview-title">{{ note.title }}</h3>
                
                <div class="note-preview-question">
                    {{ note.question | markdownify | strip_html | truncatewords: 20 }}
                </div>
                
                <a href="{{ note.url | relative_url }}" class="btn btn-primary">
                    Открыть карточку
                </a>
            </div>
            {% endif %}
            {% endfor %}
        </div>
    </div>
</div>
