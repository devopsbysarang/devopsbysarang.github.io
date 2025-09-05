---
layout: default
title: "About Me"
permalink: /about/
---

<div class="page__splash about-page" style="background-color:#000; color:#fff; padding:2rem; display:flex; flex-wrap:wrap; align-items:center; gap:2rem; justify-content:center;">

  <!-- Photo with neon glow -->
  <div class="about-photo" style="flex:1 1 200px; max-width:250px;">
    <img src="{{ '/assets/images/photo.png' | relative_url }}" alt="Sarang Deshmukh" 
         style="width:100%; border-radius:12px; box-shadow: 0 0 20px #39FF14;">
  </div>

  <!-- Heading + Bio -->
  <div class="about-bio" style="flex:2 1 500px; max-width:600px;">
    <h2 class="about__title" style="color:#39FF14; margin-top:0;">Sarang Deshmukh</h2>
    
    <p>
      I am a DevOps engineer with over 5 years of experience building reliable, scalable, and maintainable systems. I have successfully delivered multi-regional, active-active deployments for critical projects, ensuring seamless user experiences across geographies. I focus on designing automated and intelligent workflows, optimizing deployment pipelines, and creating systems that are robust and future-proof.
    </p>

    <p>
      This website was created as a platform to showcase my projects, share insights, and challenge myself with new technologies. It serves as a space where I can consistently learn, experiment, and document my journey across different cloud, DevOps, and automation tools. By sharing my work here, I aim to inspire others while also keeping myself accountable to continuous growth.
    </p>

    <p>
      <a href="https://www.linkedin.com/in/sarang-deshmukh-125197182/" target="_blank" style="color:#39FF14; text-decoration:none; font-weight:bold;">Connect with me on LinkedIn</a>
    </p>

  </div>

</div>

<!-- Responsive fix -->
<style>
@media (max-width: 700px) {
  .about-page {
    flex-direction: column;
    align-items: center;
  }
  .about-photo, .about-bio {
    flex: 1 1 100%;
    max-width: 300px;
    text-align: center;
  }
  .about-photo img {
    box-shadow: 0 0 15px #39FF14; /* Slightly smaller glow on mobile */
  }
}
</style>
