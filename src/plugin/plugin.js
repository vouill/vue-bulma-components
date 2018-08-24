import { componentGenerator } from './components'
import { bulmaComponentList } from './helpers'

let plugin = {}

plugin.install = function (Vue, option) {
  bulmaComponentList.forEach(name => {
    Vue.component(`${(option && option.prefix) || 'b-'}${name}`, componentGenerator(name, (option && option.outerElement[name]) || ''))
  })
}

export default plugin
export const bulmaComponentGenerator = componentGenerator
