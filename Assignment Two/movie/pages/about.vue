<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        movie
      </h1>
      <h2 class="subtitle">
        Movie listing app
      </h2>
      <div class="links">
        <nuxt-link to="/movies" class="button--grey">
          Movies
        </nuxt-link>
        <nuxt-link to="/movies/detail" class="button--grey">
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
