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
export default {
  name: 'arepaIpsum',
  data,
  mounted() {
    this.result = generateLorem(2, true);
  },
};
</script>

<style></style>
