<template>
<div class="OrderDetail">
  <h2>Order Details</h2>
  <table class="table">
    <tr>
      <th>CartID</th>
      <th>Product</th>
      <th>Price</th>
      <th>qty</th>
      <th>Amount</th>

    </tr>

    <tr v-for="(item, cart, index) in this.$root.$data.cart.items" :key="item.productId + '_' + index">
      <td>{{cart.id}}</td>
      <td>
        <img :src="item.optionImage" class="option-image" />
      </td>
      <td>{{ item.price }}</td>
      <td>{{ item.qty }}</td>
      <td>{{ item.total }}</td>

    </tr>
    <tr class="total-row">
      <td>TOTAL:</td>
      <td></td>
      <td></td>
      <td>{{ total }}</td>
      <td></td>
      <td></td>
    </tr>
  </table>

</div>
</template>

<script>
//import axios from "axios";
export default {
  name: 'OrderListing',
  computed: {
    items: function() {
      return this.$root.$data.cart.items || [];
    },
    carts: function() {
      return this.$root.$data.carts || [];
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

    reset: function() {
      this.$router.go({
        path: this.$router.currentRoute.path,
        force: true
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
