<template>
  <!-- hero -->
  <section
    id="home"
    class="text-gray-400 bg-gray-900 body-font"
  >
    <div
      data-aos="zoom-in-up"
      class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
    >
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Fauzi Reza Umara <br class="hidden lg:inline-block" />Fullstack
          Developer
        </h1>
        <p class="mb-8 leading-relaxed">
          I am new to this field, love to learn new things about all website
          development technologies. Learn <b>Vue js</b> for frontend and <b>Laravel</b> for
          backend in almost 3 months and will continue to learn.
        </p>
        <div class="flex justify-center">
          <button
            @click="downloadCV"
            class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
          >
            Download CV
          </button>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          src="@/assets/image/illustrasi-01.png"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    downloadCV () {
      window.open('https://drive.google.com/file/d/1O5GJ581ZU7v7RhgkgQymEO8coltce2S-/view?usp=sharing', '_blank')
    }
  }
}
</script>
