<template>
  <aside class="menu">
    <ul class="menu-list">
      <li>
        <NuxtLink to="/artwork" class="pb-5">artwork</NuxtLink>
        <NuxtLink to="/writing" class="pb-5">writing</NuxtLink>
        <NuxtLink to="/about" class="pb-5">about</NuxtLink>
        <NuxtLink to="/contact" class="pb-5">contact</NuxtLink>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss">
.menu-list a {
  color: $link;
  text-decoration: underline;
  font-size: 2em;
}
</style>
