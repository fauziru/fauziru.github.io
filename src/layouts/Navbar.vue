<template>
  <header class="text-gray-400 bg-gray-900 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          class="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
        >
          <g>
            <title>Layer 1</title>
            <text
              xml:space="preserve"
              text-anchor="start"
              font-family="'Quicksand SemiBold'"
              font-size="24"
              id="svg_7"
              y="21.0026"
              x="7.08854"
              stroke-dasharray="null"
              stroke-width="null"
              fill="#ffffff"
            >
              f
            </text>
          </g>
        </svg>
        <span class="ml-3 text-xl">Fauziru</span>
      </a>
      <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
        <a
          v-for="(item, index) in link"
          :key="index"
          @click="linkScroll(item.id)"
          class="mr-5 hover:text-white"
        >
          {{ item.title }}
        </a>
      </nav>
      <button
        class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        @click="goToInsta"
      >
        <i class="fab fa-instagram mr-3"></i>
        instagram
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    link: [
      { id: 'home', title: 'Home' },
      { id: 'projects', title: 'Projects' },
      { id: 'contact', title: 'Contact' }
    ]
  }),
  methods: {
    goToInsta () {
      window.open('https://www.instagram.com/fauziumara/', '_blank')
    },
    linkScroll (id) {
      document.getElementById(id).scrollIntoView()
    },
    linkScrollToTop () {
      console.log('to top')
    }
  }
}
</script>
