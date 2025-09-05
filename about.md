---
layout: default
title: "About Me"
permalink: /about/
---

<div class="about-page">

  <!-- Photo -->
  <div class="about-photo">
    <img src="{{ '/assets/images/photo.png' | relative_url }}" alt="Sarang Deshmukh">
  </div>

  <!-- Bio -->
  <div class="about-bio">
    <h2>Sarang Deshmukh</h2>
    <p>
      I am a passionate DevOps engineer with over 5 years of experience building reliable, scalable, and maintainable systems. I have successfully delivered multi-regional, active-active deployments for critical projects, ensuring seamless user experiences across geographies. I thrive on designing automated and intelligent workflows, optimizing deployment pipelines, and creating systems that are robust and future-proof.
    </p>
    <p>
      I created this website as a platform to showcase my projects, share insights, and challenge myself with new technologies. It serves as a space where I consistently learn, experiment, and document my journey with cloud technologies, DevOps practices, and automation tools. By sharing my work here, I aim to inspire others and hold myself accountable to continuous improvement.
    </p>
    <p>
      <a href="https://www.linkedin.com/in/sarang-deshmukh-125197182/" target="_blank" rel="noopener">Connect with me on LinkedIn</a>
    </p>
  </div>

</div>

<style>
/* Importing Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500;700&family=Roboto:wght@400;500&display=swap');

/* Container */
.about-page {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background: radial-gradient(circle, #090909, #000);
  color: #fff;
  /* Setting base font */
  font-family: 'Roboto', sans-serif;
}

/* Photo */
.about-photo {
  flex: 0 0 250px;
}

.about-photo img {
  width: 100%;
  border-radius: 12px;
  /* Subtle neon glow */
  box-shadow: 0 0 15px #39FF14;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-photo img:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px #39FF14, 0 0 50px #39FF14;
}

/* Bio */
.about-bio {
  flex: 1 1 500px;
  font-size: 1.05rem;
}

.about-bio h2 {
  font-family: 'Rubik', sans-serif;
  font-size: 2rem;
  color: #39FF14;
  margin: 0;
  margin-bottom: 0.5rem;
  /* Neon text glow effect */
  text-shadow: 0 0 6px #39FF14;
  letter-spacing: 1px;
}

.about-bio h3 {
  font-family: 'Rubik', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: #ccc;
  margin: 0 0 1rem;
  font-style: italic;
}

.about-bio p {
  line-height: 1.6;
  margin-bottom: 1.2rem;
}

.about-bio a {
  color: #39FF14;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.2s;
}

.about-bio a:hover {
  border-bottom: 1px solid #39FF14;
}

/* Mobile responsive */
@media (max-width: 700px) {
  .about-page {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .about-photo {
    flex: 0 0 120px;
    margin-bottom: 1.5rem;
  }

  .about-bio {
    flex: 1 1 auto;
  }
}
</style>
