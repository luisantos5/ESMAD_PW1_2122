<template>
  <div>
    <table>
      <tr>
        <th>Name</th>
        <th>Year</th>
        <th>Options</th>
      </tr>
      <tr v-for="(castle, index) in castles" :key="index">
        <td>
          {{ castle.name }}
        </td>
        <td>{{ castle.year }}</td>
        <td>
          <router-link
            :to="{ name: 'castle', params: { castleName: castle.name } }"
            >VER MAIS</router-link
          >
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Castles",
  data() {
    return {
      castles: JSON.parse(localStorage.getItem("castles")),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>