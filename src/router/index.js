import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Bind from '../components/Bind.vue'
import On from '../components/On.vue'
import If from '../components/If.vue'
import Show from '../components/Show.vue'
import For from '../components/For.vue'
import Model from '../components/Model.vue'
import Once from '../components/Once.vue'
import Pre from '../components/Pre.vue'

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/bind',
    name: 'Bind',
    component: Bind
}, {
  path: '/on',
  name: 'On',
  component: On
}, {
  path: '/if',
  name: 'If',
  component: If
}, {
  path: '/show',
  name: 'Show',
  component: Show
}, {
  path: '/for',
  name: 'For',
  component: For
}, {
  path: '/model',
  name: 'Model',
  component: Model
}, {
  path: '/once',
  name: 'Once',
  component: Once
}, {
  path: '/pre',
  name: 'Pre',
  component: Pre
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
