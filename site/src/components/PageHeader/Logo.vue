<template>
<a class="logo" href="/" title="Return home">
  <BBB />
</a>
</template>
<script lang="ts">
import BBB from 'icon:brand:BBB';
export default {
  components: {
    BBB
  }
}
</script>
<style lang="scss" scoped>
.logo {
  @apply text-gray-900 dark:text-white;
  @apply text-4xl;
}
</style>