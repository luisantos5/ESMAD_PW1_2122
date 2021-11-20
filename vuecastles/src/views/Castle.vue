<template>
  <div>
    <h1>{{ castle.name }} ({{ castle.year }})</h1>
    <p>{{ castle.description }}</p>
    <p>
      Link: <a :href="castle.link" target="_blank">{{ castle.link }}</a>
    </p>
    <img :src="castle.photo" alt="" />
    <br />
    <a href="/castles">voltar</a>
  </div>
</template>

<script>
export default {
  name: "Castle",
  data() {
    return {
      castle: {},
    };
  },
  created() {
    this.castle = JSON.parse(localStorage.getItem("castles")).find(
      (castle) => castle.name == this.$route.params.castleName
    );
  },
};
</script>

<style lang="scss" scoped></style>
