<template>
  <columns>
    <column is-4 is-offset-4>
      <box>
        <media>
          <media-left>
            <b-image is-64x64>
              <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
            </b-image>
          </media-left>
          <media-content>
            <content>
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                <br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
              </p>
            </content>
            <level is-mobile>
              <level-left>
                <level-item outerElement="a">
                  <icon is-small><i class="fa fa-reply"></i></icon>
                </level-item>
                <level-item outerElement="a">
                  <icon is-small><i class="fa fa-retweet"></i></icon>
                </level-item>
                <level-item outerElement="a">
                  <icon is-small><i class="fa fa-heart"></i></icon>
                </level-item>
              </level-left>
            </level>
          </media-content>
      </media>
      </box>
    </column>
  </columns>
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
