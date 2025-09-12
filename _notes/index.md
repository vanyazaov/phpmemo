---
layout: default
title: "Все записи"
permalink: /notes/
---

# Все записи

<ul>
  {% for note in site.notes %}
    <li>
      <a href="{{ note.url | relative_url }}">{{ note.title }}</a> ({{ note.date | date: "%d.%m.%Y" }})
    </li>
  {% endfor %}
</ul>
