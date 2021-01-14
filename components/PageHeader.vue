<template>
  <div class="wrapper">
    <header>
      <h1>William Whitaker</h1>
      <nav class="navbar">
        <ul>
          <li v-for="route in appRoutes" :key="route.name">
            <NuxtLink :to="route.path">{{ route.name }}</NuxtLink>
          </li>
        </ul>
        <h2>{{ currentRoute }}</h2>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appRoutes: [],
    }
  },
  computed: {
    currentRoute() {
      return this.$route.path
    },
  },
  created() {
    this.$router.options.routes.forEach((route) => {
      this.appRoutes.push({
        name: route.name,
        path: route.path,
      })
    })
  },
}
</script>
