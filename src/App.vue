<template>
  <div id="app">
    <hr/>
    <Grid/>
    <hr/>
    <Box/>
    <hr/>
    <Form/>
  </div>
</template>

<script>
import Grid from './example/grid.vue'
import Box from './example/box.vue'
import Form from './example/form.vue'

export default {
  name: 'app',
  components: {
    Grid,
    Box,
    Form
  }
}
</script>

