<template>
  <section class="hero is-dark is-bold">
    <div class="hero-body">
      <span class="icon-text">
        <span class="is-size-3">{{ heroTitle }}</span>
        <span class="icon is-large">
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
