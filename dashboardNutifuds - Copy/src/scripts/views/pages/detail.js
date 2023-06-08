import UrlParser from '../../routes/url-parser';
import TheResepDbSource from '../../data/theresepdb-source';
import { createResepDetailTemplate } from '../templates/template-creator';
 
const detailResep = {
  async render() {
    return `
      <div id="detailResep" class="detailResep"></div>
    `;
  },
 
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await TheResepDbSource.detailresep(url.id);
    const detailContainer = document.querySelector('#detailResep')
    detailContainer.innerHTML = createResepDetailTemplate(detail);
  },
};
 
export default detailResep;