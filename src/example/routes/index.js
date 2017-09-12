import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/home'
// const Home = () => import('../components/home')
const Progress = () => import('../components/progress')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'barid',
      component: Home
    },
    {
      path: '/progress',
      name: 'progress',
      component: Progress
    }
  ]
})
