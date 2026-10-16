<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import AppSidebar from './components/AppSidebar.vue'
import CertificateViewer from './components/CertificateViewer.vue'
import MobileTopbar from './components/MobileTopbar.vue'
import RightColumn from './components/RightColumn.vue'
import PageAbout from './components/pages/PageAbout.vue'
import PageAchievements from './components/pages/PageAchievements.vue'
import PageBlogs from './components/pages/PageBlogs.vue'
import PageHome from './components/pages/PageHome.vue'
import PageProjects from './components/pages/PageProjects.vue'
import { usePortfolio } from './composables/usePortfolio.js'

const { activePage, sidebarOpen, isWide, toastMessage, restorePage, toggleSidebar, closeSidebar } =
  usePortfolio()

function handleResize() {
  if (window.innerWidth > 900) closeSidebar()
}

onMounted(() => {
  restorePage()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <MobileTopbar :open="sidebarOpen" @toggle="toggleSidebar" />

  <div
    v-show="sidebarOpen"
    class="fixed inset-0 z-[70] bg-[rgba(0,0,0,.5)] backdrop-blur-[2px]"
    @click="closeSidebar"
  ></div>

  <div
    class="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)] items-start gap-5 p-5 max-d401:gap-3 max-d401:p-[10px] d401:max-d641:gap-[14px] d401:max-d641:p-[14px] d641:max-d901:gap-4 d641:max-d901:p-[18px] d901:max-d1281:gap-4 d901:max-d1101:pl-[246px] d1101:max-d1281:pl-[116px] d1101:grid-cols-[minmax(0,1fr)_280px] d1281:grid-cols-[minmax(0,1fr)_320px] d1281:pl-[300px]"
  >
    <AppSidebar />

    <main class="flex min-w-0 flex-col gap-5" :class="isWide ? '[grid-column:1/-1]' : ''">
      <section v-show="activePage === 'home'" class="flex min-w-0 flex-col gap-5">
        <PageHome />
      </section>

      <section v-show="activePage === 'about'" class="flex min-w-0 flex-col gap-5">
        <PageAbout />
      </section>

      <section v-show="activePage === 'achievements'" class="flex min-w-0 flex-col gap-5">
        <PageAchievements />
      </section>

      <section v-show="activePage === 'projects'" class="flex min-w-0 flex-col gap-5">
        <PageProjects />
      </section>

      <section v-show="activePage === 'blogs'" class="flex min-w-0 flex-col gap-5">
        <PageBlogs />
      </section>
    </main>

    <RightColumn v-show="!isWide" />
  </div>

  <CertificateViewer />

  <div
    class="pointer-events-none fixed bottom-6 left-1/2 z-[999] -translate-x-1/2 rounded-tile border border-line bg-[#1c202c] px-5 py-3 text-[13.5px] text-white [transition:opacity_.25s,transform_.25s]"
    :class="toastMessage ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'"
  >
    {{ toastMessage }}
  </div>
</template>
