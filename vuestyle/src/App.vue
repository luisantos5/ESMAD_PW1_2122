<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Teams />
  </div>
</template>

<script>
import Teams from "./components/Teams.vue";

export default {
  name: "App",
  components: {
    Teams,
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
