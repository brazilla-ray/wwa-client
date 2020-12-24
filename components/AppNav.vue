<template>
  <aside class="menu">
    <ul v-for="page in pages" :key="page.id" class="menu-list">
      <li v-if="page.name !== 'index'">
        <a :href="page.path">{{ page.name }}</a>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  computed: {
    pages() {
      return this.$router.options.routes
    },
  },
}
</script>

<style lang="scss">
.menu-list a {
  color: $link;
  text-decoration: underline;
  font-size: 2em;
}
</style>
