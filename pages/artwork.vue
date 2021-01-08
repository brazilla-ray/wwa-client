<template>
  <div class="wrapper">
    <section class="section">
      <NuxtLink to="/">home</NuxtLink>
    </section>
    <section class="section">
      <div class="artwork">
        <div v-for="artwork in artworks" :key="artwork.id">
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
export default {
  data() {
    return {
      selectedTag: null,
    }
  },
  computed: {
    artworks() {
      return this.$store.state.artworks
    },
  },
}
</script>
