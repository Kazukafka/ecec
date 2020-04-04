<template>
<div class="OrderDetail">
  <h2>Order Details</h2>
  <table class="table">
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>qty</th>
      <th>Amount</th>

    </tr>

    <tr v-for="(item, index) in this.$root.$data.cart.items" :key="item.productId + '_' + index">
      
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
    axios.get("https://euas.person.ee/user/orders"+ this.$route.params.orderId)
      .then(response => {
        this.orders = response.data;
      });
  }
}
</script>


<style scoped>
.option-image {
  max-height: 50px;
  max-width: 100px;
}
</style>
