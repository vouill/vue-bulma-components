<template>
  <columns>
    <column is-4 is-offset-4>
  <field outerElement="form" @submit.prevent="login">
  <label>Username</label>
  <control has-icons has-icons-left has-icons-right outerElement="p">
    <b-input :is-success="flag" :is-danger="!flag" @input="toggle" type="text" placeholder="Text input" value="bulma"/>
    <icon outerElement="span" is-small is-left>
      <fa fa-user />
    </icon>
    <icon v-if="flag" outerElement="span" is-small is-right>
      <fa fa-check />
    </icon>
  </control>
  <help is-success>This username is available</help>
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
