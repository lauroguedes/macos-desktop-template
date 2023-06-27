<template>
  <div class="flex items-center space-x-3 mr-4">
    <Popover>
      <template #textButton>
        <AdjustmentsHorizontalIcon class="h-4 w-4" />
      </template>
      <template #content>
        <div class="grid grid-rows-5 grid-flow-col gap-3 w-full">
          <div class="row-span-4 col-span-2 wrap-popover-items">1</div>
          <div class="col-span-4 wrap-popover-items">2</div>
          <div class="col-span-2 row-span-2 wrap-popover-items">3</div>
          <div class="row-span-2 wrap-popover-items">4</div>
          <div class="row-span-2 wrap-popover-items">5</div>
        </div>
      </template>
    </Popover>
    <ShowDateTime client:load />
  </div>
</template>

<script setup>
import Popover from "./headless-ui/Popover.vue";
import { AdjustmentsHorizontalIcon } from "@heroicons/vue/24/solid";
import ShowDateTime from "./ShowDateTime.vue";
</script>
