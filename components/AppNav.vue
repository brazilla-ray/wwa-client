<template>
  <aside class="menu">
    <ul class="menu-list has-text-right">
      <li>
        <NuxtLink to="/artwork" class="block is-size-3 has-text-link"
          >artwork</NuxtLink
        >
        <NuxtLink to="/writing" class="block is-size-3 has-text-link"
          >writing</NuxtLink
        >
        <NuxtLink to="/about" class="block is-size-3 has-text-link"
          >about</NuxtLink
        >
        <NuxtLink to="/contact" class="block is-size-3 has-text-link"
          >contact</NuxtLink
        >
      </li>
    </ul>
  </aside>
</template>

<style lang="scss">
.menu-list a {
  text-decoration: underline;
}
</style>
