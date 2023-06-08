import API_ENDPOINT from '../globals/api-endpoint';
 
class TheResepDbSource {
  static async nowResep() {
    const response = await fetch(API_ENDPOINT.RESEP);
    const responseJson = await response.json();
    return responseJson.result;
  }

  static async detailresep(id) {
    const response = await fetch(API_ENDPOINT.DETAILRESEP(id));
    return response.json();
  }
}
 
export default TheResepDbSource;