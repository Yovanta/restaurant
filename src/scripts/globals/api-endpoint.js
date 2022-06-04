import CONFIG from './config';

const API_ENDPOINT = {
  RESTAURANT_LIST: `${CONFIG.BASE_URL}list`,
  RESTAURANT_FAVORITE: `${CONFIG.BASE_URL}search?q=query`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
