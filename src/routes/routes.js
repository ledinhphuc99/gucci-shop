import Home from '../pages/home/Home';
import Catalog from '../pages/catalog/Catalog';
import Cart from '../pages/Cart';
import Product from '../pages/Product';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/Catalog/:slug', component: Product },
    { path: '/Catalog', component: Catalog },
    { path: '/Cart', component: Cart },
];

export {publicRoutes}