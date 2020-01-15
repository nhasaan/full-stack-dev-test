<template>
  <div class="container">
    <section class="product-detail">
      <h3 class="title">
        {{ product.title }}, {{ product.price }}
      </h3>
      <hr>

      <div class="grid">
        <div class="column is-full">
          <div>
            <img src="/img/macbook-pro-16-inch.jpg">
            <div class="description">
              <p>Stock available: {{ product.quantity }}</p>
              <p>{{ product.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'listing-layout',
  async asyncData ({ params, $axios }) {
    const product = await $axios.$get(
      `${process.env.API_BASE_URL}/products/${params.id}`
    )
    // .then(data => (product = data.data))
    return { product }
  }
}
</script>
