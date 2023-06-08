import dashboard from "../views/pages/dashboard";
import resep from "../views/pages/resep";
import detailResep from "../views/pages/detail";
import pengukur from "../views/pages/pengukur";
 
const routes = {
  '/': dashboard, // default page
  '/dashboard': dashboard,
  '/resep': resep,
  '/pengukur': pengukur,
  '/detail/:id': detailResep,

};
 
export default routes;