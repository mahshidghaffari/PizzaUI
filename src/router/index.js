import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import( '../views/Order.vue')
  },
  {
    path: '/aboutUs',
    name: 'AboutUs',
    component: () => import( '../views/AboutUs.vue')
  },
  {
    path: '/myOrder',
    name: 'myOrder',
    component: () => import( '../views/MyOrder.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
