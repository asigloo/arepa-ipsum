<template>
<nav class="flex items-center justify-between flex-wrap py-2">
  <div class="absolute pl-12 top-2">
    <Logo/>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-aguacate-600 border-aguacate-600 hover:text-white hover:bg-aguacate-600 hover:border-white">
      <arepa-icon class="fill-current h-3 w-3" name="menu"/>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="lg:flex-grow">
      <h1 class="title text-bg text-3xl mx-auto" ref="title">
        Arepa Ipsum
      </h1>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'arepaHeader'
}
</script>

<style>
.title {
  @apply text-center font-display font-bold text-gray-700 mb-4
}


.text-bg {
  background-image: linear-gradient(
    to top,
    #f3ce9780 54%,
    transparent 54%,
    transparent 100%
  );
  width: fit-content;
}
</style>
