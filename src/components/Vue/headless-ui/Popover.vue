<template>
  <Popover v-slot="{ open }" class="relative place-content-center">
    <PopoverButton
      :class="open ? '' : 'text-opacity-90'"
      class="group inline-flex items-center rounded-sm px-2 text-base font-medium text-white hover:text-opacity-100 focus:bg-gray-700 focus:outline-none"
    >
      <slot name="textButton" />
    </PopoverButton>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <PopoverPanel
        class="absolute left-1/2 z-10 mt-1 w-80 -translate-x-1/2 transform"
      >
        <div
          class="overflow-hidden p-4 rounded-lg shadow-md ring-1 ring-white backdrop-blur-sm bg-gray-700/70"
        >
          <slot name="content" />
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
</script>
