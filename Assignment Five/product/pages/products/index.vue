<template>
  <section class="container">
    <h3 class="title">
      List of Products
    </h3>
    <hr>

    <div class="columns is-variable is-multiline">
      <div v-for="(item, i) in products" :key="item._id" class="column is-3 is-one-quarter">
        <div :class="i">
          <nuxt-link :to="`products/${item._id}`">
            <img src="/img/macbook-pro-16-inch.jpg">
          </nuxt-link>
          <h3>{{ item.title }}</h3>
          <h5>Price: {{ item.price }}</h5>
          <h5>Quantity: {{ item.quantity }}</h5>
        </div>
      </div>
      <infinite-loading v-if="products.length" @infinite="infiniteScroll" spinner="spiral" />
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  layout: 'listing-layout',
  data: () => ({
    products: [],
    page: 1
  }),
  computed: {
    url () {
      return `${process.env.API_BASE_URL}/products?page=${this.page}&limit=3`
    }
  },
  created () {
    this.fetchProducts()
  },
  methods: {
    async fetchProducts () {
      await axios.get(this.url).then(data => (this.products = data.data.docs))
    },
    infiniteScroll ($state) {
      setTimeout(() => {
        this.page++
        axios
          .get(this.url)
          .then((response) => {
            if (response.data.docs.length > 1) {
              response.data.docs.forEach(item => this.products.push(item))
              $state.loaded()
            } else {
              $state.complete()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }, 500)
    }
  }
}
</script>
