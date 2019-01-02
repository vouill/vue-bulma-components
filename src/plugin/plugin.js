import { componentGenerator } from './components'
import { bulmaComponentList, toPascalCase } from './helpers'

let plugin = {}

plugin.install = function (Vue, option) {
  bulmaComponentList.forEach(name => {
    const componentName = toPascalCase(`${(option && option.prefix) || 'b-'}${name}`)
    Vue.component(componentName, componentGenerator(name, (option && option.outerElement[name]) || ''))
  })
}

export default plugin
export const bulmaComponentGenerator = componentGenerator
