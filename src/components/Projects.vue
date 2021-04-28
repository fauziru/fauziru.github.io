<template>
  <section
    id="projects"
    class="text-gray-400 bg-gray-900 body-font -mt-24"
  >
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      class="container px-5 py-28 mx-auto"
    >
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          Projects
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Some of project that i have build for learn to be better
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div
          v-for="(item, index) in projects"
          :key="index"
          class="lg:w-1/3 sm:w-1/2 p-4"
          @click="goToLink(item.link)"
        >
          <div class="flex relative">
            <img
              v-if="item.imgPath"
              alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center"
              :src="getImage(item.imgPath)"
            />
            <img
              v-else
              alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="https://dummyimage.com/600x360"
            />
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-red-400 mb-1">
                {{ item.subTitle }}
              </h2>
              <h1 class="title-font text-lg font-medium text-white mb-3">
                {{ item.title }}
              </h1>
              <p class="leading-relaxed">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('project', ['projects'])
  },
  methods: {
    goToLink (link) {
      window.open(link, '_blank')
    },
    getImage (image) {
      return require(`@/assets/image/${image}`)
    }
  }
}
</script>
