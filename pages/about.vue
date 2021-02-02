<template>
  <div class="wrapper">
    <page-header-vue></page-header-vue>
    <hero-vue hero-title="about"></hero-vue>
    <nuxt-content :document="statement" />
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

    return {
      statement,
    }
  },
}
</script>
