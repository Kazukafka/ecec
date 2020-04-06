<template>
<div class="OrderListing">
  <h2>Order Detail</h2>
  <table class="table">
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>qty</th>
      <th>Amount</th>
    </tr>

    <tr v-for="item in this.orders" :key="item.id">
    <td>
      <img :src="item.optionImage" class="option-image" />
    </td>
    <td>{{ item.price }}</td>
    <td>{{ item.qty }}</td>
    <td>{{ item.total }}</td>
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
  data: function(){
    return{
      product:{},
      selectedOption: {},
      qty:1,
    }
  },
  mounted() {
  axios
  .get("https://euas.person.ee/orders/"+ this.$route.params.orderId)
  .then(response =>{
    this.orders = response.data;
  }).catch(error =>{
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
