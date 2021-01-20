<template>
  <div>
    <h2 class="mb-2">Type:</h2>
    <ul class="tags">
      <li
        v-for="tag in mediaTypes"
        :key="tag.id"
        :class="[
          tag === selectedTag ? 'has-background-link has-text-link-light' : '',
        ]"
        class="tag is-light is-medium is-link"
        @click="updateTag(tag)"
      >
        {{ tag.slug }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTag: null,
      typeTags: ['painting', 'drawing', 'collage'],
    }
  },
  computed: {
    tags() {
      return this.$store.state.tags
    },
    mediaTypes() {
      return this.tags.filter((el) => this.typeTags.includes(el.slug)).reverse()
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

<style lang="scss" scoped></style>
