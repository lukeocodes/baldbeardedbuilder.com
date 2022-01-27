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