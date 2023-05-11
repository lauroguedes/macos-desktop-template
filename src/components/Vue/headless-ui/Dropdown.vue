<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton
      class="inline-flex w-full px-2 justify-center items-center rounded-sm text-sm focus:bg-gray-700 focus:outline-none"
    >
      <slot />
    </MenuButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute z-10 left-0 mt-1 w-56 origin-top-left outline outline-offset-0 outline-gray-600 outline-1 backdrop-blur-sm bg-gray-700/70 rounded-lg shadow-md border border-gray-400/60 divide-y divide-gray-400/70"
      >
        <div v-for="groupOptions in options" class="p-1">
          <MenuItem
            v-for="option in groupOptions.group"
            :key="option.href"
            as="template"
            v-slot="{ active }"
          >
            <a
              :href="option.href"
              :class="[
                active ? 'bg-blue-500 text-white' : 'text-gray-200',
                'group flex w-full items-center rounded-md px-3 py-1 text-sm',
              ]"
            >
              {{ option.label }}
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
});
</script>
