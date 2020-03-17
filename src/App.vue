<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <p>{{count}}</p>
  </div>
</template>

<script>
  import store from "./store/store";

export default {
  name: 'App',
  store,
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
