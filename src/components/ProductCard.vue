<template>
  <div class="ProductCard">

        <b-card
           :title="product.title"
           :img-src="product.image"
           img-alt="Image"
           img-top
           tag="article"
           style="max-width: 20rem;"
           class="mb-2"
        >
           <b-card-text>
              {{product.description}}
           </b-card-text>


          <b-button :to=" '/products/' + product.id" variant="primary">More details</b-button>

          <b-button
          @click="addToCart"
          variant="success">Add To Cart </b-button>
        </b-card>
  </div>
</template>

<script>

export default {
  name: 'ProductCard',
  props: {
    product: Object
  },
  methods: {
    addToCart: function(){
      if(!this.$root.$data.cart.items) this.$root.$data.cart.items=[]
      this.$root.$data.cart.items.push(
      {
        productId: this.product.id,
        qty: 1,
        optionCode: this.product.options[0].code,
        optionImage:this.product.options[0].image,
        price: this.product.options[0].price,
        total: this.product.options[0].price

    }
    )
    this.$root.$data.saveCart();
    //this.$emit('cart-updated')
  }
}
}
</script>

<style scoped>

</style>
