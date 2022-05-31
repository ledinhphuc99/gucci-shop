import Home from '../pages/home/Home';
import Catalog from '../pages/catalog/Catalog';
import Cart from '../pages/cart/Cart';
import Product from '../pages/product/Product';
import Children from '../pages/children/Children';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/catalog/:slug', component: Product },
    { path: '/catalog', component: Catalog },
    { path: '/cart', component: Cart },
    { path: '/children', component: Children },
];

export {publicRoutes}