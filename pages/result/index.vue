<template>
  <div class="result page">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div
          ref="result-card"
          class="card result-card mb-8 mx-auto relative scroll-gradient"
        >
          <div
            class="p-6 text-gray-700 text-base"
            :class="scrollStyles"
            @scroll="onResultScroll"
          >
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
const data = () => ({
  gradientBottom: true,
  gradientTop: false,
});

const computed = {
  scrollStyles() {
    return {
      'scroll-gradient': true,
      'scroll-gradient--top': this.gradientTop,
      'scroll-gradient--bottom': this.gradientBottom,
    };
  },
};
const watch = {
  $route({ query }) {
    this.query = query;
  },
};
const methods = {
  onResultScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
    console.log({ scrollTop, clientHeight, scrollHeight });

    this.gradientBottom = scrollTop + clientHeight < scrollHeight;
    this.gradientTop = scrollTop > 0;
  },
};
export default {
  data,
  computed,
  methods,
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
.clipboard-btn {
  right: -8px;
  top: -8px;
  z-index: 1;
}

.scroll-gradient::before,
.scroll-gradient::after {
  content: '';
  position: absolute;
  height: 100px;
  width: 100%;
  left: 0;
}

.scroll-gradient--bottom::before {
  bottom: 0;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 212, 255, 0) 100%
  );
}

.scroll-gradient--top::after {
  top: 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 212, 255, 0) 100%
  );
}

.result-card > div {
  overflow: scroll;
  max-height: 500px;
}
</style>
