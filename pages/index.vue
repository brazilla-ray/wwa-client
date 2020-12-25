<template>
  <section>
    <div class="columns is-mobile">
      <div class="column is-half-mobile">
        <app-header />
      </div>
      <div class="column">
        <app-nav />
      </div>
    </div>
    <hero />
  </section>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppNav from '~/components/AppNav.vue'
import Hero from '~/components/Hero.vue'

export default {
  components: {
    AppHeader,
    AppNav,
    Hero,
  },
}
</script>
