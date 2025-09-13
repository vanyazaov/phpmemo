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
                    <div class="note-card note-card-{{ note.card_type }}" data-note-id="{{ note.card_id }}">
                        <div class="note-card-inner">
                            <div class="note-card-front">
                                <!-- Верхняя панель с мета-информацией -->
                                <div class="note-meta">
                                    <div class="note-icon note-icon-{{ note.card_type }}">
                                        {% case note.card_type %}
                                            {% when "theory" %}{% assign icon = "📚" %}
                                            {% when "technique" %}{% assign icon = "⚡" %}
                                            {% when "practice" %}{% assign icon = "🔧" %}
                                        {% endcase %}
                                        
                                        {{ icon }}
                                     </div>
                                    <div class="note-info">
                                        <span class="note-id">#{{ note.card_id }}</span>
                                        <span class="note-date">{{ note.date | date: "%d.%m.%Y" }}</span>
                                        <span class="note-category">{{ note.categories | first }}</span>
                                    </div>
                                </div>

                                <!-- Область вопроса -->
                                <div class="note-question">
                                    {{ note.question | markdownify }}
                                </div>
                            </div>
                            <div class="note-card-back">
                                <!-- Область ответа (изначально скрыта) -->
                                <div class="note-answer">
                                    <div class="short-answer">
                                        {{ note.short_answer | markdownify }}
                                    </div>
                                    
                                    <div class="answer-actions">
                                        <button class="btn btn-secondary hide-answer">Скрыть ответ</button>
                                        <a href="{{ note.url | relative_url }}" class="btn btn-primary">Подробнее</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {% endif %}
            {% endfor %}          
        </div>
    </div>
</div>
