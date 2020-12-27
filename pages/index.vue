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
        <div v-for="(artwork, index) in recentArtworks" :key="artwork.id">
          <div :key="index">
            <figure>
              <img :src="artwork.acf.image.sizes.large" />
            </figure>
          </div>
        </div>
        <h2>tags</h2>
        <ul>
          <li v-for="tag in tags" :key="tag.id">
            <a>{{ tag.name }}</a>
          </li>
        </ul>
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
      recentTag: 119,
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
    sortedPosts() {
      if (!this.selectedTag) return this.posts
      return this.posts.filter((el) => el.tags.includes(this.selectedTag))
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
