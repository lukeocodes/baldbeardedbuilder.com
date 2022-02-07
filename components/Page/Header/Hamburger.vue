<template>
  <button
    class="hamburger"
    type="button"
    v-bind:class="{ open: isOpen }"
    @click.prevent="toggleMenu()"
  ></button>
</template>
<script lang="ts" setup>
import useMenu from "@/composables/useMenu";
const {isOpen, toggleMenu} = useMenu();
</script>
<style scoped>
button {
  @apply block;
  @apply w-10;
  @apply outline-none;
  @apply p-0;
  @apply border-0;
  @apply bg-transparent;
  @apply md:hidden;
  @apply mr-8;
}

button:before,
button:after {
  @apply bg-darkPurple dark:bg-gray-100;
  @apply block;
  @apply h-1;
  content: '';
  transition: all 200ms ease-in-out;
}
button:before {
  @apply mb-4;

  box-shadow: 0 10px 0 rgb(20, 5, 28);
}

button.open:before {
  box-shadow: 0 0 0 rgb(20, 5, 28);
  transform: translateY(10px) rotate(45deg);
}
button.open:after {
  transform: translateY(-10px) rotate(-45deg);
}
.dark button:before {
  box-shadow: 0 10px 0 rgb(243, 244, 246);
}
.dark button.open:before {
  box-shadow: 0 0 0 rgb(243, 244, 246);
}
</style>
