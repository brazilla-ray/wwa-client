<template>
  <div class="wrapper">
    <page-header-vue class="mb-6"></page-header-vue>
    <hero-vue hero-title="artwork"></hero-vue>
    <section class="section">
      <div class="artwork">
        <artwork-tags-vue></artwork-tags-vue>
        <gallery-vue></gallery-vue>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeaderVue from '~/components/PageHeader.vue'
import GalleryVue from '~/components/Gallery.vue'
import HeroVue from '~/components/Hero.vue'
import ArtworkTagsVue from '~/components/ArtworkTags.vue'

export default {
  components: {
    GalleryVue,
    HeroVue,
    PageHeaderVue,
    ArtworkTagsVue,
  },
}
</script>
