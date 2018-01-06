/**
 * Created by Vouill on 23/07/17.
 */
/*
*   By default, components are rendered as div. This is not useful for components such as input for example.
*   This map makes possible a custom default value for the following components.
*   Key: Bulma component name ; Value: default rendered html tag
*/
export const vueBulmaDefaultRenderElement = new Map([
  ['input', 'input'],
  ['label', 'label'],
  ['button', 'button'],
  ['image', 'figure'],
  ['form', 'form'],
  ['icon', 'span'],
  ['fa', 'i']
])

/*
*   To avoid native HTML and vue-bulma-components collision (input for example),
*   we append the 'b-' prefix to the component name.
*   This is only done when using the Vue.use() way of installing vue-bulma-components
*/
export const nativeHtmlToVueBulma = new Map([
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

/*
*   This is the list of all available vue-bulma-components rendered when using Vue.use(). If one is missing, add it here.
*/
export const bulmaComponentList = [
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
  'navbar-end',
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
  'input',
  'fa',
  'hero-foot'
]

export const camelCaseToDash = myStr =>
  myStr &&
  myStr
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase()
    .replace(/([a-z])([0-9])/g, '$1-$2')

// thanks the solution @israelroldan
export const isBulmaAttribute = attr =>
  attr.trim() && /^(is|has|fa)-.+/.test(attr)

export const getOutrEl = (outrEl, reqOutrEl, elName, defaultEl = 'div') =>
  outrEl || reqOutrEl || vueBulmaDefaultRenderElement.get(elName) || defaultEl
