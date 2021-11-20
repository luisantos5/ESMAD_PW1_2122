<template>
  <div>Castle details: {{ castle }}</div>
</template>

<script>
export default {
  name: "Castle",
  data() {
    return {
      castle: this.$route.params.castleName,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>