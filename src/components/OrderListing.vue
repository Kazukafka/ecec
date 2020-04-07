<template>
<div class="OrderListing">
  <h2>My Orders</h2>
  <table class="table">
    <tr>
      <th>OrderId</th>
      <th>Products Quantity</th>
      <th>Action</th>
    </tr>

    <tr v-for="order in this.orders" :key="order.id">
      <td>{{order.id}}</td>
      <div v-for="item in order.items" :key="item.productId">
        <img :src="item.optionImage" class="option-image" />
        <td>Quantity : {{item.qty}}</td>
      </div>


      <td>
        <b-button variant="warning" :to=" '/orders/' + order.id">Order Detail</b-button>
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
  data: function() {
    return {
      orders: []
    }
  },
  mounted() {
    axios.get("https://euas.person.ee/user/orders/")
      .then(response => {
        this.orders = response.data;
      });
  },
  method: {
    orderAmount: function(order) {
      let sum = 0
      for (const item of order.items) {
        sum += item.total
      }
      return sum
    }
  }
}
</script>


<style scoped>
.option-image {
  max-height: 75px;
  max-width: 150px;
}
</style>
