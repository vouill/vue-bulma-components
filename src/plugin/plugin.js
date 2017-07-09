import bulmaComponents, { bulmaComponentGenerator } from './components'

let plugin = {}

plugin.install = function (Vue, {prefix}) {
  bulmaComponents.forEach(name => {
    Vue.component(`${prefix || ''}${name}`, bulmaComponentGenerator(name))
  })
}

export default plugin
export const componentGenerator = bulmaComponentGenerator
