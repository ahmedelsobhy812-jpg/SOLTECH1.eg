const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;
let interval;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

function startAuto() {
  interval = setInterval(nextSlide, 3000);
}

function restartAuto() {
  clearInterval(interval);
  startAuto();
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  restartAuto();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  restartAuto();
});

startAuto();
