import { ref } from "vue";

export const useDialogModal = () => {
  const isOpen = ref(false);

  const closeModal = () => (isOpen.value = false);
  const openModal = () => (isOpen.value = true);

  return { isOpen, openModal, closeModal };
};
