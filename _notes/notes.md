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
            <div class="note-card">
                <div class="note-card-front">
                    <h3 class="note-title">{{ note.title }}</h3>
                    <div class="note-excerpt">
                        {{ note.excerpt | strip_html | truncatewords: 15 }}
                    </div>
                    <button class="btn btn-secondary show-answer">Показать ответ</button>
                </div>
                
                <div class="note-card-back">
                    <div class="note-content">
                        {{ note.content | remove: note.excerpt | markdownify }}
                    </div>
                    <div class="note-actions">
                        <button class="btn btn-secondary hide-answer">Скрыть</button>
                        <a href="{{ note.url }}" class="btn btn-primary">Подробнее</a>
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</div>
