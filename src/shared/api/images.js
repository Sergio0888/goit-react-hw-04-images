import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
  key: '27887897-8d6a5cafda5250a66fb1b4860',
  per_page: 12,
  image_type: 'photo',
  orientation: 'horizontal',
  }
});

export async function getImages(q, page = 1) {
  const data = await instance.get('/', {
    params: {
      q,
      page,
    },
  });
    return data;
}