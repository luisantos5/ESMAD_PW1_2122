<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'castles' }">Home</router-link> |
      <router-link :to="{ name: 'NewCastle' }">Add castle</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      castles: localStorage.getItem("castles")
        ? JSON.parse(localStorage.getItem("castles"))
        : [],
    };
  },
};
</script>

<style>
</style>
