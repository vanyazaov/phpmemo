---
layout: default
title: "Главная - PHPMemo"
---
# Добро пожаловать в PHPMemo!

Это коллекция шпаргалок и заметок по PHP и веб-разработке.

## Последние записи

{% for note in site.notes limit:5 %}
* [{{ note.title | relative_url }}]({{ note.url }})
{% endfor %}
