<template>
  <DialogModal :show="show">
    <template #title>About</template>
    <div class="content">Content</div>
  </DialogModal>
</template>

<script setup>
import DialogModal from "./headless-ui/DialogModal.vue";

const props = defineProps({
  show: {
    type: Boolean,
  },
});
</script>
