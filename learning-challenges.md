---
layout: home
permalink: /learning-challenges/
author_profile: true
---

<p style="color:#0A192F; text-align:center; margin-bottom:1rem;">
  <strong>Daily challenges, lasting skills.</strong>
</p>

<div class="blog-grid">
  {% for post in site.posts %}
    {% if post.category == "cloud" %}
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
            {{ post.author }}
          </p>
        </div>
      </div>
    {% endif %}
  {% endfor %}
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500;700&family=Roboto:wght@400;500&display=swap');

html, body {
  background-color: #FFFFFF !important;  /* white page background */
  color: #0A192F !important;            /* dark text */
  font-family: 'Roboto', sans-serif !important;
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box !important;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 10px; /* closer cards */
  padding: 2rem;
}

.blog-card {
  background-color: #EDE9D5;  /* beige inner card */
  border: 2px solid #FF6B35; /* orange accent */
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255,107,53,0.3); /* subtle orange glow */
}

.blog-image {
  width: 100%;
  height: 180px;
  background-color: #FF6B35; /* fallback orange */
  background-size: cover;
  background-position: center;
}

.blog-content {
  padding: 1rem;
}

.blog-card h3 {
  font-family: 'Rubik', sans-serif;
  font-size: 1.25rem;
  margin: 0 0 0.5rem;
  color: #FF6B35; /* orange title */
}

.blog-card h3 a {
  color: #FF6B35 !important;
  text-decoration: none;
}

.blog-card h3 a:hover {
  text-decoration: underline;
  color: #FF9013 !important;
}

.blog-meta {
  font-size: 0.9rem;
  color: #0A192F; /* dark text */
}

@media (max-width: 700px) {
  .blog-grid {
    grid-template-columns: 1fr;
    padding: 1rem;
  }

  .blog-card h3 {
    font-size: 1.1rem;
  }

  .blog-image {
    height: 140px;
  }
}
</style>
