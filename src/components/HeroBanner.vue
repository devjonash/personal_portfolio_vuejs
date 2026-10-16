<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import {
  formatToday,
  greetingPhrases,
  heroSlideInterval,
  heroSlides,
} from '../data/portfolio.js'

/* ---------- today's date pill ---------- */
const today = ref(formatToday())

/* ---------- background image carousel ----------
   One single, uninterrupted cadence: every slide is shown for exactly
   `heroSlideInterval` (5000) ms. There is no hover pausing, so the timing is
   the same for every picture and never restarts. */
const activeSlide = ref(0)
let carouselTimer = null

function nextSlide() {
  activeSlide.value = (activeSlide.value + 1) % heroSlides.length
}

function startCarousel() {
  if (carouselTimer !== null || heroSlides.length <= 1) return
  carouselTimer = setInterval(nextSlide, heroSlideInterval)
}

function stopCarousel() {
  if (carouselTimer === null) return
  clearInterval(carouselTimer)
  carouselTimer = null
}

/* Backdrop, text colour and text plate all follow the active picture: each
   slide declares its own `bg` / `fg` / `plate`, sampled from the photo. */
const activeBackground = computed(() => heroSlides[activeSlide.value]?.bg ?? '#ffffff')
const activeForeground = computed(() => heroSlides[activeSlide.value]?.fg ?? '#14161f')
const activePlate = computed(
  () => heroSlides[activeSlide.value]?.plate ?? 'rgba(255, 255, 255, 0.86)',
)

function slideStyle(src) {
  return { backgroundImage: `url('${src}')` }
}

/* ---------- typewriter greeting ---------- */
const TYPE_SPEED = 55
const ERASE_SPEED = 30
const HOLD_TIME = 1400
const PAUSE_TIME = 350

const phrases = greetingPhrases()
const greeting = ref('')
let phraseIndex = 0
const timers = []

function schedule(fn, delay) {
  const id = setTimeout(fn, delay)
  timers.push(id)
  return id
}

function typePhrase() {
  const text = phrases[phraseIndex]
  let i = 0
  const type = () => {
    if (i <= text.length) {
      greeting.value = text.slice(0, i)
      i += 1
      schedule(type, TYPE_SPEED)
    } else {
      schedule(erasePhrase, HOLD_TIME)
    }
  }
  type()
}

function erasePhrase() {
  const full = greeting.value
  let i = full.length
  const erase = () => {
    if (i >= 0) {
      greeting.value = full.slice(0, i)
      i -= 1
      schedule(erase, ERASE_SPEED)
    } else {
      phraseIndex = (phraseIndex + 1) % phrases.length
      schedule(typePhrase, PAUSE_TIME)
    }
  }
  erase()
}

onMounted(() => {
  startCarousel()
  typePhrase()
})

onBeforeUnmount(() => {
  stopCarousel()
  timers.forEach(clearTimeout)
  timers.length = 0
})
</script>

<template>
  <div
    class="relative flex min-h-[264px] flex-col justify-between overflow-hidden rounded-card border border-line p-[22px] [transition:background-color_1.4s_ease-in-out] max-d641:min-h-[198px] max-d641:p-[18px]"
    :style="{ backgroundColor: activeBackground }"
  >
    <!-- `overflow-hidden` + the slight scale on each layer keeps the blurred
         image edge inside this box, so the 14px backdrop frame stays intact. -->
    <div class="absolute inset-[14px] z-0 overflow-hidden">
      <div
        v-for="(slide, index) in heroSlides"
        :key="slide.src"
        class="absolute inset-0 scale-[1.02] bg-contain bg-center bg-no-repeat opacity-0 blur-[0.4px] [transition:opacity_1.4s_ease-in-out]"
        :class="index === activeSlide ? 'opacity-100' : ''"
        :style="slideStyle(slide.src)"
      ></div>
    </div>

    <div class="relative z-[2] flex min-h-0 flex-1 flex-col justify-between">
      <span
        class="inline-flex w-fit items-center gap-2 rounded-[20px] bg-[rgba(0,0,0,.45)] px-[13px] py-[7px] text-[13px] text-[#f1efff] backdrop-blur-[6px]"
      >
        <i class="fa-solid fa-calendar" aria-hidden="true"></i>
        <span>{{ today }}</span>
      </span>

      <div>
        <div
          class="inline-block rounded-[14px] px-3 py-1.5 font-display text-[15px] font-bold backdrop-blur-[6px] [transition:color_1.4s_ease-in-out,background-color_1.4s_ease-in-out] max-d641:text-[13.5px]"
          :style="{ color: activeForeground, backgroundColor: activePlate }"
        >
          <span>{{ greeting }}</span
          ><span class="ml-[2px] inline-block w-[2px] animate-type-blink bg-current">&nbsp;</span>
        </div>
      </div>
    </div>
  </div>
</template>
