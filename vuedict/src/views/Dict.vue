<template>
  <div>
    <form @submit.prevent="getDef">
      WORD: <input type="text" v-model="word" />
      <input type="submit" value="GO" />
    </form>
    <p v-if="definition != ''">
      TYPE: <select @change="changeType" v-model="type">
        <option value="noun">NOME</option>
        <option value="adjective">ADJETIVO</option>
        <option value="verb">VERBO</option>
      </select>
      <table>
        <tr>
          <th>TYPE</th>
          <th>VALUE</th>
        </tr>
        <tr>
          <td>ORIGEM</td>
          <td>{{ origin }}</td>
        </tr>
        <tr>
          <td>DEFINIÇÃO</td>
          <td>{{ definitions }}</td>
        </tr>
        <tr>
          <td>EXEMPLO</td>
          <td><i>{{ example }}</i> </td>
        </tr>
        <tr>
          <td>SINÓNIMOS</td>
          <td>{{ synonyms }}</td>
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
      type:'noun',
      origin:'',
      definitions:'',
      example:'',
      synonyms:''
    };
  },
  computed: {
    ...mapGetters(["definition"]),
  },
  methods: {
    ...mapActions(["getDefinition"]),
    getDef() {
      this.getDefinition(this.word)
      .then(() =>{        
        this.changeType()
      }).catch((err) =>
        alert(`Problem handling something: ${err}.`)
      );
    },
    changeType() {
      this.origin = this.definition[0].origin
      const meaning = this.definition[0].meanings.find(meaning=> meaning.partOfSpeech===this.type)
      this.definitions = meaning.definitions[0].definition
      this.example = meaning.definitions[0].example
      this.synonyms = meaning.definitions[0].synonyms.slice(0,3).join(';')
    }
  },
};
</script>

<style lang="scss" scoped></style>
