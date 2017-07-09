<template>
  <b-columns>
    <b-column is-10 is-offset-1 >
     <b-columns>
        <b-column>
          <b-notification is-info>First column</b-notification>
        </b-column>
        <b-column>
          <b-notification is-success>Second column</b-notification>
        </b-column>
        <b-column>
          <b-notification is-warning>Third column</b-notification>
        </b-column>
        <b-column>
          <b-notification is-danger>Fourth column</b-notification>
        </b-column>
     </b-columns>
    </b-column>
  </b-columns>
</template>
<script>
  export default {
    methods: {
      greet: function () {
        console.log('hello')
      }
    },
    data () {
      return {}
    }
  }
</script>
