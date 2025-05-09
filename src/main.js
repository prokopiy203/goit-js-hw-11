import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';

import { createGallery, showElement, hideElement } from './js/render-functions';

const form = document.querySelector('.js-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const searchText = event.target.elements['search-text'].value.trim();
  if (!searchText) return;
  console.log(searchText);

  showElement(loader);

  getImagesByQuery(searchText)
    .then(res => {
      console.log(res);
      gallery.innerHTML = createGallery(res.hits);
    })
    .catch(error => console.log(error))
    .finally(() => {
      hideElement(loader);
      form.reset();
    });
}
