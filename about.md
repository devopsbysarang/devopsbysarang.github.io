---
layout: default
title: "About Me"
permalink: /about/
---

<!-- NOTE: Removed full HTML wrapper (<!doctype html>, <html>, <head>, <body>) so the page will render inside your theme's `layout: default` correctly. -->

<style>
  :root{
    --accent:#FF6B35; --accent-2:#FF8A57; --text:#0A192F; --muted:#6B7280; --max-width:1100px
  }
  /* Page container (will live inside your layout) */
  .about-container{max-width:var(--max-width);margin:28px auto;padding:28px}

  /* HERO grid: keep text column readable and prevent overflow */
  .hero-grid{display:grid;grid-template-columns:1fr 480px;gap:28px;align-items:center}
  .hero-left{min-width:0} /* allow flex-shrink inside grid */
  .hero-title{margin:0 0 10px 0;font-weight:800;line-height:1; /* responsive size */font-size:clamp(1.6rem, 4vw, 2.2rem);color:var(--text)}
  .hero-sub{margin:0;color:var(--muted);font-weight:600;font-size:0.98rem}
  .hero-bio{margin-top:14px;color:var(--text);line-height:1.6;font-size:1rem;max-width:62ch; /* limit line length for readability */}

  /* Socials */
  .social-row{display:flex;gap:10px;margin-top:16px;flex-wrap:wrap}
  .social-btn{display:inline-flex;align-items:center;gap:10px;padding:10px 12px;border-radius:12px;background:#fff;border:1px solid rgba(10,25,47,0.05);text-decoration:none;font-weight:600;color:var(--text)}

  /* VIDEO: darker frame and inner safe area so the iframe never overlaps layout */
  .hero-media{border-radius:16px;overflow:hidden;background:#000;padding:14px;box-shadow:0 20px 45px rgba(9,20,40,0.12);display:block}
  .hero-media .poster{position:relative;width:100%;height:0;padding-bottom:56.25%;background-size:cover;background-position:center;border-radius:10px;display:block;filter:brightness(0.6)}
  .hero-media iframe{position:absolute;border-radius:10px;width:calc(100% - 28px);height:calc((100% - 28px) * 0.5625);left:14px;top:14px;border:0;opacity:0;transition:opacity .3s ease;pointer-events:none}
  .hero-media iframe.ready{opacity:1}

  /* WHAT I'M DOING cards */
  .doing-section{padding:40px 0;text-align:center}
  .doing-heading{font-size:1.9rem;color:var(--accent);font-weight:800;margin-bottom:26px}
  .doing-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;justify-items:center}
  .doing-card{width:100%;max-width:340px;background:#fff;border-radius:12px;padding:22px;border:1px solid rgba(10,25,47,0.04);box-shadow:0 8px 24px rgba(9,20,40,0.05)}

  /* TESTIMONIALS kept visually similar */
  .testimonials-section{padding:40px 0}

  /* RESPONSIVE */
  @media (max-width:1100px){.hero-grid{grid-template-columns:1fr 380px}.doing-grid{grid-template-columns:repeat(3,1fr)}}
  @media (max-width:820px){.hero-grid{grid-template-columns:1fr}.hero-title{text-align:center}.hero-sub{text-align:center}.hero-bio{text-align:center;margin-left:auto;margin-right:auto}.doing-grid{grid-template-columns:repeat(2,1fr)}}
  @media (max-width:480px){.doing-grid{grid-template-columns:1fr}.about-container{padding:18px}.hero-media{padding:10px}.hero-media .poster{padding-bottom:56.25%}}

  /* Ensure long words / pasted HTML won't overflow */
  *{word-wrap:break-word}
  .hero-left, .hero-media, .doing-card{box-sizing:border-box}
</style>

<div class="about-container">
  <section class="hero" aria-label="About — hero">
    <div class="hero-grid">
      <div class="hero-left">
        <h1 class="hero-title">Sarang Deshmukh</h1>
        <p class="hero-sub">DevOps Engineer — Reliability · Cloud · Automation</p>
        <p class="hero-bio">I design and operate reliable, scalable cloud systems. I automate delivery pipelines, optimise observability, and build resilient infra that teams trust. This site contains projects, write-ups and hands-on notes from my DevOps journey.</p>

        <div class="social-row" aria-label="social links">
          <a class="social-btn" href="https://www.linkedin.com/in/sarang-deshmukh-125" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a class="social-btn" href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a class="social-btn" href="mailto:sarangdeshmukh550@gmail.com">Email</a>
        </div>
      </div>

      <div class="hero-media" id="yt-player" data-video-id="7g7pvNQEl5M" aria-label="demo video">
        <div class="poster" aria-hidden="true"></div>
      </div>
    </div>
  </section>

  <section class="doing-section" aria-label="What I'm Doing">
    <h2 class="doing-heading">What I'm Doing</h2>
    <div class="doing-grid" role="list">
      <article class="doing-card" role="listitem"><h3>DevOps</h3><p>Improving speed and quality of delivery through CI/CD, automation and pragmatic pipelines.</p></article>
      <article class="doing-card" role="listitem"><h3>Cloud Engineer</h3><p>Designing secure, cost-aware and resilient cloud infrastructure and platforms at scale.</p></article>
      <article class="doing-card" role="listitem"><h3>SRE</h3><p>Focusing on observability, SLIs/SLOs and processes that keep systems healthy and predictable.</p></article>
      <article class="doing-card" role="listitem"><h3>Software Development</h3><p>Building tools and scripts to automate toil, and learning pragmatic software practices.</p></article>
    </div>
  </section>

  <section class="testimonials-section" aria-label="testimonials">
    <h2 class="testimonials-heading">What people say?</h2>
    <div class="testimonials-wrapper">
      <div class="testimonial"><p>"I highly recommend Sarang for any future endeavors, and I'm confident he will continue to shine in any role he's in and overcome any challenges he may face!"</p><p class="testimonial-name">– Hariom Kashyap <span class="testimonial-role">Software Architect, Amdocs</span></p></div>
      <div class="testimonial"><p>"Sarang has always been a curious person. He is willing to take risks, make mistakes, and learn from them. He comes up with new ideas, never afraid of trying, and puts in the effort every time."</p><p class="testimonial-name">– Ankur Singh <span class="testimonial-role">AI Engineer, Intel</span></p></div>
    </div>
  </section>
</div>

<script>
(function () {
  const container = document.getElementById('yt-player');
  if (!container) return;
  const vid = container.dataset.videoId;
  const posterEl = container.querySelector('.poster');
  const thumbMax = `https://i.ytimg.com/vi/${vid}/maxresdefault.jpg`;
  const thumbHQ  = `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`;

  if (posterEl) posterEl.style.backgroundImage = `url("${thumbHQ}")`;
  const img = new Image(); img.src = thumbMax;
  img.onload = function () { if (posterEl) posterEl.style.backgroundImage = `url("${thumbMax}")`; insertIframe(); };
  img.onerror = function () { insertIframe(); };
  setTimeout(function () { if (!container.querySelector('iframe')) insertIframe(); }, 1400);

  function buildSrc() {
    const params = new URLSearchParams({ autoplay: 1, mute: 1, loop: 1, playlist: vid, controls: 0, rel: 0, modestbranding: 1, playsinline: 1, vq: 'hd720' });
    return `https://www.youtube-nocookie.com/embed/${vid}?${params.toString()}`;
  }
  function insertIframe() {
    if (container.querySelector('iframe')) return;
    const iframe = document.createElement('iframe');
    iframe.src = buildSrc(); iframe.title = 'Demo video'; iframe.setAttribute('frameborder','0'); iframe.setAttribute('allow','autoplay; encrypted-media; picture-in-picture'); iframe.loading = 'lazy'; iframe.style.pointerEvents = 'none';
    container.appendChild(iframe);
    function reveal(){ iframe.classList.add('ready'); }
    iframe.addEventListener('load', function(){ setTimeout(reveal,120); });
    setTimeout(reveal,1200);
  }
})();
</script>
