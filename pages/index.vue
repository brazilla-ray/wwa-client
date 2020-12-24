<template>
  <section class="section">
    <div class="columns is-mobile">
      <div class="column is-half-mobile">
        <app-header />
      </div>
      <div class="column">
        <app-nav />
      </div>
    </div>
    <img
      src="~/assets/images/studioShot.jpg"
      alt="studio shot"
      class="logo-img"
    />
  </section>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppNav from '~/components/AppNav.vue'

export default {
  components: {
    AppHeader,
    AppNav,
  },
}
</script>
