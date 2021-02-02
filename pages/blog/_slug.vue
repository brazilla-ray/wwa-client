<template>
  <div class="wrapper">
    <page-header-vue></page-header-vue>
    <hero-vue :hero-title="post.title.rendered"></hero-vue>
    <main class="section">
      <section class="post_body" v-html="post.content.rendered"></section>
    </main>
  </div>
</template>

<script>
import PageHeaderVue from '~/components/PageHeader.vue'
import HeroVue from '~/components/Hero.vue'

export default {
  components: { PageHeaderVue, HeroVue },
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
