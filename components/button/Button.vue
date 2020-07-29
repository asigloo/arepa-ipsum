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

<style></style>
