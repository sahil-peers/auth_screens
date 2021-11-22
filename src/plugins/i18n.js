import Vue from 'vue'
import VueI18n from 'vue-i18n'
import moment from 'moment'

Vue.use(VueI18n)

function loadLocaleMessages () {
  const locales = require.context('../locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  let messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      Object.keys(locales(key)).forEach(k => {
        if (!messages[k]) { messages[k] = {} }

        messages[k] = Object.assign({}, messages[k], locales(key)[k])
      })
    }
  })
  return messages
}

export default new VueI18n({
  // locale: process.env.VUE_APP_I18N_LOCALE || 'es',
  // fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'es',
  locale: 'es',
  fallbackLocale: 'es',
  messages: loadLocaleMessages()
})

moment.locale('es')
