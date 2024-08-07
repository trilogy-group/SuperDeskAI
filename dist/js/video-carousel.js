document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".demo-slider");
  const slides = document.querySelectorAll(".demo-slide");
  const prevButton = document.querySelector(".demo-prev");
  const nextButton = document.querySelector(".demo-next");
  let currentIndex = 0;

  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateVideo();
  }

  function updateVideo() {
    slides.forEach((slide, index) => {
      const video = slide.querySelector("video");
      if (index === currentIndex) {
        video.play();
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  }

  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  // Auto-advance slides every 10 seconds
  setInterval(nextSlide, 10000);

  // Initial setup
  updateSlider();
});
