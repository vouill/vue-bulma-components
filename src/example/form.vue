<template>
  <columns>
    <column is-4 is-offset-4>
  <field outerElement="form" @submit.prevent="login">
  <label>Username: {{username}}</label>
  <control has-icons has-icons-left has-icons-right outerElement="p">
    <b-input :is-success="username" :is-danger="!username" @input="handleInputChange" :value="username" type="text" placeholder="Text input"/>
    <icon outerElement="span" is-small is-left>
      <fa fa-user />
    </icon>
    <icon outerElement="span" is-small is-right>
      <fa fa-check />
    </icon>
  </control>
  <help v-if="username"is-success>This username is available</help>
      <b-button type="submit" @click="greet" is-primary>Go</b-button>
  </field>
    </column>
  </columns>
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
