<template>
  <div class="wrapper">
    <page-header-vue></page-header-vue>
    <hero-vue hero-title="writing"></hero-vue>
    <section class="section">
      <div class="posts">
        <main>
          <div v-for="post in posts" :key="post.id" class="post">
            <h3 class="mb-4">
              <a :href="`${post.slug}`" class="is-size-4">{{
                post.title.rendered
              }}</a>
            </h3>
            <div class="post_body">
              <div v-html="post.content.rendered"></div>
            </div>
            <a :href="`blog/${post.slug}`" class="is-uppercase is-size-7"
              >Read more...</a
            >
          </div>
        </main>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeaderVue from '~/components/PageHeader.vue'
import HeroVue from '~/components/Hero.vue'
export default {
  components: {
    PageHeaderVue,
    HeroVue,
  },
  computed: {
    posts() {
      return this.$store.state.posts
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
