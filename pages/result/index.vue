<template>
  <div class="result">
    <div class="container">
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div class="card overflow-scroll ">
          <div class="px-6 py-4 text-gray-700 text-base">
            <Ipsum />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.card {
  @apply max-w-sm rounded-lg overflow-hidden shadow-lg;
}
</style>
