<template>
  <b-columns>
    <b-column is-4 is-offset-4>
      <box>
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
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item">
                  <span class="icon is-small"><i class="fa fa-reply"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fa fa-heart"></i></span>
                </a>
              </div>
            </nav>
          </b-media-content>
      </b-media>
      </box>
    </b-column>
  </b-columns>
</template>
<style>
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
