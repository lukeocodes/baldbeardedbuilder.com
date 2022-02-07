<template>
    <div id="vertNav" class="stripe" v-bind:class="{open: isOpen}">
      <a
        href="/blog"
        aria-label="Aggregated content Michael has generated"
        title="Aggregated content Michael has generated"
        >Blog</a>
      <a
        href="https://bbb.dev/shop"
        aria-label="T-shirts, stickers, and other swag"
        title="T-shirts, stickers, and other swag"
        >Swag</a
      >
    </div>
</template>
<script lang="ts" setup>
import useMenu from '@/composables/useMenu';
const {isOpen, toggleMenu} = useMenu();
</script>
<style lang="scss" scoped>
#vertNav {
  @apply list-none;
  @apply hidden;

  &.open {
    @apply flex flex-col justify-evenly gap-6 md:gap-10;
  }

  a {
    @apply flex items-center justify-center;
    @apply border-b-2 border-t-2 border-transparent;
    @apply py-3 px-10;

    @apply font-raleway font-bold;
    @apply text-darkPurple dark:text-gray-100;

    &:first-child {
      @apply mt-6;
    }
    &:last-child {
      @apply mb-6;
    }

    &:hover {
      @apply text-blue-500 dark:text-bbbpink;
    }
  }
}

</style>
