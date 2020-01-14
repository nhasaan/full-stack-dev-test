<template>
  <section class="container">
    <h3 class="title">
      List of Movies
    </h3>
    <hr>

    <div class="columns is-variable is-multiline">
      <div v-for="(item, i) in movies" :key="item._id" class="column is-3 is-one-quarter">
        <div :class="i">
          <nuxt-link :to="`movies/${item._id}`">
            <img src="/img/greatel-and-hansel.jpg">
          </nuxt-link>
          <h3>{{ item.title }}</h3>
          <h5>Released year: {{ item.release_year }}</h5>
        </div>
      </div>
      <infinite-loading v-if="movies.length" @infinite="infiniteScroll" spinner="spiral" />
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  layout: 'listing-layout',
  data: () => ({
    movies: [],
    page: 1
  }),
  computed: {
    url () {
      return `${process.env.API_BASE_URL}/movies?page=${this.page}`
    }
  },
  created () {
    this.fetchMovies()
  },
  methods: {
    async fetchMovies () {
      await axios.get(this.url).then(data => (this.movies = data.data))
    },
    infiniteScroll ($state) {
      setTimeout(() => {
        this.page++
        axios
          .get(this.url)
          .then((response) => {
            if (response.data.length > 1) {
              response.data.forEach(item => this.movies.push(item))
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
