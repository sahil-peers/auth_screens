import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import '@/stylesheets/vuetify/main.styl'
// import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: process.env.VUE_APP_COLOR
  }
})
