import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/views/home'
import LeaderLine from '@/views/leader-line'
import ResizeObserver from '@/views/resize-observer'
import ThrottleDebounce from '@/views/throttle-debounce'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },  {
    path: '/leader-line',
    name: 'LeaderLine',
    component: LeaderLine
  }, {
    path: '/resize-observer',
    name: 'ResizeObserver',
    component: ResizeObserver
  }, {
    path: '/throttle-debounce',
    name: 'ThrottleDebounce',
    component: ThrottleDebounce    
    
  }
 
]

export default routes
