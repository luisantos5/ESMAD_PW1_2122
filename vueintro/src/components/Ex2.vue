<template>
  <div id="intro">
    <h2>First name: {{ firstName }}</h2>
    <h2>Last name: {{ lastName }}</h2>
    <h2>Age: {{ age }}</h2>
    <h2>Full name: {{ fullName() }}</h2>
  </div>
</template>

<script>
export default {
  name: "Ex2",
  data() {
    return {
      firstName: "Rui",
      lastName: "Silva",
      age: 23,
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>