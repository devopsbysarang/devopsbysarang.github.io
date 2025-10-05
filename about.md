---
layout: default
title: "About Me"
permalink: /about/
---

<div class="about-page">

  <!-- VIDEO (replaces photo) -->
  <div class="about-video-wrap">
    <div id="yt-player" class="about-video" data-video-id="7g7pvNQEl5M" role="region" aria-label="Autoplaying muted looping video"></div>
  </div>

  <!-- Bio (kept your original text) -->
  <div class="about-bio">
    <h2>Sarang Deshmukh</h2>
    <p>
      I am a DevOps engineer with 5+ years of experience building reliable, scalable, and maintainable systems. I thrive on designing automated workflows, optimizing pipelines, and creating systems that are robust and future-proof.
    </p>
    <p>
      This website is my space to showcase projects, share insights, and document my journey with cloud technologies, DevOps practices, and automation tools. By sharing my work, I aim to inspire others and continuously grow as a technologist.
    </p>
  </div>
</div>

<!-- ================== WHAT I'M DOING SECTION (UNCHANGED) ================== -->
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

<!-- ================== Testimonials Section (UNCHANGED) ================== -->
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
/* ================== Scoped styles for the updated upper part ================== */

.about-page {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  box-sizing: border-box;
}

/* Video wrapper with orange border (theme color #FF6B35) */
.about-video-wrap {
  flex: 0 0 360px;
  width: 360px;
  max-width: 45%;
  box-sizing: border-box;
  border-radius: 14px;
  padding: 6px; /* space to show rounded border */
  border: 4px solid #FF6B35;
  background: linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.02));
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  overflow: hidden;
}

/* Inner video area holds poster image and iframe */
.about-video {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 */
  border-radius: 10px;
  overflow: hidden;
  background-color: #000;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

/* Slight overlay for a neutral look */
.about-video::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.03));
}

/* iframe styling — starts hidden and fades in when ready */
.about-video iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  pointer-events: none;      /* prevents click-through to YouTube */
  opacity: 0;
  transition: opacity 300ms ease;
  display: block;
}

/* class added by script when ready to show player */
.about-video iframe.ready {
  opacity: 1;
}

/* Bio styles (kept your original visual but scoped) */
.about-bio {
  flex: 1 1 480px;
  font-size: 1.05rem;
  box-sizing: border-box;
}
.about-bio h2 {
  font-family: 'Rubik', sans-serif;
  font-size: 2rem;
  color: #FF6B35;
  margin: 0 0 0.5rem 0;
  letter-spacing: 1px;
}
.about-bio p {
  line-height: 1.6;
  margin-bottom: 1.2rem;
}

/* ================== WHAT I'M DOING SECTION (original styles) ================== */
.doing-section {
  background-color: #FAF7EB; /* beige background */
  color: #0A192F;
  padding: 25px 20px 60px 20px !important; /* reduced top padding */
  text-align: center;
  margin-top: 0 !important; /* ensure no extra margin from parent */
}

.doing-heading {
  font-size: 2rem;
  margin: 0 0 40px 0 !important; /* remove top margin */
  color: #FF6B35;
}

.doing-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.doing-card {
  background-color: #FFFFFF;
  border: 2px solid #FF6B35;
  border-radius: 12px;
  padding: 25px 20px;
  width: 260px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.doing-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

.doing-card h3 {
  margin: 15px 0 8px 0;
  color: #FF6B35;
  font-size: 1.2rem;
}

.doing-card p {
  font-size: 0.85rem;
  line-height: 1.4;
  color: #0A192F;
}

.doing-icon {
  margin-bottom: 10px;
}

/* ================== TESTIMONIALS (original styles) ================== */
.testimonials-section {
  background-color: #fff;
  padding: 40px 0;
}

.testimonials-heading {
  color: #0A192F;
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
  color: #EFF6FF !important;
  margin-top: 3px;
}

/* Hover effect */
.testimonial:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.3);
}

/* ================== RESPONSIVE (original rules for these sections) ================== */
@media (max-width: 768px) {
  .about-page {
    flex-direction: column;
    align-items: flex-start;
  }
  .about-video-wrap {
    width: 100%;
    max-width: 100%;
    flex: 0 0 auto;
    padding: 4px;
    border-radius: 10px;
  }
  .about-video { border-radius: 8px; }
  .about-bio { text-align: left; width: 100%; }
  .doing-wrapper {
    flex-direction: column;
    align-items: center;
  }
  
  .doing-card {
    width: 90%;
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

@media (max-width: 768px) {
  .doing-heading {
    margin-bottom: 25px !important; /* reduce gap below heading on mobile */
  }
}
</style>

<!-- ================== SCRIPT: poster -> iframe (muted autoplay loop, no initial YouTube UI) ================== -->
<script>
/* Insert a muted, autoplaying, looping YouTube iframe but show a poster first
   so the initial UI doesn't look like the raw YouTube player.
   This script only touches #yt-player. */
(function () {
  const container = document.getElementById('yt-player');
  if (!container) return;
  const vid = container.dataset.videoId;

  // Poster choices: try maxres, fallback to hq
  const thumbMax = `https://i.ytimg.com/vi/${vid}/maxresdefault.jpg`;
  const thumbHQ  = `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`;

  // Immediately set HQ poster to avoid showing any YouTube chrome
  container.style.backgroundImage = `linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.03)), url("${thumbHQ}")`;

  // Try to preload maxres; if available use it, otherwise keep HQ
  const preload = new Image();
  let posterUsed = thumbHQ;
  preload.src = thumbMax;
  preload.onload = function () {
    posterUsed = thumbMax;
    container.style.backgroundImage = `linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.03)), url("${posterUsed}")`;
    insertIframe();
  };
  preload.onerror = function () {
    // maxres not available; proceed with HQ poster
    insertIframe();
  };

  // Safety: if poster loading hangs, still insert iframe after timeout so area isn't blank
  setTimeout(function () {
    if (!container.querySelector('iframe')) insertIframe();
  }, 1600);

  function buildSrc() {
    // privacy-enhanced domain + autoplay muted + loop + request 720p (YouTube may adapt)
    const params = new URLSearchParams({
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: vid,       // required for loop to work
      controls: 0,
      rel: 0,
      modestbranding: 1,
      playsinline: 1,
      vq: 'hd720'
    });
    return `https://www.youtube-nocookie.com/embed/${vid}?${params.toString()}`;
  }

  function insertIframe() {
    if (container.querySelector('iframe')) return;

    const iframe = document.createElement('iframe');
    iframe.src = buildSrc();
    iframe.title = 'Embedded video';
    iframe.setAttribute('frameborder', '0');
    // allow autoplay for muted content; picture-in-picture allowed
    iframe.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture');
    iframe.loading = 'eager';
    // Keep the iframe non-interactive so clicks won't open YouTube
    iframe.style.pointerEvents = 'none';

    container.appendChild(iframe);

    // Fade the iframe in when it appears; some browsers may not fire load, so use both load and timeout
    let revealed = false;
    function reveal() {
      if (revealed) return;
      iframe.classList.add('ready');
      // remove poster background so embedded player sits cleanly
      container.style.backgroundImage = 'none';
      revealed = true;
    }

    iframe.addEventListener('load', function () { setTimeout(reveal, 120); });
    setTimeout(reveal, 1200);
  }
})();
</script>
