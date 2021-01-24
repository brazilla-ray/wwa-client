<template>
  <div class="mb-6">
    <figure
      v-for="artwork in sortedArtworks"
      :key="artwork.id"
      class="image mb-6"
    >
      <img :srcset="artwork.image.srcset" />
      <figcaption class="has-text-left pl-4 pt-4">
        <p class="is-size-6">{{ artwork.title }}</p>
        <p class="is-size-7">{{ artwork.date }}</p>
        <p class="is-size-7">{{ artwork.medium }}</p>
        <p class="is-size-7">{{ artwork.dimensions }}</p>
      </figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  computed: {
    artworks() {
      return this.$store.state.artworks
    },
    sortedArtworks() {
      if (this.selectedTag === 'all') return this.artworks
      return this.$store.getters.sortedArtworks.filter((el) =>
        el.tags.includes(this.selectedTag.slug)
      )
    },
    selectedTag() {
      return this.$store.getters.selectedTag
    },
  },
}
</script>

<style lang="scss" scoped>
figcaption {
  font-family: 'Merriweather', serif;
}
</style>
