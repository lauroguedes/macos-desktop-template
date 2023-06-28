<template>
  <TransitionRoot appear :show="show" as="template">
    <Dialog as="div" @close="emit('close')" class="relative z-10">
      <TransitionChild
        v-show="showBackdrop"
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              :class="`max-w-${props.size}`"
              class="w-full transform overflow-hidden transition-all wrap-dialog"
            >
              <div class="flex justify-start space-x-2">
                <button
                  @click="emit('close')"
                  class="w-3 h-3 bg-red-500 cursor-default active:opacity-90 rounded-full hover:before:content-['x'] text-[10px] text-red-900 flex items-center justify-center"
                ></button>
                <div class="w-3 h-3 bg-gray-600 rounded-full"></div>
                <div class="w-3 h-3 bg-gray-600 rounded-full"></div>
              </div>
              <DialogTitle as="h3" class="text-lg font-medium leading-6">
                <slot name="title" />
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  <slot />
                </p>
              </div>

              <div class="mt-4">
                <slot name="actions" />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const props = defineProps({
  show: Boolean,
  showBackdrop: Boolean,
  size: {
    type: String,
    default: "md",
  },
});
const emit = defineEmits(["close"]);
</script>
