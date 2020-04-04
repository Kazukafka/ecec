import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import MainPage from './components/MainPage.vue'
import ProductPage from './components/ProductPage.vue'
import Category from './components/Category.vue'

import axios from "axios";
import ShoppingCartPage from './components/ShoppingCartPage.vue'
import OrderListing from './components/OrderListing.vue'
import OrderDetail from './components/OrderDetail.vue'


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
      path: '/',
      component: MainPage
    },

    {
      path: '/categories/:categoryAlias',
      component: Category
    },
    {
      path: '/products/:productId',
      component: ProductPage
    },
    {
      path: '/cart',
      component: ShoppingCartPage
    },
    {
      path: '/order',
      component: OrderListing
    },
    {
      path: '/orders/:orderId',
      component: OrderDetail
    }
  ],
  mode: 'history'
});

axios.defaults.headers.common['Authorization'] = 'Bearer pasuwaado135@gmail.com';

if (localStorage.cartId) {
  axios.get("https://euas.person.ee/user/carts/" + localStorage.cartId).then(response => {
    new Vue({
      render: h => h(App),
      router: router,
      data: {
        cart: response.data,
        saveCart() {
          axios.put("https://euas.person.ee/user/carts/" + this.cart.id, this.cart)
        },
        reinitCart() {
          axios.post("https://euas.person.ee/user/carts/").then(response => {
            localStorage.cartId = response.data.id
            this.cart = response.data;
          });
        }
      }
    }).$mount('#app')
  });
} else {
  axios.post("https://euas.person.ee/user/carts/").then(response => {
    new Vue({
      render: h => h(App),
      router: router,
      data: {
        cart: response.data,
        saveCart() {
          axios.put("https://euas.person.ee/user/carts/" + this.cart.id, this.cart)
        },
        reinitCart() {
          axios.post("https://euas.person.ee/user/carts/").then(response => {
            localStorage.cartId = response.data.id
            this.cart = response.data;
          });
          axios.post("https://euas.person.ee/user/carts/" + this.cart.id + "/orders/").then(response => {
            localStorage.cartId = response.data.id
            this.cart = response.data;
          });
        },
        getOrders(){
          axios.get("https://euas.person.ee/user/orders/").then(response => {
            localStorage.orderId = response.data.id
            this.cart = response.data;
          })
        }
      }
    }).$mount('#app')
  });
}
