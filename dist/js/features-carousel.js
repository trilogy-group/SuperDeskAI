document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".feature-slide");
  let currentSlide = 0;

  function showSlide(index) {
    slides[currentSlide].style.opacity = 0;
    slides[currentSlide].classList.remove("active");

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].style.opacity = 1;
    slides[currentSlide].classList.add("active");
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  // Show the first slide initially
  showSlide(0);

  // Auto-rotate every 5 seconds
  setInterval(nextSlide, 5000);
});
