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
      redirect: '/grid'
    }, {
      path: '/box',
      name: 'barid',
      component: Box
    },
    {
      path: '/form',
      name: 'form',
      component: BForm
    },
    {
      path: '/grid',
      name: 'grid',
      component: Grid
    }
  ]
})
