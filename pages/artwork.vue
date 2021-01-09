<template>
  <div class="wrapper">
    <section class="section">
      <NuxtLink to="/">home</NuxtLink>
    </section>
    <section class="section">
      <div class="artwork">
        <div class="tags"></div>
        <h2>tags:</h2>
        <ul>
          <li v-for="tag in allTags" :key="tag.id">
            {{ tag }}
          </li>
        </ul>
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
      sizeTags: ['5x4', '10x7', '14x10', '24x18', '38x25'],
    }
  },
  computed: {
    artworks() {
      return this.$store.state.artworks
    },
    tags() {
      return this.$store.state.tags
    },
    allTags() {
      const tagList = []
      this.tags.forEach((el) => {
        tagList.push(el.tags)
      })
      const allTags = [...new Set(tagList.flat())]
      return allTags.sort()
    },
  },
}
</script>
