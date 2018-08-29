<template>
  <b-hero is-fullheight>
    <b-hero-head>
      <layout-head />
    </b-hero-head>
    <b-hero-body class="documentation-container">
      <b-columns class="documentation">
        <b-column is-2>
          <layout-menu />
        </b-column>
        <b-column>
          <Content />
        </b-column>
      </b-columns>
    </b-hero-body>
    <b-hero-foot>
      <layout-foot />
    </b-hero-foot>
  </b-hero>
</template>

<script>
import LayoutHead from './components/LayoutHead.vue'
import LayoutMenu from './components/LayoutMenu.vue'
import LayoutFoot from './components/LayoutFoot.vue'

export default {
  name: 'Layout',
  components: {
    LayoutHead,
    LayoutMenu,
    LayoutFoot
  },
  data () {
    return {
      navbarMenuActive: false
    }
  },
  methods: {
    toggleNavbarMenu () {
      this.navbarMenuActive = !this.navbarMenuActive
    }
  }
}
</script>

<style lang="sass">
  html,
  body
    overflow-y: auto!important

  @import "bulma/bulma.sass";
</style>
<style src="prismjs/themes/prism.css"></style>

<style scoped>
  .hero-body.documentation-container {
    align-items: baseline!important;
  }

  .documentation {
    flex: 1;
  }
</style>
