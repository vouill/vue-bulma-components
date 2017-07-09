<template>
  <b-columns>
    <b-column is-4 is-offset-4>
  <b-field outerElement="form" @submit.prevent="login">
  <b-label outerElement="label">Username</b-label>
  <b-control has-icons has-icons-left has-icons-right outerElement="p">
    <b-input outerElement="input" :is-success="flag" :is-danger="!flag" @input="toggle" type="text" placeholder="Text input" value="bulma"/>
    <b-icon outerElement="span" is-small is-left>
      <i class="fa fa-user"></i>
    </b-icon>
    <b-icon v-if="flag" outerElement="span" is-small is-right>
      <i class="fa fa-check"></i>
    </b-icon>
  </b-control>
  <b-help is-success>This username is available</b-help>
      <b-button outerElement="button" type="submit" @click="greet" is-primary>Go</b-button>
  </b-field>
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
      },
      toggle: function () {
        this.flag = !this.flag
      }
    },
    data () {
      return {
        flag: true
      }
    }
  }
</script>
