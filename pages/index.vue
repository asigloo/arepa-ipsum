<template>
  <div class="home page">
    <div class="container">
      <div class="flex flex-wrap -mx-2">
        <div class="box w-full md:w-4/6">
          <div class="card" v-show="showForm">
            <Form />
          </div>
        </div>
        <div class="box px-2 w-full md:w-2/6">
          <div class="">
            <adsbygoogle />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const data = () => ({
  showForm: false,
});

export default {
  name: '',
  data,
  mounted() {
    setTimeout(() => {
      this.showForm = true;
    }, 200);
  },
};
</script>

<style></style>
