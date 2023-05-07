const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.toggle("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const screens = document.querySelectorAll(".screen");
screens.forEach((screen) => observer.observe(screen));
