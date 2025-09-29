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

<section class="testimonials-section" style="background-color: #213555; padding: 30px 0 1px 0 !important; color: #ffffff;">
<div class="container" style="max-width: 1000px; margin: auto;">
<h2 class="testimonials-heading" style="margin-bottom: 50px; margin-top: 20px; font-size: 2rem; text-align: center;">
What people say?
</h2>

<div class="testimonials-wrapper" style="display: flex; gap: 25px; flex-wrap: wrap; padding: 0 20px; justify-content: center; margin-bottom: 60px;">
<!-- Testimonial 1 -->
<div class="testimonial" style="
background-color: #077A7D; /* fresh inner box color */
padding: 30px 25px;
border-radius: 12px;
box-shadow: 0 4px 15px rgba(0,0,0,0.3);
flex: 1 1 300px;
max-width: 450px;
transition: transform 0.3s ease, box-shadow 0.3s ease;
">
<p style="font-size: 1rem; line-height: 1.6; margin-bottom: 15px; color: #000000 !important;">
"I highly recommend Sarang for any future endeavors, and I'm confident he will continue to shine in any role he's in and overcome any challenges he may face!"
</p>
<p class="testimonial-name">– Hariom Kashyap
<span class="testimonial-role">Software Architect, Amdocs</span>
</p>
</div>

<!-- Testimonial 2 -->
<div class="testimonial" style="
background-color: #077A7D;
padding: 30px 25px;
border-radius: 12px;
box-shadow: 0 4px 15px rgba(0,0,0,0.3);
flex: 1 1 300px;
max-width: 450px;
transition: transform 0.3s ease, box-shadow 0.3s ease;
">
<p style="font-size: 1rem; line-height: 1.6; margin-bottom: 15px; color: #000000 !important;">
"Sarang has always been a curious person. He is willing to take risks, make mistakes, and learn from them. He comes up with new ideas, never afraid of trying, and puts in the effort every time."
</p>
<p class="testimonial-name">– Ankur Singh
<span class="testimonial-role">AI Engineer, Intel</span>
</p>
</div>
</div>
</div>
</section>

<style>
/* Heading in cyan */
.testimonials-heading {
color: #fff !important;
}

/* Hover animation */
.testimonial:hover {
transform: translateY(-5px);
box-shadow: 0 8px 25px rgba(0,0,0,0.5);
}

/* Name in cyan */
.testimonial-name {
font-weight: bold;
color: #0A1930 !important;
margin: 10px 0 0 0;
line-height: 1.4;
}

/* Role / designation */
.testimonial-role {
display: block; /* next line */
font-weight: normal;
color: #1E201E !important;
font-style: italic; /* ✅ makes role text italic */
margin: 3px 0 0 0;
line-height: 1.3;
}

/* Responsive adjustments for mobile */
@media (max-width: 768px) {
.testimonials-wrapper {
flex-direction: column;
gap: 20px;
}

.testimonial {
max-width: 90%;
padding: 20px !important; /* ✅ fixed padding for mobile */
}

.testimonial p {
font-size: 1rem; /* slightly smaller for mobile */
line-height: 1.5;
margin-bottom: 12px;
}

.testimonial-name {
margin-top: 8px;
line-height: 1.3;
}

.testimonial-role {
margin-top: 2px;
line-height: 1.25;
}
}

/* Hover animation + subtle highlight */
.testimonial {
position: relative;
overflow: hidden;
border: 2px solid rgba(100, 255, 218, 0.1); /* subtle cyan border */
}

.testimonial::before {
content: "";
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: linear-gradient(
145deg,
rgba(100, 255, 218, 0.05),
rgba(255, 255, 255, 0.02)
);
opacity: 0.4;
pointer-events: none;
}

/* Hover effect */
.testimonial:hover {
transform: translateY(-5px);
box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5),
0 0 10px rgba(100, 255, 218, 0.15); /* soft cyan glow */
}

@media (max-width: 768px) {
.testimonials-section {
padding-top: 10px !important; /* reduce top space */
}

.testimonials-heading {
margin-top: 10px !important; /* reduce heading top margin */
margin-bottom: 25px !important; /* tighten space below heading */
text-align: center !important; /* center only on mobile */
}
}

/* Desktop layout remains unchanged */
.testimonials-wrapper {
display: flex;
gap: 25px;
flex-wrap: wrap;
padding: 0 20px;
justify-content: center;
margin-bottom: 60px;
}

/* Desktop layout remains unchanged */
.testimonials-wrapper {
display: flex;
gap: 25px;
flex-wrap: wrap;
padding: 0 20px;
justify-content: center;
margin-bottom: 60px;
}


</style>



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

/* LinkedIn Section at Bottom */
.linkedin-section {
  text-align: center;
  margin: 2rem 0;
  margin-top: 40px !important; /* pushed further down from testimonials */
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

@media (max-width: 480px) {
  /* center the wrapper and stack items */
  .testimonials-wrapper {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 16px !important;
    padding: 0 20px !important;       /* side space from screen edges */
    box-sizing: border-box !important;
    width: 100% !important;
  }

  /* force each testimonial to a centered, narrower card */
  .testimonials-wrapper .testimonial {
    flex: 0 0 auto !important;               /* override inline flex */
    display: block !important;
    width: calc(100% - 20px) !important;     /* keeps ~20px space on each side */
    max-width: 360px !important;             /* control max width of the inner box */
    margin: 0 auto 16px auto !important;     /* center horizontally + bottom gap */
    padding: 12px 14px !important;
    box-sizing: border-box !important;
    align-self: center !important;
    text-align: left !important;
  }

  .testimonials-wrapper .testimonial p {
    margin: 0 0 10px 0 !important;
    line-height: 1.4 !important;
    font-size: 0.95rem !important;
  }

  /* ensure container doesn't push content to one side */
  .container {
    padding-left: 12px !important;
    padding-right: 12px !important;
    box-sizing: border-box !important;
  }
}



</style>
