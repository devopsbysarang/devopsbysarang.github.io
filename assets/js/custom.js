document.addEventListener("DOMContentLoaded", () => {
  const scroller = document.querySelector(".skills-scroll");
  if (!scroller) return;

  // Duplicate content once for infinite effect
  scroller.innerHTML += scroller.innerHTML;

  let scrollAmount = 0;
  const scrollStep = 0.6; // pixels per frame
  const fps = 60;

  function autoScroll() {
    scrollAmount += scrollStep;
    scroller.scrollLeft = scrollAmount;

    // Reset when we've scrolled through one full set
    if (scrollAmount >= scroller.scrollWidth / 2) {
      scrollAmount = 0;
    }
  }

  setInterval(autoScroll, 1000 / fps);
});
