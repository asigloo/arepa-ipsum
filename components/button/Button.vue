<template>
  <button
    :class="[getClass, getTypeClass]"
    :disabled="disabled"
    @focus="onFocus($event)"
    @click="onClick($event)"
  >
    <slot></slot>
  </button>
</template>

<script>
const props = {
  outline: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
};

const computed = {
  getClass() {
    return {
      btn: true,
      disabled: this.disabled,
    };
  },
  getTypeClass() {
    return this.outline ? `btn-outline-${this.type}` : `btn-${this.type}`;
  },
};

const methods = {
  onClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.$el.blur();
    this.$emit('clicked', e);
  },
  onFocus(e) {
    this.$el.blur();
    this.$emit('focus', e);
  },
};

const Button = {
  name: 'arepa-button',
  props,
  computed,
  methods,
};

export default Button;
</script>

<style>
.btn {
  @apply font-bold py-2 px-4 rounded;

  &.btn-aguacate {
    @apply bg-aguacate-500 text-white;
    &:hover {
      @apply bg-aguacate-700;
    }
  }

  &.btn-outline-aguacate {
    @apply bg-transparent text-aguacate-500 border border-aguacate-500;
    &:hover {
      @apply bg-aguacate-700 text-white;
    }
  }

  &.btn-pernil {
    @apply bg-pernil-400 text-white;
    &:hover {
      @apply bg-pernil-600;
    }
  }

  &.btn-outline-pernil {
    @apply bg-transparent text-pernil-400 border border-pernil-400;
    &:hover {
      @apply bg-pernil-600 text-white;
    }
  }
}
</style>
