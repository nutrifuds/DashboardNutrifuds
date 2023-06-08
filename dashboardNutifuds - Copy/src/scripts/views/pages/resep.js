import TheResepDbSource from "../../data/theresepdb-source";
import { createResepItemTemplate } from "../templates/template-creator";

const resep = {
  async render() {
    return `
      <h2 class="title">Cari Resep Sehat yang Anda, Disini</h2>

      <div class="search">
            <input type="text" class="input-search" placeholder="Cari Resep">
            <button class="button-search">Cari</button>
      </div>

      <div class="content-item"></div>
    `;
  },
 
  async afterRender() {
    const reseps = await TheResepDbSource.nowResep();
    const contentItem = document.querySelector('.content-item');
    reseps.forEach((resep) => {
      contentItem.innerHTML += createResepItemTemplate(resep);
    });
  },
};
 
export default resep;