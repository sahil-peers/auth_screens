import '@/inflections'
import '@babel/polyfill'
import Vue from 'vue'
import '@/plugins/vuetify'
import '@/plugins/font-awesome'
import '@/plugins/vee-validate'
import auth from '@/plugins/ms-auth'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import '@/mixins'
import '@/filters'
import '@/stylesheets/app.scss'

Vue.config.productionTip = false

export default new Vue({
  auth,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
