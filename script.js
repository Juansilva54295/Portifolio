// Configuração do AOS
AOS.init({
  duration: 1200,
});

// Configuração do Swiper responsivo
let swiper;

function initSwiper() {
  if (window.innerWidth < 1080) {
    if (!swiper) {
      swiper = new Swiper(".mySwiper", {
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
          prev: { shadow: true, translate: ["-120%", 0, -500] },
          next: { shadow: true, translate: ["120%", 0, -500] }
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
          640: {
            slidesPerView: 2,
          }
        }
      });
    }
  } else if (swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  initSwiper();
  AOS.init({ duration: 1200 });
});

// Redimensionamento
window.addEventListener('resize', initSwiper);

// Inicializa e monitora redimensionamento
initSwiper();
window.addEventListener('resize', initSwiper);

// Menu hamburguer (mantido igual)
const hamburger = document.querySelector(".hamburger");
const navContent = document.querySelector(".nav-content");
const body = document.body;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navContent.classList.toggle("active");
  body.classList.toggle("no-scroll");
});

function closeMenu() {
  hamburger.classList.remove("active");
  navContent.classList.remove("active");
  body.classList.remove("no-scroll");
}