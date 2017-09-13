import Vue from 'vue'
import Router from 'vue-router'

// import Home from '../components/home'
// const Home = () => import('../components/home')
const Box = () => import('../box')
const BForm = () => import('../form')
const Grid = () => import('../grid')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/box'
    }, {
      path: '/box',
      name: 'barid',
      component: Box
    },
    {
      path: '/form',
      name: 'progress',
      component: BForm
    },
    {
      path: '/grid',
      name: 'progress',
      component: Grid
    }
  ]
})
