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




<script>
/*
  Behavior:
  - Inserts a privacy-enhanced YouTube iframe that autoplay=1, loop=1, muted=1, playsinline=1
  - If user clicks Unmute, the iframe is replaced by a non-muted autoplaying iframe (browser may require user interaction)
*/
(function () {
  const container = document.getElementById('yt-player');
  const vid = container.dataset.videoId;
  const unmuteBtn = document.getElementById('unmute-btn');

  // Build iframe URL that autoplay & loop (loop needs playlist=VIDEO_ID)
  function buildSrc({ mute = true } = {}) {
    const params = new URLSearchParams({
      rel: 0,
      modestbranding: 1,
      autoplay: 1,
      loop: 1,
      playlist: vid,
      playsinline: 1,
    });
    if (mute) params.set('mute', '1');
    return `https://www.youtube-nocookie.com/embed/${vid}?${params.toString()}`;
  }

  // insert iframe
  function insertIframe({ mute = true } = {}) {
    const iframe = document.createElement('iframe');
    iframe.src = buildSrc({ mute });
    iframe.title = 'YouTube video player';
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen');
    iframe.allowFullscreen = true;
    iframe.loading = 'lazy';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    // clear container and append
    container.innerHTML = '';
    container.appendChild(iframe);
  }

  // initial muted autoplay insert
  insertIframe({ mute: true });

  // Unmute button: user interaction required to enable sound.
  unmuteBtn.addEventListener('click', function () {
    // replace iframe with one that has mute=0; since this is a user gesture, autoplay with sound should start.
    insertIframe({ mute: false });

    // hide the button once unmuted
    unmuteBtn.style.display = 'none';
  }, { once: true });

  // Optional: hide unmute button on small screens if you don't want it visible
  // if (window.matchMedia && window.matchMedia('(max-width:420px)').matches) { unmuteBtn.style.display = 'none'; }
})();
</script>



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

<!-- ================== WHAT I'M DOING SECTION ================== -->
<section class="doing-section">
  <div class="container">
    <h2 class="doing-heading">What I'm Doing</h2>

    <div class="doing-wrapper">
      <!-- DevOps -->
      <div class="doing-card">
        <div class="doing-icon">
          <!-- SVG for DevOps -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#FF6B35" stroke-width="2" viewBox="0 0 24 24" width="40" height="40">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
          </svg>
        </div>
        <h3>DevOps</h3>
        <p>I enjoy improving the speed and quality of delivery, automating workflows, and achieving CI/CD.</p>
      </div>

      <!-- Cloud Engineer -->
      <div class="doing-card">
        <div class="doing-icon">
          <!-- SVG for Cloud -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#FF6B35" stroke-width="2" viewBox="0 0 24 24" width="40" height="40">
            <path d="M20 17.58A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 4 16.25"/>
          </svg>
        </div>
        <h3>Cloud Engineer</h3>
        <p>I enjoy designing, securing, and maintaining cloud-based infrastructure and applications.</p>
      </div>

      <!-- SRE -->
      <div class="doing-card">
        <div class="doing-icon">
          <!-- SVG for Monitoring -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#FF6B35" stroke-width="2" viewBox="0 0 24 24" width="40" height="40">
            <path d="M4 4v16h16V4H4zm4 12l2-3 2 2 4-6 2 3"/>
          </svg>
        </div>
        <h3>SRE</h3>
        <p>I focus on processes and tools that ensure scalability, reliability, and availability of systems.</p>
      </div>

      <!-- Software Development -->
      <div class="doing-card">
        <div class="doing-icon">
          <!-- SVG for Code -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#FF6B35" stroke-width="2" viewBox="0 0 24 24" width="40" height="40">
            <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>
          </svg>
        </div>
        <h3>Software Development</h3>
        <p>I enjoy learning and practicing software development for personal and professional growth.</p>
      </div>
    </div>
  </div>
</section>

<!-- ================== Testimonials Section ================== -->
<section class="testimonials-section">
  <div class="container">
    <h2 class="testimonials-heading">What people say?</h2>

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
:root{
  --accent: #FF6B35;
  --bg: #FFFFFF;
  --text: #0A192F;
  --muted: #6B7280;
}

/* ================== FORCE FULL PAGE BACKGROUND ================== */
html, body {
  background-color: var(--bg);
  color: var(--text);
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
  gap: 1.5rem;
  padding: 2rem;
  background: var(--bg);
  color: var(--text);
  align-items: flex-start;
}

