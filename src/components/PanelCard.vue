<script setup>
defineProps({
  /** Omit (or pass an empty string) to render the card without a heading. */
  title: { type: String, default: '' },
  icon: { type: String, default: '' },
  /** Renders the heading icon with the brand accent (Career Stats only). */
  tintIcon: { type: Boolean, default: false },
  /** Removes the card padding (used by the About cover card). */
  flush: { type: Boolean, default: false },
})
</script>

<template>
  <section
    class="min-w-0 rounded-card border border-line bg-panel"
    :class="flush ? 'p-0' : 'p-[22px] d401:max-d641:p-[18px] max-d401:p-[14px]'"
  >
    <h2
      v-if="title"
      class="mb-4 flex items-center gap-[9px] font-display text-[17px] max-d641:text-base"
    >
      <i v-if="icon && !tintIcon" :class="icon" aria-hidden="true"></i>
      <span v-else-if="icon" class="text-brand">
        <i :class="icon" aria-hidden="true"></i>
      </span>
      {{ title }}
    </h2>
    <slot />
  </section>
</template>
