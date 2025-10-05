---
layout: default
title: "About Me"
permalink: /about/
---

<div class="about-page">

  <!-- LEFT: profile card (photo, name, bio, socials) -->
  <aside class="profile-card" aria-label="Profile card">
    <div class="profile-top">
      <img src="{{ '/assets/images/photo.png' | relative_url }}" alt="Sarang Deshmukh" class="profile-avatar">
      <div class="profile-meta">
        <h1 class="profile-name">Sarang Deshmukh</h1>
        <p class="profile-role">DevOps Engineer — Reliability · Cloud · Automation</p>
      </div>
    </div>

    <div class="profile-bio">
      <p>
        I build reliable, scalable, and maintainable cloud systems. I design automated workflows, optimize CI/CD, and deliver multi-region resilient infra. This site showcases projects, learnings and practical write-ups from my DevOps journey.
      </p>
    </div>

    <div class="profile-actions" aria-label="Social links">
      <a class="social" href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <!-- Instagram SVG -->
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/></svg>
        <span>Instagram</span>
      </a>

      <a class="social" href="https://www.linkedin.com/in/sarang-deshmukh-125" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <!-- LinkedIn SVG -->
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-14h4v2"/></svg>
        <span>LinkedIn</span>
      </a>

      <a class="social" href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <!-- GitHub SVG -->
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.5a3.5 3.5 0 0 0-1-2.75c3.2-.35 6.5-1.6 6.5-7A5.4 5.4 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-8 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77c0 5.42 3.3 6.65 6.5 7A3.5 3.5 0 0 0 9 18.5V22"/></svg>
        <span>GitHub</span>
      </a>
    </div>
  </aside>

  <!-- RIGHT: video (muted autoplay looping, poster first) -->
  <div class="about-video-wrap">
    <div id="yt-player" class="about-video" data-video-id="7g7pvNQEl5M" role="region" aria-label="Autoplaying muted looping video"></div>
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
/* ================== UPPER PART: profile + video styles (keeps other sections untouched) ================ */

:root {
  --accent: #FF6B35;
  --bg: #FFFFFF;
  --text: #0A192F;
  --muted: #6B7280;
}

html, body { margin:0; padding:0; background:var(--bg); color:var(--text); font-family: 'Roboto', sans-serif; box-sizing: border-box; }

/* Container for top area */
.about-page {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  padding: 2rem;
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;
}

/* PROFILE CARD (left) */
.profile-card {
  flex: 1 1 420px;
  background: linear-gradient(180deg, #fff, #fff);
  border-radius: 14px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(9,20,40,0.06);
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-width: 260px;
}

/* Top row: avatar + meta */
.profile-top {
  display: flex;
  gap: 14px;
  align-items: center;
}

/* avatar */
.profile-avatar {
  width: 84px;
  height: 84px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 6px 18px rgba(9,20,40,0.08);
  border: 3px solid rgba(255,107,53,0.08);
}

/* name and role */
.profile-name {
  margin: 0;
  font-size: 1.4rem;
  color: var(--text);
  letter-spacing: 0.2px;
}
.profile-role {
  margin: 4px 0 0;
  color: var(--muted);
  font-size: 0.95rem;
}

/* bio text */
.profile-bio { color: var(--text); line-height:1.6; font-size:1rem; }

/* socials */
.profile-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 6px;
}
.social {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 10px;
  background: rgba(15,23,42,0.03);
  color: var(--text);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: transform 0.12s ease, background 0.12s ease;
  border: 1px solid rgba(10,25,47,0.04);
}
.social:hover {
  transform: translateY(-4px);
  background: rgba(255,107,53,0.06);
  border-color: rgba(255,107,53,0.14);
  color: var(--accent);
}

/* icon color */
.social svg { color: currentColor; opacity: 0.95; }

/* VIDEO (right) */
.about-video-wrap {
  flex: 0 0 520px;
  max-width: 520px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* inner video area */
.about-video {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 */
  border-radius: 10px;
  background: #000;
  background-position: center;
  background-size: cover;
}

/* overlay for neutral look */
.about-video::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.03));
}

/* iframe fills the container; hidden until ready */
.about-video iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 300ms ease;
  display: block;
}
.about-video iframe.ready { opacity: 1; }

/* ================== DOING & TESTIMONIAL STYLES (UNCHANGED from your original) ================== */
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

/* ================== TESTIMONIALS (unchanged) ================== */
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

.testimonial:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.3);
}

/* ================== RESPONSIVE: mobile stacks text first then video ================ */
@media (max-width: 920px) {
  .about-page { gap: 1rem; padding: 1.25rem; }
  .about-video-wrap { max-width: 480px; flex: 0 0 48%; }
  .profile-card { flex: 1 1 48%; }
}

@media (max-width: 768px) {
  .about-page {
    flex-direction: column;
    align-items: stretch;
  }
  /* ensure profile card shows first, then video */
  .profile-card { order: 0; }
  .about-video-wrap { order: 1; width: 100%; max-width: 100%; margin-top: 0; }
  .about-video { border-radius: 10px; }
  .profile-card { border-radius: 12px; }
  .profile-avatar { width: 72px; height:72px; }
  .profile-name { font-size: 1.2rem; }
  .profile-role { font-size: 0.92rem; }
}

/* small phones */
@media (max-width: 420px) {
  .profile-avatar { width: 64px; height:64px; }
  .profile-card { padding: 14px; }
  .about-page { padding: 12px; }
}
</style>

<!-- ================== SCRIPT: poster -> iframe (muted autoplay loop, no initial YouTube UI) ================== -->
<script>
(function () {
  const container = document.getElementById('yt-player');
  if (!container) return;
  const vid = container.dataset.videoId;

  // Poster choices: try maxres then hq
  const thumbMax = `https://i.ytimg.com/vi/${vid}/maxresdefault.jpg`;
  const thumbHQ  = `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`;

  // Set HQ poster quickly to avoid showing YouTube chrome
  container.style.backgroundImage = `linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.03)), url("${thumbHQ}")`;

  // Preload max resolution; if available swap it in then insert iframe
  const img = new Image();
  img.src = thumbMax;
  img.onload = function () {
    container.style.backgroundImage = `linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.03)), url("${thumbMax}")`;
    insertIframe();
  };
  img.onerror = function () {
    insertIframe();
  };

  // Safety timeout so video isn't delayed too long
  setTimeout(function () { if (!container.querySelector('iframe')) insertIframe(); }, 1600);

  function buildSrc() {
    const params = new URLSearchParams({
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: vid,
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
    iframe.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture');
    iframe.loading = 'eager';
    iframe.style.pointerEvents = 'none';
    container.appendChild(iframe);

    // Fade-in once loaded or after fallback timeout
    let revealed = false;
    function reveal() {
      if (revealed) return;
      iframe.classList.add('ready');
      container.style.backgroundImage = 'none';
      revealed = true;
    }
    iframe.addEventListener('load', function () { setTimeout(reveal, 120); });
    setTimeout(reveal, 1200);
  }
})();
</script>
