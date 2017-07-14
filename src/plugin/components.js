/**
 * Created by Vouill on 09/07/17.
 */
function camelCaseToDash (myStr) {
  return myStr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase().replace(/([a-z])([0-9])/g, '$1-$2')
}

const outerElementsMap = new Map([
  ['input', 'input'],
  ['label', 'label'],
  ['button', 'button'],
  ['image', 'figure'],
  ['form', 'form']
])

export const componentGenerator = (name, reqOuterElement) => ({
  name,
  functional: true,
  render (h, {children, props, data}) {
    const {outerElement, ...otherProps} = props
    return h(outerElement || reqOuterElement || outerElementsMap.get(name) || 'div',
      {
        class: [camelCaseToDash(name), ...Object.keys(otherProps)
          .filter(key => (
            (otherProps[key] !== false)))
          .map(str => camelCaseToDash(str))
          .filter(key => (
            ((key.substring(0, 3) === 'is-') ||
            (key.substring(0, 4) === 'has-'))
          ))
        ],
        ...data
      }, children)
  }
})

export default [
  'columns',
  'column',
  'notification',
  'button',
  'box',
  'icon',
  'media',
  'media-left',
  'media-right',
  'media-content',
  'image',
  'content',
  'level',
  'level-left',
  'level-item',
  'level-right',
  'field',
  'help',
  'progress',
  'table',
  'tag',
  'title',
  'subtitle',
  'breadcrumb',
  'card',
  'card-image',
  'card-content',
  'card-footer',
  'card-footer-item',
  'control',
  'label',
  'menu',
  'menu-label',
  'menu-list',
  'message',
  'message-header',
  'message-body',
  'modal',
  'modal-background',
  'modal-content',
  'modal-close',
  'navbar',
  'navbar-item',
  'navbar-brand',
  'navbar-burger',
  'navbar-start',
  'navbar-link',
  'navbar-dropdown',
  'navbar-divider',
  'pagination',
  'pagination-previous',
  'pagination-next',
  'pagination-list',
  'pagination-ellipsis',
  'panel',
  'panel-heading',
  'panel-block',
  'panel-icon',
  'panel-tabs',
  'tabs',
  'container',
  'hero',
  'hero-head',
  'hero-body',
  'hero-foot',
  'input'
]
