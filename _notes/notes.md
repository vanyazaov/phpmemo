---
layout: default
title: Все карточки
permalink: /notes/
---

<div class="notes-page">
    <div class="container">
        <h1 class="page-title">Все карточки</h1>
        
        <div class="notes-grid">
            <div class="note-card">
                <div class="note-card-inner">
                    <div class="note-card-front">
                        Теги  <code class="language-php">&lt;?php ... ?&gt;</code><br>
                        Расскажите всё, что знаете.
                    </div>
                    <div class="note-card-back">
                        Пример:

```php
<!DOCTYPE html>
<html>
<body>
    <h1>Привет, это HTML!</h1>
    <?php
        // А это PHP
        echo "<p>Сгенерировано PHP в " . date('Y-m-d H:i:s') . "</p>";
    ?>
    <p>Снова HTML.</p>
</body>
</html>
```

                    </div>
                </div>
            </div>
            <div class="note-card">
                <div class="note-card-inner">
                    <div class="note-card-front">
                        Однострочный комментарий 
                        {{"`//`" | markdownify }}
                        <br>
                        Расскажите о его использовании, включая нестандартные случаи.                        
                    </div>
                    <div class="note-card-back">
                        <p><code>echo</code> - конструкция языка, не возвращает значения.<br>
                           <code>print</code> - языковая конструкция, всегда возвращает 1.</p>
                    </div>
                </div>
            </div>
            <div class="note-card">
                <div class="note-card-inner">
                    <div class="note-card-front">
                        {{ "```php 
                        /* ... */ 
                        ```" | markdownify }}
                        <br>
                        Расскажите об использовании указанных символов в коде.
                    </div>
                    <div class="note-card-back">
                        <p><code>echo</code> - конструкция языка, не возвращает значения.<br>
                           <code>print</code> - языковая конструкция, всегда возвращает 1.</p>
                    </div>
                </div>
            </div>
            <div class="note-card">
                <div class="note-card-inner">
                    <div class="note-card-front">
                        Основные атрибуты (теги) DocBlock.
                        Перечислите и кратко опишите основные.
                    </div>
                    <div class="note-card-back">
                        <p><code>echo</code> - конструкция языка, не возвращает значения.<br>
                           <code>print</code> - языковая конструкция, всегда возвращает 1.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
