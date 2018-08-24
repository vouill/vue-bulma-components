<template>
  <b-columns>
    <b-column is-6 is-offset-3>
      <b-box>
        <b-media>
          <b-media-left>
            <b-image is-64x64>
              <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
            </b-image>
          </b-media-left>
          <b-media-content>
            <b-content>
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                <br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
              </p>
            </b-content>
            <b-level is-mobile>
              <b-level-left>
                <b-level-item outerElement="a">
                  <b-icon is-small><i class="fa fa-reply"></i></b-icon>
                </b-level-item>
                <b-level-item outerElement="a">
                  <b-icon is-small><i class="fa fa-retweet"></i></b-icon>
                </b-level-item>
                <b-level-item outerElement="a">
                  <b-icon is-small><i class="fa fa-heart"></i></b-icon>
                </b-level-item>
              </b-level-left>
            </b-level>
          </b-media-content>
      </b-media>
      </b-box>
    </b-column>
  </b-columns>
</template>
<style scoped>

</style>
<script>
import { bulmaComponentGenerator } from '../plugin/plugin'
export default {
  data () {
    return {}
  },
  components: {
    box: bulmaComponentGenerator('box')
  }
}
</script>
