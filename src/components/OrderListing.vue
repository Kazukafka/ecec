<template>
<div class="OrderListing">
  <h2>Your Orders</h2>
  <table class="table">
    <tr>
      <th>CartId</th>
      <th>TotalPrice</th>
      <th>Action</th>
    </tr>

    <tr v-for="(item, index) in this.items" :key="item.productId + '_' + index">
     <td>{{items.id}}</td>
     <td>{{items.price}}</td>
     <td>
       <b-link variant="dark" @click="getOrders(index)" to="./order/cartId">Detail</b-link>
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
  getOrders: function() {
    axios.post("https://euas.person.ee/user/carts/" + this.$root.$data.cart.id + "/orders/",
      this.$root.$data.cart).then(function() {
    })
  }
  }
}
</script>


<style scoped>
</style>
