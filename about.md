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

<!-- Skills Section -->
<section class="skills-section">
  <h2>I am skilled in:</h2>
  <div class="skills-grid">

    <div class="skill-card">
      <h3>Operating System</h3>
      <p>Unix/Linux, Windows</p>
    </div>

    <div class="skill-card">
      <h3>DevOps Technologies</h3>
      <p>GIT, Jenkins, Kubernetes, Docker, Ansible, Nexus, Consul</p>
    </div>

    <div class="skill-card">
      <h3>Cloud</h3>
      <p>AWS &amp; GCP (Solution Architect), Azure (Fundamentals)</p>
    </div>

    <div class="skill-card">
      <h3>IaC</h3>
      <p>Terraform, Ansible</p>
    </div>

    <div class="skill-card">
      <h3>Monitoring Tools</h3>
      <p>Prometheus, Grafana, Apache Airflow</p>
    </div>

    <div class="skill-card">
      <h3>Languages</h3>
      <p>Python, Shell Script</p>
    </div>

    <div class="skill-card">
      <h3>Database</h3>
      <p>PostgreSQL, Oracle</p>
    </div>

    <div class="skill-card">
      <h3>Other Technologies</h3>
      <p>Machine Learning, Deep Learning, Generative AI</p>
    </div>

  </div>
</section>

<!-- Testimonials (placed immediately after skills as requested) -->
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

<!-- LinkedIn Button at the End -->
<div class="linkedin-section">
  <a href="https://www.linkedin.com/in/sarang-deshmukh-125197182/" target="_blank" rel="noopener" class="linkedin-btn">
    Connect with me on LinkedIn
  </a>
</div>

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
  --fresh-inner: #0E4C5F;
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
.about-bio a {
  color: #fff;
  text-decoration: none;
  font-weight: 400;
  border-radius: 6px;
  background-color: #0077B5;
  padding: 0.6rem 1.2rem;
  display: inline-block;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}
.about-bio a:hover {
  background-color: #004182;
}

/* Skills Section */
.skills-section {
  background: var(--panel);
  padding: 3rem 2rem;
  margin-top: 0;
}
.skills-section h2 {
  text-align: center;
  color: var(--accent);
  font-family: 'Rubik', sans-serif;
  margin-bottom: 2rem;
  margin-top: 0;
  font-size: 1.8rem;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}
.skill-card {
  background: var(--card);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.18);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.skill-card:hover {
  transform: translateY(-5px);
}
.skill-card h3 {
  margin: 0 0 0.8rem;
  color: var(--accent);
  font-size: 1.2rem;
}
.skill-card p {
  margin: 0;
  color: var(--muted-text);
  font-size: 0.95rem;
  line-height: 1.4;
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
  background-color: var(--fresh-inner);
  padding: 30px 25px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  flex: 1 1 300px;
  max-width: 450px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(100,255,218,0.08);
}
.testimonial::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, rgba(100,255,218,0.03), rgba(255,255,255,0.01));
  opacity: 0.4;
  pointer-events: none;
}
.testimonial:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.5), 0 0 10px rgba(100,255,218,0.12);
}
.testimonial-text {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 15px;
  color: #ffffff;
}
.testimonial-name {
  font-weight: bold;
  color: var(--accent);
  margin: 10px 0 0 0;
  line-height: 1.4;
}
.testimonial-role {
  display: block;
  font-weight: normal;
  color: #ffffff;
  font-style: italic;
  margin: 3px 0 0 0;
  line-height: 1.3;
}

/* LinkedIn Section */
.linkedin-section {
  text-align: center;
  margin: 2rem 0 4rem 0;
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
}
</style>
