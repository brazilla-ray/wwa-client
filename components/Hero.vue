<template>
  <section class="hero is-light">
    <div class="hero-body">
      <span class="icon-text">
        <span>{{ heroTitle }}</span>
        <span class="icon">
          <font-awesome-icon :icon="['fas', 'arrow-circle-down']" />
        </span>
      </span>
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
