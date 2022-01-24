import { readonly, ref, watchEffect } from 'vue';

const defaultValue = defaultDarkMode();
const isDark = ref(defaultValue);
const toggleDarkMode = () => {
  isDark.value = !isDark.value;
};


export default function useDarkMode() {

  watchEffect(() => {
    if (import.meta.env.SSR) {
      return;
    }

    const root = document.body;
    if (isDark.value === true) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('darkMode', isDark.value.toString());
  })

  return {
    isDark: readonly(isDark),
    toggleDarkMode
  };
}

function defaultDarkMode() {
  if (import.meta.env.SSR) {
    return false;
  }

  if (localStorage.getItem('darkMode')) {
    return localStorage.getItem('darkMode') === 'true'
  }

  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return true
  }
  return false
}