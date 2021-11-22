export function setToLocal (name, payload) {
  window.localStorage.setItem(name, JSON.stringify(payload))
}

export function getFromLocal (name) {
  const item = window.localStorage.getItem(name) ||
    window.sessionStorage.getItem(name)

  return JSON.parse(item)
}

export function deleteFromLocal (name) {
  window.localStorage.removeItem(name)
  window.sessionStorage.removeItem(name)
}

export function setLocale (locale) {
  window.localStorage.setItem(`bestpeers-v-${process.env.NODE_ENV[0]}-locale`, locale)
}

export function getLocale () {
  return window.localStorage.getItem(`bestpeers-v-${String(process.env.VUE_APP_COMPANY).snakeCase()}-${process.env.NODE_ENV[0]}-locale`)
}

