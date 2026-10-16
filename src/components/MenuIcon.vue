<script setup>
defineProps({
  /** When true the hamburger morphs into a close (X) icon. */
  open: { type: Boolean, default: false },
})
</script>

<template>
  <svg
    class="h-[22px] w-[22px] overflow-visible text-ink [transition:transform_.5s_ease-in-out]"
    :class="open ? 'rotate-[-45deg]' : ''"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path
      class="[transition:stroke-dasharray_.5s_ease-in-out,stroke-dashoffset_.5s_ease-in-out]"
      :class="
        open
          ? '[stroke-dasharray:20_300] [stroke-dashoffset:-32.42px]'
          : '[stroke-dasharray:12_63] [stroke-dashoffset:0]'
      "
      d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
    />
    <path d="M7 16 27 16" />
  </svg>
</template>
