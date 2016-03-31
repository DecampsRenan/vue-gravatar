import Vue from 'vue'
import GravatarComponent from './components/GravatarComponent.vue'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  data: {
    email: ''
  },
  components: {
    gravatar: GravatarComponent
  }
})
