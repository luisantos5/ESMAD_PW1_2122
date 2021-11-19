


<template>
  <my-input @custom-change="logChange" />
</template>

<script>
import MyInput from "./components/MyInput.vue";
export default {
  components: {
    MyInput,
  },
  methods: {
    logChange(event) {
      console.log("ss" + event);
    },
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
