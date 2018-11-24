---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
---

<div class="tags-expo">
  <div class="tags-expo-list">
    {% for tag in site.categories %}
    <a href="#{{ tag[0] | slugify }}" class="post-tag">{{ tag[0] }}</a>
    <br>
    {% endfor %}
  </div>
  <hr/>
  <div class="tags-expo-section">
    {% for tag in site.categories %}
    <h2 id="{{ tag[0] | slugify }}">{{ tag | first }}</h2>
    <ul class="tags-expo-posts">
      {% for post in tag[1] %}
        <a class="post-title" href="{{ site.url }}{{ post.url }}">
      <li>
        {%if post.short %} 
        {{ post.short }} - {{ post.title }}
        {% else %}
        {{ post.title }}
        {% endif %}
      <small class="post-date">{{ post.date | date_to_string }}</small>
      </li>
      </a>
      {% endfor %}
    </ul>
    {% endfor %}
  </div>
</div>
