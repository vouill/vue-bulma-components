import Vue from 'vue'
import Router from 'vue-router'

// import Home from '../components/home'
// const Home = () => import('../components/home')
const Box = () => import('../box')
const Buttons = () => import('../buttons')
const BForm = () => import('../form')
const Grid = () => import('../grid')
const More = () => import('../more')

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
    }, {
      path: '/buttons',
      name: 'buttons',
      component: Buttons
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
    },
    {
      path: '/more',
      name: 'more',
      component: More
    }
  ]
})
