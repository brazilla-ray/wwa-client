<template>
  <div class="wrapper">
    <page-header-vue></page-header-vue>
    <div class="posts">
      <main>
        <h2>posts</h2>
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
export default {
  components: {
    PageHeaderVue,
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
