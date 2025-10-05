---
layout: default
title: "About Me"
permalink: /about/
---

<!-- ================== ABOUT / HERO ================== -->
<section class="page-hero">
  <div class="hero-inner">
    <div class="hero-left">
      <h1 class="hero-title">Sarang Deshmukh</h1>
      <p class="hero-sub">
        DevOps engineer — building reliable, scalable, and maintainable cloud systems. I design automated workflows, optimize CI/CD, and deliver multi-region resilient infra.
      </p>
      <p class="hero-cta">
        <a href="#work" class="btn">See what I'm doing</a>
      </p>
    </div>

    <!-- Video card (orange border) -->
    <div class="hero-right">
      <div class="video-card bordered">
        <div id="yt-player" class="video-card__inner" data-video-id="7g7pvNQEl5M" role="region" aria-label="Autoplaying background video"></div>
      </div>
    </div>
  </div>
</section>

<!-- ================== MAIN CONTENT (BIO + DETAILS) ================== -->
<main class="main-content container">
  <section class="bio-section">
    <div class="bio-card">
      <h2 class="section-title">About me</h2>
      <p>
        I am a DevOps engineer with 5+ years of experience building reliable, scalable, and maintainable systems. I have successfully delivered multi-regional, active-active deployments for critical projects, ensuring seamless user experiences across geographies. I thrive on designing automated workflows, optimizing pipelines, and creating systems that are robust and future-proof.
      </p>
      <p>
        This website is my space to showcase projects, share insights, and document my journey with cloud technologies, DevOps practices, and automation tools. By sharing my work, I aim to inspire others and continuously grow as a technologist.
      </p>
    </div>
  </section>

  <!-- ================== WHAT I'M DOING ================== -->
  <section id="work" class="doing-section">
    <h2 class="section-title">What I'm Doing</h2>
    <div class="doing-grid">
      <article class="doing-card">
        <div class="doing-icon">⚙️</div>
        <h3>DevOps</h3>
        <p>Improving delivery speed and quality through automation, CI/CD pipelines, and observability.</p>
      </article>

      <article class="doing-card">
        <div class="doing-icon">☁️</div>
        <h3>Cloud Engineer</h3>
        <p>Designing secure, scalable cloud infrastructure and repeatable IaC patterns (Terraform / CloudFormation).</p>
      </article>

      <article class="doing-card">
        <div class="doing-icon">📈</div>
        <h3>SRE</h3>
        <p>Implementing SLOs, monitoring, and reliability practices to keep services healthy and available.</p>
      </article>

      <article class="doing-card">
        <div class="doing-icon">💻</div>
        <h3>Software Development</h3>
        <p>Building automation tooling & scripts to make teams more productive — Python, Bash, and infra code.</p>
      </article>
    </div>
  </section>

  <!-- ================== TESTIMONIALS ================== -->
  <section class="testimonials-section">
    <h2 class="section-title">What people say</h2>
    <div class="testimonials-grid">
      <blockquote class="testimonial">
        <p>"I highly recommend Sarang for any future endeavors, and I'm confident he will continue to shine in any role he's in and overcome any challenges he may face!"</p>
        <footer>— Hariom Kashyap, <span class="muted">Software Architect, Amdocs</span></footer>
      </blockquote>

      <blockquote class="testimonial">
        <p>"Sarang has always been a curious person. He is willing to take risks, make mistakes, and learn from them. He comes up with new ideas, never afraid of trying, and puts in the effort every time."</p>
        <footer>— Ankur Singh, <span class="muted">AI Engineer, Intel</span></footer>
      </blockquote>
    </div>
  </section>
</main>

<!-- ================== STYLES ================== -->
<style>
/* Basic page & container */
:root {
  --accent: #FF6B35;
  --bg: #FFFFFF;
  --text: #0A192F;
  --muted: #6B7280;
  --card-radius: 12px;
  --container-max: 1100px;
  --mobile-gap: 1rem;
}

html,body { margin:0; padding:0; background:var(--bg); color:var(--text); font-family: 'Roboto', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale; }

/* small container helper */
.container { max-width: var(--container-max); margin: 0 auto; padding: 2rem; box-sizing: border-box; }

