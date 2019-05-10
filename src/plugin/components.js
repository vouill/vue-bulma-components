/**
 * Created by Vouill on 09/07/17.
 */
import { camelCaseToDash, isBulmaAttribute, isInternalAttribute, getOutrEl } from './helpers'

export const componentGenerator = (name, reqOuterElement) => ({
  name: `bulma-${name}`,
  functional: true,
  render (h, { children, props, data }) {
    const { outerElement, ...otherProps } = props

    /*
     * Remove attribute only if it is from Bulma
     */
    if (data.hasOwnProperty('attrs')) {
      Object.keys(data.attrs).forEach(key => {
        if (isBulmaAttribute(key) || isInternalAttribute(key)) delete data.attrs[key]
      })
    }

    const bulmaClasses = Object.keys(otherProps)
      .filter(key => otherProps[key] !== false)
      .map(str => camelCaseToDash(str))
      .filter(key => isBulmaAttribute(key))

    const attrs = {
      ...data,
      class: [
        camelCaseToDash(name),
        ...bulmaClasses,
        data.class
      ]
    }

    return h(getOutrEl(outerElement, reqOuterElement, name), attrs, children)
  }
})
