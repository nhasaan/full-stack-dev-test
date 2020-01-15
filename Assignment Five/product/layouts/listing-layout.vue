<template>
  <div>
    <header>
      <h2>
        <nuxt-link to="/">
          <logo />
        </nuxt-link>
      </h2>
      <p>
        <input class="input is-rounded" placeholder="Search by product title...">
      </p>
      <nav style="margin-right: 100px;">
        <li>
          <nuxt-link to="/products">
            Products
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">
            About
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/admin">
            Admin
          </nuxt-link>
        </li>
      </nav>
    </header>
    <nuxt />
    <footer>
      <p>
        Made by
        <a href=" https://github.com/nazmulsarkar/" target="_blank">Nazmul Hassan</a>
      </p>
    </footer>
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

<style scoped>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

hr {
  width: 150px;
  height: 3px;
  background-color: #2196f3;
  border: 0;
  margin: auto auto 80px auto;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
}

@media (max-width: 1000px) {
  section {
    padding: 100px 0;
  }
}

@media (max-width: 600px) {
  section {
    padding: 80px 0;
  }
}

section h3.title {
  color: #414a4f;
  text-transform: capitalize;
  font: bold 32px "Open Sans", sans-serif;
  margin-bottom: 35px;
  text-align: center;
}

section p {
  max-width: 800px;
  text-align: center;
  margin-bottom: 35px;
  padding: 0 20px;
  line-height: 2;
}

header {
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h2 {
  font-family: "Quicksand", sans-serif;
}

header nav {
  display: flex;
  padding: 30px;
}

header nav li {
  margin: 0 15px;
  list-style: none;
}

header nav li:first-child {
  margin-left: 0;
}

header nav li:last-child {
  margin-right: 0;
}

@media (min-width: 1280px) {
  header > h2 > a {
    padding-left: 125px;
  }

  header > nav {
    padding-right: 125px;
  }
}

@media (max-width: 700px) {
  header {
    flex-direction: column;
  }

  header h2 {
    margin-bottom: 15px;
  }
}

.product-list {
  background-color: #f7f7f7;
}

.product-list > .grid {
  padding: 15px 0;
}

.product-list .grid .column {
  flex-basis: 25%;
  text-align: center;
}

.product-list .grid .column > div {
  padding: 0 30px;
}

.product-list .grid .column > div > img {
  width: 100%;
}

.product-list .grid .column i {
  font-size: 50px;
  color: #2196f3;
  margin-bottom: 25px;
}

.product-list .grid .column h4 {
  color: #555;
  font-size: 20px;
  margin-bottom: 25px;
}

.product-list .grid .column p {
  margin: 0;
}

.product-list .grid .column.is-full {
  flex-basis: 100%;
}

@media (max-width: 1000px) {
  .product-list .grid .column {
    flex-basis: 70%;
    margin-bottom: 65px;
  }

  .product-list .grid .column:last-child {
    margin-bottom: 0;
  }
}

@media (max-width: 600px) {
  .product-list .grid .column {
    flex-basis: 100%;
  }
}

footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #fff;
  background-color: #414a4f;
  padding: 20px 0 10px;
}

footer p {
  text-transform: uppercase;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 10px;
}

footer p a {
  color: #fff;
}

.NuxtLogo {
  max-width: 60px;
  max-height: 80px;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
