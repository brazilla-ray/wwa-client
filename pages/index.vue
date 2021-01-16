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
        <artwork></artwork>
      </div>
    </section>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppNav from '~/components/AppNav.vue'
import Hero from '~/components/Hero.vue'
import Artwork from '~/components/Artwork.vue'

export default {
  components: {
    AppHeader,
    Artwork,
    AppNav,
    Hero,
  },
  data() {
    return {
      selectedTag: null,
      recentTag: 'recent',
      activeClass: 'active',
    }
  },
  computed: {
    artworks() {
      return this.$store.state.artworks
    },
    recentArtworks() {
      if (!this.recentTag) return this.artworks
      return this.artworks.filter((el) => el.tags.includes(this.recentTag))
    },
    tags() {
      return this.$store.state.tags
    },
  },
}
</script>
