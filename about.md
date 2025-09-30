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

<section class="testimonials-section" style="background-color: #0A192F; padding: 30px 0 1px 0 !important; color: #EFF6FF;">
<div class="container" style="max-width: 1000px; margin: auto;">
<h2 class="testimonials-heading" style="margin-bottom: 50px; margin-top: 20px; font-size: 2rem; text-align: center; color:#EFF6FF;">
What people say?
</h2>

<div class="testimonials-wrapper" style="display: flex; gap: 25px; flex-wrap: wrap; padding: 0 20px; justify-content: center; margin-bottom: 60px;">
<!-- Testimonial 1 -->
<div class="testimonial" style="
background-color: #0E4C5F;
padding: 30px 25px;
border-radius: 12px;
box-shadow: 0 4px 15px rgba(0,0,0,0.3);
flex: 1 1 300px;
max-width: 450px;
transition: transform 0.3s ease, box-shadow 0.3s ease;
">
<p style="font-size: 1rem; line-height: 1.6; margin-bottom: 15px; color: #EFF6FF !important;">
"I highly recommend Sarang for any future endeavors, and I'm confident he will continue to shine in any role he's in and overcome any challenges he may face!"
</p>
<p class="testimonial-name">– Hariom Kashyap
<span class="testimonial-role">Software Architect, Amdocs</span>
</p>
</div>

<!-- Testimonial 2 -->
<div class="testimonial" style="
background-color: #0E4C5F;
padding: 30px 25px;
border-radius: 12px;
box-shadow: 0 4px 15px rgba(0,0,0,0.3);
flex: 1 1 300px;
max-width: 450px;
transition: transform 0.3s ease, box-shadow 0.3s ease;
">
<p style="font-size: 1rem; line-height: 1.6; margin-bottom: 15px; color: #EFF6FF !important;">
"Sarang has always been a curious person. He is willing to take risks, make mistakes, and learn from them. He comes up with new ideas, never afraid of trying, and puts in the effort every time."
</p>
<p class="testimonial-name">– Ankur Singh
<span class="testimonial-role">AI Engineer, Intel</span>
</p>
</div>
</div>
</div>
</section>

<div class="linkedin-section">
  <a href="https://www.linkedin.com/in/sarang-deshmukh-125197182/" class="linkedin-btn">Connect on LinkedIn</a>
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
  color: #0A192F;
  text-decoration: none;
  font-weight: 400;
  border-radius: 6px;
  background-color: #64FFDA;
  padding: 0.6rem 1.2rem;
  display: inline-block;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}
.about-bio a:hover {
  background-color: #27cfa7;
}

/* LinkedIn Section at Bottom */
.linkedin-section {
  text-align: center;
  margin: 2rem 0;
}
.linkedin-section .linkedin-btn {
  color: #0A192F !important;
  text-decoration: none;
  font-weight: 600;
  border-radius: 6px;
  background-color: #64FFDA;
  padding: 0.7rem 1.5rem;
  display: inline-block;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}
.linkedin-section .linkedin-btn:hover {
  background-color: #27cfa7;
}

/* Testimonial Styles */
.testimonials-heading { color: #EFF6FF !important; }

.testimonial {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  border: 2px solid rgba(100, 255, 218, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.testimonial::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, rgba(100, 255, 218, 0.05), rgba(255,255,255,0.02));
  opacity: 0.4;
  pointer-events: none;
}
.testimonial:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.5), 0 0 10px rgba(100,255,218,0.15);
}
.testimonial p { color: #EFF6FF; font-size: 1rem; line-height: 1.6; margin-bottom: 15px; }
.testimonial-name { font-weight: bold; color: #64FFDA; margin: 10px 0 0 0; line-height: 1.4; }
.testimonial-role { display:block; font-weight: normal; color: #4DA1A9; font-style: italic; margin: 3px 0 0 0; line-height: 1.3; }

/* Responsive adjustments */
@media (max-width: 768px) {
  .about-page { flex-direction: column; align-items: flex-start; }
  .about-photo { flex: 0 0 150px; margin-bottom: 1.5rem; }
  .about-bio { text-align: left; }
  .testimonials-wrapper { flex-direction: column; gap: 20px; }
  .testimonial { max-width: 90%; padding: 20px; margin: 0 auto; }
  .testimonial p { font-size: 1rem; line-height: 1.5; margin-bottom: 12px; }
  .testimonial-name { margin-top: 8px; line-height: 1.3; }
  .testimonial-role { margin-top: 2px; line-height: 1.25; }
}

@media (max-width: 480px) {
  .testimonials-wrapper { width: 100%; padding: 0 12px !important; }
  .testimonial { width: calc(100% - 20px) !important; padding: 12px 14px !important; margin-bottom: 16px !important; text-align: left !important; }
}
</style>
