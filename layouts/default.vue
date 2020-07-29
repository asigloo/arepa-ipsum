<template>
  <div>
    <Header />
      <Intro  v-show="showIntro"  @finished="finishedIntro"/>
    <Nuxt />
  </div>
</template>

<script>
const data = () => ({
  showIntro: true,
})
const methods = {
  finishedIntro() {
    localStorage.setItem('intro', false);
    this.showIntro = false;
  }
}
export default {
  data,
  methods,
  mounted() {
    this.$nextTick(() => {
      this.showIntro = !localStorage.getItem('intro') ? true: JSON.parse(localStorage.getItem('intro'));
    })
  }
}
</script>
<style>

</style>
