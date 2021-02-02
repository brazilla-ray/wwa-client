<template>
  <div class="wrapper">
    <page-header-vue></page-header-vue>
    <hero-vue hero-title="about"></hero-vue>
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
}
</script>
