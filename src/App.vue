<template>
  <div id="app">
    <navbar-component></navbar-component>
    <router-view/>
  </div>
</template>
<style>
  * {
    font-family: 'Roboto', sans-serif;
  }
</style>
<script>
import Grid from './example/grid.vue'
import Box from './example/box.vue'
import FormComponent from './example/form.vue'
import NavbarComponent from './example/navbar.vue'

export default {
  name: 'app',
  components: {
    NavbarComponent,
    Grid,
    Box,
    FormComponent
  }
}
</script>

