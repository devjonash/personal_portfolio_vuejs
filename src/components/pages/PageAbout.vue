<script setup>
import { ref } from 'vue'
import CertList from '../CertList.vue'
import PanelCard from '../PanelCard.vue'
import { aboutParagraphs, owner } from '../../data/portfolio.js'
import { usePortfolio } from '../../composables/usePortfolio.js'

const { openMessage } = usePortfolio()

/*
 * The original about paragraph renders in full and the "See more" button
 * toggles the two-line clamp, so the initial state is un-clamped.
 */
const clamped = ref(false)
</script>

<template>
  <PanelCard title="" flush>
    <div class="relative overflow-hidden rounded-card border border-line">
      <img
        class="relative z-[1] block h-[180px] w-full object-cover brightness-[.55]"
        :src="owner.aboutCover"
        alt=""
      />
      <div class="relative z-[2] min-w-0 p-5">
        <div
          class="relative z-[3] mt-[-58px] mb-3 flex h-[138px] w-[138px] items-center justify-center overflow-hidden rounded-full border-4 border-panel bg-accent-grad font-display text-[26px] font-bold shadow-[0_4px_14px_rgba(0,0,0,.35)] max-d481:mt-[-46px] max-d481:h-[110px] max-d481:w-[110px]"
        >
          <img class="h-full w-full object-cover" :src="owner.avatar" :alt="owner.name" />
        </div>
        <div class="text-[21px] font-bold break-words [word-break:break-word] max-d481:text-lg">
          {{ owner.name }}
        </div>
        <div class="mb-[14px] text-sm text-dim">{{ owner.role }}</div>
        <button
          type="button"
          class="inline-flex items-center gap-[7px] rounded-tile border border-line bg-panel2 px-4 py-[9px] text-[13.5px] font-semibold text-ink press-feedback active:scale-[.96]"
          @click="openMessage"
        >
          Message
        </button>
      </div>
    </div>
  </PanelCard>

  <PanelCard title="About" icon="fa-solid fa-circle-info">
    <p
      class="text-sm leading-[1.7] text-dim break-words [word-break:break-word]"
      :class="clamped ? 'line-clamp-2' : ''"
    >
      {{ aboutParagraphs[0] }}<br /><br />{{ aboutParagraphs[1] }}
    </p>
    <button
      type="button"
      class="mt-2 inline-block border-0 bg-transparent p-0 text-[13.5px] font-semibold text-brand press-feedback pointer-coarse:px-1 pointer-coarse:py-2"
      @click="clamped = !clamped"
    >
      {{ clamped ? 'See less' : 'See more' }}
    </button>
  </PanelCard>

  <PanelCard title="Certificates" icon="fa-solid fa-certificate">
    <CertList />
  </PanelCard>
</template>
