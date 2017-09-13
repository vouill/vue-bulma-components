<template>
  <div id="app">
    <navbar></navbar>
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
import Navbar from './example/navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Grid,
    Box,
    FormComponent
  }
}
</script>

