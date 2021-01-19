<template>
  <div>
    <h2 class="mb-2">Type:</h2>
    <ul class="tags">
      <li
        v-for="type in types"
        :key="type.id"
        class="tag is-light is-medium is-link"
      >
        {{ type.slug }}
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
    types() {
      return this.tags.filter((el) => this.typeTags.includes(el.slug)).reverse()
    },
  },
}
</script>

<style lang="scss" scoped></style>
