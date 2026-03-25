// ==========================================
// HARRY BOUR - app.js (Versão Completa)
// ==========================================

// Configuração das Galerias (Para páginas antigas, se houver)
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
  } else if (categoryData[page]) {
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

function openLightbox(src, alt) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");

  if (lightbox && lightboxImg) {
    // Carrega a imagem e o texto
    lightboxImg.src = src; 
    lightboxImg.alt = alt;
    if(caption) caption.innerText = alt; 
    
    // Exibe o painel escuro e trava a rolagem da página por trás
    lightbox.style.display = "flex";
    document.body.style.overflow = "hidden"; 
  }
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    // Esconde o painel e devolve a rolagem normal ao site
    lightbox.style.display = "none";
    document.body.style.overflow = "auto"; 
  }
}
