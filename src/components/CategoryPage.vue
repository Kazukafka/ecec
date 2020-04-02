<template>
<div class="CategoryPage">
  <h2>Category page for {{this.$route.params.categoryAlias}}</h2>
  <ProductPanel :categoryAlias="this.$route.params.categoryAlias" />
</div>
</template>

<script>
import ProductPanel from './ProductPanel.vue'

export default {
  name: 'CategoryPage',
  components: {
    ProductPanel
  }
}
</script>

<style scoped>
