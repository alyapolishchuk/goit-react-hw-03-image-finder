import axios from 'axios';

const API_KEY = '28351451-92068ca5a052609c75a292b60';
const BASE_URL = 'https://pixabay.com/api/';

export default async function onAPI({ name, page = 1 }) {
  const parametrs = {
    url: BASE_URL,
    params: {
      key: API_KEY,
      page: page,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: false,
      q: name,
      per_page: 12,
    },
  };
  return await axios(parametrs);
}
