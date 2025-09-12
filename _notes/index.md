---
layout: default
title: "Все записи"
permalink: /notes/
---

# Все записи

<div class="card-container">
  {% for note in site.notes %}
    <div class="card">
        <div class="card-inner">
            <div class="card-front">
                <a href="{{ note.url | relative_url }}">{{ note.title }}</a> ({{ note.date | date: "%d.%m.%Y" }})
            </div>
        </div>
    </div>
  {% endfor %}
</div>
