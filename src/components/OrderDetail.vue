<template>
<div class="OrderListing">
  <h2>Order Detail</h2>
  <table class="table">
    <tr>
      <th>OrderId</th>
      <th>Product</th>
      <th>Price</th>
      <th>qty</th>
      <th>Amount</th>
    </tr>

    <tr v-for="order in this.orders" :key="order.id">
      <td>{{order}}</td>
      <td>{{test}}</td>

    </tr>


  </table>



</div>
</template>

<script>
import axios from "axios";
export default {
  name: 'OrderListing',
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
  props: {
    order: Object
  },
  data: function() {
    return {
      orders: []
    }
  },
  mounted() {
    axios.get("https://euas.person.ee/user/orders/" + this.$route.params.orderId)
      .then(response => {
        this.orders = response.data;
      });
    axios.get("https://euas.person.ee/user/orders/")
      .then(response => {
        this.test = response.data;
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
