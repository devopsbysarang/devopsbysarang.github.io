---
layout: home
title: "DevOps in Action: Case Studies"
permalink: /devops-case-studies/
author_profile: true
category: case-studies
---

{% assign posts_filtered = site.posts | where: "category", page.category %}

<p style="color:#fff; text-align:center; margin-bottom:1rem;">
  Here you’ll find posts on <strong>DevOps in Action: Case Studies</strong>.
</p>

<div class="blog-grid">
  {% for post in posts_filtered %}
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
  {% endfor %}
</div>
