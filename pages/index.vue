<template>
  <div class="container">
    <div class="flex flex-col items-center">
      <Logo />
      <h1 class="title text-bg text-4xl md:text-6xl">
        Arepa Ipsum
      </h1>
      <p class="text-gray-700 mb-4">{{$t('description')}}</p>
      <Button type="pernil" outline> {{ $t('dale-chamo') }}</Button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

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
