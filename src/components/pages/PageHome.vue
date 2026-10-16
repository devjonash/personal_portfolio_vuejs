<script setup>
import FeaturedRow from '../FeaturedRow.vue'
import HeroBanner from '../HeroBanner.vue'
import PanelCard from '../PanelCard.vue'
import StatsGrid from '../StatsGrid.vue'
</script>

<template>
  <HeroBanner />

  <PanelCard title="Career Stats" icon="fa-solid fa-chart-line" tint-icon>
    <StatsGrid />
  </PanelCard>

  <PanelCard title="Featured" icon="fa-solid fa-thumbtack">
    <FeaturedRow />
  </PanelCard>
</template>
