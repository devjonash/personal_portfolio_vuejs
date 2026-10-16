<script setup>
import MenuIcon from './MenuIcon.vue'
import { owner } from '../data/portfolio.js'

defineProps({
  open: { type: Boolean, default: false },
})

const emit = defineEmits(['toggle'])
</script>

<template>
  <header
    class="fixed top-0 right-0 left-0 z-[60] hidden items-center justify-between border-b border-line bg-panel px-4 pt-[calc(env(safe-area-inset-top,0px)_+_12px)] pb-3 max-d901:flex"
  >
    <div
      class="flex min-w-0 items-center gap-[10px] overflow-hidden font-display text-[14.5px] font-bold text-ellipsis whitespace-nowrap"
    >
      <div
        class="flex h-[34px] w-[34px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-accent-grad font-display text-[13px] font-bold"
      >
        <img class="h-full w-full object-cover" :src="owner.avatar" alt="" />
      </div>
      {{ owner.name }}
    </div>

    <button
      type="button"
      class="flex h-11 w-11 min-w-11 shrink-0 items-center justify-center rounded-tile border border-line bg-panel2 [transition:background_.15s] active:bg-line"
      aria-label="Open menu"
      :aria-expanded="open ? 'true' : 'false'"
      aria-controls="sidebar"
      @click="emit('toggle')"
    >
      <MenuIcon :open="open" />
    </button>
  </header>
</template>
