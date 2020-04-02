<template>
  <div class="main-page">
  <h2>Welcome!</h2>
    <ProductPanel title="Recommended" section="recommended"/>
    <ProductPanel title="Buy now" section="buynow"/>
    <ProductPanel title="Top Selling" section="topselling"/>
  </div>
</template>


<script>
import ProductPanel from './ProductPanel.vue'
export default {
  name: 'MainPage',
  components:{
    ProductPanel
  }

}
</script>
<style scoped>

</style>
