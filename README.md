# vue-bulma-components
[![Build Status](https://travis-ci.org/vouill/vue-bulma-components.svg?branch=feature%2Funit-tests)](https://travis-ci.org/vouill/vue-bulma-components)

The goal of this library is to use the bulma class syntax as components and props.

**3kb minified**

[Demo](https://teller-multisystems-48055.netlify.com) and [try the live demo](https://codesandbox.io/s/wk2w3z0zk5) too :)


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
<b-columns is-mobile>
  <b-column is-half is-offset-one-quarter>
    A column
  </b-column>
</b-columns>
```

### Using css class as directives at your advantage

One cool feature of using the Bulma css api as directives is toggling them. See how the `is-loading` class is handled

Ex:

``` html
<button class="button is-dark" :class="{ 'is-loading': bool }">
  Send
</button>
```

Vue-bulma-component way:
``` html
<b-button is-dark :is-loading="bool">
  Send
</b-button>
```

Much nicer right ? ;)


**Note:**

You can also use the Pascal case notation, example:

``` html
<BButton is-dark :is-loading="bool">
  Send
</BButton>
```

### Using custom classes

If you want to add any other class simply use the normal class attribute

``` html
<b-button is-dark :class="my-custom-class">
  Send
</b-button>
```

## Install

```shell
yarn add vue-bulma-components

or

npm install --save vue-bulma-components
```

Then install [Bulma](http://bulma.io/documentation/overview/start/) however you want :).


### Use all components globally in your app
Inside your main.js

```javascript
import vueBulmaComponents from 'vue-bulma-components'
Vue.use(vueBulmaComponents)
```

It will make globallly available all [these](https://github.com/vouill/vue-bulma-components/blob/master/src/plugin/helpers.js#L22) bulma components with the prefix `b-` or `B` if you prefer the Pascal case component naming.

You can also change the default prefix of all the bulma components (to avoid collision with existing components in your project)

 ```javascript
 import vueBulmaComponents from 'vue-bulma-components'
 Vue.use(vueBulmaComponents, {prefix: 'y-'})
 ```

 Instead of using `<b-columns/>` you need to use `<y-columns/>`
### Use specific bulma components in your components

``` html
<template>
  <b-box/>
</template>

<script>
  import { bulmaComponentGenerator } from 'vue-bulma-components'

  export default {
    components: {
        box: bulmaComponentGenerator('box')
    }
  }
</script>
```

Yes, you can actually create any vue-bulma-component by calling `bulmaComponentGenerator(bulmaComponentStr)`.

## Components

By default, most of the components are rendered as `<div>`. You can also use the prop `outerElement="span"` to change this behavior.

If you want to globally apply default outer element for some bulma component, you can use `outerElement` option on **`Vue.use()`**.

```javascript
import vueBulmaComponents from 'vue-bulma-components'
Vue.use(vueBulmaComponents, {
  outerElement: {
    'navbar': 'nav',
    'navbar-item': 'a'
  }
})
```

**If you use the `Vue.use()` method to use the vue-bulma-components.**

Most of the components are named after the bulma class they belong to.
Ex: `<box/> <card/> <panel/> ...`

However, some bulma components are also named after native html element. This is why [they are prefixed](https://github.com/vouill/vue-bulma-components/blob/master/src/plugin/helpers.js#L24).

Ex :
- Bulma : `input`
- vue-component-bulma: `<b-input>`. This prefix is used to avoid collision with native html `<input>` element.

**If you generate bulma components**

``` html
<script>
  import { bulmaComponentGenerator } from 'vue-bulma-components'

  export default {
    components: {
        box: bulmaComponentGenerator('box', 'span')
    }
  }
</script>
```

Usage:
`bulmaComponentGenerator(bulma_coponent_name,rendered_outer_html_element )`.

Note: `rendered_outer_html_element` is optional.


## Known limitations:

Currently you cannot use v-model with `<b-input>` as expected. Because `vue-bulma-components` use functional components.

Don't worry, you can still bind a value to a `<b-input>` component using `@input` event (it's what v-model does under the hood):

```html
<template>
  <b-control>
    <b-input :value="foo" @input="handleInputChange"/>
    {{foo}}
  </b-control>

</template>

<script>
  export default {
    data: () => ({
      foo: ''
    }),
    method: {
      handleInputChange (e) {
        this.foo = e.target.value
      }
    }
  }
</script>

```

Note:
If you come from the version `1.x.x`, there is a breaking change.

From `2.x.x` when using `Vue.use(vueBulmaComponents)`, default available components are prefixed by `<b-[bulmacomponent]/>` instead of `<[bulmacomponent]/>`

