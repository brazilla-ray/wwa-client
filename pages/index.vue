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
    <hero />
    <section class="section">
      <div class="artwork">
        <div v-for="artwork in recentArtworks" :key="artwork.id">
          <figure>
            <img :srcset="artwork.image.srcset" />
            <figcaption>
              <p>{{ artwork.title }}</p>
              <p>{{ artwork.date }}</p>
              <p>{{ artwork.medium }}</p>
              <p>{{ artwork.dimensions }}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  </div>
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
    posts() {
      return this.$store.state.posts
    },
    tags() {
      return this.$store.state.tags
    },
  },
  methods: {
    updateTag(tag) {
      if (!this.selectedTag) {
        this.selectedTag = tag.id
      } else {
        this.selectedTag = null
      }
    },
  },
}
</script>
