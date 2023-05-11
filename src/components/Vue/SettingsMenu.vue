<template>
  <div class="flex items-center space-x-3">
    <Popover>
      <template #textButton>
        <AdjustmentsHorizontalIcon class="h-4 w-4" />
      </template>
      <template #content
        >sa dfas fasdf asdf asdf asdfa sdf asdfa sdfa sdfasdfasdf asdfasdf
        asdfasdfasd fdsaf</template
      >
    </Popover>
    <ShowDateTime client:load />
  </div>
</template>

<script setup>
import Popover from "./headless-ui/Popover.vue";
import { AdjustmentsHorizontalIcon } from "@heroicons/vue/24/solid";
import ShowDateTime from "./ShowDateTime.vue";
</script>
