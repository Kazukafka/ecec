<template>
<div class="product-panel">
  <h3>{{title}}</h3>
  <div>
    <b-card-group deck>
      <ProductCard :product="product" v-for="product in products" :key="product.id" />
    </b-card-group>
  </div>
</div>
</template>



<script>
import ProductCard from './ProductCard.vue';
//https://euas.person.ee/categories{first}/products
import axios from 'axios';

export default {
  name: 'ProductPanel',
  components: {
    ProductCard,
  },
  props: {
    title: String,
    categoryAlias: String,
  },
  data() {
    return {
      products: []
    };
  },

  mounted() {
    axios
    .get("https://euas.person.ee/categories/" + this.categoryAlias + "/products")
    .then(response => {
    this.products = response.data;
    });
  }

}
</script>

<style scoped>
.product-panel {
  border: 1px solid red;
  margin-buttom: 15px;
  text-align: center;
}
</style>
