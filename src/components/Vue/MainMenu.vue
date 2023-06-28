<template>
  <Menu as="div" class="relative text-left">
    <MenuButton
      class="w-full h-full flex justify-start items-center px-2 py-0.5 ml-2 rounded-sm text-sm focus:bg-gray-700 focus:outline-none cursor-default"
    >
      <AppleIcon />
      <span class="text-xs ml-2">Mac OS</span>
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
        class="absolute z-10 left-0 mt-1 ml-1 w-56 origin-top-left wrap-menus divide-y divide-gray-400/70"
      >
        <div class="p-1">
          <MenuItem as="template" v-slot="{ active }">
            <button
              @click="openModal"
              :class="[
                active ? 'bg-blue-500 text-white' : 'text-gray-200',
                'group flex w-full items-center rounded-md px-3 py-1 text-sm',
              ]"
            >
              About
            </button>
          </MenuItem>
          <MenuItem as="template" v-slot="{ active }">
            <a
              href="/tags"
              :class="[
                active ? 'bg-blue-500 text-white' : 'text-gray-200',
                'group flex w-full items-center rounded-md px-3 py-1 text-sm',
              ]"
            >
              Tags
            </a>
          </MenuItem>
          <MenuItem as="template" v-slot="{ active }">
            <a
              href="https://github.com/lauroguedes/macos-desktop-template"
              target="_blank"
              :class="[
                active ? 'bg-blue-500 text-white' : 'text-gray-200',
                'group flex w-full items-center rounded-md px-3 py-1 text-sm',
              ]"
            >
              Github Repository
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
  <AboutDialog :show="isOpen" @close="closeModal" />
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import AppleIcon from "../Icons/apple.vue";
import AboutDialog from "./AboutDialog.vue";
import { useDialogModal } from "./composables/useDialogModal";

const { isOpen, openModal, closeModal } = useDialogModal();
</script>
