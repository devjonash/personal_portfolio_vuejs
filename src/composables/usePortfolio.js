import { computed, ref } from 'vue'
import {
  messageEmail,
  messageSubject,
  pages as validPages,
  resumeNoticeText,
} from '../data/portfolio.js'

const STORAGE_KEY = 'portfolio:activePage'
const TOAST_DURATION = 2200
const RESUME_NOTICE_DURATION = 4000

/* ------------------------------------------------------------------
   Shared (module-level) state — one instance for the whole app.
   ------------------------------------------------------------------ */

const activePage = ref('home')
const sidebarOpen = ref(false)
const isLight = ref(false)
const toastMessage = ref('')
const resumeNotice = ref('')

/** The certificate currently open in the full-screen reader, or null. */
const openedCertificate = ref(null)

let toastTimer = null
let resumeNoticeTimer = null

/* ------------------------------------------------------------------ */
/* Toast                                                               */
/* ------------------------------------------------------------------ */

function showToast(message) {
  toastMessage.value = message
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => {
    toastMessage.value = ''
  }, TOAST_DURATION)
}

/* ------------------------------------------------------------------ */
/* Theme                                                               */
/* ------------------------------------------------------------------ */

function applyTheme() {
  document.body.classList.toggle('light', isLight.value)
}

/**
 * Drops the site into light mode without animating — used for the
 * documented fallback path and for `prefers-reduced-motion` users.
 */
function setTheme(light) {
  isLight.value = light
  applyTheme()
  showToast(light ? 'Light mode on' : 'Dark mode on')
}

/**
 * Dark ↔ light toggle with the circular clip-path reveal originating
 * from the toggle button. Falls back to an instant swap when the
 * View Transitions API is unavailable.
 */
async function toggleTheme(buttonEl) {
  const goingLight = !isLight.value

  if (!document.startViewTransition) {
    setTheme(goingLight)
    return
  }

  const rect = buttonEl.getBoundingClientRect()
  const x = rect.left + rect.width / 2
  const y = rect.top + rect.height / 2
  const maxRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  )

  const transition = document.startViewTransition(() => {
    isLight.value = goingLight
    applyTheme()
  })

  try {
    await transition.ready
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)',
      },
    )
  } catch (error) {
    /* Transition was skipped or interrupted — the theme still applied. */
  }

  showToast(goingLight ? 'Light mode on' : 'Dark mode on')
}

/* ------------------------------------------------------------------ */
/* Sidebar (off-canvas, mobile only)                                   */
/* ------------------------------------------------------------------ */

function openSidebar() {
  sidebarOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeSidebar() {
  sidebarOpen.value = false
  document.body.style.overflow = ''
}

function toggleSidebar() {
  sidebarOpen.value ? closeSidebar() : openSidebar()
}

/* ------------------------------------------------------------------ */
/* Page routing                                                        */
/* ------------------------------------------------------------------ */

function goToPage(page, silent = false) {
  if (!validPages.includes(page)) page = 'home'

  activePage.value = page

  if (!silent) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    closeSidebar()
  }

  try {
    localStorage.setItem(STORAGE_KEY, page)
  } catch (error) {
    /* Storage can be unavailable (private mode) — routing still works. */
  }
}

function restorePage() {
  let saved = 'home'
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && validPages.includes(stored)) saved = stored
  } catch (error) {
    /* Ignore and fall back to the home page. */
  }
  goToPage(saved, true)
}

/* ------------------------------------------------------------------ */
/* Actions                                                             */
/* ------------------------------------------------------------------ */

/**
 * The resume file isn't ready yet, so clicking Resume surfaces a short label
 * under the button instead of downloading a placeholder .txt file.
 */
function resumeUnavailable() {
  resumeNotice.value = resumeNoticeText
  clearTimeout(resumeNoticeTimer)
  resumeNoticeTimer = setTimeout(() => {
    resumeNotice.value = ''
  }, RESUME_NOTICE_DURATION)
}

/**
 * Open a certificate in the full-screen reader so a visitor can actually read
 * it, instead of only seeing the thumbnail on the card.
 */
function openCertificate(item) {
  openedCertificate.value = item
  document.body.style.overflow = 'hidden'
}

function closeCertificate() {
  openedCertificate.value = null
  // Leave the scroll lock alone if the mobile sidebar is still open.
  if (!sidebarOpen.value) document.body.style.overflow = ''
}

function openMessage() {
  window.location.href = `mailto:${messageEmail}?subject=${encodeURIComponent(messageSubject)}`
}

/* ------------------------------------------------------------------ */
/* Public API                                                          */
/* ------------------------------------------------------------------ */

export function usePortfolio() {
  /** Achievements & Projects use the full content width (no right column). */
  const isWide = computed(
    () => activePage.value === 'achievements' || activePage.value === 'projects',
  )

  /** About swaps the right column for the Education / Experience panel. */
  const rightPanel = computed(() => (activePage.value === 'about' ? 'about' : 'home'))

  return {
    activePage,
    sidebarOpen,
    isLight,
    toastMessage,
    resumeNotice,
    openedCertificate,
    isWide,
    rightPanel,
    goToPage,
    restorePage,
    openSidebar,
    closeSidebar,
    toggleSidebar,
    toggleTheme,
    showToast,
    resumeUnavailable,
    openCertificate,
    closeCertificate,
    openMessage,
  }
}
