import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import routes from './routes'

Vue.use(Router)

const router = new Router({ routes, linkActiveClass: 'is-active', mode: 'history' })

const unAuthRoutes = [ 'login', 'signup', 'forgotPassword', 'resetPassword' ]

router.beforeEach((to, from, next) => {

  if ( unAuthRoutes.indexOf(to.name) > -1 ) {
    next()
  } else {
    if (store.state.currentUser && Object.keys(store.state.currentUser).length != 0) {
      next()
    } else {
      next({path: '/login'})
    }
  }

})

export default router