/* Photo */
.about-photo {
  flex: 0 0 250px;
}
.about-photo img {
  width: 100%;
  border-radius: 14px;
  border: 3px solid var(--accent);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  box-shadow: 0 8px 30px rgba(10,25,47,0.06);
}
.about-photo img:hover {
  transform: translateY(-6px);
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
}
.about-bio a {
  color: #FFFFFF;
  text-decoration: none;
  font-weight: 500;
  border-radius: 6px;
  background: linear-gradient(135deg, #FF8C42 0%, var(--accent) 100%);
  padding: 0.6rem 1.2rem;
  display: inline-block;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.12);
}
.about-bio a:hover {
  background: linear-gradient(135deg, var(--accent) 0%, #FF8C42 100%);
}

/* ================== WHAT I'M DOING ================== */
/* Removed beige background - kept it clean and modern */
.doing-section {
  background: transparent;
  color: var(--text);
  padding: 28px 20px 48px 20px;
  text-align: center;
  margin-top: 0;
}

/* heading */
.doing-heading {
  font-size: 2rem;
  margin: 0 0 24px 0;
  color: var(--accent);
  font-weight: 600;
}

/* grid layout: 2 columns desktop, 1 on mobile */
.doing-wrapper {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  max-width: 980px;
  margin: 0 auto;
  padding: 0 12px;
}

/* modern card style (glass / soft gradient) */
.doing-card {
  position: relative;
  overflow: visible;
  border-radius: 14px;
  padding: 22px 18px;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(250,250,250,0.75));
  border: 1px solid rgba(15,25,40,0.06);
  box-shadow: 0 8px 30px rgba(10,25,47,0.06);
  transition: transform 0.32s cubic-bezier(.2,.9,.3,1), box-shadow 0.32s ease;
  backdrop-filter: blur(6px);
}

/* small accent bar on left */
.doing-card::before{
  content: "";
  position: absolute;
  left: 0;
  top: 14px;
  bottom: 14px;
  width: 6px;
  border-radius: 8px;
  background: linear-gradient(180deg, var(--accent), #FF8C42);
  box-shadow: 0 6px 18px rgba(255,107,53,0.12);
}

/* content spacing respects the left accent */
.doing-card > * {
  margin-left: 14px;
}

.doing-card:hover {
  transform: translateY(-8px) scale(1.01);
  box-shadow: 0 16px 40px rgba(10,25,47,0.12);
}

/* icon circle */
.doing-icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  display: inline-grid;
  place-items: center;
  background: linear-gradient(180deg, rgba(255,255,255,0.85), rgba(245,245,245,0.7));
  border: 1px solid rgba(15,25,40,0.04);
  box-shadow: 0 6px 18px rgba(10,25,47,0.04), inset 0 1px 0 rgba(255,255,255,0.6);
}

/* heading & text */
.doing-card h3 {
  margin: 12px 0 6px 0;
  color: var(--accent);
  font-size: 1.08rem;
  font-weight: 600;
}
.doing-card p {
  font-size: 0.92rem;
  line-height: 1.5;
  color: var(--text);
  opacity: 0.9;
  margin: 0;
}

/* ================== TESTIMONIALS ================== */
.testimonials-section {
  background-color: #fff;
  padding: 40px 0;
}

.testimonials-heading {
  color: var(--text);
  font-size: 2rem;
  text-align: center;
  margin: 0 0 25px 0;
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
  background-color: var(--accent);
  color: #FFFFFF !important;
  border-radius: 12px;
  padding: 30px 30px;
  box-shadow: 0 8px 30px rgba(10,25,47,0.12);
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
  color: #EFF6FF !important;
  margin-top: 3px;
}

/* Hover effect */
.testimonial:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 40px rgba(10,25,47,0.18);
}

/* ================== RESPONSIVE ================== */
@media (max-width: 900px) {
  .doing-wrapper {
    grid-template-columns: 1fr 1fr;
  }
  .about-photo {
    flex: 0 0 170px;
  }
}

@media (max-width: 768px) {
  .about-page {
    flex-direction: column;
    align-items: flex-start;
  }
  .about-photo {
    flex: 0 0 150px;
    margin-bottom: 0rem;
  }
  .about-bio {
    text-align: left;
  }
  .doing-wrapper {
    grid-template-columns: 1fr; /* single column on mobile */
    gap: 16px;
    padding: 0 12px;
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
    width: 95% !important;
    max-width: 320px !important;
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
