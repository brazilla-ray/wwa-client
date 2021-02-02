<template>
  <div class="wrapper">
    <page-header-vue></page-header-vue>
    <hero-vue hero-title="statement"></hero-vue>
    <section class="section">
      <nuxt-content :document="statement" class="post_body" />
    </section>
    <hero-vue hero-title="bio"></hero-vue>
    <section class="section">
      <nuxt-content :document="bio" class="post_body" />
    </section>
    <hero-vue hero-title="cv"></hero-vue>
    <section class="section">
      <nuxt-content :document="cv" />
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
  async asyncData({ $content }) {
    const statement = await $content('statement').fetch()
    const bio = await $content('bio').fetch()
    const cv = await $content('cv').fetch()

    return {
      statement,
      bio,
      cv,
    }
  },
}
</script>

<style lang="scss">
.post_body {
  font-family: 'Merriweather', serif;
  hyphens: auto;
}
</style>
