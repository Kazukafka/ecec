<template>
  <div class=Category>
    categories page for  {{this.$route.params.categoryAlias}}
    <ProductPanel :categoryAlias="this.$route.params.categoryAlias"/>

  </div>
</template>

<script>
import ProductPanel from './ProductPanel.vue'
export default {
 name: 'Category',
  components:{
    ProductPanel
  }
}
</script>
<style scoped>

</style>
