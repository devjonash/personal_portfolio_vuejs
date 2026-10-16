<script setup>
import CertGrid from '../CertGrid.vue'
import PanelCard from '../PanelCard.vue'
import { certificates, competitions, educationCertificates } from '../../data/portfolio.js'
</script>

<template>
  <PanelCard title="Competitions" icon="fa-solid fa-award">
    <CertGrid :items="competitions" />
  </PanelCard>

  <PanelCard title="Licenses &amp; Certifications" icon="fa-solid fa-certificate">
    <CertGrid :items="certificates" />
  </PanelCard>

  <PanelCard title="Others" icon="fa-solid fa-book-open">
    <CertGrid :items="educationCertificates" />
  </PanelCard>
</template>
