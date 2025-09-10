document.addEventListener("DOMContentLoaded", () => {
  const scroller = document.querySelector(".skills-scroll");
  if (!scroller) return;

  let scrollAmount = 0;
  const scrollStep = 1;      // pixels per frame
  const fps = 60;             // frames per second

  function autoScroll() {
    scrollAmount += scrollStep;

    // reset scroll when reaching end
    if (scrollAmount >= scroller.scrollWidth / 2) {
      scrollAmount = 0;
    }

    scroller.scrollLeft = scrollAmount;
  }

  setInterval(autoScroll, 1000 / fps); // ~60fps for smooth movement
});
