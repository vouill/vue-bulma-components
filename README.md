# vue-bulma-components
The goal of this library is to use the bulma class syntax as components and props.

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

## Advanced
```html
<button is-primary> Hello </button>
```
 
 Actually renders as :
 ```
 <div class="button is-primary"> Hello </div>
 ```
 
 To render a button element instead of a div, use the prop `outerElement`
```html
<button outerElement="button" is-primary> Hello </button>
```



