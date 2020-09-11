<template>
  <div class="result page">
    <div class="container">
      <div class="flex flex-wrap -mx-2">
        <div class="box px-2 w-full md:w-4/6 mb-8 md:mb-16">
          <div ref="result-card" class="card result-card relative">
            <div
              class="p-6 text-gray-700 text-base"
              :class="scrollStyles"
              @scroll="onResultScroll"
            >
              <Ipsum v-if="query" v-bind="query" />
            </div>
          </div>
        </div>
        <div class="box px-2 w-full md:w-2/6 mb-8">
          <div class="card p-6">
            Publicidad
          </div>
        </div>
        <div class="box px-2 w-full md:w-4/6 mb-8">
          <div class="card">
            <Form />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const data = () => ({
  gradientTop: false,
  gradientBottom: true,
});

const computed = {
  scrollStyles() {
    return {
      'scroll-gradient': this.query.paragraphs > 1,
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
        gradientBottom: parseInt(paragraphs) > 1,
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
