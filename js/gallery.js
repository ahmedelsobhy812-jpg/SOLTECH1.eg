document.addEventListener("DOMContentLoaded", () => {

console.log("Gallery JS Loaded");

const images = document.querySelectorAll(".gallery-grid img");
const previewBox = document.getElementById("imagePreview");
const previewImg = document.getElementById("previewImg");
const closeBtn = document.getElementById("closePreview");

images.forEach(img => {
  img.addEventListener("click", () => {
    previewImg.src = img.src;
    previewBox.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  previewBox.classList.remove("active");
});

previewBox.addEventListener("click", (e) => {
  if (e.target === previewBox) {
    previewBox.classList.remove("active");
  }
});

});
