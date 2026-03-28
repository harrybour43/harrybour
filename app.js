// ==========================================
// HARRY BOUR - app.js (Versão Completa e Revisada)
// ==========================================

const categoryData = {
  eventos: { title: "Eventos & Coberturas", desc: "", images: [] },
  rua: { title: "Fotografia de Rua", desc: "", images: [] },
  autoral: { title: "Trabalho Autoral", desc: "", images: [] },
  audiovisual: { title: "Audiovisual", desc: "", images: [] },
  lumen: { title: "Projeto Lumen (+18)", desc: "", images: [] },
};

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.getAttribute("data-page");
  if (page === "inicio") {
    initCarousel();
  } else if (categoryData[page] && typeof loadCategory === 'function') {
    loadCategory(page);
  }
});

// --- CARROSSEL DA HOME ---
let currentSlide = 0;
function initCarousel() {
  const container = document.getElementById("home-carousel");
  if (!container) return;
  
  const slides = document.querySelectorAll(".carousel-slide, .hypnotic-img");
  if (slides.length < 2) return;

  slides[0].classList.add("active");

  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 5000);
}

// --- FUNÇÕES DE MENU E MODAIS ---
function toggleMobileMenu() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) sidebar.classList.toggle("open");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "none";
}

// --- PROJETO LUMEN (GATE DE IDADE) ---
function openAgeGateModal() {
  if (sessionStorage.getItem("ageVerified") === "true") {
    window.location.href = "lumen.html";
    return;
  }
  const modal = document.getElementById("age-gate-modal");
  if (modal) modal.style.display = "flex";
}

function verifyAgeWithFriction() {
  const day = document.getElementById("age-day").value;
  const month = document.getElementById("age-month").value;
  const year = document.getElementById("age-year").value;
  const errorMsg = document.getElementById("age-error-msg");

  if (!day || !month || !year) {
    errorMsg.innerText = "Por favor, preencha o dia, mês e ano.";
    errorMsg.style.display = "block";
    return;
  }

  const birthDate = new Date(year, month - 1, day);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) { age--; }

  if (age >= 18) {
    errorMsg.style.display = "none";
    sessionStorage.setItem("ageVerified", "true");
    document.getElementById("age-gate-modal").style.display = "none";
    window.location.href = "lumen.html";
  } else {
    rejectAgeRedirect();
  }
}

function rejectAgeRedirect() {
  window.location.href = "index.html";
}

// --- ACESSIBILIDADE ---
function toggleA11yPanel() {
  const panel = document.getElementById("a11y-panel");
  if (panel) panel.style.display = panel.style.display === "block" ? "none" : "block";
}

function toggleA11y(className) {
  document.body.classList.toggle(className);
}

function setA11yTextSize(size) {
  document.body.classList.remove("a11y-text-lg", "a11y-text-xl");
  if (size === "lg") document.body.classList.add("a11y-text-lg");
  else if (size === "xl") document.body.classList.add("a11y-text-xl");
}

// ==========================================
// VISUALIZADOR DE IMAGENS TELA CHEIA (LIGHTBOX)
// ==========================================
let currentGalleryImages = [];
let currentImageIndex = 0;

function openLightbox(src, alt) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");

  if (lightbox && lightboxImg) {
    currentGalleryImages = Array.from(document.querySelectorAll('.masonry-item'));
    currentImageIndex = currentGalleryImages.findIndex(img => img.src === src);
    lightboxImg.src = src; 
    lightboxImg.alt = alt;
    if(caption) caption.innerText = alt; 
    lightbox.style.display = "flex";
    document.body.style.overflow = "hidden"; 
  }
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto"; 
  }
}

function navigateLightbox(direction) {
  if (currentGalleryImages.length <= 1) return; 
  
  if (direction === 'next') {
    currentImageIndex = (currentImageIndex + 1) % currentGalleryImages.length;
  } else if (direction === 'prev') {
    currentImageIndex = (currentImageIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
  }
  
  const nextImg = currentGalleryImages[currentImageIndex];
  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");
  
  lightboxImg.src = nextImg.src;
  lightboxImg.alt = nextImg.alt;
  if(caption) caption.innerText = nextImg.alt;
}

document.addEventListener('keydown', function(event) {
  const lightbox = document.getElementById("lightbox");
  if (lightbox && lightbox.style.display === "flex") {
    if (event.key === "ArrowRight") {
      navigateLightbox('next');
    } else if (event.key === "ArrowLeft") {
      navigateLightbox('prev');
    } else if (event.key === "Escape") {
      closeLightbox();
    }
  }
});
// ==========================================
// PROTEÇÃO BÁSICA DE CONTEÚDO
// ==========================================

// 1. Bloqueia o clique com o botão direito (Menu de contexto)
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

// 2. Bloqueia atalhos de teclado para Inspecionar Elemento e Código Fonte
document.addEventListener('keydown', function(event) {
  // Bloqueia a tecla F12
  if (event.key === 'F12') {
    event.preventDefault();
  }
  
  // Bloqueia Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C / Ctrl+U (Windows/Linux)
  if (event.ctrlKey && (
      event.key === 'u' || event.key === 'U' || 
      (event.shiftKey && ['i', 'I', 'j', 'J', 'c', 'C'].includes(event.key))
  )) {
    event.preventDefault();
  }

  // Bloqueia Cmd+Option+I / Cmd+Option+J / Cmd+Option+C / Cmd+U (Mac)
  if (event.metaKey && (
      event.key === 'u' || event.key === 'U' || 
      (event.altKey && ['i', 'I', 'j', 'J', 'c', 'C'].includes(event.key))
  )) {
    event.preventDefault();
  }
});

// 3. Impede que o usuário "arraste e solte" a foto para fora do navegador
document.addEventListener('dragstart', function(event) {
  if (event.target.tagName === 'IMG') {
    event.preventDefault();
  }
});
