import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

const id = process.env.VUE_APP_GOOGLE_ANALYTICS
if (id) {
  Vue.use(VueAnalytics, { id })
}
