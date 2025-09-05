---
layout: default
title: "About Me"
permalink: /about/
---

<div class="page__splash about-page" style="background-color:#000; color:#39FF14; padding:2rem; display:flex; flex-wrap:wrap; align-items:center; gap:2rem; justify-content:center;">

  <!-- Photo -->
  <div class="about-photo" style="flex:1 1 200px; max-width:250px;">
    <img src="{{ '/assets/images/photo.png' | relative_url }}" alt="Sarang Deshmukh" style="width:100%; border-radius:12px;">
  </div>

  <!-- Heading + LinkedIn -->
  <div class="about-bio" style="flex:2 1 500px;">
    <h2 class="about__title" style="color:#39FF14; margin-top:0;">Sarang Deshmukh</h2>
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
}
</style>
