---
layout: default
title: Все карточки
permalink: /notes/
---
{% assign real_notes = site.notes | where_exp: "item", "item.path != '_notes/notes.md'" %}
<div class="notes-page">
    <div class="container">
        <h1 class="page-title">Все карточки</h1>
        
        <div class="notes-grid">
            {% for note in real_notes %}
            <div class="note-card">
                <div class="note-card-front">
                    <h3 class="note-title">{{ note.title }}</h3>
                    <div class="note-excerpt">
                        {% include excerpt.html content=note.content max_length=120 %}
                    </div>
                    <button class="btn btn-secondary show-answer">Показать ответ</button>
                </div>
                
                <div class="note-card-back">
                    <div class="note-content">
                        {% if note.content contains "<!--more-->" %}
                            {% assign parts = note.content | split: "<!--more-->" %}
                            {{ parts.last | markdownify }}
                        {% else %}
                            {{ note.content | markdownify }}
                        {% endif %}
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
