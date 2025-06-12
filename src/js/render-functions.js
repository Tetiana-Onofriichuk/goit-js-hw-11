import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function createGallery(images) {
  return images
    .map(
      ({
        id,
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li class="list-item" data-id="${id}">
      <a href="${largeImageURL}">
        <img class="image" src="${webformatURL}" alt="${tags}" width="360" />
      </a>
      <ul class="info">
        <li><h3>Likes</h3><p class="info-text">${likes}</p></li>
        <li><h3>Views</h3><p class="info-text">${views}</p></li>
        <li><h3>Comments</h3><p class="info-text">${comments}</p></li>
        <li><h3>Downloads</h3><p class="info-text">${downloads}</p></li>
      </ul>
    </li>
    `
    )
    .join('');
}

export function renderGallery(images) {
  const list = document.querySelector('.list');
  list.innerHTML = createGallery(images);

  const lightbox = new SimpleLightbox('.list a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  lightbox.refresh();
}
