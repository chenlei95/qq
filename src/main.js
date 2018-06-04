import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
// import router from './router';
import Goods from './components/goods/goods';
import Ratings from './components/ratings/ratings';
import Seller from './components/seller/seller';

Vue.use(VueRouter);
const routes = [
  {path: '/goods', component: Goods},
  {path: '/ratings', component: Ratings},
  {path: '/seller', component: Seller}
];
const router = new VueRouter({
  routes
});
export default new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
router.push('/goods');
