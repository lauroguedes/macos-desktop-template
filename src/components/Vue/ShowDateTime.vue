<template>
  <div>{{ currentTime }}</div>
</template>

<script setup>
import { useCurrentTime } from "./composables/useCurrentTime";

const { currentTime } = useCurrentTime();
</script>
