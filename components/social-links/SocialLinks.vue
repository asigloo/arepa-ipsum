<template>
  <ul class="social-links" role="menu">
    <li v-for="link in links" :key="link.id" role="menuitem">
      <a
        :href="link.url"
        class="social-link"
        :title="link.app"
        rel="noopener"
        target="_blank"
      >
        <arepa-icon :width="'24'" :height="'24'" :name="link.icon"></arepa-icon>
      </a>
    </li>
  </ul>
</template>

<script>
const SOCIAL_LINKS = [];
export default {};
</script>

<style></style>
