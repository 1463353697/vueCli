<template>
  <div class="hello">
    <h1>{{msg}}-{{ $route.params.name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hiTwo',
  data () {
    return {
      msg: 'This is hiTwo'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>