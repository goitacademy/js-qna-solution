import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products/search';
const PRODUCTS_PER_PAGE = 4;

export async function getProductsByQuery(query, page) {
  const skip = (page - 1) * PRODUCTS_PER_PAGE;

  const response = await axios.get(BASE_URL, {
    params: {
      q: query,
      limit: PRODUCTS_PER_PAGE,
      skip,
      delay: 1000,
    },
  });

  return response.data;
}
