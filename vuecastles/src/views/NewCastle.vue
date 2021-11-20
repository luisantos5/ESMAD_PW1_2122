<template>
  <div>
    <h1>New Castle</h1>
    <form @submit.prevent="addCastle">
      <p>
        <label for="txtName">NAME</label>
        <input type="text" id="txtName" required v-model="form.name" />
      </p>
      <p>
        <label for="txtYear">YEAR</label>
        <input type="number" id="txtYear" required v-model="form.year" />
      </p>
      <p>
        <label for="txtDesc">DESCRIPTION</label><br />
        <textarea
          id="txtDesc"
          required
          rows="10"
          cols="30"
          v-model="form.desc"
        ></textarea>
      </p>
      <p>
        <label for="txtLink">LINK</label>
        <input type="url" id="txtLink" required v-model="form.link" />
      </p>
      <p>
        <label for="txtPhoto">PHOTO</label>
        <input type="url" id="txtPhoto" required v-model="form.photo" />
      </p>
      <p>
        <input type="submit" value="ADD CASTLE" />
        <input type="reset" value="RESET" />
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "NewCastle",
  data() {
    return {
      form: {
        name: "",
        year: 0,
        desc: "",
        link: "",
        photo: "",
      },
      castles: JSON.parse(localStorage.getItem("castles")),
    };
  },
  methods: {
    addCastle() {
      if (!this.castles.some((castle) => castle.name == this.form.name)) {
        this.castles.push(this.form);
        localStorage.setItem("castles", JSON.stringify(this.castles));
      } else {
        alert("CASTLE ALREADY EXIST!");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
