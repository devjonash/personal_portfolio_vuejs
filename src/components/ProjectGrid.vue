<script setup>
import { computed, ref } from 'vue'
import { extraProjects, projects, tagLabel } from '../data/portfolio.js'
import { usePortfolio } from '../composables/usePortfolio.js'

const { showToast } = usePortfolio()

const showAll = ref(false)

/** Extra (private) projects stay hidden until "Load More" is pressed. */
const visibleProjects = computed(() =>
  showAll.value ? [...projects, ...extraProjects] : projects,
)

function loadMore() {
  showAll.value = true
  showToast('More projects loaded')
}
</script>

<template>
  <div>
    <div class="mt-[6px] grid min-w-0 grid-cols-3 gap-4 max-d901:grid-cols-2 max-d561:grid-cols-1">
      <article
        v-for="item in visibleProjects"
        :key="item.title"
        class="min-w-0 overflow-hidden rounded-tile border border-line bg-panel2 press-feedback active:[transform:scale(.98)]"
      >
        <img class="block h-40 w-full bg-thumb object-cover" :src="item.img" :alt="item.title" />
        <div class="p-[14px]">
          <div class="mb-[6px] flex min-w-0 items-start justify-between gap-2">
            <div class="min-w-0 text-[13.5px] font-bold break-words [word-break:break-word]">
              {{ item.title }}
            </div>
            <span
              class="shrink-0 rounded-[20px] border px-2 py-[3px] text-[10px] whitespace-nowrap"
              :class="
                item.tag === 'public'
                  ? 'border-[#1f4a2f] text-[#4ade80]'
                  : 'border-[#4a3a1f] text-[#f59e0b]'
              "
            >
              {{ tagLabel(item.tag) }}
            </span>
          </div>
          <div class="mb-2 text-[11.5px] text-faint">Created on {{ item.date }}</div>
          <div class="text-[12.5px] leading-[1.5] text-dim">{{ item.desc }}</div>
        </div>
      </article>
    </div>

    <button
      v-show="!showAll"
      type="button"
      class="mt-4 block w-full border-0 bg-transparent text-center text-[13.5px] font-semibold text-brand press-feedback active:scale-[.96] pointer-coarse:px-1 pointer-coarse:py-2"
      @click="loadMore"
    >
      Load More
    </button>
  </div>
</template>
