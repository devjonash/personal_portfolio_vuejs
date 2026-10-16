<script setup>
import CertCard from './CertCard.vue'
import { usePortfolio } from '../composables/usePortfolio.js'

defineProps({
  items: { type: Array, required: true },
})

const { openCertificate } = usePortfolio()

function onView(item) {
  openCertificate(item)
}
</script>

<template>
  <div class="grid min-w-0 grid-cols-4 gap-4 max-d1001:grid-cols-2 max-d561:grid-cols-1">
    <CertCard
      v-for="item in items"
      :key="`${item.name}-${item.date}`"
      :item="item"
      @view="onView"
    />
  </div>
</template>
