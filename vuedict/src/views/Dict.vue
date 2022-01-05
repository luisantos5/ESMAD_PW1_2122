<template>
  <div>
    <form @submit.prevent="getDef">
      WORD: <input type="text" v-model="word" />
      <input type="submit" value="GO" />
    </form>
    <p v-if="definition != ''">
      <table>
        <tr>
          <th>TYPE</th>
          <th>VALUE</th>
        </tr>
        <tr>
          <td>ORIGEM</td>
          <td>{{ definition[0].origin }}</td>
        </tr>
        <tr>
          <td>DEFINIÇÃO</td>
          <td>{{ definition[0].meanings[0].definitions[0].definition }}</td>
        </tr>
        <tr>
          <td>EXEMPLO</td>
          <td><i>{{ definition[0].meanings[0].definitions[0].example }}</i> </td>
        </tr>
        <tr>
          <td>SINÓNIMOS</td>
          <td>{{ definition[0].meanings[0].definitions[0].synonyms.slice(0,3).join(';') }}</td>
        </tr>
      </table>
    </p>
    <p v-else>NO DATA TO PRESENT</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Dict",
  data() {
    return {
      word: "",
    };
  },
  computed: {
    ...mapGetters(["definition"]),
  },
  methods: {
    ...mapActions(["getDefinition"]),
    getDef() {
      this.getDefinition(this.word).catch((err) =>
        alert(`Problem handling something: ${err}.`)
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
