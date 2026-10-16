<script setup>
import { skillRow1, skillRow2 } from '../data/portfolio.js'

/**
 * Each row is rendered twice so the `translateX(-50%)` keyframe loops
 * seamlessly and infinitely.
 */
function looped(row) {
  return [...row, ...row]
}
</script>

<template>
  <div class="group flex min-w-0 flex-col gap-3">
    <div
      class="min-w-0 w-full overflow-hidden [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      <div
        class="flex w-max items-center gap-3 will-change-transform animate-marquee-left group-hover:[animation-play-state:paused]"
      >
        <div
          v-for="(lang, index) in looped(skillRow1)"
          :key="`r1-${lang.key}-${index}`"
          class="flex h-[74px] w-[74px] shrink-0 flex-col items-center justify-center gap-1 rounded-[14px]"
          :data-lang="lang.key"
          :title="lang.label"
        >
          <div
            class="flex h-[52px] w-[52px] items-center justify-center font-display text-[15px] font-extrabold [&_img]:h-full [&_img]:w-full [&_img]:object-contain"
          >
            <img :src="lang.src" :alt="lang.alt" />
          </div>
          <div class="text-[8.5px] tracking-[.03em] text-dim uppercase">{{ lang.label }}</div>
        </div>
      </div>
    </div>

    <div
      class="min-w-0 w-full overflow-hidden [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      <div
        class="flex w-max items-center gap-3 will-change-transform animate-marquee-right group-hover:[animation-play-state:paused]"
      >
        <div
          v-for="(lang, index) in looped(skillRow2)"
          :key="`r2-${lang.key}-${index}`"
          class="flex h-[74px] w-[74px] shrink-0 flex-col items-center justify-center gap-1 rounded-[14px]"
          :data-lang="lang.key"
          :title="lang.label"
        >
          <div
            class="flex h-[52px] w-[52px] items-center justify-center font-display text-[15px] font-extrabold [&_img]:h-full [&_img]:w-full [&_img]:object-contain"
          >
            <img :src="lang.src" :alt="lang.alt" />
          </div>
          <div class="text-[8.5px] tracking-[.03em] text-dim uppercase">{{ lang.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
