<template>
  <footer class="footer w-full bg-pernil-900 p-6 relative">
    <div class="container h-full flex flex-wrap items-center">
      <div class="w-full md:w-1/3 order-2 md:order-1 text-center md:text-left">
        <h2 class="text-2xl text-pernil-200 mb-4 ">
          {{ $t('venezuela-true-love') }} 🥑
        </h2>
        <span class="copyright text-xs text-pernil-400"
          >© Copyright
          <a
            class="text-aguacate-500 hover:text-aguacate-600"
            href="https://alvarosaburido.com/"
            rel="noopener"
            target="_blank"
            >Alvaro Saburido</a
          >
          2020.</span
        >
      </div>
      <div class="w-full md:w-1/3 order-1 mb-4 md:order-2">
        <img
          class="footer-logo mx-auto mb-6"
          src="@/assets/img/icon.svg"
          alt="Footer Logo"
        />
        <LanguageMenu class="footer-language-menu" />
      </div>
      <div
        class="w-full md:w-1/3 mb-4 order-3 text-xs text-pernil-400 text-right"
      >
        {{ $t('illustrations-made-by') }}
        <a
          href="https://www.instagram.com/andrade.art/?hl=es"
          class="text-aguacate-500 hover:text-aguacate-600"
          rel="noopener"
          target="_blank"
          >@andrade.art</a
        >
      </div>
      <div
        class="absolute w-full hidden md:block py-2 bottom-0 left-0 bg-black text-gray-800 text-xs"
      >
        <div class="container">
          {{ $t('proudly-made-with') }}
          <a
            class="text-gray-700 hover:text-gray-600"
            href="https://nuxtjs.org/"
            rel="noopener"
            target="_blank"
            >Nuxt</a
          >
          +
          <a
            class="text-gray-700 hover:text-gray-600"
            href="https://tailwindcss.com/"
            rel="noopener"
            target="_blank"
            >Tailwind</a
          >, hosting

          <a
            class="text-gray-700 hover:text-gray-600"
            href="https://www.netlify.com//"
            rel="noopener"
            target="_blank"
            >Netlify</a
          >.
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
.footer {
  @media (min-width: 640px) {
    height: 250px;
  }
}

.footer-logo {
  width: 64px;
  height: 64px;
  opacity: 0.8;
  filter: grayscale(1);
}

.footer-language-menu {
  @apply text-pernil-200 mx-auto;
}
</style>
