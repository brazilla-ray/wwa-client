<template>
  <div class="wrapper">
    <page-header-vue></page-header-vue>
    <hero-vue hero-title="writing"></hero-vue>
    <div class="posts">
      <main>
        <div v-for="post in posts" :key="post.id" class="post">
          <h3>
            <a :href="`${post.slug}`">{{ post.title.rendered }}</a>
          </h3>
          <div v-html="post.content.rendered"></div>
          <a :href="`blog/${post.slug}`">Read more =></a>
        </div>
      </main>
    </div>
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
