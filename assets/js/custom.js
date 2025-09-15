document.addEventListener("DOMContentLoaded", () => {
  const scroller = document.querySelector(".skills-scroll");
  if (!scroller) return;

  let scrollAmount = 0;
  const scrollStep = 0.8; // pixels per frame
  const fps = 60;

  function autoScroll() {
    scrollAmount += scrollStep;
    scroller.scrollLeft = scrollAmount;

    // when first half has gone fully left, reset
    if (scrollAmount >= scroller.scrollWidth / 2) {
      scrollAmount = 0;
    }
  }

  setInterval(autoScroll, 1000 / fps);
});
