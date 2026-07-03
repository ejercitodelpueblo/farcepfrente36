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
LOADER
========================================================= */


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
SECTIONS
========================================================= */

const links = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll(".section");

let sectionHistory = [];

links.forEach(link => {

  link.addEventListener("click", () => {

    const current = document.querySelector(".section.active");

   if(current && current.id !== target){
    sectionHistory.push(current.id);

    }

    const target = link.getAttribute("data-section");

    sections.forEach(section => {
      section.classList.remove("active");
    });

    const activeSection = document.getElementById(target);

    if (activeSection) {
      activeSection.classList.add("active");
    }
updateBackButton();
    if (nav) {
      nav.classList.remove("active");
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

});

/* =========================================================
BOTON VOLVER
========================================================= */


function goBack(){

    sections.forEach(section=>{
        section.classList.remove("active");
    });

    if(sectionHistory.length>0){

        const previous=document.getElementById(sectionHistory.pop());

        if(previous){
            previous.classList.add("active");
        }

    }else{

        document.getElementById("inicio").classList.add("active");

    }

    updateBackButton();

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}
}

}
updateBackButton();

/* =========================================================
MUSICA
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

document.addEventListener("click", startMusic, { once: true });
document.addEventListener("touchstart", startMusic, { once: true });

if (volumeControl) {

  volumeControl.addEventListener("input", () => {

    if (music) {
      music.volume = volumeControl.value;
    }

  });

}

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
AUDIOS
========================================================= */

const mediaAudios =
document.querySelectorAll(".music-item audio");

mediaAudios.forEach(audio => {

  audio.addEventListener("play", () => {

    if (music) music.pause();

  });

  audio.addEventListener("pause", () => {

    if (music && started) {
      music.play().catch(() => {});
    }

  });

});

/* =========================================================
HEADER
========================================================= */

window.addEventListener("scroll", () => {

  const header =
  document.querySelector(".header");

  if (!header) return;

  if (window.scrollY > 40) {

    header.style.background =
    "rgba(0,0,0,.96)";

  } else {

    header.style.background =
    "rgba(0,0,0,.92)";

  }

});

/* =========================================================
GALERIA
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

[
  "assets/hero/hero.jpg",
  "assets/hero/bg-comunicados.jpg",
  "assets/hero/bg-mujeres.jpg",
  "assets/hero/bg-galeria.jpg",
  "assets/hero/bg-videos.jpg"
].forEach(src => {

  const img = new Image();
  img.src = src;

});

console.log("FARC-EP Frente 36");
/* DESPLAZAR IMAGEN HERO EN MOVIL */

if(window.innerWidth <= 768){

const hero = document.querySelector(".hero");

hero.scrollLeft = (hero.scrollWidth - hero.clientWidth)/2;



}const back=document.querySelector(".back-btn");

function updateBackButton(){

    const active=document.querySelector(".section.active");

    if(active.id==="inicio"){

        back.style.display="none";

    }else{

        back.style.display="flex";

    }

}

document.querySelectorAll("[data-section]").forEach(link=>{

    link.addEventListener("click",()=>{

        setTimeout(updateBackButton,50);

    });

});

updateBackButton();