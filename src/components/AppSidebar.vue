<script setup>
import MenuIcon from './MenuIcon.vue'
import { navLinks, owner } from '../data/portfolio.js'
import { usePortfolio } from '../composables/usePortfolio.js'

const {
  activePage,
  sidebarOpen,
  isLight,
  goToPage,
  closeSidebar,
  toggleTheme,
  resumeNotice,
  resumeUnavailable,
} = usePortfolio()

function onThemeToggle(event) {
  toggleTheme(event.currentTarget)
}
</script>

<template>
  <aside
    id="sidebar"
    class="flex min-w-0 flex-col rounded-card border border-line bg-panel p-6 -ml-[15px] max-d901:fixed max-d901:top-0 max-d901:left-0 max-d901:z-[80] max-d901:h-screen max-d901:min-h-screen max-d901:w-[300px] max-d901:max-w-[84vw] max-d901:overflow-y-auto max-d901:rounded-none max-d901:pt-[calc(env(safe-area-inset-top,0px)_+_24px)] max-d901:[transition:transform_.25s_ease] d901:fixed d901:top-5 d901:left-[max(20px,calc((100vw_-_1600px)/2_+_20px))] d901:z-[50] d901:h-[calc(100vh_-_40px)] d901:w-[280px] d901:overflow-y-auto d901:max-d1101:w-[230px] d1101:max-d1281:w-[10px]"
    :class="sidebarOpen ? 'max-d901:translate-x-0' : 'max-d901:-translate-x-full'"
  >
    <button
      type="button"
      class="mb-[10px] hidden h-11 w-11 min-w-11 shrink-0 items-center justify-center self-end rounded-tile border border-line bg-panel2 [transition:background_.15s] active:bg-line max-d901:flex"
      aria-label="Close menu"
      @click="closeSidebar"
    >
      <MenuIcon :open="true" />
    </button>

    <div
      class="mb-[14px] flex h-[102px] w-[102px] items-center justify-center overflow-hidden rounded-full bg-accent-grad font-display text-[22px] font-bold shadow-[0_0_0_3px_var(--panel-2)]"
    >
      <img class="h-full w-full object-cover" :src="owner.avatar" :alt="owner.name" />
    </div>

    <div class="truncate font-display text-base font-bold" :title="owner.name">
      {{ owner.name }}
    </div>
    <div class="mt-[2px] mb-[18px] text-[13.5px] text-dim">{{ owner.role }}</div>

    <div class="mb-[22px]">
      <button
        type="button"
        class="flex w-full items-center justify-center gap-2 rounded-tile border border-line bg-white px-[14px] py-[11px] text-sm font-semibold text-[#0d0f16] shadow-[0_1px_3px_rgba(0,0,0,.15)] press-feedback active:scale-[.96]"
        @click="resumeUnavailable"
      >
        <i class="fa-solid fa-download" aria-hidden="true"></i> Resume
      </button>
      <p
        v-show="resumeNotice"
        class="mt-2 text-center text-[11.5px] leading-[1.4] text-faint"
        role="status"
      >
        {{ resumeNotice }}
      </p>
    </div>

    <nav class="flex min-w-0 flex-1 flex-col gap-[2px]">
      <button
        v-for="link in navLinks"
        :key="link.page"
        type="button"
        class="flex w-full items-center gap-3 rounded-tile border-0 bg-transparent px-3 py-[11px] text-left text-[16.5px] font-normal press-feedback max-d901:px-[14px] max-d901:py-[13px] max-d901:text-base pointer-coarse:min-h-11"
        :class="
          activePage === link.page
            ? 'bg-panel2 text-brand'
            : 'text-dim hover:bg-panel2 hover:text-ink'
        "
        @click="goToPage(link.page)"
      >
        <i :class="link.icon" aria-hidden="true"></i> {{ link.label }}
      </button>
    </nav>

    <div class="mt-[18px] border-t border-line pt-4">
      <button
        type="button"
        class="mb-[14px] flex w-full items-center justify-between rounded-tile border-0 bg-panel2 px-3 py-[10px] text-sm text-ink press-feedback"
        @click="onThemeToggle"
      >
        <span><i class="fa-solid fa-moon" aria-hidden="true"></i> Dark Mode</span>
        <span
          class="relative h-[22px] w-[38px] shrink-0 rounded-[20px] bg-accent-grad [transition:all_.2s]"
        >
          <span
            class="absolute top-[3px] h-4 w-4 rounded-full bg-white [transition:all_.2s]"
            :class="isLight ? 'left-[3px]' : 'right-[3px]'"
          ></span>
        </span>
      </button>

      <div class="text-[11.5px] leading-[1.5] text-faint">
        {{ owner.credit }}<br />{{ owner.copyright }}
      </div>
    </div>
  </aside>
</template>
