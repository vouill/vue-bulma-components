<template>
  <div id="app">
    <hr/>
    <Grid/>
    <hr/>
    <Box/>
  </div>
</template>

<script>
import Grid from './example/grid.vue'
import Box from './example/box.vue'

export default {
  name: 'app',
  components: {
    Grid,
    Box
  }
}
</script>

