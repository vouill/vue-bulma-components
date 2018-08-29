<template>
  <b-navbar>
    <b-navbar-brand>
      <router-link
        class="navbar-item"
        to="/"
      >
        <img
          class="brand-logo"
          src="../images/vue-bulma.png"
          alt="vue-bulma"
        >
        <h1 class="title">
          VueBulma
        </h1>
      </router-link>
    </b-navbar-brand>
    <b-navbar-menu>
      <b-navbar-end>
        <b-navbar-item>
          <b-field has-addons>
            <b-control>
              <b-input
                type="text"
                placeholder="search in the project"
              />
            </b-control>
            <b-control>
              <b-button is-info>
                Search
              </b-button>
            </b-control>
          </b-field>
        </b-navbar-item>
      </b-navbar-end>
    </b-navbar-menu>
  </b-navbar>
</template>

<script>
export default {
  name: 'LayoutHead'
}
</script>

<style scoped>
  .brand-logo {
    height: 54px;
    padding-right: .5rem;
  }

  h1.title {
    color: #35495E!important;
  }
</style>
