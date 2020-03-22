<template>
  <div class="main">
  <Header/>
  Main Page from component
    <ProductPanel title="Best Offers"/>
    <ProductPanel title="Latest"/>
    <ProductPanel title="Sale"/>
  </div>
  </template>

<script>
import ProductPanel from './ProductPanel.vue'

export default {
  name: 'MainPage',
  components: {
    ProductPanel
  }
}
</script>

<style scoped>
