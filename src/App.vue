<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">v-permission</RouterLink>
        <RouterLink to="/permission">v-permission-next</RouterLink>
        <RouterLink to="/longpress">longpress</RouterLink>
        <RouterLink to="/longpress2">longpress2</RouterLink>
        <RouterLink to="/transition">transition</RouterLink>
        <RouterLink to="/shake">shake</RouterLink>
        <RouterLink to="/memo">memo</RouterLink>
        <RouterLink to="/largelist">largelist</RouterLink>
        <RouterLink to="/test">test</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
