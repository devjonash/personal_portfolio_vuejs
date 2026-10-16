<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { usePortfolio } from '../composables/usePortfolio.js'

const { openedCertificate, closeCertificate } = usePortfolio()

/* Fit-to-screen by default; clicking the image switches to its full size so
   small print on the certificate can be read, with the overlay scrolling. */
const zoomed = ref(false)

watch(openedCertificate, () => {
  zoomed.value = false
})

function onKeydown(event) {
  if (event.key !== 'Escape') return
  if (!openedCertificate.value) return
  closeCertificate()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div
    v-if="openedCertificate"
    class="fixed inset-0 z-[1000] overflow-auto bg-[rgba(0,0,0,.92)]"
    role="dialog"
    aria-modal="true"
    :aria-label="`${openedCertificate.name} certificate`"
    @click="closeCertificate"
  >
    <!-- The wrapper must keep a *definite* width (w-full, not w-max) so that
         `max-w-full` on the image really resolves against the screen width.
         With a max-content wrapper the width cap is lost and a wide
         certificate gets scaled up to the full screen height on phones.
         `m-auto` centres it when it fits and keeps it reachable when it
         overflows (zoom mode). -->
    <div class="flex min-h-full w-full p-4">
      <img
        :src="openedCertificate.img"
        :alt="`${openedCertificate.name} certificate`"
        class="m-auto block bg-white shadow-2xl"
        :class="
          zoomed
            ? 'max-w-none cursor-zoom-out'
            : 'max-h-[calc(100vh-2rem)] max-w-full cursor-zoom-in object-contain'
        "
        @click.stop="zoomed = !zoomed"
      />
    </div>

    <button
      type="button"
      class="fixed top-4 right-4 z-[1001] flex h-11 w-11 items-center justify-center rounded-full border border-line bg-[rgba(0,0,0,.6)] text-lg text-white backdrop-blur-[6px] press-feedback active:scale-[.94]"
      aria-label="Close certificate"
      @click.stop="closeCertificate"
    >
      <i class="fa-solid fa-xmark" aria-hidden="true"></i>
    </button>
  </div>
</template>
