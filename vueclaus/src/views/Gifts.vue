<template>
  <div>
    <h5>
      logged as {{ getLoggedUser.username }} |
      <a href="#" @click="logout">LOGOUT</a>
    </h5>
    <p>GIFTS LIST</p>

    <div v-if="getLoggedUser.type == 'admin'">
      <!-- ADD GIFT BY SANTA CLAUS-->
      <form>
        <form @submit.prevent="addGift">
          <label for="txtGift">GIFT</label>
          <input type="text" id="txtGift" v-model="form.name" required />
          <label for="txtQuantity">QUANTITY</label>
          <input
            type="number"
            id="txtQuantity"
            v-model="form.quantity"
            required
          />
          <input type="submit" value="ADD GIFT" />
        </form>
      </form>
      <table v-if="getGifts.length">
        <tr>
          <th>#</th>
          <th>NAME</th>
          <th>QUANTITY</th>
          <th>CHILDREN</th>
        </tr>
        <tr v-for="(gift, index) in getGifts" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ gift.name }}</td>
          <td>{{ gift.quantity }}</td>
          <td>{{ gift.children ? gift.children.join(",") : "NO" }}</td>
        </tr>
      </table>
      <p v-else>NO GIFTS</p>
    </div>
    <div v-else>
      <!-- CHILDREN -->
      <table v-if="getGifts.length">
        <tr>
          <th>#</th>
          <th>NAME</th>
          <th>QUANTITY</th>
          <th>OPTIONS</th>
        </tr>
        <tr v-for="(gift, index) in getGifts" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ gift.name }}</td>
          <td>{{ gift.quantity }}</td>
          <td>
            <input
              :disabled="getLoggedUser.gifts > 0"
              type="button"
              value="WANT THIS!"
              @click="wantGift(gift.name)"
              v-show="gift.quantity > 0"
            />
          </td>
        </tr>
      </table>
      <p v-else>NO GIFTS</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Gifts",
  data() {
    return {
      form: {
        name: "",
        quantity: 0,
      },
    };
  },
  computed: {
    ...mapGetters(["getLoggedUser", "getGifts", "isGiftnameAvailable"]),
  },
  methods: {
    ...mapMutations(["SET_LOGOUT", "SET_NEW_GIFT", "SET_WANT_GIFT"]),
    logout() {
      this.SET_LOGOUT();
      this.$router.push({ name: "login" });
    },
    addGift() {
      if (this.isGiftnameAvailable(this.form.name)) {
        this.SET_NEW_GIFT({
          name: this.form.name,
          quantity: this.form.quantity,
          children: [],
        });
      } else {
        alert("GIFT ALREADY EXIST! PLEASE TRY AGAIN!");
      }
    },
    wantGift(giftname) {
      this.SET_WANT_GIFT(giftname);
    },
  },
};
</script>

<style lang="scss" scoped></style>
