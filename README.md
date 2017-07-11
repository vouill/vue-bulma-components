# vue-bulma-components
The goal of this library is to use the bulma class syntax as components and props.

**3kb minified**

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

Then install [Bulma](http://bulma.io/documentation/overview/start/)
### Use all components globally in your app
Inside your main.js

```javascript
import vueBulmaComponents from 'vue-bulma-components'
Vue.use(vueBulmaComponents)
```

You can also prefix all the bulma components ( to avoid collision with existing components)
 
 ```javascript
 import vueBulmaComponents from 'vue-bulma-components'
 Vue.use(vueBulmaComponents,{prefix:'y-'})
 ```
 
 Instead of using `<columns/>` you need to use `<y-columns/>`
### Use specific bulma components in your components

```
<template>
  <box/>
</template>

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

## Components

By default, most of the components are rendered as `<div>`. You can use the prop `outerElement="span"`.

**If you use the `Vue.use()` method to use the vue-bulma-components.**
 
Most of the components are named after the bulma class they belong to.
Ex: `<box/> <card/> <panel/> ...`

However, some bulma components are also named after html element.

Ex : 
- Bulma : `input`
- vue-component-bulma: `<b-input>`. This prefix is used to avoid collision with native html `<input>` element.

**If you generate bulma components**

```
<script>
import { bulmaComponentGenerator } from '../plugin/plugin'

export default {
  components: {
      box: bulmaComponentGenerator('box', 'span')
  }
}
</script>
```

Usage: `bulmaComponentGenerator(bulma_coponent_name,rendered_outer_html_element )`. `rendered_outer_html_element` is optional.




