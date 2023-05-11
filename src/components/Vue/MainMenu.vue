<template>
  <Dropdown :options="options">
    <AppleIcon />
    <span class="text-xs">{{ textButton }}</span>
  </Dropdown>
</template>

<script setup>
import Dropdown from "./headless-ui/Dropdown.vue";
import AppleIcon from "../Icons/apple.vue";

const options = [
  {
    group: [
      { href: "/account-settings", label: "About this Template" },
      { href: "/support", label: "Github Repositorie" },
    ],
  },
  {
    group: [{ href: "/license", label: "Follow me Twitter" }],
  },
];

const props = defineProps({
  textButton: {
    type: String,
    default: "Mac OS",
  },
});
</script>
