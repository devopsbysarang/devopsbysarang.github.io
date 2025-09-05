---
layout: home
permalink: /automation-devops/
author_profile: true
---

<p style="color:#fff; text-align:center; margin-bottom:1rem;">
  Here you’ll find posts on <strong>Automation in DevOps</strong>.
</p>

<div class="blog-grid">
  {% for post in site.posts %}
    {% if post.category == "automation" %}
      <div class="blog-card">
        <div class="blog-image" style="
          background-image: url('{{ post.featured-image | default: '/assets/images/default-blog.jpg' }}');
          background-size: cover;
          background-position: center;
          width: 100%;
          height: 180px;
        "></div>

        <div class="blog-content">
          <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
          <p class="blog-meta">
            <time datetime="{{ post.date }}">{{ post.date | date: "%b %-d, %Y" }}</time> • {{ post.author }}
          </p>
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>
