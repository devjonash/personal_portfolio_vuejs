<script setup>
import { featured } from '../data/portfolio.js'
</script>

<template>
  <div
    class="flex min-w-0 gap-4 overflow-x-auto overflow-y-hidden pb-2 [-webkit-overflow-scrolling:touch] [scroll-snap-type:x_mandatory] [scrollbar-color:var(--border)_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-[6px] [&::-webkit-scrollbar-thumb]:rounded-[10px] [&::-webkit-scrollbar-thumb]:bg-[var(--border)] [&::-webkit-scrollbar-track]:bg-transparent"
  >
    <article
      v-for="item in featured"
      :key="item.title"
      class="min-w-0 flex-[0_0_240px] overflow-hidden rounded-tile border border-line bg-panel2 [scroll-snap-align:start] max-d641:flex-[0_0_78%]"
    >
      <img class="block h-[150px] w-full bg-thumb object-cover max-d481:h-[130px]" :src="item.img" alt="" />
      <div class="min-w-0 p-[14px]">
        <div class="mb-1 text-[14.5px] font-bold break-words [word-break:break-word]">
          {{ item.title }}
        </div>
        <div class="mb-2 text-[11.5px] text-faint">Created on {{ item.date }}</div>
        <div class="text-[12.5px] leading-[1.5] text-dim">{{ item.desc }}</div>
      </div>
    </article>
  </div>
</template>
