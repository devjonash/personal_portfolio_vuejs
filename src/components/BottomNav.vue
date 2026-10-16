<script setup>
import { bottomNavLinks } from '../data/portfolio.js'
import { usePortfolio } from '../composables/usePortfolio.js'

const { activePage, goToPage } = usePortfolio()
</script>

<template>
  <nav
    class="fixed right-0 bottom-0 left-0 z-[75] hidden items-stretch justify-around gap-[2px] border-t border-line bg-panel px-1 pt-[6px] pb-[calc(6px+env(safe-area-inset-bottom,0px))] max-d641:flex"
    aria-label="Primary"
  >
    <button
      v-for="link in bottomNavLinks"
      :key="link.page"
      type="button"
      class="flex min-h-[52px] flex-1 flex-col items-center justify-center gap-[3px] rounded-xl border-0 bg-transparent px-[2px] py-[6px] text-[10.5px] font-semibold [transition:color_.15s,background_.15s]"
      :class="
        activePage === link.page
          ? 'bg-[rgba(139,92,246,.12)] text-brand'
          : 'text-dim active:bg-panel2'
      "
      @click="goToPage(link.page)"
    >
      <i class="text-[18px]" :class="link.icon" aria-hidden="true"></i>
      <span>{{ link.label }}</span>
    </button>
  </nav>
</template>
