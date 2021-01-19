<template>
  <div>
    <h2 class="mb-2">Type:</h2>
    <ul>
      <li v-for="tag in tags" :key="tag.id">{{ tag.slug }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    tags() {
      return this.$store.state.tags
    },
  },
}
</script>

<style lang="scss" scoped></style>
