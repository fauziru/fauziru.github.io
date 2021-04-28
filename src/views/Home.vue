<template>
  <div>
    <Hero />
    <Wave />
    <Projects />
    <Contact />
    <ScrollToTop />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Projects from '../components/Projects.vue'
import Wave from '../components/Wave.vue'
import Contact from '../components/Contact.vue'
import ScrollToTop from '../components/ScrollToTopButton.vue'

export default {
  components: {
    Hero,
    Projects,
    Wave,
    Contact,
    ScrollToTop
  }
}
</script>
