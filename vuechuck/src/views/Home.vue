<template>
  <div class="hello">
    <select
      id="sltCategories"
      v-model="selectedCategory"
      @change="selectCategory"
    >
      <option value="" disabled>-- SELECT JOKE'S CATEGORY --</option>
      <option
        :value="category"
        v-for="(category, index) in categories"
        :key="index"
      >
        {{ category }}
      </option>
    </select>
    <p>{{ joke }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Main",
  data() {
    return {
      selectedCategory: "",
    };
  },
  computed: {
    ...mapGetters(["categories", "joke"]),
  },
  created() {
    this.loadCategories().catch((err) =>
      alert(`Problem handling something: ${err}.`)
    );
  },
  methods: {
    ...mapActions([
      "loadCategories", // evita ter que escrever this.$store.dispatch('loadCategories')
      "loadRandomJokeFromCategory",
    ]),
    selectCategory() {
      this.loadRandomJokeFromCategory(this.selectedCategory).catch((err) =>
        alert(`Problem handling something: ${err}.`)
      );
    },
  },
};
</script>
