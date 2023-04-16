<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/tutorial/1">Getting Started</RouterLink>
        <RouterLink to="/tutorial/2">Declarative rendering</RouterLink>
        <RouterLink to="/tutorial/3">Attribute bindings</RouterLink>
        <RouterLink to="/tutorial/4">Event listeners</RouterLink>
        <RouterLink to="/tutorial/5">Form bindings</RouterLink>
        <RouterLink to="/tutorial/6">Conditional rendering</RouterLink>
        <RouterLink to="/tutorial/7">List rendering</RouterLink>
        <RouterLink to="/tutorial/8">Computed property</RouterLink>
        <RouterLink to="/tutorial/9">Lifecykle and Template Refs</RouterLink>
        <RouterLink to="/tutorial/10">Watchers</RouterLink>
        <RouterLink to="/tutorial/11">Components</RouterLink>
        <RouterLink to="/tutorial/12">Props</RouterLink>
        <RouterLink to="/tutorial/13">Emits</RouterLink>
        <RouterLink to="/tutorial/14">Slots</RouterLink>
        <RouterLink to="/tutorial/15">Nice confeti</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

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

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
