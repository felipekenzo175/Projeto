const imagePaths = [
    'imagens/imagem1.jpg',
    'imagens/imagem2.jpg',
    'imagens/imagem3.jpg',
    'imagens/imagem4.jpg',
    'imagens/imagem5.jpg',
    'imagens/imagem6.jpg',
    'imagens/imagem7.jpg',
    'imagens/imagem8.jpg',
    'imagens/imagem9.jpg',
    'imagens/imagem10.jpg',
    'imagens/imagem11.jpg',
    'imagens/imagem12.jpg',
    'imagens/imagem13.jpg',
    'imagens/imagem14.jpg',
    'imagens/imagem15.jpg'
];

const imageCaptions = [
    'Clique para ir para o lado direito ->',
    'Hoje o dia nasce mais feliz e vc sabe o porquê ^^',
    'Eu sei que as vezes o mar parece estar meio calmo e agitado',
    'Mas talvez ver a vida em diferentes ângulos, a torna mais bonita',
    'E mesmo que tudo pareça nublado',
    'Mesmo que o trabalho e estudos pareçam difíceis',
    'Saiba que vc é uma mulher forte e eu confio em você',
    'Porque a vida é mágica',
    'E a cada degrau que vc sobe nessa jornada',
    'Te da a experiência de se tornar uma pessoa mais amargurada, ou mais amável',
    'E lá no fundo eu sei a escolha que vc faz',
    'Porque mesmo nos caminhos mais sombrios',
    'Vc consegue ver o lado bom da vida',
    'E vc sabe que um dia tudo isso vai acabar',
    'E o que vão restar são as pessoas que vc ama, e eu te amo sz, Feliz Aniversário ^^'
];

// Seleciona o contêiner do carrossel
const carouselContainer = document.querySelector('.carousel-container');

// Loop para criar e adicionar as imagens e os textos ao carrossel
imagePaths.forEach((path, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    
    const img = document.createElement('img');
    img.src = path;
    img.alt = `Imagem do carrossel ${index + 1}`;
    
    const textOverlay = document.createElement('div');
    textOverlay.classList.add('text-overlay');
    textOverlay.textContent = imageCaptions[index]; // Adiciona o texto correspondente à imagem
    
    carouselItem.appendChild(img);
    carouselItem.appendChild(textOverlay); // Adiciona o texto sobre a imagem
    carouselContainer.appendChild(carouselItem);
});

const totalImages = imagePaths.length;
let currentIndex = 0;

// Função para atualizar o carrossel
function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

// Eventos dos botões
document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
});
