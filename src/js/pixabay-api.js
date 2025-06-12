import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50784068-4a91f229093f0aa96eaf57a94';

export function fetchImages(query) {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
}
