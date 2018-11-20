<template>
  <div id="app">
    <img src="./assets/logo.png"><br/>

    <div>
      <button @click="goBack">后退</button>
      <button @click="goAhead">前进</button>
      <button @click="goHome">返回首页</button>
    </div>
    <div>
      <router-link to="/params/198/happyBirthdayTodzr"">params</router-link>
      <router-link to="/">首页</router-link>
      <router-link to="/goHome">goHome</router-link>
      <router-link to="/goParams/918/happyBirthdayTobwj">goParams</router-link>
      <router-link to="/Hi">Hi</router-link>
      <router-link to="/zhangjie">zhangjie</router-link>
      <router-link to="/lllll">404报错</router-link>

      <router-link :to="{name:'hiOne',params:{username:'lll'}}">hiOne</router-link>
      <router-link :to="{name:'hiTwo',params:{name:'zhangjie'}}">hiTwo</router-link>


      
      
    </div>
    <p>{{ $route.name }}</p>

    

    <router-view></router-view>
    <router-view name="left" style="float:left;width:50%;height:300px;background-color:pink;"></router-view>
    <router-view name="right" style="float:left;width:50%;height:300px;background-color:green;"></router-view>

    
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    goAhead(){
      this.$router.go(+1);
    },
    goHome(){
      this.$router.push('/');
    }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
