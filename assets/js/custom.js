document.addEventListener("DOMContentLoaded", () => {
  const scroller = document.querySelector(".skills-scroll");
  if (!scroller) return;

  // Duplicate the content for seamless scroll
  scroller.innerHTML += scroller.innerHTML;

  const scrollStep = 0.3; // Slower scroll speed (pixels per frame)
  const fps = 60;

  function autoScroll() {
    scroller.scrollLeft += scrollStep;

    // Reset when we've scrolled through half (i.e., original content length)
    if (scroller.scrollLeft >= scroller.scrollWidth / 2) {
      scroller.scrollLeft = 0;
    }
  }

  setInterval(autoScroll, 1000 / fps);
});
