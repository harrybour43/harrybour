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
    // 1. Mapeia todas as imagens da galeria atual (que tenham a classe masonry-item)
    currentGalleryImages = Array.from(document.querySelectorAll('.masonry-item'));
    
    // 2. Encontra qual é o índice da imagem que acabou de ser clicada
    currentImageIndex = currentGalleryImages.findIndex(img => img.src === src);

    // 3. Carrega a imagem e o texto
    lightboxImg.src = src; 
    lightboxImg.alt = alt;
    if(caption) caption.innerText = alt; 
    
    // 4. Exibe o painel escuro e trava a rolagem da página por trás
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

function navigateLightbox(direction) {
  // Se não houver imagens ou for apenas uma, não faz nada
  if (currentGalleryImages.length <= 1) return; 
  
  if (direction === 'next') {
    // Vai para a próxima (se for a última, volta para a primeira)
    currentImageIndex = (currentImageIndex + 1) % currentGalleryImages.length;
  } else if (direction === 'prev') {
    // Vai para a anterior (se for a primeira, vai para a última)
    currentImageIndex = (currentImageIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
  }
  
  // Atualiza a imagem e o texto no Lightbox
  const nextImg = currentGalleryImages[currentImageIndex];
  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");
  
  lightboxImg.src = nextImg.src;
  lightboxImg.alt = nextImg.alt;
  if(caption) caption.innerText = nextImg.alt;
}

// Escuta os eventos do teclado (Setas e Esc)
document.addEventListener('keydown', function(event) {
  const lightbox = document.getElementById("lightbox");
  
  // Só executa os comandos se o lightbox estiver aberto na tela
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
