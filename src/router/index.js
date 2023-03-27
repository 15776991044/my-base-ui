import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/views/home'
import LeaderLine from '@/views/leader-line'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },  {
    path: '/leader-line',
    name: 'LeaderLine',
    component: LeaderLine
  },
 
]

export default routes
