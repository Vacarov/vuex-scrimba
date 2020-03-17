<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

<!--    <p>{{count}}</p>-->
<!--    <p>{{countAlias}}</p>-->
<!--    <p>{{countPlusLocalState}}</p>-->
    <p>{{doneTodos}}</p>
    <p>{{countDoneTodos}}</p>
    <p>{{getTodoById(doneTodos[0].id)}}</p>
  </div>
</template>

<script>
  import store from "./store/store";
  // import {mapState} from 'vuex';
  import {mapGetters} from 'vuex';

export default {
  name: 'App',
  store,
  data() {
    return {
      localCount: 4
    }
  },
  computed: mapGetters([
          'doneTodos', "countDoneTodos", "getTodoById"
  ])
  // METHOD 1
  // computed: mapState({
  //   count: state => state.count,
  //   countAlias: 'count',
  //   countPlusLocalState(state) {
  //     return state.count + this.localCount;
  //   }
  // })
  // METHOD 2
  // computed: mapState([
  //   'count'
  // ])
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
