import CONFIG from "./config";

const API_ENDPOINT = {
  RESEP: `${CONFIG.BASE_URL}`,
  DETAILRESEP: (
    id
  ) => `https://4r5lltxu.api.sanity.io/v2021-10-21/data/query/production?query=*[_id %3D%3D '${id}']{
    title%2C
    kategori%2C
    bahan_bahan%2C
    cara_memasak%2C
    "imgurl"%3A imgurl.asset->url
    }`,
};

export default API_ENDPOINT;
