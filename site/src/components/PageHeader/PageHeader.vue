<template>
  <header>
    <section>
      <Logo />
      <Navigation />
      <div class="end">
        <Hamburger client:load/>
        <DarkModeToggle client:load/>
      </div>
    </section>
    <VertNavigation client:load/>
  </header>
</template>
<script lang="ts">
import Logo from 'component:vue:PageHeader/Logo';
import Navigation from 'component:vue:PageHeader/Navigation';
import Hamburger from 'component:vue:PageHeader/Hamburger';
import DarkModeToggle from 'component:vue:PageHeader/DarkModeToggle';
import VertNavigation from 'component:vue:PageHeader/VertNavigation';

export default {
 components: {
   Logo, 
   Navigation, 
   Hamburger, 
   DarkModeToggle, 
   VertNavigation
 } 
}
</script>
<style lang="scss" scoped>
  header {
    @apply w-full;
    @apply flex flex-col;

    section {
      @apply flex justify-between;
      @apply my-6 mx-auto;
      @apply px-4;
      @apply w-full;
      @apply lg:max-w-4xl xl:max-w-6xl;

      @apply text-gray-900 dark:text-white;
          
      .end {
        @apply flex flex-row items-center;
        @apply justify-end;
      }
    }
  }
  </style>