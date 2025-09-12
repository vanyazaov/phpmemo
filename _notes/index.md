---
layout: default
title: "Все записи"
---

# Все записи

<ul>
  {% for note in site.notes %}
    <li>
      <a href="{{ note.url }}">{{ note.title }}</a> ({{ note.date | date: "%d.%m.%Y" }})
    </li>
  {% endfor %}
</ul>
