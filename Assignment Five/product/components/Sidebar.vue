<template>
  <div class="sidebar">
    <ul>
      <li class="menu">
        <nuxt-link to="/">
          Home
        </nuxt-link>
      </li>
      <li class="menu">
        <nuxt-link to="/products">
          Products
        </nuxt-link>
      </li>
      <li class="menu">
        <nuxt-link to="/admin">
          Products Table
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  justify-content: center;
  display: flex;
  align-items: flex-start;
  min-height: 100vh;
  text-align: left;
}
@media (min-width: 1280px) {
  .sidebar {
    margin-top: 120px;
  }
}
@media (max-width: 1279px) {
  .sidebar {
    min-height: initial;
    display: none;
  }
}
</style>
