<template>
  <div class="theme-switch-wrapper">
    <input
      id="switch"
      type="checkbox"
      :v-model="!isDark"
      @click="toggleDarkMode()"
    />
    <label for="switch">
      <IconMoon class="moon" />
      <IconSun class="sun" />
      <span class="ball"></span>
    </label>
  </div>
</template>
<script lang="ts" setup>
import useDarkMode from '@/composables/useDarkMode';
const { isDark, toggleDarkMode } = useDarkMode();
</script>
<style lang="scss" scoped>
label {
  @apply relative flex justify-between items-center;
  @apply py-0 px-2;
  @apply bg-gray-700;
  @apply rounded-3xl;
  @apply cursor-pointer;
  @apply w-12 h-6;
  transition: 0.3s;
}
.sun {
  @apply text-lg;
  @apply opacity-100;
  @apply text-yellow-500;
  transition: 0.8s;
  transform: translateX(0px);
}
.moon {
  @apply text-lg;
  @apply opacity-0;
  @apply text-gray-50;
  transition: 0.4s;
  transform: translateX(7px) rotate(-150deg);
}
.ball {
  @apply absolute block;
  @apply h-4 w-4;
  @apply rounded-xl;
  top: 4px;
  left: 4px;
  @apply bg-gray-400;
  transition: 0.8s;
}

input {
  @apply hidden;
}
input:checked + label {
  @apply bg-gray-600;
}
input:checked + label .sun {
  @apply opacity-0;
  transform: translateX(-18px) rotate(160deg);
}
input:checked + label .moon {
  @apply opacity-100;
  transition: 0.8s;
  transform: translateX(calc(4px * -1)) rotate(0deg);
}
input:checked + label .ball {
  @apply bg-gray-100;
  transform: translateX(23px);
}
</style>
