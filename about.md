---
layout: default
title: "About Me"
permalink: /about/
---

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>About — Sarang Deshmukh</title>
  <meta name="description" content="Sarang Deshmukh — DevOps Engineer. Reliability · Cloud · Automation" />

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">

  <style>
    :root{
      --accent: #FF6B35;
      --accent-2: #FF8A57;
      --bg: #FFFFFF;
      --card: #FFFFFF;
      --muted: #6B7280;
      --text: #0A192F;
      --radius-lg: 16px;
      --radius-sm: 10px;
      --max-width: 1100px;
      --glass: rgba(255,255,255,0.7);
      --shadow-1: 0 8px 30px rgba(9,20,40,0.06);
    }

    /* Page reset */
    *{box-sizing:border-box}
    html,body{height:100%;margin:0;background:linear-gradient(180deg,#FFFFFF,#FBFBFD);color:var(--text);font-family:'Inter',system-ui,Arial,sans-serif;-webkit-font-smoothing:antialiased}
    a{color:inherit}

    .container{max-width:var(--max-width);margin:0 auto;padding:28px}

    /* ---------- HERO (replaces the old upper card) ---------- */
    .hero{display:flex;gap:26px;align-items:center;justify-content:space-between;margin:28px auto;padding:18px 6px}
    .hero-grid{display:grid;grid-template-columns:1fr 460px;gap:26px;align-items:center}

    /* left content */
    .hero-title{margin:0 0 10px 0;font-size:2.2rem;font-weight:800;letter-spacing:-0.02em}
    .hero-sub{margin:0;color:var(--muted);font-weight:600}
    .hero-bio{margin-top:14px;color:var(--text);line-height:1.6;font-size:0.975rem}

    /* socials row */
    .social-row{display:flex;gap:10px;margin-top:16px;flex-wrap:wrap}
    .social-btn{display:inline-flex;align-items:center;gap:10px;padding:10px 12px;border-radius:12px;background:linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,255,255,0.85));border:1px solid rgba(10,25,47,0.06);text-decoration:none;font-weight:600;color:var(--text);box-shadow:var(--shadow-1);transition:transform .16s ease,box-shadow .16s ease}
    .social-btn:hover{transform:translateY(-4px);box-shadow:0 14px 40px rgba(9,20,40,0.08)}
    .social-btn svg{width:18px;height:18px}

    /* hero media (video poster + iframe) - now with darker frame */
    .hero-media{border-radius:18px;overflow:hidden;background:#000;min-height:260px;position:relative;box-shadow:0 18px 50px rgba(9,20,40,0.12);padding:12px;border:1px solid rgba(255,255,255,0.03)}
    .hero-media .poster{position:absolute;inset:12px;border-radius:12px;background-size:cover;background-position:center;display:block;filter:brightness(0.7)}
    .hero-media::after{content:'';position:absolute;inset:12px;border-radius:12px;background:linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.04));pointer-events:none}
    .hero-media iframe{position:absolute;inset:12px;border-radius:12px;width:calc(100% - 24px);height:calc(100% - 24px);border:0;display:block;opacity:0;transition:opacity .3s ease;pointer-events:none}
    .hero-media iframe.ready{opacity:1}

    /* add a subtle play-like shimmer when poster is visible */
    .hero-media .poster::before{content:'';position:absolute;left:0;right:0;top:0;bottom:0;background:radial-gradient(ellipse at center, rgba(255,255,255,0.02), rgba(0,0,0,0.15));border-radius:12px}

    /* ---------- WHAT I'M DOING (modern cards, remove beige background) ---------- */
    .doing-section{background:transparent;padding:40px 12px 64px;text-align:center}
    .doing-heading{font-size:1.9rem;margin:0 0 26px;color:var(--accent);font-weight:800}

    .doing-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;justify-items:center}
    .doing-card{width:100%;max-width:300px;background:linear-gradient(180deg,var(--card),#fff);border-radius:12px;padding:22px;border:1px solid rgba(10,25,47,0.04);box-shadow:0 8px 24px rgba(9,20,40,0.05);transition:transform .22s ease,box-shadow .22s ease}
    .doing-card:hover{transform:translateY(-8px);box-shadow:0 20px 45px rgba(9,20,40,0.08)}

    .doing-icon-wrap{width:64px;height:64px;border-radius:14px;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;background:linear-gradient(135deg,var(--accent),var(--accent-2));box-shadow:0 8px 20px rgba(255,107,53,0.12)}
    .doing-icon-wrap svg{width:30px;height:30px;stroke:#fff}
    .doing-card h3{margin:10px 0 8px;font-size:1.05rem;color:var(--text)}
    .doing-card p{margin:0;font-size:0.92rem;color:var(--muted);line-height:1.5}

    /* ---------- TESTIMONIALS (kept intact visually) ---------- */
    .testimonials-section{background-color:#fff;padding:40px 0}
    .testimonials-heading{color:var(--text);font-size:2rem;text-align:center;margin:0 0 25px 0}
    .testimonials-wrapper{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;padding:0 20px;margin-bottom:0}
    .testimonial{background-color:var(--accent);color:#fff;border-radius:12px;padding:30px;box-shadow:0 4px 15px rgba(0,0,0,0.12);flex:0 1 360px;max-width:360px;margin:10px}
    .testimonial p{margin-bottom:15px;color:#fff}
    .testimonial-name{font-weight:bold;color:#fff;margin-top:10px}
    .testimonial-role{display:block;font-style:italic;color:#fff;margin-top:3px}

    /* ---------- Responsive ---------- */
    @media (max-width:1100px){
      .hero-grid{grid-template-columns:1fr 380px}
      .doing-grid{grid-template-columns:repeat(3,1fr)}
    }
    @media (max-width:820px){
      .hero-grid{grid-template-columns:1fr}
      .hero{padding:0}
      .hero-title{text-align:center}
      .hero-sub{text-align:center}
      .social-row{justify-content:center}
      .hero-media{min-height:220px}
      .doing-grid{grid-template-columns:repeat(2,1fr)}
      .doing-card{max-width:420px}
    }
    @media (max-width:480px){
      .container{padding:18px}
      .hero-title{font-size:1.25rem}
      .doing-grid{grid-template-columns:1fr}
      .hero-media{min-height:180px;border-radius:12px}
      .social-btn{padding:10px}
    }

    /* small utility */
    .muted{color:var(--muted)}

  </style>
</head>
<body>

  <div class="container">
    <!-- HERO (replaces the old "card of upper page") -->
    <section class="hero" aria-label="About — hero">
      <div class="hero-grid">
        <div>
          <h1 class="hero-title">Sarang Deshmukh</h1>
          <p class="hero-sub">DevOps Engineer — Reliability · Cloud · Automation</p>

          <p class="hero-bio">I design and operate reliable, scalable cloud systems. I automate delivery pipelines, optimise observability, and build resilient infra that teams trust. This site contains projects, write-ups and hands-on notes from my DevOps journey.</p>

          <div class="social-row" aria-label="social links">
            <a class="social-btn" href="https://www.linkedin.com/in/sarang-deshmukh-125" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-14h4v2"/></svg>
              <span>LinkedIn</span>
            </a>

            <a class="social-btn" href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.5a3.5 3.5 0 0 0-1-2.75c3.2-.35 6.5-1.6 6.5-7A5.4 5.4 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-8 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77c0 5.42 3.3 6.65 6.5 7A3.5 3.5 0 0 0 9 18.5V22"/></svg>
              <span>GitHub</span>
            </a>

            <a class="social-btn" href="mailto:sarangdeshmukh550@gmail.com" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6L12 13 2 6"/></svg>
              <span>Email</span>
            </a>
          </div>
        </div>

        <div class="hero-media" id="yt-player" data-video-id="7g7pvNQEl5M" aria-label="demo video">
          <!-- poster background will be set by JS; iframe inserted lazily -->
          <div class="poster" aria-hidden="true"></div>
        </div>
      </div>
    </section>

    <!-- WHAT I'M DOING (modern cards, beige removed) -->
    <section class="doing-section" aria-label="What I'm Doing">
      <h2 class="doing-heading">What I'm Doing</h2>

      <div class="doing-grid" role="list">
        <article class="doing-card" role="listitem">
          <div class="doing-icon-wrap" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
          </div>
          <h3>DevOps</h3>
          <p>Improving speed and quality of delivery through CI/CD, automation and pragmatic pipelines.</p>
        </article>

        <article class="doing-card" role="listitem">
          <div class="doing-icon-wrap" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 17.58A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 4 16.25"/></svg>
          </div>
          <h3>Cloud Engineer</h3>
          <p>Designing secure, cost-aware and resilient cloud infrastructure and platforms at scale.</p>
        </article>

        <article class="doing-card" role="listitem">
          <div class="doing-icon-wrap" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4v16h16V4H4zm4 12l2-3 2 2 4-6 2 3"/></svg>
          </div>
          <h3>SRE</h3>
          <p>Focusing on observability, SLIs/SLOs and processes that keep systems healthy and predictable.</p>
        </article>

        <article class="doing-card" role="listitem">
          <div class="doing-icon-wrap" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>
          </div>
          <h3>Software Development</h3>
          <p>Building tools and scripts to automate toil, and learning pragmatic software practices.</p>
        </article>
      </div>
    </section>

    <!-- TESTIMONIALS (kept as-is visually/content) -->
    <section class="testimonials-section" aria-label="testimonials">
      <div>
        <h2 class="testimonials-heading">What people say?</h2>
        <div class="testimonials-wrapper">
          <div class="testimonial">
            <p>"I highly recommend Sarang for any future endeavors, and I'm confident he will continue to shine in any role he's in and overcome any challenges he may face!"</p>
            <p class="testimonial-name">
              – Hariom Kashyap
              <span class="testimonial-role">Software Architect, Amdocs</span>
            </p>
          </div>

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

  </div>

  <!-- Video poster -> iframe script (keeps the same behaviour but tuned for the hero) -->
  <script>
  (function () {
    const container = document.getElementById('yt-player');
    if (!container) return;
    const vid = container.dataset.videoId;

    const posterEl = container.querySelector('.poster');
    const thumbMax = `https://i.ytimg.com/vi/${vid}/maxresdefault.jpg`;
    const thumbHQ  = `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`;

    // Set quick HQ poster
    if (posterEl) posterEl.style.backgroundImage = `url("${thumbHQ}")`;

    // try load higher res then insert iframe
    const img = new Image();
    img.src = thumbMax;
    img.onload = function () {
      if (posterEl) posterEl.style.backgroundImage = `url("${thumbMax}")`;
      insertIframe();
    };
    img.onerror = function () { insertIframe(); };

    // safety timeout if network is slow
    setTimeout(function () { if (!container.querySelector('iframe')) insertIframe(); }, 1400);

    function buildSrc() {
      const params = new URLSearchParams({ autoplay: 1, mute: 1, loop: 1, playlist: vid, controls: 0, rel: 0, modestbranding: 1, playsinline: 1, vq: 'hd720' });
      return `https://www.youtube-nocookie.com/embed/${vid}?${params.toString()}`;
    }

    function insertIframe() {
      if (container.querySelector('iframe')) return;
      const iframe = document.createElement('iframe');
      iframe.src = buildSrc();
      iframe.title = 'Demo video';
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture');
      iframe.loading = 'lazy';
      iframe.style.pointerEvents = 'none';
      container.appendChild(iframe);

      function reveal() {
        iframe.classList.add('ready');
        if (posterEl) posterEl.style.opacity = '0';
      }
      iframe.addEventListener('load', function () { setTimeout(reveal, 120); });
      setTimeout(reveal, 1200);
    }
  })();
  </script>

</body>
</html>
