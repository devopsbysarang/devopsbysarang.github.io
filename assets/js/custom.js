document.addEventListener("DOMContentLoaded", () => {
  const scroller = document.querySelector(".skills-scroll");
  const content = scroller.querySelector(".scroll-content");

  // Clone the logos once so they appear twice
  const clone = content.cloneNode(true);
  scroller.appendChild(clone);

  let scrollAmount = 0;
  const scrollStep = 1; // speed: pixels per frame
  const fps = 60;

  function autoScroll() {
    scrollAmount += scrollStep;
    scroller.scrollLeft = scrollAmount;

    // Reset only after the first full set has scrolled away
    if (scrollAmount >= content.scrollWidth) {
      scrollAmount = 0;
    }
  }

  setInterval(autoScroll, 1000 / fps);
});
