const langBtn = document.getElementById("langToggle");

const translations = {
  en: {
    home: "Home",
    project: "Project",
    team: "Team",
    gallery: "Gallery",
    contact: "Contact",
    welcome: "Welcome to",
    teamName: "SolTech Team",
    desc: "Graduation project website with modern UI and animations.",
    aboutTitle: "Who We Are",
    aboutText: "We are TEAM SOLTECH...",
    explore: "Explore Project",
    meet: "Meet The Team",
    followUs: "Follow Us",
    contactUs: "Contact Us",
    designer: "Website Designer",
    teamTitle: "Team Members",
    name: "Name",
    email: "Email",
    phone: "Phone",
    nid: "National ID",
    academic: "Academic ID"
  },

  ar: {
    home: "الرئيسية",
    project: "المشروع",
    team: "الفريق",
    gallery: "معرض الصور",
    contact: "تواصل معنا",
    welcome: "مرحبًا بكم في",
    teamName: "فريق SolTech",
    desc: "موقع مشروع تخرج...",
    aboutTitle: "من نحن",
    aboutText: "نحن فريق SOLTECH...",
    explore: "استكشف المشروع",
    meet: "قابل الفريق",
    followUs: "تابعنا على",
    contactUs: "تواصل معنا على",
    designer: "مصمم الموقع",
    teamTitle: "أعضاء الفريق",
    name: "الاسم",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    nid: "الرقم القومي",
    academic: "الرقم الأكاديمي"
  }
};

let currentLang = localStorage.getItem("lang") || "en";

function setLang(lang) {
  currentLang = lang;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");

    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });

  if (langBtn) {
    langBtn.innerText = lang === "ar" ? "EN" : "AR";
  }

  localStorage.setItem("lang", lang);
}

if (langBtn) {
  langBtn.onclick = () => {
    const newLang = currentLang === "en" ? "ar" : "en";
    setLang(newLang);
  };
}

function getLang() {
  return currentLang;
}

function updateModalLabels() {
  const lang = getLang();

  const set = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
  };

  set("modalName", translations[lang].name + ": ");
  set("modalAcademic", translations[lang].academic + ": ");
  set("modalEmail", translations[lang].email + ": ");
  set("modalPhone", translations[lang].phone + ": ");
  set("modalNid", translations[lang].nid + ": ");
}

setLang(currentLang);
updateModalLabels();