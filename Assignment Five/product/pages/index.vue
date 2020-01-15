<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        product
      </h1>
      <h2 class="subtitle">
        Product listing app
      </h2>
      <div class="links">
        <nuxt-link to="/products" class="button--grey">
          Products
        </nuxt-link>
        <nuxt-link to="/products/detail" class="button--grey">
          Detail
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
