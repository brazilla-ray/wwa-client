<template>
  <aside class="menu">
    <ul class="menu-list">
      <li>
        <NuxtLink to="/artwork">artwork</NuxtLink>
        <NuxtLink to="/writing">writing</NuxtLink>
        <NuxtLink to="/about">about</NuxtLink>
        <NuxtLink to="/contact">contact</NuxtLink>
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
