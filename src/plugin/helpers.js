/**
 * Created by Vouill on 23/07/17.
 */
/*
*   By default, components are rendered as div. This is not useful for components such as input for example.
*   This map makes possible a custom default value for the following components.
*   Key: Bulma component name ; Value: default rendered html tag
*/
export const vueBulmaDefaultRenderElement = new Map([
  ['button', 'button'],
  ['fa', 'i'],
  ['form', 'form'],
  ['icon', 'span'],
  ['image', 'figure'],
  ['input', 'input'],
  ['label', 'label'],
  ['textarea', 'textarea'],
  ['navbar', 'nav'],
  ['menu-list', 'ul'],
  ['menu', 'aside'],
  ['footer', 'footer']
])

/*
*   This is the list of all available vue-bulma-components rendered when using Vue.use(). If one is missing, add it here.
*/
export const bulmaComponentList = [
  'box',
  'breadcrumb',
  'button',
  'buttons',
  'card-content',
  'card-footer-item',
  'card-footer',
  'card-image',
  'card',
  'checkbox',
  'column',
  'columns',
  'container',
  'content',
  'control',
  'delete',
  'dropdown-content',
  'dropdown-divider',
  'dropdown-item',
  'dropdown-menu',
  'dropdown-trigger',
  'dropdown',
  'fa',
  'field',
  'file-cta',
  'file-icon',
  'file-input',
  'file-label',
  'file-name',
  'file',
  'footer',
  'help',
  'hero-body',
  'hero-foot',
  'hero-head',
  'hero',
  'icon',
  'image',
  'input',
  'label',
  'level-item',
  'level-left',
  'level-right',
  'level',
  'media-content',
  'media-left',
  'media-right',
  'media',
  'menu-label',
  'menu-list',
  'menu',
  'message-body',
  'message-header',
  'message',
  'modal-background',
  'modal-card-body',
  'modal-card-foot',
  'modal-card-head',
  'modal-card-title',
  'modal-card',
  'modal-close',
  'modal-content',
  'modal',
  'navbar-brand',
  'navbar-burger',
  'navbar-content',
  'navbar-divider',
  'navbar-dropdown',
  'navbar-end',
  'navbar-item',
  'navbar-link',
  'navbar-menu',
  'navbar-start',
  'navbar-tabs',
  'navbar',
  'notification',
  'pagination-ellipsis',
  'pagination-link',
  'pagination-list',
  'pagination-next',
  'pagination-previous',
  'pagination',
  'panel-block',
  'panel-heading',
  'panel-icon',
  'panel-tabs',
  'panel',
  'progress',
  'radio',
  'select',
  'subtitle',
  'table',
  'tabs',
  'tag',
  'tags',
  'textarea',
  'title'
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
