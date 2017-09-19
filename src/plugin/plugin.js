import { componentGenerator } from './components'
import {nativeHtmlToVueBulma, bulmaComponentList} from './helpers'

let plugin = {}

plugin.install = function (Vue, option) {
  option.componentList = option.componentList || []
  const componentList = [...new Set([...bulmaComponentList, ...option.componentList])]
  componentList.forEach(name => {
    Vue.component(`${option && option.prefix || ''}${nativeHtmlToVueBulma.get(name) || name}`, componentGenerator(name))
  })
}

export default plugin
export const bulmaComponentGenerator = componentGenerator
