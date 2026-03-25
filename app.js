// ==========================================
// HARRY BOUR - app.js (Versão Hub & Spoke)
// ==========================================

// Configuração das Galerias (Apenas as que precisam de grid de fotos)
const categoryData = {
  eventos: {
    title: "Eventos & Coberturas",
    desc: '"A captura do momento efêmero antes que se torne memória."',
    images: [
      { id: "ev1", thumb: "", full: "", caption: "Legenda 1" },
      { id: "ev2", thumb: "", full: "", caption: "Legenda 2" },
    ],
  },
  rua: {
    title: "Fotografia de Rua",
    desc: '"O cotidiano é hostil, mas é na rua que a cidade respira."',
    images: [{ id: "rua1", thumb: "", full: "", caption: "Legenda 1" }],
  },
  autoral: {
    title: "Trabalho Autoral",
    desc: "Pesquisas visuais independentes.",
    images: [],
  },
  audiovisual: {
    title: "Audiovisual",
    desc: "Projetos em movimento.",
    images: [],
  },
  lumen: {
    title: "Projeto Lumen (+18)",
    desc: "Estudos de intimidade.",
    images: [],
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.getAttribute("data-page");
  console.log("Página atual:", page); // Para debug no F12

  if (page === "inicio") {
    initCarousel();
  } else if (categoryData[page]) {
    loadCategory(page);
  } else if (page === "espaco-do-cliente") {
    // Caso use a lógica de pastas do Drive futuramente
    console.log("Área do cliente carregada");
  }
});

// --- CARROSSEL ---
let currentSlide = 0;

function initCarousel() {
  const container = document.getElementById("home-carousel");
  if (!container) return;

  // Em vez de criar imagens do zero, apenas pegamos as que já estão no HTML
  const slides = document.querySelectorAll(".carousel-slide, .hypnotic-img");
  if (slides.length < 2) return;

  // Garante que a primeira imagem tenha a classe 'active' (se necessário pelo seu CSS)
  slides[0].classList.add("active");

  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 5000);
}
// --- GALERIA ---
function loadCategory(key) {
  const data = categoryData[key];
  const grid = document.getElementById("gallery-grid");
  if (!data || !grid) return;

  const validImages = data.images.filter((img) => img.thumb !== "");
  if (validImages.length === 0) {
    grid.innerHTML = "<p style='color: #888;'>Galeria em breve.</p>";
  } else {
    grid.innerHTML = "";
    validImages.forEach((imgData) => {
      const img = document.createElement("img");
      img.src = imgData.thumb;
      img.className = "gallery-item";
      img.onclick = () => alert("Visualizador em breve");
      grid.appendChild(img);
    });
  }
}

// --- MODAIS E NAVEGAÇÃO ---
function toggleMobileMenu() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) sidebar.classList.toggle("open");
}

// Abre o modal APENAS se a pessoa ainda não tiver verificado a idade na sessão
function openAgeGateModal() {
  // Se já verificou antes (na mesma visita ao site), vai direto para a página
  if (sessionStorage.getItem("ageVerified") === "true") {
    window.location.href = "lumen.html";
    return;
  }

  // Caso contrário, abre o modal
  const modal = document.getElementById("age-gate-modal");
  if (modal) modal.style.display = "flex";
}

// Função para validar a data de nascimento e calcular a idade
function verifyAgeWithFriction() {
  const day = document.getElementById("age-day").value;
  const month = document.getElementById("age-month").value;
  const year = document.getElementById("age-year").value;
  const errorMsg = document.getElementById("age-error-msg");

  // Verifica se preencheu tudo
  if (!day || !month || !year) {
    errorMsg.innerText = "Por favor, preencha o dia, mês e ano.";
    errorMsg.style.display = "block";
    return;
  }

  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  // Calcula a idade exata
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  // Verifica se é maior de 18
  if (age >= 18) {
    errorMsg.style.display = "none";

    // Armazena no navegador que a pessoa já passou pelo gate
    sessionStorage.setItem("ageVerified", "true");

    // Fecha o modal
    document.getElementById("age-gate-modal").style.display = "none";

    // CORREÇÃO: Redireciona para a página do projeto
    window.location.href = "lumen.html";
  } else {
    // Se for menor de 18, aciona o redirecionamento para fora
    rejectAgeRedirect();
  }
}

// Redirecionamento Neutro/Educativo (Cumprindo a diretriz de bloqueio ativo)
function rejectAgeRedirect() {
  // Redireciona o usuário para fora do site
  window.location.href = "index.html";
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "none";
}

function toggleA11yPanel() {
  const panel = document.getElementById("a11y-panel");
  if (panel)
    panel.style.display = panel.style.display === "block" ? "none" : "block";
}

function toggleA11y(className) {
  document.body.classList.toggle(className);
}

// Gerencia os múltiplos tamanhos de fonte de forma exclusiva
function setA11yTextSize(size) {
  // 1. Remove as classes de tamanho existentes
  document.body.classList.remove("a11y-text-lg", "a11y-text-xl");

  // 2. Aplica a nova classe selecionada (se não for o tamanho padrão)
  if (size === "lg") {
    document.body.classList.add("a11y-text-lg");
  } else if (size === "xl") {
    document.body.classList.add("a11y-text-xl");
  }
}
