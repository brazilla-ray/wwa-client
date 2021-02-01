<template>
  <section class="hero is-light is-bold">
    <div class="hero-body">
      <span class="is-size-3">{{ heroTitle }}</span>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    heroTitle: {
      type: String,
      default: 'hero!',
    },
  },
}
</script>
