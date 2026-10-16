<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { stats } from '../data/portfolio.js'

const COUNT_DURATION = 1400

const displayed = ref(stats.map(() => 0))
const frameIds = []

/** Ease-out cubic count-up, matching the original `animateCount()`. */
function animateCount(target, onTick) {
  const start = performance.now()

  const tick = (now) => {
    const progress = Math.min((now - start) / COUNT_DURATION, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    onTick(Math.round(eased * target))
    if (progress < 1) {
      frameIds.push(requestAnimationFrame(tick))
    } else {
      onTick(target)
    }
  }

  frameIds.push(requestAnimationFrame(tick))
}

onMounted(() => {
  stats.forEach((stat, index) => {
    animateCount(stat.target, (value) => {
      displayed.value[index] = value
    })
  })
})

onBeforeUnmount(() => {
  frameIds.forEach(cancelAnimationFrame)
  frameIds.length = 0
})
</script>

<template>
  <div class="grid min-w-0 grid-cols-4 gap-[14px] max-d641:grid-cols-2">
    <div
      v-for="(stat, index) in stats"
      :key="stat.label"
      class="flex min-w-0 flex-col gap-[10px] rounded-tile bg-panel2 p-4 max-d401:p-[14px]"
    >
      <div
        class="flex h-12 w-12 items-center justify-center rounded-tile text-[25px] text-white max-d481:h-10 max-d481:w-10 max-d481:text-[20px]"
        :style="{ background: stat.tint }"
      >
        <i :class="stat.icon" aria-hidden="true"></i>
      </div>
      <div class="font-display text-2xl font-extrabold max-d481:text-[20px]">
        {{ displayed[index] }}
      </div>
      <div class="text-[12.5px] text-dim break-words [word-break:break-word]">{{ stat.label }}</div>
    </div>
  </div>
</template>
