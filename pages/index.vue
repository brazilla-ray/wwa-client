<template>
  <div class="container">
    <div class="level is-mobile">
      <h1 class="title logo-title has-text-dark">William Whitaker</h1>
      <img
        src="~/assets/images/studioShot.jpg"
        alt="studio shot"
        class="logo-img"
      />
    </div>
    <nav class="menu">
      <ul v-for="page in pages" :key="page.id" class="menu-list">
        <li v-if="page.name !== 'index'">
          <a :href="page.path">{{ page.name }}</a>
        </li>
      </ul>
    </nav>
  </div>
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
.menu {
  padding-left: 37%;
}

.menu-list a {
  color: $link;
  font-size: 3em;
  text-decoration: underline;
}

.title:not(:last-child) {
  margin-bottom: 0;
}

.logo-title {
  line-height: 2;
  align-self: flex-end;
  padding-left: 0.25em;
}

.logo-img {
  width: 53%;
  padding-bottom: 18px;
}
</style>
