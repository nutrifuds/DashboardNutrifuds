import CONFIG from "../../globals/config";

const createResepDetailTemplate = (resep) => `
            <a href="/#/resep"><button class="back-button"><h2 class="arrow">&#8592;</h2>Back</button></a>

            <div class="detail-item">
                <div class="img-detail"><img src="${resep.result[0].imgurl}" alt="${resep.result[0].title}"></div>
                <div class="title-detail"><h1>${resep.result[0].title}</h1></div>

                <div class="list-recipe">
                    <h3>Bahan-Bahan</h3>
                    <div class="recipe">${resep.result[0].bahan_bahan}</div>
                </div>
                <div class="step-cook">
                    <h3>${resep.result[0].cara_memasak}</h3>
                </div>
            </div>
`
;
 
const createResepItemTemplate = (resep) => `
<div class="box-item">
  <a href="#/detail/${resep._id}" class="click-item">
    <img src="${resep.imgurl}" class="pic-item" alt="${resep.title}">
    <p class="name-item">${resep.title}</p>
  </a>
</div>
`;
 
export {createResepItemTemplate, createResepDetailTemplate};