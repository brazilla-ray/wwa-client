<template>
  <div class="wrapper">
    <section class="section">
      <NuxtLink to="/">home</NuxtLink>
    </section>
    <section class="section">
      <div class="artwork">
        <div class="tags">
          <h2>dimensions:</h2>
          <ul>
            <li
              v-for="tag in dimensionsTags"
              :key="tag.id"
              @click="updateTag(tag)"
            >
              <a>{{ tag }}</a>
            </li>
          </ul>
          <h2>types:</h2>
          <ul>
            <li v-for="tag in mediaTags" :key="tag.id" @click="updateTag(tag)">
              <a>{{ tag }}</a>
            </li>
          </ul>
        </div>
        <div v-for="artwork in sortedArtworks" :key="artwork.id">
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
      typeTags: ['painting', 'drawing', 'collage'],
    }
  },
  computed: {
    artworks() {
      return this.$store.state.artworks
    },
    sortedArtworks() {
      if (!this.selectedTag) return this.artworks
      return this.artworks.filter((el) => el.tags.includes(this.selectedTag))
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
    dimensionsTags() {
      if (!this.sizeTags) return this.allTags
      return this.allTags.filter((el) => this.sizeTags.includes(el))
    },
    mediaTags() {
      if (!this.typeTags) return this.allTags
      return this.allTags.filter((el) => this.typeTags.includes(el))
    },
  },
  methods: {
    updateTag(tag) {
      if (!this.selectedTag) {
        this.selectedTag = tag
      } else {
        this.selectedTag = null
      }
    },
  },
}
</script>
