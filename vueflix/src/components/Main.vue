<template>
  <div>
    <form @submit.prevent="addMovie">
      <label for="txtName">NAME:</label>
      <input type="text" id="txtName" required v-model="form.name" />
      <br />
      <label for="sltCategory">CATEGORY:</label>
      <select id="sltCategory" required v-model="form.category">
        <option value="" disabled>--SELECT CATEGORY--</option>
        <option
          v-for="(category, index) in categories"
          :key="index"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
      <br />
      <label for="txtScore">SCORE:</label>
      <input
        type="number"
        id="txtScore"
        min="1"
        max="10"
        v-model="form.score"
      />
      <br />
      <input type="submit" value="ADD MOVIE" />
    </form>
    <br />
    <p>Filtro: <input type="text" id="" v-model="form.filterName" /></p>
    <br />
    <div>
      <table v-if="movies.length > 0">
        <tr>
          <th>#</th>
          <th>MOVIE</th>
          <th>CATEGORY</th>
          <th>SCORE</th>
          <th>OPTIONS</th>
        </tr>
        <tr v-for="(movie, index) in filteredMovies" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ movie.name }}</td>
          <td>{{ movie.category }}</td>
          <td>{{ movie.score }}</td>
          <td>
            <button @click="removeMovie(movie.name)">X</button>
          </td>
        </tr>
      </table>
      <p v-else>NO MOVIES!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      form: {
        name: "",
        category: "",
        score: 1,
        filterName: "",
      },
      movies: [],
      categories: ["romance", "comédia", "terror", "mistério"],
    };
  },
  created() {
    this.movies = localStorage.movies ? JSON.parse(localStorage.movies) : [];
  },
  watch: {
    movies() {
      localStorage.setItem("movies", JSON.stringify(this.movies));
    },
  },
  computed: {
    filteredMovies() {
      return this.movies
        .filter(
          (movie) =>
            movie.name.startsWith(this.form.filterName) ||
            this.form.filterName == ""
        )
        .sort(this.compareMovies);
    },
  },
  methods: {
    addMovie() {
      if (!this.movies.some((movie) => movie.name == this.form.name)) {
        const newMovie = {
          name: this.form.name,
          category: this.form.category,
          score: this.form.score,
        };
        this.movies.push(newMovie);
      } else {
        alert("MOVIE ALREADY EXIST!");
      }
    },
    removeMovie(name) {
      if (confirm("DO YOU REALLY WANT TO REMOVE THIS MOVIE?")) {
        this.movies = this.movies.filter((movie) => movie.name != name);
      }
    },
    compareMovies(movieA, movieB) {
      if (movieA.score < movieB.score) return 1;
      else if (movieA.score > movieB.score) return -1;
      else return 0;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>