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
<div class="skills-section">
  <h2>I am skilled in: </h2>  
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
      <p>AWS & GCP (Solution Architect) , Azure (Fundamentals)</p>
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
</div>

<!-- LinkedIn Button at the End -->
<div class="linkedin-section">
  <a href="https://www.linkedin.com/in/sarang-deshmukh-125197182/" target="_blank" rel="noopener" class="linkedin-btn">
    Connect with me on LinkedIn
  </a>
</div>

<style>
/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500;700&family=Roboto:wght@400;500&display=swap');

/* Container */
.about-page {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background: #0A192F;
  font-family: 'Roboto', sans-serif;
  color: #ccd6f6;
}

/* Photo */
.about-photo {
  flex: 0 0 250px;
}
.about-photo img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 0 8px #64FFDA;
  border: 3px solid #64FFDA;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.about-photo img:hover {
  transform: scale(1.05);
  box-shadow: 0 0 16px #64FFDA;
}

/* Bio */
.about-bio {
  flex: 1 1 500px;
  font-size: 1.05rem;
}
.about-bio h2 {
  font-family: 'Rubik', sans-serif;
  font-size: 2rem;
  color: #64FFDA;
  margin: 0 0 0.5rem;
  letter-spacing: 1px;
}
.about-bio p {
  line-height: 1.6;
  margin-bottom: 1.2rem;
  color: #ccd6f6;
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
  background: #112240;
  padding: 3rem 2rem;
  margin-top: 0rem;
  border-radius: 0px;
}
.skills-section h2 {
  text-align: center;
  color: #64FFDA;
  font-family: 'Rubik', sans-serif;
  margin-bottom: 2rem;
  margin-top: 0; /* remove extra top space */
  font-size: 1.8rem;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}
.skill-card {
  background: #0A192F;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(100, 255, 218, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 15px rgba(100, 255, 218, 0.5);
}
.skill-card h3 {
  margin: 0 0 0.8rem;
  color: #64FFDA;
  font-size: 1.2rem;
}
.skill-card p {
  margin: 0;
  color: #ccd6f6;
  font-size: 0.95rem;
  line-height: 1.4;
}

/* LinkedIn Section at Bottom */
.linkedin-section {
  text-align: center;
  margin: 2rem 0;
}
.linkedin-section .linkedin-btn {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  border-radius: 6px;
  background-color: #64FFDA;
  color: #0A192F !important;
  padding: 0.7rem 1.5rem;
  display: inline-block;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}
.linkedin-section .linkedin-btn:hover {
  background-color: #27cfa7;
}

/* Responsive */
@media (max-width: 700px) {
  .about-page {
    flex-direction: column;
    align-items: flex-start;
  }
  .about-photo {
    flex: 0 0 150px;
    margin-bottom: 1.5rem;
  }
  .about-bio {
    text-align: left;
  }
}
</style>
