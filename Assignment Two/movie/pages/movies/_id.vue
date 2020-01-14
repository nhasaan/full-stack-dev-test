<template>
  <div class="container">
    <section class="movie-detail">
      <h3 class="title">
        {{ movie.title }}, {{ movie.release_year }}
      </h3>
      <hr>

      <div class="grid">
        <div class="column is-full">
          <div>
            <img src="/img/greatel-and-hansel.jpg">
            <div class="description">
              <p>{{ movie.description }}</p>
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
    const movie = await $axios.$get(
      `${process.env.API_BASE_URL}/movies/${params.id}`
    )
    // .then(data => (movie = data.data))
    return { movie }
  }
}
</script>
