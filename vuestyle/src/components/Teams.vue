<template>
  <div>
    <button v-on:click="addTeam()">ADD BRAGA</button>
    <button v-on:click="filterLocation()">FILTER LISBOA</button>
    <table>
      <tr>
        <th>#</th>
        <th>NAME</th>
        <th>YEAR</th>
        <th>LOCATION</th>
      </tr>
      <tr v-for="(team, index) in filteredTeams" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ team.name }}</td>
        <td>{{ team.year }}</td>
        <td>{{ team.location }}</td>
      </tr>
    </table>

    <div>
      <input v-model.trim="msg" />
      <span>{{ msg }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Teams",
  data() {
    return {
      selected: "",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],

      teams: [
        { name: "benfica", year: 1910, location: "Lisboa" },
        { name: "porto", year: 1912, location: "Porto" },
        { name: "sporting", year: 1914, location: "Lisboa" },
      ],
      location: "",
    };
  },
  methods: {
    addTeam() {
      const team = {
        name: "Braga",
        year: 1923,
        location: "Braga",
      };

      if (!this.teams.some((team) => team.name == "Braga")) {
        this.teams.push(team);
      } else {
        alert("BRAGA JA EXISTE!!!");
      }
    },
    filterLocation() {
      this.location = "Lisboa";
    },
  },

  computed: {
    filteredTeams() {
      return this.teams.filter(
        (team) => team.location === this.location || this.location == ""
      );
    },
  },
};
</script>

<style>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>