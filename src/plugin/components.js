/**
 * Created by Vouill on 09/07/17.
 */
import { vueBulmaDefaultRenderElement, camelCaseToDash } from './helpers'

export const componentGenerator = (name, reqOuterElement) => ({
  name,
  functional: true,
  render (h, {children, props, data}) {
    const {outerElement, ...otherProps} = props
    return h(outerElement || reqOuterElement || vueBulmaDefaultRenderElement.get(name) || 'div',
      {
        class: [camelCaseToDash(name), ...Object.keys(otherProps)
          .filter(key => (
            (otherProps[key] !== false)))
          .map(str => camelCaseToDash(str))
          .filter(key => (
            ((key.substring(0, 3) === 'is-') ||
            (key.substring(0, 4) === 'has-') ||
            (key.substring(0, 3) === 'fa-'))
          ))
        ],
        ...data
      }, children)
  }
})

