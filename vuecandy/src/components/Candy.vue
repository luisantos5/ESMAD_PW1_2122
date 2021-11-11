<template>
  <div>
    <p v-for="(candy, index) in candies" :key="index">
      <input type="text" v-model="candy.name" />
      <button @click="addSlotCandy" :disabled="index + 1 != candies.length">
        +
      </button>
    </p>
  </div>
</template>

<script>
export default {
  name: "Candy",
  data() {
    return {
      candies: localStorage.getItem("candies")
        ? JSON.parse(localStorage.getItem("candies"))
        : [{ name: "" }],
    };
  },
  methods: {
    addSlotCandy() {
      this.candies.push({ name: "" });
    },
  },
  watch: {
    candies: {
      deep: true,
      handler() {
        localStorage.setItem("candies", JSON.stringify(this.candies));
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>