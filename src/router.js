import Vue from 'vue'
import Router from 'vue-router'
import Splash from './views/Splash.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Splash
    }
  ]
})
