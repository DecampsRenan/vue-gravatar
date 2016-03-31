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

  export default {
    props: {
      href: {
        type: String
      }
    },
    data () {
      return {
        endpoint: 'http://www.gravatar.com/avatar/'
      }
    },
    computed: {
      url () {
        return this.endpoint + md5(this.href.trim())
      }
    }
  }
</script>
