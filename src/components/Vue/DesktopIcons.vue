<template>
  <RadioGroup
    :class="`grid grid-rows-${qtdGridRows} gap-5 place-content-start`"
  >
    <RadioGroupOption
      v-for="item in props.items"
      :key="item"
      :value="item"
      as="template"
      v-slot="{ active, checked }"
      class="cursor-default"
      @dblclick="openItem(item.url)"
    >
      <article class="w-24 h-24 flex flex-col items-center">
        <div
          class="w-16 mb-1"
          :class="[
            active
              ? 'outline-dotted outline-1 outline-gray-200 rounded-sm'
              : '',
          ]"
        >
          <div class="aspect-w-5 aspect-h-4">
            <img
              class="w-full h-full object-center object-cover rounded-sm p-0.5"
              :src="item.frontmatter.image.url"
              :alt="item.frontmatter.image.alt"
            />
          </div>
        </div>
        <div
          class="text-xs text-center line-clamp-2 drop-shadow-md text-white"
          :class="[active ? 'bg-blue-700 text-white rounded-md' : '']"
        >
          <span :title="item.frontmatter.title">{{
            item.frontmatter.title
          }}</span>
        </div>
      </article>
    </RadioGroupOption>
  </RadioGroup>
</template>

<script setup>
import { computed } from "vue";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const qtdGridRows = computed(() =>
  props.items.length < 6 ? props.items.length : 6
);

const openItem = (url) => {
  window.location.href = url;
};
</script>
