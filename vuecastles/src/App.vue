<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'castles' }">Home</router-link> |
      <router-link :to="{ name: 'newCastle' }">Add castles</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      castles: localStorage.getItem("castles")
        ? JSON.parse(localStorage.getItem("castles"))
        : [],
    };
  },
  created() {
    if (this.castles.length == 0) {
      this.castles = [
        {
          name: "Castelo de Bragança",
          year: 1910,
          description:
            "O Castelo de Bragança localiza-se na freguesia de Santa Maria, no centro histórico da cidade, concelho e distrito de Bragança, em Portugal.",
          link: "https://pt.wikipedia.org/wiki/Castelo_de_Bragan%C3%A7a",
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Castelo_de_Bragan%C3%A7a.jpg/275px-Castelo_de_Bragan%C3%A7a.jpg",
        },
        {
          name: "Castelo de Almourol",
          year: 1171,
          description:
            "O Castelo de Almourol localiza-se na freguesia de Praia do Ribatejo, concelho de Vila Nova da Barquinha, distrito de Santarém, região do Centro (Região das Beiras), em Portugal, embora a sua localização seja frequentemente atribuída a Tancos, visto ser a vila mais perto e onde se vislumbra melhor.",
          link: "https://pt.wikipedia.org/wiki/Castelo_de_Almourol",
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Almourol_034.jpg/300px-Almourol_034.jpg",
        },
      ];
      localStorage.setItem("castles", JSON.stringify(this.castles));
    }
  },
};
</script>

<style></style>
