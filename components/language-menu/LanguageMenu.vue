<template>
  <ul
    class="language-menu uppercase flex justify-center"
    role="menu"
    :aria-label="$t('aria-language-menu')"
  >
    <li
      v-for="locale in availableLocales"
      :key="locale.code"
      :class="{ active: locale.code === currentLocale }"
      class="language-menu__item px-2"
      role="menuitem"
    >
      <nuxt-link
        :to="switchLocalePath(locale.code)"
        :aria-label="$t(locale.code)"
      >
        {{ locale.code }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
const computed = {
  availableLocales() {
    return this.$i18n.locales;
  },
  currentLocale() {
    return this.$i18n.locale;
  },
};
export default {
  name: 'arepaLanguageMenu',
  computed,
};
</script>

<style>
.active,
.language-menu__item:hover {
  @apply text-aguacate-300;
}
</style>
