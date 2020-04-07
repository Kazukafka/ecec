<template>
<div class="shopping-cart-page">
  <h2>ShoppingCart</h2>
  <div v-if="!items.length">Your ShoppingCart is Empty, add more items!</div>
  <table class="table" v-if="items.length">
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>qty</th>
      <th>Amount</th>
      <th>Actions</th>
    </tr>

    <tr v-for="(item, index) in this.items" :key="item.productId + '_' + index">
      <td>
        <img :src="item.optionImage" class="option-image" />
      </td>
      <td>{{ item.price }}</td>
      <td>{{ item.qty }}</td>
      <td>{{ item.total }}</td>
      <td>
        <b-button variant="danger" @click="removeItem(index)">Remove</b-button>
      </td>
    </tr>
    <tr class="total-row">
      <td>TOTAL:</td>
      <td></td>
      <td></td>
      <td>{{ total }}</td>
      <td></td>
    </tr>
  </table>

  <b-button variant="success" size="lg" @click="orderNow" v-if="this.items.length">Order Now!</b-button>

</div>
</template>

<script>
import axios from "axios";
export default {
  name: 'ShoppingCartPage',
  computed: {
    items: function() {
      return this.$root.$data.cart.items || [];
    },
    total: function() {
      let sum = 0
      for (const item of this.items) {
        sum += item.total
      }
      return sum
    }
  },
  methods: {
    removeItem: function(index) {
      if (!this.$root.$data.cart.items) this.$root.$data.cart.items = []
      this.$root.$data.cart.items.splice(index, 1);
      console.log(this.$root.$data.cart.items);
      this.$root.$data.saveCart();
    },

    orderNow: function() {
      let data = this.$root.$data
      let router = this.$router
      console.log(this.$root.$data.cart);
      axios.post("https://euas.person.ee/user/carts/" + this.$root.$data.cart.id + "/orders/",
        this.$root.$data.cart).then(function() {
        router.push("/orders/" + data.cart.id + '?success=true')
        data.reinitCart();
      })
    }
  }
}
</script>


<style scoped>
.option-image {
  max-height: 50px;
  max-width: 100px;
}
</style>
