<template>
  <b-columns>
    <b-column is-4 is-offset-4>
  <b-field outerElement="form" @submit.prevent="login">
  <b-label>Username: {{username}}</b-label>
  <b-control has-icons has-icons-left has-icons-right outerElement="p">
    <b-input :is-success="username" :is-danger="!username" @input="handleInputChange" :value="username" type="text" placeholder="Text input"/>
    <b-icon outerElement="span" is-small is-left>
      <b-fa fa-user />
    </b-icon>
    <b-icon outerElement="span" is-small is-right>
      <fa fa-check />
    </b-icon>
  </b-control>
  <b-help v-if="username" is-success>This username is available</b-help>

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
      handleInputChange: function (e) {
        this.username = e.target.value
      }
    },
    data () {
      return {
        username: ''
      }
    }
  }
</script>
