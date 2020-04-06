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
      <td>{{order}}</td>

      <td>
        <b-button variant="dark" :to=" '/orders/' + order.id">Detail</b-button>
      </td>
    </tr>

  </table>



</div>
</template>

<script>
import axios from "axios";
export default {
  name: 'OrderListing',
  computed: {
    total: function() {
      let sum = 0
      for (const item of this.items) {
        sum += item.total
      }
      return sum
    }
  },
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
  }
}
</script>


<style scoped>
.option-image {
  max-height: 75px;
  max-width: 150px;
}
</style>
