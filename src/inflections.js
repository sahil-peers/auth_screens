const _ = require('lodash')
const inflection = require('inflector-js')

const s = String
s.prototype.camelCase = function () { return _.camelCase(this) }
s.prototype.capitalize = function () { return _.capitalize(this) }
s.prototype.endsWith = function (str) { return _.endsWith(this, str) }
s.prototype.kebabCase = function () { return _.kebabCase(this) }
s.prototype.lowerCase = function () { return _.lowerCase(this) }
s.prototype.lowerFirst = function () { return _.lowerFirst(this) }
// s.prototype.replace = function (p, r) { return _.replace(this, p, r) }
s.prototype.snakeCase = function () { return _.snakeCase(this) }
s.prototype.startsWith = function (str) { return _.startsWith(this, str) }
s.prototype.upperCase = function () { return _.upperCase(this) }
s.prototype.upperFirst = function () { return _.upperFirst(this) }
s.prototype.lPad = function (n, width, z) {
  z = z || '0'
  n = n + ''
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
}
s.prototype.pluralize = function () { return inflection.pluralize(this) }
s.prototype.singularize = function () { return inflection.singularize(this) }

const a = Array
a.prototype.flatten = function () { return _.flatten(this) }
a.prototype.last = function () { return _.last(this) }
a.prototype.groupBy = function (fn) { return _.groupBy(this, fn) }
a.prototype.sortBy = function (fn) { return _.sortBy(this, fn) }
