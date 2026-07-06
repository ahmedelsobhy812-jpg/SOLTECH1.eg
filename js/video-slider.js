document.addEventListener("DOMContentLoaded", () => {

  const videos = document.querySelectorAll(".video-slide");
  const nextBtn = document.getElementById("nextVideo");
  const prevBtn = document.getElementById("prevVideo");
  const muteBtn = document.getElementById("muteBtn");

  let currentVideo = 0;

  function showVideo(index) {
    videos.forEach((video, i) => {
      video.classList.toggle("active", i === index);
      video.pause();
      video.currentTime = 0;
    });

    videos[index].play();
  }

  nextBtn.addEventListener("click", () => {
    currentVideo = (currentVideo + 1) % videos.length;
    showVideo(currentVideo);
  });

  prevBtn.addEventListener("click", () => {
    currentVideo = (currentVideo - 1 + videos.length) % videos.length;
    showVideo(currentVideo);
  });

  muteBtn.addEventListener("click", () => {
    const video = videos[currentVideo];
    video.muted = !video.muted;

    muteBtn.innerHTML = video.muted
      ? '<i class="fas fa-volume-mute"></i>'
      : '<i class="fas fa-volume-up"></i>';
  });

  showVideo(currentVideo);
});
