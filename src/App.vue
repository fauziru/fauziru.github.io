<template>
  <div id="app">
    <Navbar />
    <Content />
  </div>
</template>

<script>
import Navbar from './layouts/Navbar.vue'
import Content from './layouts/Content.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Content
  }
}
</script>

<style>
#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #111827;
}
</style>
