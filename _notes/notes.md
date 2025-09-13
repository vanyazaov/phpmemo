---
layout: default
title: Все карточки
permalink: /notes/
---

<div class="notes-page">
    <div class="container">
        <h1 class="page-title">Все карточки</h1>
        
        <div class="notes-grid">
            <div class="note-card note-card-theory">
                <div class="note-card-inner">
                    <div class="note-card-front">
                        Теги  <code class="language-php">&lt;?php ... ?&gt;</code><br>
                        Расскажите всё, что знаете.
                    </div>
                    <div class="note-card-back">
                        

                    </div>
                </div>
            </div>
            <div class="note-card note-card-technique">
                <div class="note-card-inner">
                    <div class="note-card-front">
                        Однострочный комментарий 
                        {{"`//`" | markdownify }}
                        <br>
                        Расскажите о его использовании, включая нестандартные случаи.                        
                    </div>
                    <div class="note-card-back">
                        
                    </div>
                </div>
            </div>
            <div class="note-card note-card-practice">
                <div class="note-card-inner">
                    <div class="note-card-front">
                        {% highlight php %}                      
/* ... */ 
                        {% endhighlight %}
                        <br>
                        Расскажите об использовании указанных символов в коде.
                    </div>
                    <div class="note-card-back">
                        
                    </div>
                </div>
            </div>
            <div class="note-card note-card-theory">
                <div class="note-card-inner">
                    <div class="note-card-front">
                        Основные атрибуты (теги) DocBlock.
                        Перечислите и кратко опишите основные.
                    </div>
                    <div class="note-card-back">
                        
                    </div>
                </div>
            </div>
            <div class="note-card note-card-theory" data-note-id="1">
                <div class="note-card-inner">
                    <!-- Верхняя панель с мета-информацией -->
                    <div class="note-meta">
                        <div class="note-icon note-icon-theory"> 📚</div>
                        <div class="note-info">
                            <span class="note-id">#1</span>
                            <span class="note-date">2025-09-13</span>
                            <span class="note-category">PHP Basic</span>
                        </div>
                    </div>

                    <!-- Область вопроса -->
                    <div class="note-question">
                        <h3>Вопрос:</h3>
                        {{ "`<?php ... ?>`" | markdownify }}
                    </div>

                    <!-- Область ответа (изначально скрыта) -->
                    <div class="note-answer">
                        <div class="short-answer">
                            <h4>Краткий ответ:</h4>
                            {{ "`<?php ... ?>` - Это просто теги" | markdownify }}
                        </div>
                        
                        <div class="answer-actions">
                            <button class="btn btn-secondary hide-answer">Скрыть ответ</button>
                            <a href="#" class="btn btn-primary">Подробнее</a>
                        </div>
                    </div>

                    <!-- Кнопка для показа ответа -->
                    <button class="btn btn-primary show-answer">Показать ответ</button>
                </div>
            </div>
        </div>
    </div>
</div>
