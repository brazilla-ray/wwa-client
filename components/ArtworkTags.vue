<template>
  <div class="mb-6">
    <h2 class="mb-2">Type:</h2>
    <ul class="tags">
      <li
        :class="[
          selectedTag === 'all'
            ? 'has-background-link has-text-link-light'
            : '',
        ]"
        class="tag is-light is-medium is-link"
        @click="updateTag('all')"
      >
        all
      </li>
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
    selectedTag() {
      return this.$store.getters.selectedTag
    },
  },
  methods: {
    updateTag(tag) {
      return this.$store.commit('updateSelected', tag)
    },
  },
}
</script>

<style lang="scss" scoped></style>
