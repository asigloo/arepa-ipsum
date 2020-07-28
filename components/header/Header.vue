<template>
  <nav class="flex items-center justify-between flex-wrap py-2 px-4">
    <div class="md:absolute md:pl-8">
      <Logo />
    </div>

    <div class="md:w-full md:block flex-grow md:flex md:items-center md:w-auto">
      <div class="md:flex-grow">
        <h1 class="title text-bg text-2xl md:text-3xl mx-auto" ref="title">
          Arepa Ipsum
        </h1>
      </div>
    </div>
    <div class="block md:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-aguacate-600 border-aguacate-600 hover:text-white hover:bg-aguacate-600 hover:border-white"
      >
        <arepa-icon class="fill-current h-3 w-3" name="menu" />
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'arepaHeader',
};
</script>

<style>
.title {
  @apply text-center font-display font-bold text-gray-700 mb-4;
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
