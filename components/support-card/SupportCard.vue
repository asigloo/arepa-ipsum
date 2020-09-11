<template>
  <div class="support-card card p-6 relative">
    <a
      class="buy-me-arepa-btn btn btn-light absolute z-10 hover:shadow-md animate__animated animate__tada"
      href="https://www.buymeacoffee.com/alvarosaburido"
      target="_blank"
      rel="noopener noreferrer"
      ><span class="mr-4">🥑</span>{{ $t('buy-me-an-arepa') }}</a
    >
    <img
      class="grandulated-flower absolute w-2/3 pointer-events-none"
      src="@/assets/img/granulated-flower.png"
      alt="Grandulated Tropical Flower on bg"
    />
    <img
      class="absolute red-guacamaya z-20 pointer-events-none"
      src="@/assets/img/red-guacamaya.png"
      alt="Ara Macao"
    />
    <img
      class="absolute blue-guacamaya z-10 pointer-events-none"
      src="@/assets/img/blue-guacamaya.png"
      alt="Ara Macao"
    />
  </div>
</template>

<script>
export default {
  name: 'supportCard',
};
</script>

<style>
.support-card {
  height: 400px;
}

.grandulated-flower {
  bottom: 2rem;
  left: 2rem;
}

.red-guacamaya {
  transform: scale(0.8);
}

.blue-guacamaya {
  transform: scale(0.8);
  right: -1rem;
  top: 5rem;
}

.buy-me-arepa-btn {
  top: 40%;
  left: 3rem;
}
</style>
