import bulmaComponents, { componentGenerator } from './components'

let plugin = {}

const nameHtmlElement = new Map([
  ['input', 'b-input'],
  ['label', 'b-label'],
  ['image', 'b-image'],
  ['form', 'b-form'],
  ['button', 'b-button'],
  ['content', 'b-content'],
  ['progress', 'b-progress'],
  ['table', 'b-table'],
  ['title', 'b-title'],
  ['menu', 'b-menu']
])

plugin.install = function (Vue, option) {
  bulmaComponents.forEach(name => {
    Vue.component(`${option && option.prefix || ''}${nameHtmlElement.get(name) || name}`, componentGenerator(name))
  })
}

export default plugin
export const bulmaComponentGenerator = componentGenerator
