import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products/search';

export function getProductsByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        q: query,
        limit: 8,
        delay: 1000,
      },
    })
    .then(response => response.data);
}
