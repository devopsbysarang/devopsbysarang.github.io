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
      I am a DevOps engineer with over 5 years of experience building reliable, scalable, and maintainable systems. I have successfully delivered multi-regional, active-active deployments for critical projects, ensuring seamless user experiences across geographies. I focus on designing automated and intelligent workflows, optimizing deployment pipelines, and creating systems that are robust and future-proof.
    </p>
    <p>
      This website was created as a platform to showcase my projects, share insights, and challenge myself with new technologies. It serves as a space where I can consistently learn, experiment, and document my journey across different cloud, DevOps, and automation tools. By sharing my work here, I aim to inspire others while also keeping myself accountable to continuous growth.
    </p>
    <p>
      <a href="https://www.linkedin.com/in/sarang-deshmukh-125197182/" target="_blank">Connect with me on LinkedIn</a>
    </p>
  </div>

</div>

<style>
/* Container */
.about-page {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background-color: #000;
  color: #fff;
}

/* Photo */
.about-photo {
  flex: 0 0 250px;
}

.about-photo img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 0 20px #39FF14;
  animation: neon-pulse 1.5s infinite alternate;
}

/* Neon pulse effect */
@keyframes neon-pulse {
  0% {
    box-shadow: 0 0 15px #39FF14, 0 0 30px #39FF14, 0 0 45px #39FF14;
  }
  100% {
    box-shadow: 0 0 25px #39FF14, 0 0 50px #39FF14, 0 0 75px #39FF14;
  }
}

/* Bio */
.about-bio {
  flex: 1 1 500px;
}

.about-bio h2 {
  color: #39FF14;
  margin-top: 0;
  margin-bottom: 1rem;
}

.about-bio p {
  line-height: 1.6;
  margin-bottom: 1rem;
}

.about-bio a {
  color: #39FF14;
  text-decoration: none;
  font-weight: bold;
}

/* Mobile responsive */
@media (max-width: 700px) {
  .about-page {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .about-photo {
    flex: 0 0 auto;  /* remove fixed size */
    width: 100%;     /* full width */
    max-width: 300px; /* optional max width */
    margin-bottom: 1.5rem;
  }

  .about-bio {
    flex: 1 1 auto;
  }
}
</style>
