<template>
  <b-columns>
    <b-column is-4 is-offset-4>
  <b-field outerElement="form" @submit="login">
  <b-label outerElement="label">Username</b-label>
  <b-control has-icons has-icons-left has-icons-right outerElement="p">
    <input class="input is-success" type="text" placeholder="Text input" value="bulma">
    <span class="icon is-small is-left">
      <i class="fa fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fa fa-check"></i>
    </span>
  </b-control>
  <p class="help is-success">This username is available</p>
  </b-field>
      <b-button outerElement="button" type="submit" @click="greet" is-primary>Go</b-button>
    </b-column>
  </b-columns>
</template>
<style>
</style>
<script>
  export default {
    methods: {
      login: function () {
        console.log('login in')
      },
      greet: function () {
        console.log('hey')
      }
    },
    data () {
      return {}
    }
  }
</script>
