const galleryItems = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];
// href="${item.original}"

  const galleryEl = document.querySelector('.js-gallery');
        galleryEl.addEventListener('click', getBigSize);

  const lightboxEl = document.querySelector('.js-lightbox');
  const lightboxImageEl = document.querySelector('.lightbox__image');
  const lightboxOverlayEl = document.querySelector('.lightbox__overlay');

  const buttonEl = document.querySelector('[data-action="close-lightbox"]')
        buttonEl.addEventListener('click', closeModal);

  const markupImg = item => `<li class="gallery__item">
    <a
      class="gallery__link"
       
    >
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`;
  
function createItemCard(galleryItems) {
  return galleryItems.map(item => markupImg(item)).join('');
};

galleryEl.innerHTML = createItemCard(galleryItems);

function getBigSize(e) {
  const element = e.target.dataset.source;
  const imgRight = e.target.closest('.gallery__item').nextElementSibling.lastElementChild.firstElementChild.dataset.source;
  const imgLeft = e.target.closest('.gallery__item').previousElementSibling.lastElementChild.firstElementChild.dataset.source;

  flipsThroughImages(imgRight, imgLeft);

  lightboxEl.classList.add('is-open');

  addBigImg(element);
};

function addBigImg(element) {
  lightboxImageEl.src = element;
};

function deleteBigImg() {
  lightboxImageEl.src = '';
};

function closeModal() {
  lightboxEl.classList.remove('is-open');

  deleteBigImg();
};

lightboxOverlayEl.addEventListener('click', closeModal);

document.onkeydown = function(e) {
  if(e.key === "Escape") {
    closeModal();
  }
};

function flipsThroughImages (imgRight, imgLeft) {
  document.onkeydown = function(e) {
    switch(e.key) {
    case 'Escape':
    closeModal();
      break;
    
      case 'ArrowLeft':
        addBigImg(imgLeft);
          break;
    
          case 'ArrowRight':
            addBigImg(imgRight);;
              break;
    }};
}

  

