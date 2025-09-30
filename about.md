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

<!-- LinkedIn Button Section -->
<div class="linkedin-section">
  <a href="https://www.linkedin.com/in/sarang-deshmukh-125197182/" class="linkedin-btn">Connect on LinkedIn</a>
</div>

<!-- ================== Testimonials Section ================== -->
<section class="testimonials-section">
  <div class="container">
    <h2 class="testimonials-heading">What people say?</h2>

    <div class="testimonials-wrapper">
      <!-- Testimonial 1 -->
      <div class="testimonial">
        <p>"I highly recommend Sarang for any future endeavors, and I'm confident he will continue to shine in any role he's in and overcome any challenges he may face!"</p>
        <p class="testimonial-name">– Hariom Kashyap
          <span class="testimonial-role">Software Architect, Amdocs</span>
        </p>
      </div>

      <!-- Testimonial 2 -->
      <div class="testimonial">
        <p>"Sarang has always been a curious person. He is willing to take risks, make mistakes, and learn from them. He comes up with new ideas, never afraid of trying, and puts in the effort every time."</p>
        <p class="testimonial-name">– Ankur Singh
          <span class="testimonial-role">AI Engineer, Intel</span>
        </p>
      </div>
    </div>
  </div>
</section>

<style>
/* ================== FORCE FULL PAGE BACKGROUND ================== */
html, body {
  background-color: #FFFFFF !important;  /* white page background */
  color: #0A192F !important;            /* dark text */
  margin: 0 !important;
  padding: 0 !important;
  font-family: 'Roboto', sans-serif !important;
  box-sizing: border-box !important;
}

/* ================== ABOUT PAGE ================== */
.about-page {
  display: flex !important;
  flex-wrap: wrap !important;
  align-items: center !important;
  gap: 2rem !important;
  padding: 2rem !important;
  background: #FFFFFF !important;
  color: #0A192F !important;
}

/* Photo */
.about-photo {
  flex: 0 0 250px !important;
}
.about-photo img {
  width: 100% !important;
  border-radius: 12px !important;
  box-shadow: 0 0 12px #FF6B35 !important;  /* orange glow */
  border: 3px solid #FF6B35 !important;     /* orange border */
  transition: transform 0.3s ease, box-shadow 0.3s ease !important;
}


/* Bio */
.about-bio {
  flex: 1 1 500px !important;
  font-size: 1.05rem !important;
}
.about-bio h2 {
  font-family: 'Rubik', sans-serif !important;
  font-size: 2rem !important;
  color: #FF6B35 !important; /* orange name */
  margin: 0 0 0.5rem !important;
  letter-spacing: 1px !important;
}
.about-bio p {
  line-height: 1.6 !important;
  margin-bottom: 1.2rem !important;
  color: #0A192F !important;
}
.about-bio a {
  color: #FFFFFF !important;
  text-decoration: none !important;
  font-weight: 500 !important;
  border-radius: 6px !important;
  background: linear-gradient(135deg, #FF8C42 0%, #FF6B35 100%) !important; /* subtle orange gradient */
  padding: 0.6rem 1.2rem !important;
  display: inline-block !important;
  transition: background-color 0.3s ease !important;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2) !important;
}
.about-bio a:hover {
  background: linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%) !important;
}

/* LinkedIn Button */
.linkedin-section {
  text-align: center !important;
  margin: 2rem 0 !important;
}
.linkedin-section .linkedin-btn {
  color: #FFFFFF !important;
  text-decoration: none !important;
  font-weight: 600 !important;
  border-radius: 6px !important;
  background: linear-gradient(135deg, #FF8C42 0%, #FF6B35 100%) !important;
  padding: 0.7rem 1.5rem !important;
  display: inline-block !important;
  transition: background-color 0.3s ease !important;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2) !important;
}
.linkedin-section .linkedin-btn:hover {
  background: linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%) !important;
}

/* ================== TESTIMONIALS ================== */
.testimonials-section {
  background-color: #FFFFFF !important; /* white outer background */
  padding: 30px 0 1px 0 !important;
}

.testimonials-heading {
  color: #0A192F !important;
  font-size: 2rem !important;
  text-align: center !important;
  margin: 20px 0 50px 0 !important;
}

.testimonials-wrapper {
  display: flex !important;
  gap: 25px !important;
  flex-wrap: wrap !important;
  justify-content: center !important;
  padding: 0 20px !important;
  margin-bottom: 60px !important;
}

.testimonial {
  background-color: #0E4C5F !important; /* teal inner box */
  color: #EFF6FF !important;
  border-radius: 12px !important;
  padding: 30px 25px !important;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3) !important;
  flex: 1 1 300px !important;
  max-width: 450px !important;
  margin: 0 auto !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease !important;
  border: 2px solid rgba(100,255,218,0.1) !important;
  position: relative !important;
  overflow: hidden !important;
}
.testimonial::before {
  content: "" !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  background: linear-gradient(145deg, rgba(100,255,218,0.05), rgba(255,255,255,0.02)) !important;
  opacity: 0.4 !important;
  pointer-events: none !important;
}

.testimonial:hover {
  transform: translateY(-5px) !important;
  box-shadow: 0 8px 25px rgba(0,0,0,0.5) !important, 0 0 10px rgba(100,255,218,0.15) !important;
}

.testimonial-name {
  font-weight: bold !important;
  color: #64FFDA !important;
  margin-top: 10px !important;
}
.testimonial-role {
  display: block !important;
  font-style: italic !important;
  color: #4DA1A9 !important;
  margin-top: 3px !important;
}

/* ================== RESPONSIVE ================== */
@media (max-width: 768px) {
  .about-page { flex-direction: column !important; align-items: flex-start !important; }
  .about-photo { flex: 0 0 150px !important; margin-bottom: 1.5rem !important; }
  .about-bio { text-align: left !important; }
  .testimonials-wrapper { flex-direction: column !important; gap: 20px !important; }
  .testimonial { max-width: 90% !important; padding: 20px !important; margin: 0 auto !important; }
}

@media (max-width: 480px) {
  .testimonials-wrapper { width: 100% !important; padding: 0 12px !important; }
  .testimonial { width: calc(100% - 20px) !important; padding: 12px 14px !important; margin-bottom: 16px !important; text-align: left !important; }
}
</style>
