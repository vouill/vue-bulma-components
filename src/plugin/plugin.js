import bulmaComponents, { componentGenerator } from './components'

let plugin = {}

plugin.install = function (Vue, {prefix}) {
  bulmaComponents.forEach(name => {
    Vue.component(`${prefix || ''}${name}`, componentGenerator(name))
  })
}

export default plugin
export const bulmaComponentGenerator = componentGenerator
