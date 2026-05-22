/* =========================================================
LOADER CINEMATICO
========================================================= */

window.addEventListener("load", () => {

const loader =
document.getElementById("loader");

/* MOSTRAR 3 SEGUNDOS */

setTimeout(() => {

if(loader){

loader.style.opacity = "0";

loader.style.visibility = "hidden";

loader.style.pointerEvents = "none";

setTimeout(() => {

loader.style.display = "none";

},1000);

}

},3000);

});

/* =========================================================
MENU MOBILE
========================================================= */

const menuBtn =
document.getElementById("menu-btn");

const nav =
document.getElementById("nav");

if(menuBtn){

menuBtn.addEventListener("click", () => {

nav.classList.toggle("active");

});

}

/* =========================================================
SECTIONS NAVIGATION
========================================================= */

const links =
document.querySelectorAll(".nav a");

const sections =
document.querySelectorAll(".section");

/* HISTORIAL */

let sectionHistory = [];

links.forEach(link => {

link.addEventListener("click", () => {

const current =
document.querySelector(".section.active");

if(current){

sectionHistory.push(current.id);

}

const target =
link.getAttribute("data-section");

if(target){

sections.forEach(section => {

section.classList.remove("active");

});

const activeSection =
document.getElementById(target);

if(activeSection){

activeSection.classList.add("active");

}

}

window.scrollTo({

top:0,
behavior:"smooth"

});

/* CERRAR MENU MOBILE */

if(nav){

nav.classList.remove("active");

}

});

});

/* =========================================================
BOTON VOLVER REAL
========================================================= */

function goBack(){

/* SI HAY HISTORIAL */

if(sectionHistory.length > 0){

const previousSection =
sectionHistory.pop();

sections.forEach(section => {

section.classList.remove("active");

});

const previous =
document.getElementById(previousSection);

if(previous){

previous.classList.add("active");

window.scrollTo({

top:0,
behavior:"smooth"

});

}

}else{

/* VOLVER A INICIO */

sections.forEach(section => {

section.classList.remove("active");

});

const inicio =
document.getElementById("inicio");

if(inicio){

inicio.classList.add("active");

}

window.scrollTo({

top:0,
behavior:"smooth"

});

}

}

/* =========================================================
INTRO MUSIC
========================================================= */

const music =
document.getElementById("introMusic");

const volumeControl =
document.getElementById("volumeControl");

const musicToggle =
document.getElementById("music-toggle");

let started = false;

/* VOLUMEN */

if(music){

music.volume = 0.5;

}

/* INICIAR MUSICA */

function startMusic(){

if(!started && music){

music.play().catch(() => {});

started = true;

}

}

/* AUTOPLAY FIX */

document.addEventListener(
"click",
startMusic,
{ once:true }
);

document.addEventListener(
"scroll",
startMusic,
{ once:true }
);

/* CONTROL VOLUMEN */

if(volumeControl){

volumeControl.addEventListener("input", () => {

if(music){

music.volume =
volumeControl.value;

}

});

}

/* PLAY / PAUSE */

if(musicToggle){

musicToggle.addEventListener("click", () => {

if(music.paused){

music.play();

musicToggle.innerHTML =
"🔊 Música";

}else{

music.pause();

musicToggle.innerHTML =
"🔇 Silenciada";

}

});

}

/* =========================================================
SILENCIAR INTRO EN AUDIOS Y VIDEOS
========================================================= */

const mediaAudios =
document.querySelectorAll(
".music-card audio"
);

const mediaVideos =
document.querySelectorAll(
".video-card video"
);

/* AUDIOS */

mediaAudios.forEach(audio => {

audio.addEventListener("play", () => {

if(music){

music.pause();

}

if(musicToggle){

musicToggle.innerHTML =
"🔇 Intro Silenciado";

}

});

audio.addEventListener("pause", () => {

if(music){

music.play();

}

if(musicToggle){

musicToggle.innerHTML =
"🔊 Música";

}

});

});

/* VIDEOS */

mediaVideos.forEach(video => {

video.addEventListener("play", () => {

/* PAUSAR INTRO */

if(music){

music.pause();

}

/* PAUSAR OTROS VIDEOS */

mediaVideos.forEach(otherVideo => {

if(otherVideo !== video){

otherVideo.pause();

}

});

if(musicToggle){

musicToggle.innerHTML =
"🔇 Intro Silenciado";

}

});

video.addEventListener("pause", () => {

if(music){

music.play();

}

if(musicToggle){

musicToggle.innerHTML =
"🔊 Música";

}

});

});

/* =========================================================
BOTON HERO
========================================================= */



/* =========================================================
EFECTO HEADER SCROLL
========================================================= */

window.addEventListener("scroll", () => {

const header =
document.querySelector(".header");

if(header){

if(window.scrollY > 40){

header.style.background =
"rgba(0,0,0,0.96)";

header.style.backdropFilter =
"blur(20px)";

}else{

header.style.background =
"rgba(0,0,0,0.88)";

}

}

});

/* =========================================================
GALERIA EFECTO
========================================================= */

const galleryImages =
document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img => {

img.addEventListener("click", () => {

img.classList.toggle("zoomed");

});

});

/* =========================================================
PRELOAD IMAGES
========================================================= */

const preloadImages = [

"assets/hero/hero.jpg",
"assets/hero/bg-comunicados.jpg",
"assets/hero/bg-galeria.jpg",
"assets/hero/bg-musica.jpg",
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