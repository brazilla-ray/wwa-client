<template>
  <div class="wrapper">
    <page-header-vue></page-header-vue>
    <main class="section">
      <h1 class="is-size-4 mb-4">{{ post.title.rendered }}</h1>
      <section class="post_body" v-html="post.content.rendered"></section>
    </main>
  </div>
</template>

<script>
import PageHeaderVue from '~/components/PageHeader.vue'

export default {
  components: { PageHeaderVue },
  data() {
    return {
      slug: this.$route.params.slug,
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts
    },
    post() {
      return this.posts.find((el) => el.slug === this.slug)
    },
  },
  created() {
    this.$store.dispatch('getPosts')
  },
}
</script>

<style lang="scss">
.post_body {
  font-family: 'Merriweather', serif;
}
</style>
