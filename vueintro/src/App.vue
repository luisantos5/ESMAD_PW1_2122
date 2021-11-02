<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Ex1 />
    <Ex2 />
    <Ex3 weight="72" />
    <Ex4 />
  </div>
</template>

<script>
import Ex1 from "./components/Ex1.vue";
import Ex2 from "./components/Ex2.vue";
import Ex3 from "./components/Ex3.vue";
import Ex4 from "./components/Ex4.vue";

export default {
  name: "App",
  components: {
    Ex1,
    Ex2,
    Ex3,
    Ex4,
  },
};
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
