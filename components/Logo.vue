<template>
  <div class="logo" ref="logo" :style="getStyle">
    <img src="@/assets/img/icon.svg" alt="Arepa Ipsum Logo" />
  </div>
</template>

<script>
const props = {
  size: {
    default: 48,
    type: Number | String,
  }
}

const computed = {
  getStyle()  {
    return {
      width: `${this.size}px`,
      height: `${this.size}px`
    }
  }
}

export default {
  props,
  computed,
}
</script>

<style>
.logo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
