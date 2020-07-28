<template>
  <div class="intro absolute w-full top-0 bg-white">
    <div class="container" :class="{ animate: animate }">
      <div class="flex flex-col items-center">
        <Logo class="home-logo" ref="logo" size="256" />
        <h1 class="title text-bg text-4xl md:text-6xl" ref="title">
          Arepa Ipsum
        </h1>
        <div
          class="transition ease-in duration-700"
          :class="{ invisible: animate }"
        >
          <p class="text-gray-700 mb-4">{{ $t('description') }}</p>
          <Button type="pernil" outline @clicked="finishIntro">
            {{ $t('dale-chamo') }}</Button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const ANIMATION_SPEED = 300;

export default {
  name: 'arepaIntro',
  data: function() {
    return {
      animate: false,
      logoAnimationListener: null,
    };
  },
  computed: {
    logoRef() {
      return this.$refs.logo.$el;
    },
    titleRef() {
      return this.$refs.title;
    },
  },
  methods: {
    async finishIntro() {
      this.animate = true;
      this.animateLogo();
      this.animateTitle();
    },
    async animateLogo() {
      const first = this.logoRef.getBoundingClientRect();

      this.logoRef.classList.add('final');
      const last = this.logoRef.getBoundingClientRect();
      const deltaX = first.left - last.left;
      const deltaY = first.top - last.top;
      const deltaW = first.width / last.width;
      const deltaH = first.height / last.height;

      this.logoRef.style.transform = `
          translate(${deltaX}px, ${deltaY}px)
          scale(${deltaW}, ${deltaH})
        `;
      requestAnimationFrame(
        function() {
          // Switch on animations.
          this.logoRef.classList.add('animate');

          // GO GO GOOOOOO!
          this.logoRef.style.transform = '';
        }.bind(this),
      );

      this.logoRef.addEventListener('transitionend', this.finishedIntro);
    },
    async animateTitle() {
      const first = this.titleRef.getBoundingClientRect();

      this.titleRef.classList.add('final');

      const last = this.titleRef.getBoundingClientRect();
      const deltaX = first.left - last.left;
      const deltaY = first.top - last.top;
      const deltaW = first.width / last.width;
      const deltaH = first.height / last.height;

      this.titleRef.style.transform = `
          translate(${deltaX}px, ${deltaY}px)
        `;
      requestAnimationFrame(
        function() {
          // Switch on animations.
          this.titleRef.classList.add('animate');

          // GO GO GOOOOOO!
          this.titleRef.style.transform = '';
        }.bind(this),
      );
    },
    finishedIntro() {
      this.$emit('finished');
    },
  },
  destroyed() {},
};
</script>

<style>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}

.title {
  @apply text-center font-display font-bold text-gray-700 mb-4;
}

.text-bg {
  background-image: linear-gradient(
    to top,
    #f3ce9780 54%,
    transparent 54%,
    transparent 100%
  );
  width: fit-content;
}

.logo.final {
  position: absolute;
  width: 24px !important;
  height: 24px !important;
  top: 1rem;
  left: 1rem;

  @media (min-width: 768px) {
    left: 3rem;
    width: 48px !important;
    height: 48px !important;
  }
}

.logo.animate {
  transition: all 0.65s ease-in-out;
}

.title.final {
  @apply text-2xl;

  position: absolute;
  top: 0.5rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    @apply text-3xl;
  }
}

.title.animate {
  transition: all 0.65s ease-in-out;
}
</style>
