<template>
  <div>
    <h2>Peso: {{ weight }} kgs</h2>
  </div>
</template>

<script>
export default {
  name: "Ex3",
  props: {
    weight: {
      type: Number,
    },
  },
  /*
  data() {
    return {
      weight: 0,
    };
  },
  */
  beforeCreate() {
    console.log("BEFORE_CREATE");
  },
  created() {
    console.log("CREATED");
  },
  beforeMount() {
    console.log("BEFORE_MOUNT");
  },
  mounted() {
    console.log("MOUNTED");
  },
  beforeUpdate() {
    console.log("BEFORE_UPDATE");
  },
  updated() {
    console.log("UPDATED");
  },
  beforeDestroy() {
    console.log("BEFORE_DESTROY");
  },
  destroyed() {
    console.log("DESTROYED");
  },
};
</script>

<style lang="scss" scoped>
</style>