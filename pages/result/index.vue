<template>
  <div class="result page">
    <div class="container">
      <div class="flex flex-wrap -mx-2 justify-around">
        <div class="box px-2 w-full lg:w-1/2">
          <transition
            name="fade-in"
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
          >
            <div
              ref="result-card"
              class="card result-card relative mb-8"
              v-show="showIpsum"
            >
              <div
                class="p-6 text-gray-700 text-base"
                :class="scrollStyles"
                @scroll="onResultScroll"
              >
                <Ipsum v-if="query" v-bind="query" />
              </div>
            </div>
          </transition>
          <transition
            name="fade-in"
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
          >
            <div class="card mb-8 lg:mb-24" v-show="showForm">
              <Form />
            </div>
          </transition>
        </div>
        <div class="box px-2 w-full lg:w-1/3 mb-8">
          <div class="">
            <adsbygoogle />
          </div>
          <transition
            name="fade-in"
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
          >
            <SupportCard v-show="showSupport" />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const data = () => ({
  gradientTop: false,
  gradientBottom: true,
  showIpsum: false,
  showSupport: false,
  showForm: false,
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
  mounted() {
    setTimeout(() => {
      this.showIpsum = true;
    }, 200);
    setTimeout(() => {
      this.showForm = true;
    }, 400);
    setTimeout(() => {
      this.showSupport = true;
    }, 800);
  },
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
