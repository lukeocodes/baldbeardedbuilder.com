import { readonly, ref } from 'vue';

const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

export default function useMenu() {
  return {
    isOpen: readonly(isOpen),
    toggleMenu
  };
}
