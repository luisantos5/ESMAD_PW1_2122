<template>
  <div>
    <form @submit.prevent="register">
      <label for="txtUsername">USERNAME</label>
      <input type="text" id="txtUsername" v-model="form.username" required />
      <label for="txtPassword">PASSWORD</label>
      <input
        type="password"
        id="txtPassword"
        v-model="form.password"
        required
      />
      <label for="txtLocation">LOCATION</label>
      <input type="text" id="txtLocation" v-model="form.location" required />

      <input type="submit" value="REGISTER" />
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        password: "",
        type: "regular",
        gifts: 0,
        location: "",
      },
    };
  },
  computed: {
    ...mapGetters(["isUsernameAvailable"]),
  },
  methods: {
    register() {
      if (this.isUsernameAvailable(this.form.username)) {
        this.SET_NEW_USER(this.form);
        this.$router.push({ name: "login" });
      } else {
        alert("USER ALREADY EXIST! PLEASE TRY AGAIN!");
      }
    },
    ...mapMutations(["SET_NEW_USER"]),
  },
};
</script>

<style lang="scss" scoped></style>
