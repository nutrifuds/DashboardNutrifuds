import TheResepDbSource from "../../data/theresepdb-source";
import { createResepItemTemplate } from "../templates/template-creator";

const resep = {
  async render() {
    return `
      <h2 class="title">Cari Resep Sehat untuk Anda, Disini</h2>

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
