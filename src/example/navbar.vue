<template>
  <navbar is-dark role="navigation" aria-label="main navigation">
  <navbar-brand>
    <router-link to="/" class="navbar-item vbc">VBC</router-link>
    <router-link to="/grid" class="navbar-item">Grid</router-link>
    <router-link to="/box" class="navbar-item">Box</router-link>
    <router-link to="/form" class="navbar-item">Form</router-link>
  </navbar-brand>
</navbar>
</template>
<style scoped>
  .vbc {
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
  }
  .navbar {
    margin-bottom: 1em;
  }
</style>
<script>
  export default {
    name: 'navbarComponent'
  }
</script>
