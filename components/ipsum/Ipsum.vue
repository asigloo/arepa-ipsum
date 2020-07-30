<template>
  <div class="ipsum">
    <p class="mb-4" v-for="(paragraph, index) in result" :key="index">
      {{ paragraph }}
    </p>
  </div>
</template>

<script>
import generateLorem from '@/core/lorem-generator';
const data = () => ({
  result: [],
});
const props = {
  paragraphs: {
    default: 1,
    type: Number,
  },
  spicy: {
    default: false,
    type: Boolean,
  },
  startWithArepa: {
    default: true,
    type: Boolean,
  },
};

const methods = {
  generateLorem() {
    this.result = generateLorem(
      this.paragraphs,
      this.spicy,
      this.startWithArepa,
    );
  },
};

const watch = {
  $route() {
    this.generateLorem();
  },
};

export default {
  name: 'arepaIpsum',
  data,
  props,
  methods,
  watch,
  mounted() {
    this.generateLorem();
  },
};
</script>

<style></style>
