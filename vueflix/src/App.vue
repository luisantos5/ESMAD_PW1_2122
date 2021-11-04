<template>
  <div id="app">
    <button @click="increment">+</button>
    <button @click="decrement" :disabled="num == 0">-</button>
    <br />
    <span>{{ num }}</span>
    <h2 v-if="num < 0">NUMERO INVALIDO</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      num: 0,
    };
  },
  created() {
    if (localStorage.getItem("num")) this.num = localStorage.getItem("num");
    console.log("Instância criada");
  },
  mounted() {
    console.log("Instância montada");
  },
  updated() {
    localStorage.setItem("num", this.num);
    console.log("Instância atualizada");
  },
  methods: {
    increment() {
      this.num++;
    },
    decrement() {
      if (this.num > 0) {
        this.num--;
      }
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
