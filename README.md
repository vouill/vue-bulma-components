# vue-bulma-components
The goal of this library is to use the bulma class syntax as components and props.

Less than 3kb minified.

[Demo](https://vouill.github.io/vue-bulma-components/) and the related [code](https://github.com/vouill/vue-bulma-components/tree/master/src/example).


## Usage
Exemple with grid system

Original Bulma way:

``` html
<div class="columns is-mobile">
  <div class="column is-half is-offset-one-quarter">
    A column 
   </div>
</div>
```

Vue-bulma-component way:
```html
<columns is-mobile>
  <column is-half is-offset-one-quarter>
    A column
  </column>
</columns>
```

## Install

```shell
yarn add vue-bulma-components

or 

npm install --save vue-bulma-components
```
### Use all components globally in your app
Inside your main.js

```javascript
import vueBulmaComponents from 'vue-bulma-components'
Vue.use(vueBulmaComponents)
```

You can also prefix all the bulma components ( to avoid collision with existing components)
 
 ```javascript
 import vueBulmaComponents from 'vue-bulma-components'
 Vue.use(vueBulmaComponents,{prefix:'b-'})
 ```
 
 Instead of using `<columns/>` you need to use `<b-columns/>`
### Use specific bulma components in your components

```
<template><box/></template>

<script>
import { bulmaComponentGenerator } from '../plugin/plugin'

export default {
  components: {
      box: bulmaComponentGenerator('box')
  }
}
</script>
```

Yes, you can actually create any vue-bulma-component by calling `bulmaComponentGenerator(bulmaComponentStr)`.
## Advanced
```html
<button is-primary> Hello </button>
```
 
 Actually renders as :
 ```html
 <div class="button is-primary"> Hello </div>
 ```
 
 To render a button element instead of a div, use the prop `outerElement`
```html
<button outerElement="button" is-primary> Hello </button>
```




