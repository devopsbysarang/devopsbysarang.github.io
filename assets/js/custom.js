(function() {
  function initMarquee() {
    document.querySelectorAll('.skills-track').forEach(function(track) {
      if (track.dataset.marqueeInitialized === '1') return;

      const children = Array.from(track.children);
      if (children.length === 0) return;

      // duplicate logos
      children.forEach(function(node) {
        track.appendChild(node.cloneNode(true));
      });

      // compute original width
      const originalWidth = track.getBoundingClientRect().width / 2;
      const speed = 120; // px/sec
      const duration = Math.max(10, Math.round(originalWidth / speed));
      track.style.animationDuration = duration + 's';

      track.dataset.marqueeInitialized = '1';
    });
  }

  if (document.readyState === 'complete') {
    initMarquee();
  } else {
    window.addEventListener('load', initMarquee);
  }

  // re-init on resize
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
      document.querySelectorAll('.skills-track').forEach(function(t) {
        t.dataset.marqueeInitialized = '';
      });
      initMarquee();
    }, 250);
  });
})();
