document.addEventListener("DOMContentLoaded", () => {
  /* -------------------------
     Auto-scroll skills section
  ------------------------- */
  const scroller = document.querySelector(".skills-scroll");
  if (scroller) {
    let scrollAmount = 0;
    const scrollStep = 1; // pixels per frame
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
  }

  /* -------------------------
     Search toggle logic
  ------------------------- */
  const toggleBtn = document.querySelector(".search-toggle");
  const searchInput = document.querySelector(".search-input");

  if (toggleBtn && searchInput) {
    toggleBtn.addEventListener("click", () => {
      if (searchInput.style.display === "block") {
        searchInput.style.display = "none";
      } else {
        searchInput.style.display = "block";
        searchInput.focus();
      }
    });

    // Optional: close on outside click
    document.addEventListener("click", (e) => {
      if (!toggleBtn.contains(e.target) && !searchInput.contains(e.target)) {
        searchInput.style.display = "none";
      }
    });
  }
});
