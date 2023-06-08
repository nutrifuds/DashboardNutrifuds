import CONFIG from './config';

const API_ENDPOINT = {
  RESEP: `${CONFIG.BASE_URL}`,
  DETAILRESEP: (id) => `https://4r5lltxu.api.sanity.io/v2021-10-21/data/query/production?query=*[_id == "${id}"]/detail/${id}`,
};

export default API_ENDPOINT;