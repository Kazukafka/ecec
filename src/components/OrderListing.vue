<template>
<div class="OrderListing">
  <h2>Your Orders</h2>
  <table class="table">
    <tr>
      <th>OrderId</th>
      <th>TotalPrice</th>
      <th>Action</th>
    </tr>

    <tr v-for="(order, index) in this.orders" :key="order.id">
      <td>{{order.id}}</td>
      <td>{{total}}</td>
      <td>
        <b-button variant="dark" @click="getOrders(index)" to="./order/cartId">Detail</b-button>
      </td>
    </tr>
  </table>



</div>
</template>

<script>
import axios from "axios";
export default {
  name: 'OrderListing',
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
