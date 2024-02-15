// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";



const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loaderContainer = document.querySelector('.loader');
const resultInfo = document.querySelector('.result-info');
const BASE_URL = 'https://pixabay.com/api/';
let lightbox;

form.addEventListener('submit', e => {
    e.preventDefault();
    const queryInput = e.target.elements.query.value.trim();
    if (queryInput.length < 3) {
         iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query with at least 3 characters.',
      position: 'topRight',
    });
    return;
    }
    gallery.innerHTML = '';
    resultInfo.innerHTML = '';
    getImage(queryInput).then(({ hits }) => {
        if (hits.length > 0) {
            const galleryHTML = hits.map(createGallery).join('');
            gallery.innerHTML = galleryHTML;
            resultInfo.innerHTML = `<p class="result-messages">Loading images, please wait...</p>`;
            lightbox = new SimpleLightbox(`.gallery-link`);
            lightbox.refresh();
            setTimeout(() => { resultInfo.innerHTML = ''; },2000)
        }
    })
})

function getImage(q) {
    const PARAMS = {
        key: '42392659-652aaf55959599f1a779f61b5',
        q,
        image_type: 'photo',
        orientation: 'horizontal',
        safeSearch: true,
    }
    const url = BASE_URL + '?' + new URLSearchParams(PARAMS).toString();
    loaderContainer.style.display = 'block';
    return fetch(url)
        .then(res => res.json())
        .catch(error => {throw error;})
        .finally(() => {
            loaderContainer.style.display = 'none';
        });
}

function createGallery({
  largeImageURL,
  tags,
  webformatURL,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
    <a href="${largeImageURL}" class="gallery-link">
      <figure>
        <img src="${webformatURL}" alt="${tags}" class="gallery-image">
        <figcaption class="gallery__figcaption">
          <div class="image-item">Likes <span class="image-elem">${likes}</span></div>
          <div class="image-item">Views <span class="image-elem">${views}</span></div>
          <div class="image-item">Comments <span class="image-elem">${comments}</span></div>
          <div class="image-item">Downloads <span class="image-elem">${downloads}</span></div>
        </figcaption>
      </figure>
    </a>
  `;
}