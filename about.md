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
      I am a DevOps engineer with 5+ years of experience building reliable, scalable, and maintainable systems. I have successfully delivered multi-regional, active-active deployments for critical projects, ensuring seamless user experiences across geographies. I thrive on designing automated workflows, optimizing pipelines, and creating systems that are robust and future-proof.
    </p>
    <p>
      This website is my space to showcase projects, share insights, and document my journey with cloud technologies, DevOps practices, and automation tools. By sharing my work, I aim to inspire others and continuously grow as a technologist.
    </p>
  </div>
</div>

<!-- Testimonials (immediately after bio since skills section removed) -->
<section class="testimonials-section">
  <div class="container">
    <h2 class="testimonials-heading">What people say?</h2>

    <div class="testimonials-wrapper">
      <!-- Testimonial 1 -->
      <div class="testimonial">
        <p class="testimonial-text">
          "I highly recommend Sarang for any future endeavors, and I'm confident he will continue to shine in any role he's in and overcome any challenges he may face!"
        </p>
        <p class="testimonial-name">– Hariom Kashyap
          <span class="testimonial-role">Software Architect, Amdocs</span>
        </p>
      </div>

      <!-- Testimonial 2 -->
      <div class="testimonial">
        <p class="testimonial-text">
          "Sarang has always been a curious person. He is willing to take risks, make mistakes, and learn from them. He comes up with new ideas, never afraid of trying, and puts in the effort every time."
        </p>
        <p class="testimonial-name">– Ankur Singh
          <span class="testimonial-role">AI Engineer, Intel</span>
        </p>
      </div>
    </div>
  </div>
</section>

<!-- LinkedIn Button -->
<div class="linkedin-section">
  <a href="https://www.linkedin.com/in/sarang-deshmukh-125197182/" target="_blank" rel="noopener" class="linkedin-btn">
    Connect with me on LinkedIn
  </a>
</div>

<!-- Horizontal line below LinkedIn button -->
<hr class="after-linkline" />

<style>
/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500;700&family=Roboto:wght@400;500&display=swap');

/* Global colors & font */
:root{
  --bg-outer: #0A192F;
  --panel: #112240;
  --accent: #64FFDA;
  --card: #104F62;
  --muted-text: #ccd6f6;
  --testimonial-bg: #EEE9D5; /* requested */
  --testimonial-text: #000000; /* black text */
  --name-color: #0B3D91; /* strong blue for name */
  --role-color: #064E3B; /* deep teal for role */
}

/* Page layout */
.about-page {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background: var(--bg-outer);
  font-family: 'Roboto', sans-serif;
  color: var(--muted-text);
}

/* Photo */
.about-photo {
  flex: 0 0 250px;
}
.about-photo img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 0 8px var(--accent);
  border: 3px solid var(--accent);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.about-photo img:hover {
  transform: scale(1.05);
  box-shadow: 0 0 16px var(--accent);
}

/* Bio */
.about-bio {
  flex: 1 1 500px;
  font-size: 1.05rem;
}
.about-bio h2 {
  font-family: 'Rubik', sans-serif;
  font-size: 2rem;
  color: var(--accent);
  margin: 0 0 0.5rem;
  letter-spacing: 1px;
}
.about-bio p {
  line-height: 1.6;
  margin-bottom: 1.2rem;
  color: var(--muted-text);
}

/* Testimonials Section */
.testimonials-section {
  background-color: var(--bg-outer);
  padding: 30px 0 40px 0;
  color: #ffffff;
}
.container {
  max-width: 1000px;
  margin: auto;
  padding: 0 20px;
}
.testimonials-heading {
  margin-bottom: 40px;
  margin-top: 10px;
  font-size: 2rem;
  text-align: center;
  color: var(--accent);
}

/* Testimonial cards */
.testimonials-wrapper {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
}
.testimonial {
  background-color: var(--testimonial-bg);
  padding: 30px 25px;
  border-radius: 12px;
  /* softened shadow so it doesn't clash with light bg */
  box-shadow: 0 6px 18px rgba(10, 25, 47, 0.15);
  flex: 1 1 300px;
  max-width: 450px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(10,25,47,0.06);
}
.testimonial:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(10,25,47,0.18);
}
.testimonial-text {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 15px;
  color: var(--testimonial-text); /* black */
}
.testimonial-name {
  font-weight: bold;
  color: var(--name-color); /* requested different color */
  margin: 10px 0 0 0;
  line-height: 1.4;
}
.testimonial-role {
  display: block;
  font-weight: normal;
  color: var(--role-color); /* role color */
  font-style: italic;
  margin: 3px 0 0 0;
  line-height: 1.3;
}

/* LinkedIn Section - pulled slightly up */
.linkedin-section {
  text-align: center;
  margin: -12px 0 26px 0; /* negative top margin to shift button up */
}
.linkedin-section .linkedin-btn {
  text-decoration: none;
  font-weight: 600;
  border-radius: 6px;
  background-color: var(--accent);
  color: var(--bg-outer) !important;
  padding: 0.7rem 1.5rem;
  display: inline-block;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}
.linkedin-section .linkedin-btn:hover {
  background-color: #27cfa7;
}

/* Horizontal line below LinkedIn button */
.after-linkline {
  max-width: 720px;
  margin: 0 auto 40px auto;
  border: none;
  height: 1px;
  background: linear-gradient(90deg, rgba(255,255,255,0.04), rgba(255,255,255,0.06));
}

/* Responsive */
@media (max-width: 900px) {
  .about-photo { flex: 0 0 180px; }
}
@media (max-width: 700px) {
  .about-page {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem;
  }
  .about-photo {
    flex: 0 0 150px;
    margin-bottom: 1rem;
  }
  .about-bio { text-align: left; }
  .testimonials-wrapper { flex-direction: column; gap: 20px; }
  .testimonial { max-width: 100%; padding: 20px; }
  .testimonials-heading { margin-bottom: 25px; font-size: 1.6rem; }
  .linkedin-section { margin: -8px 0 20px 0; } /* slightly smaller negative on mobile */
  .after-linkline { margin-bottom: 28px; }
}
</style>
