<template>
<div class="OrderListing">
  <h2>My Orders</h2>
  <table class="table">
    <tr>
      <th>OrderId</th>
      <th>TotalPrice</th>
      <th>Action</th>
    </tr>

    <tr v-for="(cart, order) in this.orders" :key="order.id">
      <td>{{order}}</td>
      <td>{{order.total}}</td>
      <td>
        <b-button variant="dark" :to=" '/orders/' + order">Detail</b-button>
      </td>
    </tr>
  </table>



</div>
</template>

<script>
import axios from "axios";
export default {
  name: 'OrderListing',
  props: {
    order: Object
  },
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
  data: function() {
    return {
      orders: []
    }
  },
  mounted() {
    axios.get("https://euas.person.ee/user/orders")
      .then(response => {
        this.orders = response.data;
      });
  }
}
</script>


<style scoped>
</style>
