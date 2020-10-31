---
layout: default
permalink: /index.html
---
<div class="tags-expo">
<div class="tags-expo-list">
{% for tag in site.categories %}
<a href="#{{ tag[0] | slugify }}" class="post-tag">{{ tag[0] | upcase }}</a>
{% endfor %}
</div>
<hr/>
<div class="tags-expo-section">
{% for tag in site.categories %}
<h2 id="{{ tag[0] | slugify }}">
{{ tag | first | upcase }}</h2>
<ul class="tags-expo-posts">
{% for post in tag[1] %}
<li>
<a class="post-title no-link" href="{{ site.url }}{{ post.url }}">
{% if post.short %}
{{post.short}}:
{% endif %}
{{post.title}}
<small class="post-date">
{{ post.date | date_to_string }}</small>
</a>
</li>
{% endfor %}
</ul>
{% endfor %}
</div>
</div>
