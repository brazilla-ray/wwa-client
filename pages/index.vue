<template>
  <div class="wrapper">
    <section class="section">
      <div class="columns is-mobile">
        <div class="column is-half-mobile">
          <app-header />
        </div>
        <div class="column">
          <app-nav />
        </div>
      </div>
    </section>
    <hero hero-title="recent work" />
    <section class="section">
      <div class="artwork">
        <gallery-vue :selected-tag="selectedTag"></gallery-vue>
      </div>
    </section>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppNav from '~/components/AppNav.vue'
import Hero from '~/components/Hero.vue'
import GalleryVue from '~/components/Gallery.vue'

export default {
  components: {
    AppHeader,
    GalleryVue,
    AppNav,
    Hero,
  },
  data() {
    return {
      selectedTag: 'recent',
    }
  },
}
</script>
