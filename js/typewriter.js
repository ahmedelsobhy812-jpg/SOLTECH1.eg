const typeText = document.getElementById("typeText");

const typeTexts = {
  en: [
    "Graduation project website with modern UI and animations.",
    "Professional design with smooth user experience.",
    "Creative team, powerful ideas, modern solutions."
  ],
  ar: [
    "موقع مشروع تخرج بتصميم عصري واحترافي.",
    "تجربة مستخدم سلسة بتصميم حديث.",
    "فريق مبدع، أفكار قوية، وحلول عصرية."
  ]
};

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typingSpeed = 45;   // سرعة الكتابة
const deletingSpeed = 20; // سرعة المسح

function typeWriter() {
  if (!typeText) return;

  const lang = document.documentElement.lang || "en";
  const current = typeTexts[lang][textIndex];

  if (!deleting) {
    typeText.textContent = current.slice(0, ++charIndex);

    if (charIndex === current.length) {
      deleting = true; // يمسح فورًا بدون انتظار
    }

  } else {
    typeText.textContent = current.slice(0, --charIndex);

    if (charIndex === 0) {
      deleting = false;
      textIndex = (textIndex + 1) % typeTexts[lang].length;
    }
  }

  setTimeout(typeWriter, deleting ? deletingSpeed : typingSpeed);
}

typeWriter();
