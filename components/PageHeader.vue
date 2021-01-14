<template>
  <div class="wrapper">
    <nav class="navbar">
      <div class="navbar-brand">
        <NuxtLink class="navbar-item" to="/">William Whitaker</NuxtLink>
        <a
          role="button"
          class="navbar-burger"
          data-target="navMenu"
          aria-label="menu"
          aria-expanded="false"
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div id="navMenu" class="navbar-menu">
        <NuxtLink class="navbar-item has-text-link" to="/" exact>home</NuxtLink>
        <NuxtLink class="navbar-item has-text-link" to="/artwork"
          >artwork</NuxtLink
        >
        <NuxtLink class="navbar-item has-text-link" to="/writing"
          >writing</NuxtLink
        >
        <NuxtLink class="navbar-item has-text-link" to="/about">about</NuxtLink>
        <NuxtLink class="navbar-item has-text-link" to="/contact"
          >contact</NuxtLink
        >
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentRoute: null,
    }
  },
  mounted() {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    )
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach((el) => {
        el.addEventListener('click', () => {
          const target = el.dataset.target
          const $target = document.getElementById(target)

          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.nuxt-link-active {
  font-weight: bold;
}
</style>
