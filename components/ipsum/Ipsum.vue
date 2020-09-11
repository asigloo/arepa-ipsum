<template>
  <div class="ipsum">
    <button
      class="clipboard-btn absolute animate__animated"
      v-clipboard:copy="clipboardText"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError"
    >
      <arepa-icon :name="'copy'" width="40" height="40" />
    </button>
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

const computed = {
  clipboardText() {
    let text = '';
    this.result.forEach(paragraph => {
      text = `${paragraph}\n`;
    });
    return text;
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
  onCopy(e) {
    e.trigger.classList.add('animate__rubberBand');
    this.$toasted.success('Result copied to clipboard', {
      position: 'bottom-right',
      duration: 2000,
      className: 'arepa-toast',
    });
    setTimeout(() => {
      e.trigger.classList.remove('animate__rubberBand');
    }, 800);
  },
  onError(e) {},
};

const watch = {
  $route() {
    this.generateLorem();
  },
};

export default {
  name: 'arepaIpsum',
  data,
  computed,
  props,
  methods,
  watch,
  mounted() {
    this.generateLorem();
  },
};
</script>

<style></style>
