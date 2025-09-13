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
                    
                {% endif %}
            {% endfor %}
            
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
                        {% highlight php %}/* ... */{% endhighlight %}
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
                    <div class="note-card-front">
                        

                        <!-- Кнопка для показа ответа -->
                        <button class="btn btn-primary show-answer">Показать ответ</button>
                    </div>
                    <div class="note-card-back">
                        
                    </div>                  
                </div>
            </div>
        </div>
    </div>
</div>
