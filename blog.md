---
layout: home
permalink: /blog/
hide_recent_posts: true
author_profile: true
---

<p style="color:#fff; text-align:center; margin-bottom:1rem;">
  Here you’ll find all my posts on <strong>DevOps, Kubernetes, Cloud, and Automation</strong>.
</p>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500;700&family=Roboto:wght@400;500&display=swap');

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

.blog-card {
  background-color: #111;
  border: 2px solid #64FFDA; /* subtle neon accent */
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 10px rgba(57, 255, 20, 0.3); /* subtle hover effect */
}

.blog-image {
  width: 100%;
  height: 180px;
  background-color: #0A192F; /* fallback color */
  background-size: cover;
  background-position: center;
}

.blog-content {
  padding: 1rem;
  background-color: #0A192F;
}

.blog-card h3 {
  font-family: 'Rubik', sans-serif;
  font-size: 1.25rem;
  margin: 0 0 0.5rem;
  color: #64FFDA;
  text-shadow: none;
}

.blog-card h3 a {
  color: inherit;
  text-decoration: none;
}

.blog-card h3 a:hover {
  text-decoration: underline;
}

.blog-meta {
  font-size: 0.9rem;
  color: #ccc;
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
