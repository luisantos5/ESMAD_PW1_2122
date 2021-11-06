<template>
  <div>
    <p
      v-bind:style="{
        color: textColor,
        'font-size': size + 'px',
        'background-color': backColor,
        visibility: show,
      }"
    >
      {{ msg }}
    </p>
    <p>
      <button v-on:click="formatTextColor()">RED</button>
      <button v-on:click="incrementSize()">BIG</button>
      <button v-on:click="formatBackColor()">YELLOW</button>
      <button v-on:click="showHide()">SHOW/HIDE</button>
      <button v-on:click="addSchool()">ADD ESMAE</button>
      <button v-on:click="filterSchool()">FILTER E</button>
    </p>

    <div v-if="schools.length != 0">
      <h2>{{ filteredSchools.length }} escolas do IPP</h2>
      <ul>
        <li v-for="(school, index) in filteredSchools" v-bind:key="index">
          {{ school }}
        </li>
      </ul>
    </div>
    <p v-else>SEM ESCOLAS!</p>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      msg: "A ESMAD é uma escola do IPP!",
      textColor: "",
      backColor: "",
      size: 10,
      show: "visible",
      schools: ["ESMAD", "ISEP", "ESE", "ISCAP", "ESTG", "ESS", "ESHT"],
      filterChar: "",
    };
  },

  methods: {
    formatTextColor() {
      this.textColor = "red";
    },

    formatBackColor() {
      this.backColor = "yellow";
    },

    incrementSize() {
      this.size = this.size + 30;
    },

    showHide() {
      //this.show = (this.show == "visible") ? "hidden" : "visible";
      if (this.show == "visible") {
        this.show = "hidden";
      } else {
        this.show = "visible";
      }
    },

    addSchool() {
      if (!this.schools.includes("ESMAE")) {
        this.schools.push("ESMAE");
      } else {
        alert("ESMAE já está no array!");
      }
    },

    filterSchool() {
      this.filterChar = "E";
    },
  },

  computed: {
    filteredSchools() {
      return this.schools.filter((school) =>
        school.startsWith(this.filterChar)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>