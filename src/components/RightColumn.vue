<script setup>
import PanelCard from './PanelCard.vue'
import ExpertiseList from './ExpertiseList.vue'
import SkillMarquee from './SkillMarquee.vue'
import TimelineList from './TimelineList.vue'
import { contacts, contactNote, education, experience } from '../data/portfolio.js'
import { usePortfolio } from '../composables/usePortfolio.js'

const { rightPanel, showToast, openMessage } = usePortfolio()

function onContact(contact) {
  if (contact.toast) showToast(contact.toast)
  else openMessage()
}
</script>

<template>
  <aside
    id="rightCol"
    class="sticky top-5 flex min-w-0 flex-col gap-5 d901:max-d1101:static d901:max-d1101:flex-row d901:max-d1101:flex-wrap d901:max-d1101:items-stretch"
  >
    <!-- Home / default panel -->
    <div
      v-show="rightPanel === 'home'"
      class="flex min-w-0 flex-col gap-5 d901:max-d1101:flex-[1_1_320px]"
    >
      <PanelCard title="Skill Set" icon="fa-solid fa-gears">
        <SkillMarquee />
      </PanelCard>

      <PanelCard title="Expertise" icon="fa-solid fa-user-tie">
        <ExpertiseList />
      </PanelCard>

      <PanelCard title="Get in touch" icon="fa-solid fa-envelope">
        <div class="mb-[14px] flex min-w-0 flex-wrap gap-[10px]">
          <a
            v-for="contact in contacts"
            :key="contact.label"
            class="flex h-[38px] w-[38px] items-center justify-center rounded-tile border border-line bg-panel2 text-[15px] font-bold press-feedback active:scale-[.96] max-d901:h-11 max-d901:w-11 max-d901:text-base pointer-coarse:h-11 pointer-coarse:w-11"
            :href="contact.href"
            :title="contact.label"
            :target="contact.href.startsWith('mailto:') ? undefined : '_blank'"
            :rel="contact.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'"
            @click="onContact(contact)"
          >
            <i :class="contact.icon" aria-hidden="true"></i>
          </a>
        </div>
        <div class="text-[12.5px] leading-[1.6] text-dim break-words [word-break:break-word]">
          {{ contactNote }}
        </div>
      </PanelCard>
    </div>

    <!-- About panel: Education + Experience -->
    <div
      v-show="rightPanel === 'about'"
      class="flex min-w-0 flex-col gap-5 d901:max-d1101:flex-[1_1_320px]"
    >
      <PanelCard title="Education" icon="fa-solid fa-book-open">
        <TimelineList :items="education" />
      </PanelCard>

      <PanelCard title="Experience" icon="fa-solid fa-user-group">
        <TimelineList :items="experience" />
      </PanelCard>
    </div>
  </aside>
</template>
