<template>
  <DialogModal :show="show" size="xs">
    <div class="container text-white">
      <div>
        <img :src="MacBookIcon" alt="Logo About" class="inline-block w-44" />
      </div>
      <header>
        <h1 class="text-3xl font-bold">MacOS Template</h1>
        <h2 class="text-xs text-gray-400/50">build with Astro, MIT, 2023</h2>
      </header>
      <main class="mb-6">
        <div class="py-6">
          <table class="w-full table-fixed text-xs">
            <tbody>
              <tr>
                <td class="text-right pr-1">Full speed</td>
                <td class="text-gray-400 text-left pl-1">98</td>
              </tr>
              <tr>
                <td class="text-right pr-1">Content-focused</td>
                <td class="text-gray-400 text-left pl-1">CMS</td>
              </tr>
              <tr>
                <td class="text-right pr-1">Type-safe</td>
                <td class="text-gray-400 text-left pl-1">Markdown, MDX</td>
              </tr>
              <tr>
                <td class="text-right pr-1">It's free</td>
                <td class="text-gray-400 text-left pl-1">$0,00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <a
            href="https://github.com/lauroguedes/macos-desktop-template"
            target="_blank"
            class="py-0.5 px-4 bg-gray-500 rounded-md shadow-md cursor-default active:bg-gray-400/90"
          >
            More Info...
          </a>
        </div>
      </main>
      <footer class="text-xs text-gray-400/50">
        <div>
          <a
            class="underline hover:opacity-90"
            href="https://github.com/lauroguedes/macos-desktop-template"
            target="_blank"
            >Template Astro (MacOS Desktop)</a
          >
        </div>
        <div>by Lauro Guedes</div>
        <div>MIT License</div>
      </footer>
    </div>
  </DialogModal>
</template>

<script setup>
import DialogModal from "./headless-ui/DialogModal.vue";
import MacBookIcon from "../../images/macbook_icon.png";

const props = defineProps({
  show: {
    type: Boolean,
  },
});
</script>
