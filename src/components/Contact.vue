<template>
  <section
    id="contact"
    data-aos="zoom-in-up"
    class="mt-12 text-gray-400 bg-gray-900 body-font relative"
  >
    <div class="flex flex-col text-center w-full mb-20 pt-24">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
        Contact
      </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
        Hit me up please! &#128513;
      </p>
    </div>
    <div class="container px-5 pb-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div class="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe
          width="100%"
          height="100%"
          title="map"
          class="absolute inset-0"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          scrolling="no"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13334.052271874196!2d106.82810941849725!3d-6.491588342436428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c1e7cdd2e8d3%3A0x401576d14fed590!2sCibinong%2C%20Bogor%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1619578461166!5m2!1sen!2sid"
          style="filter: grayscale(1) contrast(1.2) opacity(0.16)"
        />
        <div class="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
          <div class="lg:w-1/2 px-6">
            <h2 class="title-font font-semibold text-white tracking-widest text-xs">
              ADDRESS
            </h2>
            <p class="mt-1">Cibinong Bogor, Jawa Barat</p>
          </div>
          <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 class="title-font font-semibold text-white tracking-widest text-xs">
              EMAIL
            </h2>
            <a class="text-red-400 leading-relaxed">fauzirezaumr@email.com</a>
            <h2 class="title-font font-semibold text-white tracking-widest text-xs mt-4">
              PHONE
            </h2>
            <p class="leading-relaxed">+62-896-9120-7607</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 class="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
        <p class="leading-relaxed mb-5">
          Please don't hesitate to give me suggestions, criticism and comments,
          thank you
        </p>
        <div class="relative mb-4">
          <label
            for="name"
            class="leading-7 text-sm text-gray-400"
          >Name</label>
          <input
            type="text"
            id="name"
            name="name"
            class="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label
            for="email"
            class="leading-7 text-sm text-gray-400"
          >Email</label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label
            for="message"
            class="leading-7 text-sm text-gray-400"
          >Message</label>
          <textarea
            id="message"
            name="message"
            class="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button class="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
          Button
        </button>
      </div>
    </div>
  </section>
</template>
