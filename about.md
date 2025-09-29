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

<!-- Testimonials (immediately after bio; skills removed) -->
<section class="testimonials-section">
  <div class="testimonials-bg"> <!-- full-width soft background wrapper -->
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
  </div>
</section>

<!-- LinkedIn Button (pulled slightly up) -->
<div class="linkedin-section">
  <a href="https://www.linkedin.com/in/sarang-deshmukh-125197182/" target="_blank" rel="noopener" class="linkedin-btn">
    Connect with me on LinkedIn
  </a>
</div>

<!-- Dark horizontal line below LinkedIn button -->
<hr class="after-linkline" />

<style>
/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500;700&family=Roboto:wght@400;500&display=swap');

/* Color variables */
:root{
  --page-bg: #0A192F;
  --accent-cyan: #64FFDA;
  --muted-text: #ccd6f6;
  --panel-light: #f3f2ea;
  --card-bg: #EEE9D5;         /* requested card color */
  --card-text: #000000;       /* black text */
  --name-color: #0A2A66;     /* name color (dark blue) */
  --role-color: #0D5A4A;     /* role color (deep teal) */
  --container-max: 1100px;
}

/* Page container (bio & photo) */
.about-page {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background: var(--page-bg);
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
  box-shadow: 0 0 8px var(--accent-cyan);
  border: 3px solid var(--accent-cyan);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.about-photo img:hover {
  transform: scale(1.03);
  box-shadow: 0 0 16px var(--accent-cyan);
}

/* Bio */
.about-bio {
  flex: 1 1 500px;
  font-size: 1.05rem;
}
.about-bio h2 {
  font-family: 'Rubik', sans-serif;
  font-size: 2rem;
  color: var(--accent-cyan);
  margin: 0 0 0.5rem;
  letter-spacing: 1px;
}
.about-bio p {
  line-height: 1.6;
  margin-bottom: 1.2rem;
  color: var(--muted-text);
}

/* ===== Testimonials: light panel + contrast improvements ===== */

/* Section wrapper keeps background transparent; inner wrapper gives the light panel look */
.testimonials-section {
  background: transparent;
  padding: 40px 0 48px 0;
}

/* The actual background panel spanning full width inside the dark page */
.testimonials-bg {
  background: var(--panel-light); /* warm light panel behind the cards */
  padding: 48px 0;
  box-shadow: 0 8px 30px rgba(5,10,20,0.12);
}

/* Container keeps same width but adds breathing space */
.testimonials-bg .container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 28px;
}

/* Heading should be dark and readable on the light panel */
.testimonials-heading {
  color: #071426; /* deep navy/black */
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 34px;
  font-weight: 700;
}

/* Cards (requested card color #EEE9D5) */
.testimonials-wrapper {
  display: flex;
  gap: 26px;
  flex-wrap: wrap;
  justify-content: center;
}
.testimonial {
  background-color: var(--card-bg);
  padding: 34px 28px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(10,20,30,0.08);
  flex: 1 1 380px;
  max-width: 520px;
  transition: transform 0.28s ease, box-shadow 0.28s ease;
  border: 1px solid rgba(10,20,30,0.05);
  position: relative;
  overflow: hidden;
}

/* hover lift */
.testimonial:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 36px rgba(10,20,30,0.12);
}

/* body text should be pure black for maximum contrast */
.testimonial-text {
  color: var(--card-text) !important;
  font-size: 1.02rem;
  line-height: 1.65;
  margin-bottom: 14px;
  opacity: 1;
}

/* name & role styling */
.testimonial-name {
  color: var(--name-color);
  font-weight: 700;
  margin-top: 8px;
  display: block;
  line-height: 1.25;
}
.testimonial-role {
  display: block;
  color: var(--role-color);
  font-style: italic;
  font-weight: 500;
  margin-top: 4px;
}

/* LinkedIn button: pulled slightly up so it's closer to the testimonials */
.linkedin-section {
  text-align: center;
  margin: -14px 0 26px 0; /* negative top to pull it up */
}
.linkedin-section .linkedin-btn {
  text-decoration: none;
  font-weight: 600;
  border-radius: 6px;
  background-color: var(--accent-cyan);
  color: var(--page-bg) !important;
  padding: 0.72rem 1.6rem;
  display: inline-block;
  box-shadow: 0 6px 18px rgba(10,20,30,0.12);
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}
.linkedin-section .linkedin-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 26px rgba(10,20,30,0.16);
}

/* Make the horizontal rule darker (stands out under the LinkedIn button) */
.after-linkline {
  max-width: 720px;
  margin: 12px auto 44px auto;
  border: none;
  height: 2px;
  background: linear-gradient(90deg, rgba(7,20,38,1) 0%, rgba(7,20,38,0.85) 50%, rgba(7,20,38,1) 100%);
  border-radius: 2px;
}

/* Responsive */
@media (max-width: 900px) {
  .about-photo { flex: 0 0 180px; }
  .testimonials-bg { padding: 36px 0; }
  .testimonials-heading { font-size: 1.9rem; }
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
  .testimonials-wrapper {
    flex-direction: column;
    gap: 20px;
  }
  .testimonial {
    max-width: 100%;
    padding: 20px;
  }
  .testimonials-heading {
    margin-bottom: 25px;
    font-size: 1.6rem;
  }
  .linkedin-section { margin: -8px 0 20px 0; }
  .after-linkline { margin-bottom: 28px; }
}
</style>
