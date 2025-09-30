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

<!-- ================== Testimonials Section ================== -->
<section class="testimonials-section" style="background-color: #EDE9D5; padding: 30px 0 !important;">
  <div class="container">
    <h2 class="testimonials-heading" style="text-align:center; color:#0A192F; margin-bottom: 40px;">What people say?</h2>

    <div class="testimonials-wrapper">
      <!-- Testimonial 1 -->
      <div class="testimonial">
        <p>"I highly recommend Sarang for any future endeavors, and I'm confident he will continue to shine in any role he's in and overcome any challenges he may face!"</p>
        <p class="testimonial-name">
          – Hariom Kashyap
          <span class="testimonial-role">Software Architect, Amdocs</span>
        </p>
      </div>

      <!-- Testimonial 2 -->
      <div class="testimonial">
        <p>"Sarang has always been a curious person. He is willing to take risks, make mistakes, and learn from them. He comes up with new ideas, never afraid of trying, and puts in the effort every time."</p>
        <p class="testimonial-name">
          – Ankur Singh
          <span class="testimonial-role">AI Engineer, Intel</span>
        </p>
      </div>
    </div>
  </div>
</section>

<style>
/* ================== FORCE FULL PAGE BACKGROUND ================== */
html, body {
  background-color: #FFFFFF;
  color: #0A192F;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
}

/* ================== ABOUT PAGE ================== */
.about-page {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background: #FFFFFF;
  color: #0A192F;
}

/* Photo */
.about-photo {
  flex: 0 0 250px;
}
.about-photo img {
  width: 100%;
  border-radius: 12px;
  border: 3px solid #FF6B35;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Bio */
.about-bio {
  flex: 1 1 500px;
  font-size: 1.05rem;
}
.about-bio h2 {
  font-family: 'Rubik', sans-serif;
  font-size: 2rem;
  color: #FF6B35;
  margin: 0 0 0.5rem;
  letter-spacing: 1px;
}
.about-bio p {
  line-height: 1.6;
  margin-bottom: 1.2rem;
}
.about-bio a {
  color: #FFFFFF;
  text-decoration: none;
  font-weight: 500;
  border-radius: 6px;
  background: linear-gradient(135deg, #FF8C42 0%, #FF6B35 100%);
  padding: 0.6rem 1.2rem;
  display: inline-block;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}
.about-bio a:hover {
  background: linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%);
}

/* ================== TESTIMONIALS ================== */
.testimonials-section {
  background-color: #F5F1E9;
  padding: 40px 0;
}

.testimonials-heading {
  color: #0A192F;
  font-size: 2rem;
  text-align: center;
  margin: 0 0 40px 0;
}

.testimonials-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 0 20px;
  margin-bottom: 0;
}

.testimonial {
  background-color: #FF6B35;
  color: #FFFFFF !important;
  border-radius: 12px;
  padding: 30px 30px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  flex: 0 1 360px;
  max-width: 360px;
  margin: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
  position: relative;
  overflow: hidden;
}

.testimonial p {
  margin-bottom: 15px;
  color: #FFFFFF !important;
}

.testimonial-name {
  font-weight: bold;
  color: #FFFFFF !important;
  margin-top: 10px;
}

.testimonial-role {
  display: block;
  font-style: italic;
  color: #EFF6FF;
  margin-top: 3px;
}

/* Hover effect */
.testimonial:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.3);
}

/* ================== RESPONSIVE ================== */
@media (max-width: 768px) {
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
  .testimonials-wrapper {
    flex-direction: column;
    gap: 20px;
  }
  .testimonial {
    max-width: 90%;
    padding: 20px;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .testimonials-wrapper {
    width: 100%;
    padding: 0;
    flex-direction: column;
    align-items: center;
  }

  .testimonial {
    width: 90%;
    max-width: 300px;
    padding: 14px 16px;
    margin: 12px 0;
    font-size: 1.3rem;
    line-height: 1.5;
    text-align: left;
  }

  .testimonial p {
    margin-bottom: 10px;
  }

  .testimonial-name {
    font-size: 0.95rem;
    margin-top: 8px;
  }

  .testimonial-role {
    font-size: 0.85rem;
  }
}
</style>
