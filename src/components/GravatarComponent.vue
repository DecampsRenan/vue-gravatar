<template>
  <div class="gravatar__profile">
    <img :src="url" alt="avatar">
  </div>
</template>

<style>
  .gravatar__profile img {

    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;

  }
</style>

<script>
  import md5 from 'md5'

  // url du service
  const ENDPOINT = 'http://www.gravatar.com/avatar/'

  export default {
    props: {
      href: {         // user's profile email
        type: String
      },
      default: {      // default picture
        type: String,
        default: 'mm'
      },
      size: {         // Size of the image
        type: Number,
        default: 80
      }
    },
    data () {
      return {
        endpoint: ENDPOINT
      }
    },
    computed: {
      url () {
        let hash = md5(this.href.trim())
        let size = '?s=' + this.size
        let defPicture = '&d=' + this.default

        if (this.default === 'gravatar') {
          defPicture = ''
        }

        return this.endpoint + hash + size + defPicture
      }
    }
  }
</script>
