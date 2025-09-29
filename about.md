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
  --panel-light: #154D71;
  --card-bg: #EEE9D5;         /* requested card color */
  --card-text: #000000;       /* black text */
  --name-color: #102A43;     /* stronger dark blue for name */
  --role-color: #00809D;     /* stronger deep teal for role */
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

/* ===== Testimonials ===== */
.testimonials-section {
  background: transparent;
  padding: 20px 0 40px 0; /* reduced space above heading */
}

/* outer light panel */
.testimonials-bg {
  background: var(--panel-light);
  padding: 20px 0 42px 0; /* default padding (bottom kept moderate) */
  box-shadow: 0 8px 30px rgba(5,10,20,0.12);
}

/* container */
.testimonials-bg .container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 20px;
}

/* heading: force color and spacing so theme cannot override */
.testimonials-heading {
  color: #fff !important; /* your requested heading color */
  text-align: center !important;
  margin: 20px 0 18px 0 !important; /* tightened spacing */
  font-size: 2.05rem !important;
  font-weight: 700 !important;
  line-height: 1.15 !important;
  padding: 10px !important;
}

/* cards wrapper */
.testimonials-wrapper {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

/* individual card */
.testimonial {
  background-color: var(--card-bg);
  padding: 30px 22px; /* slightly reduced padding for more compact feel */
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(10,20,30,0.08);
  flex: 1 1 360px;
  max-width: 520px;
  transition: transform 0.28s ease, box-shadow 0.28s ease;
  border: 1px solid rgba(10,20,30,0.05);
  position: relative;
  overflow: hidden;
}
.testimonial:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 36px rgba(10,20,30,0.12);
}

/* testimonial body text forced to black (important to override) */
.testimonial-text {
  color: var(--card-text) !important;
  font-size: 1.02rem;
  line-height: 1.6;
  margin-bottom: 12px;
  opacity: 1 !important;
}

/* name and role: stronger contrasting colors and forced to override theme */
.testimonial-name {
  color: var(--name-color) !important;
  font-weight: 700 !important;
  margin-top: 6px;
  display: block;
  line-height: 1.18;
  font-size: 1.02rem;
}
.testimonial-role {
  display: block;
  color: var(--role-color) !important;
  font-style: italic;
  font-weight: 600 !important;
  margin-top: 4px;
  font-size: 0.98rem;
}

/* LinkedIn button */
.linkedin-section {
  text-align: center;
  margin: -14px 0 26px 0;
}
.linkedin-section .linkedin-btn {
  text-decoration: none;
  font-weight: 600;
  border-radius: 6px;
  background-color: var(--accent-cyan);
  color: var(--page-bg) !important;
  padding: 0.75rem 1.6rem;
  display: inline-block;
  box-shadow: 0 6px 18px rgba(10,20,30,0.12);
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}
.linkedin-section .linkedin-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 26px rgba(10,20,30,0.16);
}

/* Divider */
.after-linkline {
  max-width: 720px;
  margin: 12px auto 44px auto;
  border: none;
  height: 2px;
  background: #fff;
  border-radius: 2px;
}

/* ===== Responsive tweaks ===== */
@media (max-width: 900px) {
  .about-photo { flex: 0 0 180px; }
  .testimonials-bg { padding: 28px 0 30px 0; } /* reduced overall padding */
  .testimonials-heading { font-size: 1.95rem !important; }
  .testimonials-wrapper { gap: 18px; }
  .testimonial { padding: 24px 18px; }
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
    gap: 16px;
  }
  .testimonial {
    max-width: 100%;
    padding: 16px 14px; /* reduced inner padding on mobile */
  }
  /* critical: reduce bottom padding of the light panel on mobile so it doesn't look too tall */
  .testimonials-bg {
    padding: 16px 0 0px 0 !important; /* much smaller bottom padding on mobile */
  }
  .testimonials-heading {
    margin-bottom: 14px !important;
    font-size: 1.6rem !important;
  }
  .linkedin-section { margin: -8px 0 20px 0; }
  .after-linkline { margin-bottom: 20px; }
}

.testimonial {
  margin-bottom: 30px !important; /* add this to increase space below each card */
}

@media (max-width: 700px) {
  .testimonial {
    margin-bottom: 44px !important; /* increase vertical spacing on mobile */
  }
}

</style>
