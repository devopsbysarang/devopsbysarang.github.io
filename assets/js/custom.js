document.addEventListener("DOMContentLoaded", () => {
  const scroller = document.querySelector(".skills-scroll");
  let scrollAmount = 0;

  function autoScroll() {
    if (scroller) {
      scrollAmount += 1;
      if (scrollAmount >= scroller.scrollWidth - scroller.clientWidth) {
        scrollAmount = 0;
      }
      scroller.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  }

  setInterval(autoScroll, 50);
});
