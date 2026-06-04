
/* =========================================================
LOADER CINEMATICO
========================================================= */

window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  setTimeout(() => {

    if (loader) {

      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
      loader.style.pointerEvents = "none";

      setTimeout(() => {
        loader.style.display = "none";
      }, 1000);

    }

  }, 3000);

});

/* =========================================================
MENU MOBILE
========================================================= */

const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

}

/* =========================================================
SECTIONS NAVIGATION
========================================================= */

const links = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll(".section");

let sectionHistory = [];

links.forEach(link => {

  link.addEventListener("click", () => {

    const current = document.querySelector(".section.active");

    if (current) {
      sectionHistory.push(current.id);
    }

    const target = link.getAttribute("data-section");

    if (target) {

      sections.forEach(section => {
        section.classList.remove("active");
      });

      const activeSection = document.getElementById(target);

      if (activeSection) {
        activeSection.classList.add("active");
      }

    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    if (nav) {
      nav.classList.remove("active");
    }

  });

});

/* =========================================================
BOTON VOLVER
========================================================= */

function goBack() {

  if (sectionHistory.length > 0) {

    const previousSection = sectionHistory.pop();

    sections.forEach(section => {
      section.classList.remove("active");
    });

    const previous = document.getElementById(previousSection);

    if (previous) {

      previous.classList.add("active");

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }

  } else {

    sections.forEach(section => {
      section.classList.remove("active");
    });

    const inicio = document.getElementById("inicio");

    if (inicio) {
      inicio.classList.add("active");
    }

  }

}

/* =========================================================
INTRO MUSIC
========================================================= */

const music = document.getElementById("introMusic");
const volumeControl = document.getElementById("volumeControl");
const musicToggle = document.getElementById("music-toggle");

let started = false;

if (music) {
  music.volume = 0.5;
}

function startMusic() {

  if (!started && music) {

    music.play().catch(() => {});
    started = true;

  }

}

document.addEventListener("click", startMusic, { once:true });
document.addEventListener("scroll", startMusic, { once:true });

/* =========================================================
CONTROL VOLUMEN
========================================================= */

if (volumeControl) {

  volumeControl.addEventListener("input", () => {

    if (music) {
      music.volume = volumeControl.value;
    }

  });

}

/* =========================================================
PLAY / PAUSE
========================================================= */

if (musicToggle && music) {

  musicToggle.addEventListener("click", () => {

    if (music.paused) {

      music.play();
      musicToggle.innerHTML = "🔊 Música";

    } else {

      music.pause();
      musicToggle.innerHTML = "🔇 Silenciada";

    }

  });

}

/* =========================================================
SILENCIAR INTRO EN AUDIOS
========================================================= */

const mediaAudios = document.querySelectorAll(".music-item audio");

mediaAudios.forEach(audio => {

  audio.addEventListener("play", () => {

    if (music) {
      music.pause();
    }

    if (musicToggle) {
      musicToggle.innerHTML = "🔇 Intro Silenciado";
    }

  });

  audio.addEventListener("pause", () => {

    if (music && started) {
      music.play();
    }

    if (musicToggle) {
      musicToggle.innerHTML = "🔊 Música";
    }

  });

});

/* =========================================================
HEADER EFECTO SCROLL
========================================================= */

window.addEventListener("scroll", () => {

  const header = document.querySelector(".header");

  if (!header) return;

  if (window.scrollY > 40) {

    header.style.background = "rgba(0,0,0,.96)";
    header.style.backdropFilter = "blur(20px)";

  } else {

    header.style.background = "rgba(0,0,0,.92)";

  }

});

/* =========================================================
GALERIA ZOOM
========================================================= */

const galleryImages =
document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img => {

  img.addEventListener("click", () => {
    img.classList.toggle("zoomed");
  });

});

/* =========================================================
PRELOAD
========================================================= */

const preloadImages = [

  "assets/hero/hero.jpg",
  "assets/hero/bg-comunicados.jpg",
  "assets/hero/bg-mujeres.jpg",
  "assets/hero/bg-galeria.jpg",
  "assets/hero/bg-videos.jpg"

];

preloadImages.forEach(src => {

  const img = new Image();
  img.src = src;

});

/* =========================================================
CONSOLE STYLE
========================================================= */

console.log(
  "%cFARC-EP Frente 36",
  "color:#7ed48d;font-size:20px;font-weight:bold;"
);