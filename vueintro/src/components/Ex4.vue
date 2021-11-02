<template>
  <div id="intro">
    <p>Name: {{ productName }}</p>
    <p v-html="productDesc"></p>
    <img v-bind:src="productImage" alt="" style="width: 20%" />
    <p v-if="productPrice < 1000">Price: {{ productPrice }}€</p>

    <p v-if="productAvailability">DISPONÍVEL</p>
    <p v-else>NÃO DISPONÍVEL</p>

    <button v-on:click="productPrice = 1200">REPOR</button>
    <button
      v-bind:disabled="!productAvailability"
      v-on:click="productAvailability = false"
    >
      VENDER
    </button>
  </div>
</template>

<script>
export default {
  name: "Ex4",
  data() {
    return {
      productName: "Computador Titan W599",
      productDesc: "Processador i7<br>Disco SSD 256GB<br> Monitor Samsung 21",
      productImage:
        "https://bizon-tech.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/s/dsc01648_1.jpg",
      productAvailability: true,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>