/* HERO */
.page-hero { padding: 2.5rem 1rem; border-bottom: 1px solid rgba(10,25,47,0.04); }
.hero-inner { display:flex; gap: 2.5rem; align-items:center; justify-content:space-between; max-width: var(--container-max); margin: 0 auto; padding: 0 1rem; box-sizing:border-box; }
.hero-left { flex: 1 1 520px; min-width: 220px; }
.hero-right { flex: 0 0 420px; display:flex; justify-content:flex-end; align-items:center; }

/* hero typography */
.hero-title { margin:0 0 0.6rem 0; font-family: 'Rubik', system-ui, sans-serif; font-size: 2.2rem; color:var(--accent); letter-spacing: 0.4px; line-height:1.05; }
.hero-sub { margin:0 0 1rem 0; color:var(--muted); line-height:1.6; font-size:1.05rem; }

/* CTA */
.btn { display:inline-block; background:linear-gradient(135deg,var(--accent) 0%, #FF8C42 100%); color:#fff; padding:0.65rem 1rem; border-radius:10px; text-decoration:none; font-weight:600; box-shadow: 0 6px 18px rgba(255,107,53,0.14); }

/* Video card */
.video-card { width:100%; max-width:420px; box-sizing:border-box; }
.video-card.bordered { border-radius: 16px; padding: 6px; border: 4px solid var(--accent); background: linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.02)); box-shadow: 0 14px 40px rgba(9,20,40,0.06); overflow:hidden; }
.video-card__inner { position:relative; width:100%; height:0; padding-bottom:56.25%; border-radius: 10px; overflow:hidden; background:#000; background-position:center; background-size:cover; }
.video-card__inner::after { content:""; position:absolute; inset:0; pointer-events:none; background: linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.04)); }

/* iframe styling & fade in */
.video-card__inner iframe { position:absolute; inset:0; width:100%; height:100%; border:0; pointer-events:none; opacity:0; transition: opacity 300ms ease; display:block; }
.video-card__inner iframe.ready { opacity:1; }

