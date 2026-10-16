<script setup>
import { ref } from 'vue'
import { expertise } from '../data/portfolio.js'

/* Each item expands independently, exactly like the original accordion. */
const openItems = ref(expertise.map(() => false))

function toggleItem(index) {
  openItems.value[index] = !openItems.value[index]
}
</script>

<template>
  <div>
    <div
      v-for="(item, index) in expertise"
      :key="item.label"
      class="min-w-0 border-b border-line last:border-b-0"
    >
      <button
        type="button"
        class="flex w-full items-center gap-3 border-0 bg-transparent py-[13px] text-left text-base font-semibold text-ink press-feedback break-words [word-break:break-word] pointer-coarse:min-h-11"
        @click="toggleItem(index)"
      >
        <span
          class="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-tile text-[15px] text-white"
          :style="{ background: item.tint }"
        >
          <i :class="item.icon" aria-hidden="true"></i>
        </span>
        {{ item.label }}
        <span
          class="ml-auto text-faint [transition:transform_.2s]"
          :class="openItems[index] ? 'rotate-180' : ''"
          aria-hidden="true"
          >⌄</span
        >
      </button>

      <div
        class="overflow-hidden text-[12.5px] leading-[1.6] text-dim [transition:max-height_.25s_ease]"
        :class="openItems[index] ? 'max-h-[120px] pb-[14px]' : 'max-h-0'"
      >
        {{ item.body }}
      </div>
    </div>
  </div>
</template>
