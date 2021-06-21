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
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')
  },
  {
    path: '/fav',
    name: 'Fav',
    component: () => import(/* webpackChunkName: "about" */ '../views/Fav.vue')
  },
  {
    path: '/blog/:id',
    name: 'Articulo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Articulo.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import(/* webpackChunkName: "about" */ '../views/Form.vue')
  },
  {
    path: '/sign',
    name: 'Sign',
    component: () => import(/* webpackChunkName: "about" */ '../views/Sign.vue')
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import(/* webpackChunkName: "about" */ '../views/Edit.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