/* MAIN / BIO */
.main-content { padding-top: 1.25rem; padding-bottom: 2rem; }
.bio-section { margin-bottom: 2rem; }
.bio-card { background:#fff; border-radius: var(--card-radius); padding: 1.5rem; box-shadow: 0 6px 18px rgba(9,20,40,0.04); }
.section-title { margin:0 0 1rem 0; font-family:'Rubik', sans-serif; font-size:1.5rem; color:var(--accent); }

/* DOING GRID */
.doing-section { margin-top: 2.5rem; padding: 1.25rem 0 0 0; }
.doing-grid { display:grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-top:1rem; }
.doing-card { background:#fff; border:1px solid rgba(10,25,47,0.04); border-radius:12px; padding:1.15rem; box-shadow: 0 8px 24px rgba(9,20,40,0.04); text-align:center; transition: transform 220ms ease, box-shadow 220ms ease; }
.doing-card:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(9,20,40,0.06); }
.doing-icon { font-size:1.6rem; margin-bottom:0.6rem; }

/* TESTIMONIALS */
.testimonials-section { margin-top: 2.5rem; padding-bottom: 3rem; }
.testimonials-grid { display:grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top:1rem; }
.testimonial { background:var(--accent); color: #fff; border-radius: 12px; padding: 1.25rem; box-shadow: 0 10px 30px rgba(9,20,40,0.06); }
.testimonial p { margin:0 0 0.6rem 0; }
.testimonial footer { font-weight:600; color: rgba(255,255,255,0.95); }

/* muted text helper */
.muted { color: rgba(255,255,255,0.9); font-weight:500; font-style:italic; font-size:0.95rem; }

/* ================== MOBILE / RESPONSIVE IMPROVEMENTS ================== */

/* Tablet */
@media (max-width: 1024px) {
  .hero-inner { gap: 1.5rem; }
  .hero-right { flex-basis: 360px; }
  .hero-title { font-size: 1.9rem; }
  .doing-grid { grid-template-columns: repeat(2, 1fr); }
  .testimonials-grid { grid-template-columns: 1fr; }
  .video-card.bordered { max-width:360px; }
}

/* Mobile phones: stack and make everything touch-friendly */
@media (max-width: 768px) {
  .container { padding: 1rem; }
  .hero-inner { flex-direction: column-reverse; align-items:flex-start; gap: var(--mobile-gap); }
  .hero-right { width:100%; display:block; margin-bottom:0; }
  .hero-left { width:100%; }
  .hero-title { font-size: 1.6rem; }
  .hero-sub { font-size: 0.98rem; }
  .btn { display:block; width:100%; text-align:center; padding:0.8rem 0; border-radius:12px; font-size:1rem; }
  /* video becomes full-width card above bio (so small screens see video first) */
  .video-card { width: 100%; max-width: 100%; }
  .video-card.bordered { border-radius: 12px; padding: 4px; border-width: 4px; }
  .video-card__inner { border-radius: 8px; }
  /* bio becomes full width */
  .bio-card { padding: 1rem; }
  /* grids collapse */
  .doing-grid { grid-template-columns: 1fr; gap: 0.8rem; }
  .testimonials-grid { grid-template-columns: 1fr; gap: 0.9rem; }
  .doing-card { padding: 0.95rem; }
  .testimonial { padding: 1rem; }
}

/* Small phones: tighten spacing but keep accessibility */
@media (max-width: 420px) {
  .hero-title { font-size: 1.45rem; }
  .hero-sub { font-size: 0.95rem; line-height:1.5; }
  .btn { padding:0.7rem 0; font-size:0.98rem; border-radius: 10px; }
  .container { padding: 0.75rem; }
  .bio-card { padding: 0.9rem; }
  .section-title { font-size: 1.2rem; }
  .doing-icon { font-size:1.3rem; }
  .doing-card { padding: 0.85rem; }
}

/* Very small: ensure readable testimonial text */
@media (max-width: 360px) {
  .hero-title { font-size: 1.35rem; }
  .hero-sub { font-size: 0.92rem; }
  .testimonial p { font-size: 0.95rem; }
}
</style>

<!-- ================== SCRIPT: poster -> iframe (muted autoplay loop, no initial YouTube UI) ================== -->
<script>
(function () {
  const container = document.getElementById('yt-player');
  if (!container) return;
  const vid = container.dataset.videoId;

  // Poster selection (maxrespreferred -> hq fallback)
  const thumbMax = `https://i.ytimg.com/vi/${vid}/maxresdefault.jpg`;
  const thumbHQ  = `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`;

  // Set a neutral poster background immediately
  container.style.backgroundImage = `linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.04)), url("${thumbHQ}")`;

  // Preload maxres; if available, swap poster then insert iframe
  const img = new Image();
  let posterUsed = thumbHQ;
  img.src = thumbMax;

  // small helper to insert iframe - keeps it non-interactive and fades it in
  function insertIframe() {
    if (container.querySelector('iframe')) return;

    // Build iframe src (privacy mode + autoplay muted + loop + 720p request)
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
    const src = `https://www.youtube-nocookie.com/embed/${vid}?${params.toString()}`;

    const iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.title = 'Embedded video';
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture');
    // keep iframe non-interactive and hidden until ready
    iframe.style.pointerEvents = 'none';
    iframe.loading = 'eager'; // visible autoplay should start quickly on supporting browsers
    container.appendChild(iframe);

    // Fade-in once loaded or after a short timeout as fallback
    let revealed = false;
    function reveal() {
      if (revealed) return;
      iframe.classList.add('ready');
      // remove poster to avoid double visuals
      container.style.backgroundImage = 'none';
      revealed = true;
    }

    // Chrome/Safari may not always fire load; use both load and fallback timeout
    iframe.addEventListener('load', function () { setTimeout(reveal, 150); });
    setTimeout(reveal, 1200);
  }

  img.onload = function () {
    posterUsed = thumbMax;
    container.style.backgroundImage = `linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.04)), url("${posterUsed}")`;
    // Insert iframe AFTER poster is ready to avoid YouTube splash
    insertIframe();
  };

  img.onerror = function () {
    // fallback to HQ poster already set
    insertIframe();
  };

  // Safety: if thumbnails are slow, still insert iframe after short timeout to avoid blank area
  setTimeout(function () {
    if (!container.querySelector('iframe')) insertIframe();
  }, 1800);

})();
</script>
