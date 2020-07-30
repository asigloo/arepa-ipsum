<template>
  <div class="result page">
    <div class="container">
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div class="card result-card mb-8 mx-auto">
          <div class="p-6 text-gray-700 text-base">
            <Ipsum v-if="query" v-bind="query" />
          </div>
        </div>
        <div class="card mx-auto"></div>
        <div class="card mx-auto">
          <Form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const watch = {
  $route({ query }) {
    this.query = query;
  },
};
export default {
  asyncData({ query }) {
    const { paragraphs, spicy, startWithArepa } = query;
    return {
      query: {
        paragraphs: parseInt(paragraphs),
        spicy: !!JSON.parse(spicy),
        startWithArepa: !!JSON.parse(startWithArepa),
      },
    };
  },
  watch,
};
</script>

<style>
.card {
  @apply w-full;
}
.result-card {
  overflow: scroll;
  max-height: 600px;
}
</style>
