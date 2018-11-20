<template>
  <div class="hello">
    <h1>{{msg}}-{{ $route.params.username }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hiOne',
  data () {
    return {
      msg: 'This is hiOne'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>