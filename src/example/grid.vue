<template>
  <columns>
    <column is-10 is-offset-1 >
     <columns>
        <column>
          <notification @click="greet" is-info>First column</notification>
        </column>
        <column>
          <notification is-success>Second column</notification>
        </column>
        <column>
          <notification is-warning>Third column</notification>
        </column>
        <column>
          <notification is-danger>Fourth column</notification>
        </column>
     </columns>
    </column>
  </columns>
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
