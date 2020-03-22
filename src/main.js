import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import MainPage from './components/MainPage.vue'
import HelpPage from './components/HelpPage.vue'
import ProductPage from './components/ProductPage.vue'
import CategoryPage from './components/CategoryPage.vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: MainPage },
    { path: '/help', component: HelpPage },
    { path: '/products/:productId', component: ProductPage },
    { path: '/categories/:categoryAlias', component: CategoryPage }
  ],
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
