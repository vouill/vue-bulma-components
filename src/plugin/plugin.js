import { componentGenerator } from './components'
import { nativeHtmlToVueBulma, bulmaComponentList } from './helpers'

let plugin = {}

plugin.install = function (Vue, option) {
  bulmaComponentList.forEach(name => {
    Vue.component(`${(option && option.prefix) || ''}${nativeHtmlToVueBulma.get(name) || name}`, componentGenerator(name, (option && option.outerElement[name]) || ''))
  })
}

export default plugin
export const bulmaComponentGenerator = componentGenerator
