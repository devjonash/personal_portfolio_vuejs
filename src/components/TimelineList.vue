<script setup>
import { ref } from 'vue'

const props = defineProps({
  items: { type: Array, required: true },
})

/* Every description starts clamped to two lines with a See more toggle. */
const expanded = ref(props.items.map(() => false))

function toggleItem(index) {
  expanded.value[index] = !expanded.value[index]
}
</script>

<template>
  <div>
    <div
      v-for="(item, index) in items"
      :key="item.title"
      class="flex min-w-0 gap-[14px] border-b border-line py-[14px] last:border-b-0"
    >
      <div
        class="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-tile bg-panel2 text-[12px] font-bold"
      >
        <img class="block h-10 w-10" :src="item.logo" :alt="item.logoAlt" width="40" height="40" />
      </div>

      <div class="min-w-0 flex-1">
        <div class="text-[14.5px] font-bold break-words [word-break:break-word]">
          {{ item.title }}
        </div>
        <div class="mt-[1px] text-[13px] text-dim">{{ item.org }}</div>
        <div v-if="item.place || item.meta" class="mt-[1px] text-xs text-faint">
          {{ item.place || item.meta }}
        </div>
        <div class="my-[6px] flex items-center gap-[5px] text-[11.5px] text-faint">
          <i class="fa-solid fa-calendar" aria-hidden="true"></i> {{ item.date }}
        </div>
        <div
          class="text-[12.5px] leading-[1.55] text-dim"
          :class="expanded[index] ? '' : 'line-clamp-2'"
        >
          {{ item.desc }}
        </div>
        <button
          type="button"
          class="mt-2 inline-block border-0 bg-transparent p-0 text-[13.5px] font-semibold text-brand press-feedback pointer-coarse:px-1 pointer-coarse:py-2"
          @click="toggleItem(index)"
        >
          {{ expanded[index] ? 'See less' : 'See more' }}
        </button>
      </div>
    </div>
  </div>
</template>
