(function() {
  function waitForImages(track) {
    // return Promise resolving when all imgs in track are loaded (or errored)
    const imgs = Array.from(track.querySelectorAll('img'));
    if (imgs.length === 0) return Promise.resolve();
    const promises = imgs.map(img => {
      return new Promise(resolve => {
        if (img.complete) return resolve();
        img.addEventListener('load', () => resolve());
        img.addEventListener('error', () => resolve());
      });
    });
    return Promise.all(promises);
  }

  function initMarquee() {
    document.querySelectorAll('.skills-track').forEach(function(track, idx) {
      try {
        // avoid double-init
        if (track.dataset.marqueeInitialized === '1') return;

        waitForImages(track).then(function() {
          const originalChildren = Array.from(track.children);
          if (originalChildren.length === 0) return;

          // clone the sequence once -> seamless loop
          originalChildren.forEach(function(node) {
            track.appendChild(node.cloneNode(true));
          });

          // compute original width: use offsetLeft of first clone (after original set)
          const originalCount = originalChildren.length;
          const firstClone = track.children[originalCount];
          let originalWidth;
          if (firstClone) {
            originalWidth = firstClone.offsetLeft; // pixel width of original sequence
          } else {
            // fallback — sum widths of original children
            originalWidth = originalChildren.reduce(function(acc, el) {
              return acc + el.getBoundingClientRect().width;
            }, 0);
          }

          // guard
          if (!originalWidth || originalWidth <= 0) {
            console.warn('Marquee: could not compute width, skipping animation for this track.', track);
            return;
          }

          // choose speed (px per second). Lower = slower. Adjust as desired.
          const speed = 120; // px/sec
          const duration = Math.max(8, Math.round(originalWidth / speed)); // seconds

          // create a unique keyframes name
          const animName = 'marqueeScroll_' + idx + '_' + Math.floor(Math.random() * 100000);

          // inject keyframes into a style element
          const styleEl = document.createElement('style');
          styleEl.type = 'text/css';
          const keyframes = `
            @keyframes ${animName} {
              0% { transform: translateX(0); }
              100% { transform: translateX(-${originalWidth}px); }
            }
          `;
          styleEl.appendChild(document.createTextNode(keyframes));
          document.head.appendChild(styleEl);

          // apply the animation to the track
          track.style.animation = `${animName} ${duration}s linear infinite`;
          track.style.animationPlayState = 'running';

          // mark initialized
          track.dataset.marqueeInitialized = '1';
        });
      } catch (err) {
        console.error('Marquee init error', err);
      }
    });
  }

  if (document.readyState === 'complete') {
    initMarquee();
  } else {
    window.addEventListener('load', initMarquee);
  }

  // Re-init on resize (recompute widths/durations)
  let to;
  window.addEventListener('resize', function() {
    clearTimeout(to);
    to = setTimeout(function() {
      // remove previously injected animations so we can recreate
      document.querySelectorAll('.skills-track').forEach(function(track) {
        // remove any animation style and allow re-init
        track.style.animation = '';
        track.dataset.marqueeInitialized = '';
      });
      // remove injected style tags starting with @keyframes marqueeScroll_
      Array.from(document.querySelectorAll('style')).forEach(function(s) {
        if (s.innerText && s.innerText.indexOf('@keyframes marqueeScroll_') !== -1) {
          s.parentNode.removeChild(s);
        }
      });
      initMarquee();
    }, 300);
  });
})();
