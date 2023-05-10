<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton
      class="inline-flex w-full justify-center items-center rounded-md text-sm active:bg-gray-700"
    >
      <Apple />
      <span>{{ textButton }}</span>
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
        class="absolute z-10 left-0 mt-1 w-56 origin-top-left outline outline-offset-0 outline-gray-600 outline-1 backdrop-blur-sm bg-gray-700/70 rounded-md border border-gray-400/60 divide-y divide-gray-400/70"
      >
        <div v-for="groupLinks in links" class="p-1">
          <MenuItem
            v-for="link in groupLinks.group"
            :key="link.href"
            as="template"
            v-slot="{ active }"
          >
            <a
              :href="link.href"
              :class="[
                active ? 'bg-blue-500 text-white' : 'text-gray-200',
                'group flex w-full items-center rounded-md px-3 py-1 text-sm',
              ]"
            >
              {{ link.label }}
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import Apple from "../Icons/apple.vue";

const props = defineProps({
  links: {
    type: Array,
    required: true,
  },
  textButton: {
    type: String,
    default: "Mac OS",
  },
});
</script>
