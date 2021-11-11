<template>
  <div id="app">
    <Candy />
  </div>
</template>

<script>
import Candy from "./components/Candy.vue";

export default {
  name: "App",
  components: {
    Candy,
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
