<script setup>
defineProps({
  item: { type: Object, required: true },
})

const emit = defineEmits(['view'])
</script>

<template>
  <article
    class="flex h-auto w-full min-w-0 flex-col overflow-hidden rounded-tile border border-line bg-white text-[#1a1a1a] press-feedback hover:[transform:translateY(-2px)] active:[transform:scale(.98)]"
  >
    <div
      class="flex h-[220px] shrink-0 cursor-pointer items-center justify-center border-b border-[#e6e6e6] bg-[linear-gradient(180deg,#fdfdfd,#f0f0f0)] p-[2px] max-d481:h-[130px] [&_img]:max-h-full [&_img]:max-w-full [&_img]:object-contain"
      @click="emit('view', item)"
    >
      <img :src="item.img" :alt="`${item.name} certificate`" loading="lazy" />
    </div>

    <div class="flex min-h-0 min-w-0 flex-1 flex-col bg-panel2 px-[14px] py-3">
      <div class="line-clamp-2 text-[13.5px] font-bold text-ink break-words [word-break:break-word]">
        {{ item.name }}
      </div>
      <div class="mt-[2px] text-xs text-dim">{{ item.org }}</div>

      <div class="mt-2 flex min-w-0 items-start gap-2">
        <img
          class="h-8 w-8 shrink-0 rounded-md border border-line bg-white object-contain p-[2px]"
          :src="item.logo"
          :alt="`${item.org} logo`"
          loading="lazy"
        />
        <div class="line-clamp-3 min-w-0 text-[11.5px] leading-[1.4] text-dim">{{ item.desc }}</div>
      </div>

      <div class="mt-auto flex items-center gap-[5px] pt-2 text-[11px] text-faint">
        Issued {{ item.date }}
      </div>

      <button
        type="button"
        class="mt-3 flex w-full items-center justify-center gap-[5px] rounded-lg border border-line bg-panel2 px-3 py-[7px] text-xs font-semibold whitespace-nowrap text-ink press-feedback active:scale-[.96] max-d901:px-[14px] max-d901:py-[9px] pointer-coarse:min-h-9"
        @click="emit('view', item)"
      >
        ↗ View Certificate
      </button>
    </div>
  </article>
</template>
