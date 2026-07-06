/* ===========================
 DARK / LIGHT MODE
=========================== */

const themeBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

function setTheme(mode) {
  if (mode === "dark") {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    if (themeIcon) themeIcon.className = "fas fa-sun";
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    if (themeIcon) themeIcon.className = "fas fa-moon";
  }

  localStorage.setItem("theme", mode);
}

setTheme(localStorage.getItem("theme") || "dark");

if (themeBtn) {
  themeBtn.onclick = () => {
    const current = document.body.classList.contains("dark") ? "dark" : "light";
    setTheme(current === "dark" ? "light" : "dark");
  };
}

/* ===========================
 NAVBAR SCROLL EFFECT
=========================== */

const navbar = document.querySelector(".navbar");

if (navbar) {
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  });
}

/* ===========================
 PAGE TRANSITION
=========================== */

const transition = document.querySelector(".page-transition");

document.querySelectorAll("a").forEach(link => {
  const href = link.getAttribute("href");

  if (!href || href.startsWith("#")) return;

  const isExternal = link.hostname && link.hostname !== window.location.hostname;

  if (isExternal) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
    return;
  }

  if (transition) {
    link.addEventListener("click", e => {
      e.preventDefault();

      transition.classList.add("active");

      setTimeout(() => {
        window.location.assign(link.href);
      }, 600);
    });
  }
});

if (transition) {
  window.addEventListener("load", () => {
    transition.classList.remove("active");
  });
}

/* ===========================
 ABOUT WATERMARK PARALLAX
=========================== */

const watermark = document.querySelector(".about-watermark");

if (watermark) {
  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    watermark.style.transform =
      `translate(-50%, -50%) translate(${x}px, ${y}px)`;
  });
}

/* ===== Active Navbar Link ===== */

const navLinks = document.querySelectorAll(".navbar a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  const linkPage = link.getAttribute("href");

  if (
    linkPage === currentPage ||
    (currentPage === "" && linkPage === "index.html")
  ) {
    link.classList.add("active");
  }
});

/* ===== Footer Links ===== */

document.querySelectorAll(".site-footer a").forEach(link => {
  const href = link.getAttribute("href");

  if (href && href !== "#") {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  }
});

/* ===========================
 TEAM SECTION (Safe)
=========================== */

const teamContainer = document.getElementById("teamContainer");
const modal = document.getElementById("teamModal");
const closeModalBtn = document.getElementById("closeModal");

function getLang() {
  return document.documentElement.lang === "ar" ? "ar" : "en";
}

if (teamContainer && typeof teamData !== "undefined") {

  function buildTeamCards() {
    teamContainer.innerHTML = "";

    teamData.forEach((member, i) => {
      const lang = getLang();
      const data = member[lang];

      const card = document.createElement("div");
      card.className = "team-card glass tilt";
      card.style.animationDelay = `${i * 0.05}s`;

      card.innerHTML = `
        <div class="card-shine"></div>
        <div class="card-img">
          <img src="${member.img}" alt="${data.name}">
        </div>
        <div class="card-info">
          <h3>${data.name}</h3>
          <span>${data.role}</span>
          <p>${data.academic}</p>
        </div>
      `;

      card.addEventListener("mousemove", tiltEffect);
      card.addEventListener("mouseleave", resetTilt);
      card.onclick = () => openModal(member);

      teamContainer.appendChild(card);
    });
  }

  function openModal(member) {
    if (!modal) return;

    const lang = getLang();
    const data = member[lang];

    const set = (id, value) => {
      const el = document.getElementById(id);
      if (el) el.innerText = value;
    };

    const img = document.getElementById("modalImg");
    if (img) img.src = member.img;

    set("modalName", data.name);
    set("modalRole", data.role);
    set("modalAcademic", data.academic);
    set("modalEmail", data.email);
    set("modalPhone", data.phone);
    set("modalNid", data.nid);

    modal.classList.add("active");
  }

  if (closeModalBtn) {
    closeModalBtn.onclick = () => {
      if (modal) modal.classList.remove("active");
    };
  }

  function tiltEffect(e) {
    const card = this;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 18;
    const rotateY = (x - centerX) / 18;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  }

  function resetTilt() {
    this.style.transform = "rotateX(0) rotateY(0) scale(1)";
  }

  buildTeamCards();
}

/* ===== Team Title ===== */

function setTeamTitle() {
  const el = document.getElementById("teamTitle");
  if (el && typeof translations !== "undefined") {
    el.textContent = translations[getLang()].teamTitle;
  }
}

setTeamTitle();

/* ===== Chat AI ===== */

