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

/* ==========================================

   GERADOR DE GALERIA DINÂMICA (GITHUB API)

========================================== */

async function loadDynamicGallery() {

  const gallery = document.getElementById('dynamic-gallery');

  if (!gallery) return; 



  const folderPath = gallery.getAttribute('data-folder');

  const repoOwner = 'harrybour43';

  const repoName = 'harrybour';

  const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${folderPath}`;

  

  const isTratamento = folderPath.includes('tratamento');



  try {

      const response = await fetch(apiUrl);

      if (!response.ok) throw new Error('Não foi possível carregar a pasta.');

      const files = await response.json();



      // 1. Pega apenas os arquivos de imagem

      const images = files.filter(file => file.name.match(/\.(jpg|jpeg|png|webp)$/i));



      if (isTratamento) {

          const imagensDepois = images.filter(file => file.name.toLowerCase().includes('-depois'));

          

          imagensDepois.forEach(img => {

              const imgElement = document.createElement('img');

              imgElement.src = `${folderPath}/${img.name}`; 

              let cleanName = img.name.replace(/\.[^/.]+$/, "").replace(/-/g, " ").replace(/ depois/i, "");

              imgElement.alt = cleanName;

              imgElement.className = 'masonry-item';

              imgElement.setAttribute('loading', 'lazy');

              imgElement.style.cursor = 'pointer';



              imgElement.addEventListener('click', () => {

                  const urlAntes = imgElement.src.replace(/-depois/i, '-antes');

                  openSliderLightbox(urlAntes, imgElement.src, cleanName);

              });

              gallery.appendChild(imgElement);

          });

      } else {

          images.forEach(img => {

              const imgElement = document.createElement('img');

              imgElement.src = `${folderPath}/${img.name}`; 

              let cleanName = img.name.replace(/\.[^/.]+$/, "").replace(/-/g, " ");

              imgElement.alt = cleanName;

              imgElement.className = 'masonry-item';

              imgElement.setAttribute('loading', 'lazy');



              imgElement.addEventListener('click', () => {

                  openLightbox(imgElement.src, imgElement.alt);

              });

              gallery.appendChild(imgElement);

          });

      }

  } catch (error) {

      console.error('Erro na galeria dinâmica:', error);

      gallery.innerHTML = '<p style="color: var(--text-muted); text-align: center;">Não foi possível carregar as imagens no momento.</p>';

  }

}



/* ==========================================

   LÓGICA DE ACESSO AO GOOGLE DRIVE

========================================== */

async function acessarPasta() {

  const emailInput = document.getElementById('user-email').value;

  const errorMsg = document.getElementById('login-error-msg');

  const loginSection = document.getElementById('client-login-section');

  const driveContainer = document.getElementById('drive-container');

  const btnLogin = document.getElementById('btn-login');



  const scriptURL = 'https://script.google.com/macros/s/AKfycby2Bei3mDejBjbAcvWS0Wmx_5g25E2QBmMmjA5HMxzwIO1ovbxOhmhyEUnF3rt6-46NpQ/exec';



  errorMsg.style.display = 'none';

  btnLogin.innerText = 'Verificando...';

  btnLogin.disabled = true;



  try {

    const response = await fetch(scriptURL, {

      method: 'POST',

      headers: { 

        "Content-Type": "text/plain;charset=utf-8" 

      },

      body: JSON.stringify({ email: emailInput })

    });

    

    const resultado = await response.json();



    if (resultado.sucesso) {

      loginSection.style.display = 'none';
      driveContainer.style.display = 'block';

       driveContainer.innerHTML = `

        <iframe src="https://drive.google.com/embeddedfolderview?id=${resultado.folderId}#grid" 

                style="width:100%; height:750px; border:0;"></iframe>

      `;

    } else {

      errorMsg.style.display = 'block';

      errorMsg.innerText = resultado.erro ? `Erro no Google: ${resultado.erro}` : "E-mail não bateu com a linha da planilha.";

      btnLogin.innerText = 'Acessar Meu Ensaio';

      btnLogin.disabled = false;

      console.log("RESPOSTA SECRETA DO GOOGLE:", resultado); 

    }

  } catch (error) {

    console.error("Erro na verificação:", error);

    errorMsg.innerText = "Erro de conexão com o banco de dados. Tente novamente.";

    errorMsg.style.display = 'block';

    btnLogin.innerText = 'Acessar Meu Ensaio';

    btnLogin.disabled = false;

  }

}



/* ==========================================

   LIGHTBOX E SLIDER (PARA TRATAMENTO)

========================================== */

function openSliderLightbox(srcAntes, srcDepois, alt) {

  const lightbox = document.getElementById("lightbox");

  const imgAntes = document.getElementById("slider-img-antes");

  const imgDepois = document.getElementById("slider-img-depois");

  const caption = document.getElementById("lightbox-caption");

  const slider = document.getElementById("slider");

  const sliderLine = document.getElementById("slider-line");



  if (lightbox && imgAntes && imgDepois) {

      imgAntes.src = srcAntes;

      imgDepois.src = srcDepois;

      if (caption) caption.innerText = alt;

      

      if (slider && sliderLine) {

          slider.value = 50;

          imgAntes.style.clipPath = `polygon(0 0, 50% 0, 50% 100%, 0 100%)`;

          sliderLine.style.left = `50%`;

      }

      lightbox.style.display = "flex";

      document.body.style.overflow = "hidden";

  }

}



// Inicialização ao carregar a página

document.addEventListener('DOMContentLoaded', () => {

    loadDynamicGallery();

});



// ==========================================

// INICIALIZAÇÃO E EVENTOS GERAIS

// ==========================================

document.addEventListener('DOMContentLoaded', () => {

  // Inicializa a galeria

  loadDynamicGallery();



  // Prepara o movimento do Slider (se existir na página)

  const slider = document.getElementById('slider');

  if (slider) {

      slider.addEventListener('input', (event) => {

          const valor = event.target.value;

          const imgAntes = document.getElementById('slider-img-antes');

          const sliderLine = document.getElementById('slider-line');

          

          if(imgAntes && sliderLine) {

              imgAntes.style.clipPath = `polygon(0 0, ${valor}% 0, ${valor}% 100%, 0 100%)`;

              sliderLine.style.left = `${valor}%`;

          }

      });

  }

});

