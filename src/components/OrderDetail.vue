<template>
<div class="OrderListing">
  <h2>Order Detail</h2>
  <b-alert show variant="success" v-if="this.$route.query.success">Thank you, Submitted Order Success!!!</b-alert>
  <table class="table">
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>qty</th>
      <th>Amount</th>
    </tr>

    <tr v-for="(item, index) in this.order.items" :key="item.productId + '_' + index">
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
      return this.$root.$data.cart.order.items || [];
    },
    total: function() {
      let sum = 0
      for (const item of this.order.items) {
        sum += item.total
      }
      return sum
    }
  },
  data: function() {
    return {
      order: {}
    }
  },
  mounted() {
    axios
      .get("https://euas.person.ee/user/orders/" + this.$route.params.orderId)
      .then(response => {
        this.order = response.data;
      }).catch(error => {
        console.log(error);
      })
  }
}
</script>


<style scoped>
.option-image {
  max-height: 75px;
  max-width: 150px;
}
</style>
