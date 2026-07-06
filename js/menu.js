document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mobileSidebar = document.getElementById("mobileSidebar");
  const closeSidebar = document.getElementById("closeSidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");

  if (!menuToggle || !mobileSidebar || !closeSidebar || !sidebarOverlay) return;

  menuToggle.onclick = () => {
    mobileSidebar.classList.add("active");
    sidebarOverlay.classList.add("active");
  };

  closeSidebar.onclick = () => {
    mobileSidebar.classList.remove("active");
    sidebarOverlay.classList.remove("active");
  };

  sidebarOverlay.onclick = () => {
    mobileSidebar.classList.remove("active");
    sidebarOverlay.classList.remove("active");
  };
});
