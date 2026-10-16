<script setup>
import { certBadgeLogo, certBadgeTint, certificates } from '../data/portfolio.js'
import { usePortfolio } from '../composables/usePortfolio.js'

const { openCertificate } = usePortfolio()

function badgeTint(org) {
  return certBadgeTint(org) || 'bg-[#111]'
}
</script>

<template>
  <div>
    <div
      v-for="item in certificates"
      :key="`${item.name}-${item.date}`"
      class="flex min-w-0 items-center justify-between gap-[10px] border-b border-line py-3 last:border-b-0"
    >
      <div class="flex min-w-0 items-center gap-3">
        <div
          class="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-lg text-[11px] font-extrabold text-white"
          :class="badgeTint(item.org)"
        >
          <img
            v-if="certBadgeLogo(item.org)"
            :src="certBadgeLogo(item.org).src"
            :alt="certBadgeLogo(item.org).alt"
          />
          <template v-else>{{ item.org.charAt(0).toUpperCase() }}</template>
        </div>

        <div class="min-w-0">
          <div class="text-[13.5px] font-bold break-words [word-break:break-word]">
            {{ item.name }}
          </div>
          <div class="text-xs text-dim">{{ item.org }}</div>
          <div class="mt-[2px] flex items-center gap-1 text-[11px] text-faint">
            📅 Issued {{ item.date }}
          </div>
        </div>
      </div>

      <button
        type="button"
        class="flex items-center gap-[5px] rounded-lg border border-line bg-panel2 px-3 py-[7px] text-xs font-semibold whitespace-nowrap text-ink press-feedback active:scale-[.96] max-d901:px-[14px] max-d901:py-[9px] pointer-coarse:min-h-9"
        @click.stop="openCertificate(item)"
      >
        ↗ Show Certificate
      </button>
    </div>
  </div>
</template>
