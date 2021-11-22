import Vue from 'vue'
import {
  sortBy,
  orderBy,
  uniqBy,
  get
} from 'lodash'
import Package from '../package.json'
import { mapActions } from 'vuex'

Vue.mixin({
  data () {
    return {
      logoUrl: process.env.VUE_APP_LOGO_URL,
      whiteLogoUrl: process.env.VUE_APP_WHITE_LOGO_URL,
      faviconUrl: process.env.VUE_APP_FAVICON_URL,
      company: process.env.VUE_APP_COMPANY,
      appVersion: Package.version
    }
  },

  methods: {
    ...mapActions([
      'setNotification',
      'clearNotification'
    ]),

    sort (arr, field = 'name') { return sortBy(arr, field) },

    orderBy (arr, field = 'name', sort = 'asc') { return orderBy(arr, field, sort) },

    uniqBy (arr, field = 'name') { return uniqBy(arr, field) },

    get (object, path, defaultValue) { return get(object, path, defaultValue) },

    back () { this.$router.go(-1) },

    goTo (route, params, query) {
      if (!isNaN(params)) { params = { id: params } }
      this.$router.push({ name: route, params, query })
    },

    handleErr (err) {
      this.errors.clear()
      if (!err.response) {
        this.setNotification({ color: 'error', message: err.message })
        return
      }

      const data = err.response.data
      if (!data) { return }
      const msgs = data.messages
      if (!msgs) { return }

      if (Array.isArray(msgs)) {
        this.setNotification({ color: 'error', message: msgs.join('<br/>') })
      } else {
        this.setNotification({ color: 'error', message: msgs })
      }
    },

    messagesFromErr (err) {
      const message = get(err, 'response.data.error.message')
      if (message) { return [message] }

      const messages = get(err, 'response.data.error.details.messages')
      if (messages) {
        return Object.keys(messages).map(key => {
          return `${key} ${messages[key][0]}`
        })
      }

      return [err.message]
    }
  }
})
