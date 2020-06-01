import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommand from '../views/Recommand'
// const Recommand = () => import('./../views/Recommand')

Vue.use(VueRouter)

const Singer = () => import('./../views/Singer')
const Rank = () => import('./../views/Rank')
const Search = () => import('./../views/Search')

const routes = [
  { path: '', redirect: '/recommand' },
  { path: '/recommand', component: Recommand },
  { path: '/singer', component: Singer },
  { path: '/rank', component: Rank },
  { path: '/search', component: Search }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
