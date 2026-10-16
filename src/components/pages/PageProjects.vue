<script setup>
import FeaturedRow from '../FeaturedRow.vue'
import PanelCard from '../PanelCard.vue'
import ProjectGrid from '../ProjectGrid.vue'
</script>

<template>
  <PanelCard title="Projects" icon="fa-solid fa-diagram-project">
    <ProjectGrid />
  </PanelCard>

  <PanelCard title="Featured" icon="fa-solid fa-thumbtack">
    <FeaturedRow />
  </PanelCard>
</template>
