/**
 * Single source of truth for every piece of portfolio content.
 *
 * All asset paths are kept in their original `img/...` form and are served
 * from `public/img/` by Vite, so they resolve exactly like before.
 */

/* ------------------------------------------------------------------ */
/* Identity                                                            */
/* ------------------------------------------------------------------ */

export const owner = {
  name: 'Jonash C. Ramirez',
  role: 'Full Stack Developer',
  title: 'Jonash C. Ramirez — Full-Stack Developer',
  credit: 'Designed & Built by Jonash C. Ramirez',
  copyright: '© 2025, All rights reserved.',
  avatar: 'img/profile.jpg',
  aboutCover: 'img/bg_profile3.png',
}

/** Shown under the Resume button — the file itself isn't ready yet. */
export const resumeNoticeText = 'Resume not available yet.'
export const messageEmail = 'jonashclosaramirez10@gmail.com'
export const messageSubject = 'Hello Jonash'

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const pages = ['home', 'about', 'achievements', 'projects']

export const navLinks = [
  { page: 'home', label: 'Home', icon: 'fa-solid fa-house' },
  { page: 'about', label: 'About', icon: 'fa-solid fa-circle-info' },
  { page: 'achievements', label: 'Achievements', icon: 'fa-solid fa-award' },
  { page: 'projects', label: 'Projects', icon: 'fa-solid fa-folder' },
]

/* ------------------------------------------------------------------ */
/* Home — hero + stats + featured                                      */
/* ------------------------------------------------------------------ */

/**
 * Hero slides.
 *
 * `bg`    — dominant colour sampled straight from the photo, used as the hero
 *           backdrop so it blends with the picture (green photo => green
 *           backdrop, white photo => white backdrop).
 * `fg`    — the greeting text colour, picked to stay readable on that
 *           backdrop: dark ink on light backgrounds, white on dark ones.
 * `plate` — the pill behind the greeting. Same hue as the backdrop but slightly
 *           translucent, so the text keeps its contrast even where it sits over
 *           a busy part of the photo.
 */
export const heroSlides = [
  // HACK4GOV — light grey/white body
  { src: 'img/hero_new1.jpg', bg: '#f0f0f0', fg: '#14161f', plate: 'rgba(240, 240, 240, 0.86)' },
  // CodeByt — white body
  { src: 'img/hero_new3.png', bg: '#f8f8f8', fg: '#14161f', plate: 'rgba(248, 248, 248, 0.86)' },
  // MinSU CyberNovator — green body
  { src: 'img/hero_new4.png', bg: '#005018', fg: '#ffffff', plate: 'rgba(0, 80, 24, 0.86)' },
]

/** Every picture is shown for exactly this long (ms). */
export const heroSlideInterval = 5000

/* The legacy `.hero::before` dark overlay is intentionally NOT used any more:
   the hero now keeps a white backdrop so it matches the white banners. */

export const stats = [
  { target: 0, label: 'years Experience', icon: 'fa-regular fa-clock', tint: '#3a2a52' },
  { target: 16, label: 'Certificates', icon: 'fa-solid fa-award', tint: '#4a3a1f' },
  { target: 4, label: 'Projects', icon: 'fa-regular fa-folder', tint: '#173a3a' },
  { target: 11, label: 'Technologies', icon: 'fa-solid fa-cogs', tint: '#1a3350' },
]

export const featured = [
  {
    title: 'POS Web Based',
    date: 'Sep 2025',
    desc: 'A web-based point-of-sale system for managing sales transactions.',
    img: 'img/projects/TindaPOS.png',
  },
  {
    title: 'Rice Dryer and Milling Management System',
    date: 'May 2026',
    desc: 'A comprehensive solution for managing rice drying and milling operations.',
    img: 'img/projects/palaypro.jpg',
  },
  {
    title: 'Smart Parcel Box (Embedded System)',
    date: 'May 2025',
    desc: 'A smart parcel box designed for efficient package delivery',
    img: 'img/projects/smartparcelbox.avif',
  },
]

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const aboutParagraphs = [
  "I'm an Information Technology student who loves turning ideas into clean, functional web interfaces. Alongside my studies, I've earned certifications in UI/UX design, web fundamentals, and programming through TESDA, freeCodeCamp, HackerRank, and Cisco Networking Academy and put them into practice by building real projects like a point-of-sale system, a rice dryer & milling management system, and an embedded smart parcel box.",
  "I'm still early in my journey, but I care about performance, accessibility, and getting the small details right and I'm always looking for the next project to learn from.",
]

export const education = [
  {
    title: 'Bachelor of Science in Information Technology',
    org: 'Mindoro State University',
    meta: 'GWA: 1.30 / 1.00',
    date: 'Jun 2020 - Jun 2024',
    logo: 'img/minsulogo.jpg',
    logoAlt: 'MSU',
    desc: 'Studying.',
  },
  {
    title: 'GAS - General Academic Strand',
    org: 'Managpi National High School',
    meta: 'GWA: 95 / 100',
    date: 'Jun 2018 - Mar 2020',
    logo: 'img/managpilogo.jpg',
    logoAlt: 'MNH',
    desc: 'Consistent Honor Student.',
  },
]

export const experience = []

/* ------------------------------------------------------------------ */
/* Achievements — certificates, competitions, education                */
/* ------------------------------------------------------------------ */

const CERT_DESC_UX = 'Completed a course on UX design principles and best practices.'
const CERT_DESC_UI = 'Completed a course on UI design principles and best practices.'
const CERT_DESC_RDB = 'Completed a course on relational database concepts and SQL.'

export const certificates = [
  {
    name: 'Developing Designs for UX',
    org: 'Tesda Online Program',
    date: 'Jul 2026',
    img: 'img/certs/certs_ux.png',
    logo: 'img/tesda.jpg',
    desc: CERT_DESC_UX,
  },
  {
    name: 'Developing Designs for UI',
    org: 'Tesda Online Program',
    date: 'Jul 2026',
    img: 'img/certs/certs_ui.png',
    logo: 'img/tesda.jpg',
    desc: CERT_DESC_UI,
  },
  {
    name: 'Relational Database V8',
    org: 'freeCodeCamp',
    date: 'Jul 2026',
    img: 'img/certs/certs_rdv8.png',
    logo: 'img/freecodecamp_logo.jpg',
    desc: CERT_DESC_RDB,
  },
  {
    name: 'Relational Database',
    org: 'freeCodeCamp',
    date: 'Jul 2026',
    img: 'img/certs/certs_rd.png',
    logo: 'img/freecodecamp_logo.jpg',
    desc: CERT_DESC_RDB,
  },
  {
    name: 'Foundational C# With Microsoft',
    org: 'freeCodeCamp',
    date: 'May 2025',
    img: 'img/certs/cert_freecodecamp.jpg',
    logo: 'img/freecodecamp_logo.jpg',
    desc: 'Covered C# syntax, control structures, and basic object-oriented programming concepts.',
  },
  {
    name: 'C# (Basic)',
    org: 'HackerRank',
    date: 'Jun 2025',
    img: 'img/certs/certs_csharp.jpg',
    logo: 'img/hackerrank_logo.png',
    desc: 'Validated core C# fundamentals — variables, control structures, and functions.',
  },
  {
    name: 'Javascript (Basic)',
    org: 'HackerRank',
    date: 'Jun 2025',
    img: 'img/certs/certs_js.jpg',
    logo: 'img/hackerrank_logo.png',
    desc: 'Assessed foundational JavaScript programming skills.',
  },
  {
    name: 'CSS (Basic)',
    org: 'HackerRank',
    date: 'May 2025',
    img: 'img/certs/certs_css.jpg',
    logo: 'img/hackerrank_logo.png',
    desc: 'Assessed core CSS styling, layout, and selector skills.',
  },
  {
    name: 'Java (Basic)',
    org: 'Cisco Networking Academy',
    date: 'May 2025',
    img: 'img/certs/certs_js.jpg',
    logo: 'img/hackerrank_logo.png',
    desc: 'Introductory course covering Java syntax, control structures, and functions.',
  },
  {
    name: 'SQL (Basic)',
    org: 'HackerRank',
    date: 'May 2025',
    img: 'img/certs/certs_sql.jpg',
    logo: 'img/hackerrank_logo.png',
    desc: 'Tested foundational SQL querying and database management skills.',
  },
  {
    name: 'Linux Unhatched',
    org: 'Netacad',
    date: 'May 2025',
    img: 'img/certs/linux_unhatch.jpg',
    logo: 'img/cisco_logo.png',
    desc: 'Introductory course covering Linux fundamentals and command-line operations.',
  },
  {
    name: 'Cisco Packet Tracer',
    org: 'Cisco Networking Academy',
    date: 'Mar 2025',
    img: 'img/certs/certs_ciscopkt.jpg',
    logo: 'img/cisco_logo.png',
    desc: 'Practical exercise for configuring and troubleshooting network topologies.',
  },
]

export const competitions = [
  {
    name: '2026 MIMAROPA HackforGov Competition',
    org: 'DICT MIMAROPA / CERT-PH',
    date: 'Sep 2026',
    img: 'img/certs/cert_hackforgov2026.jpg',
    logo: 'img/dict_logo.png',
    desc: 'Certificate of participation for active participation in the regional HackforGov cybersecurity competition.',
  },
 
  {
    name: 'I Code Do It',
    org: 'PSITE',
    date: 'Mar 2026',
    img: 'img/certs/cert_psite.jpg',
    logo: 'img/psite_logo.png',
    desc: '3rd Place Winner, I Code Do It Competition',
  },
  {
    name: 'National Programming Competition (CodeChum)',
    org: 'CodeChum',
    date: 'Sept 2024',
    img: 'img/certs/cert_codechum.jpg',
    logo: 'img/codechum_logo.jpg',
    desc: 'Participated in the National Programming Competition.',
  },
  {
    name: 'Cyber Defense Excercise Challenge TRON Competition',
    org: '2nd Infantry Division & Cyber Battalion Philippine Army',
    date: 'Nov 2025',
    img: 'img/certs/cert_cyber_defense.jpg',
    logo: 'img/infantry_logo.jpg',
    desc: 'Participated in a simulated cyber defense exercise.',
  },
  {
    name: 'Batang Techno',
    org: 'CICS Alangilan Batangas',
    date: 'Apr 2026',
    img: 'img/certs/cert_batangas.jpg',
    logo: 'img/batangas_logo.png',
    desc: 'Participated in the Batang Techno competition.',
  },
]

export const educationCertificates = [
   {
    name: 'Binibining Victoria 2026 — Official Statistician/Tabulator',
    org: 'Municipality of Victoria, Oriental Mindoro',
    date: 'Sep 2026',
    img: 'img/certs/cert_tabulator2026.jpg',
    logo: 'img/logo_victoria.jpg',
    desc: 'Certificate of appreciation recognizing service as official statistician/tabulator and support for accurate, transparent score consolidation.',
  },{
    name: 'Tech Leadership Reimagined: Leading The IT Revolution (Training)',
    org: 'Mindoro State University',
    date: 'Nov 2024',
    img: 'img/certs/cert_leadership.jpg',
    logo: 'img/minsulogo.jpg',
    desc: 'Completed a training program on tech leadership and IT revolution.',
  },
  {
    name: 'Digital Careers Expo',
    org: 'DICT',
    date: 'Sept 2024',
    img: 'img/certs/cert_digital_career_expo.jpg',
    logo: 'img/dict_logo.png',
    desc: 'Participated in the Digital Careers Expo.',
  },
]

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export const projects = [
  {
    title: 'Lost and Found for MinSU (Web App)',
    tag: 'private',
    date: 'Sep 2025',
    img: 'img/projects/lostandfound.jpg',
    desc: 'A web platform where students and staff can report, browse, and claim lost and found items on campus.',
  },
  {
    title: 'Barangay Management System (C# .NET)',
    tag: 'private',
    date: 'Sep 2025',
    img: 'img/projects/bdms.jpg',
    desc: 'A desktop application for managing resident records, certificates, and requests in a barangay office.',
  },
  {
    title: 'Rice Milling and Rice Drying Management System (Web App)',
    tag: 'private',
    date: 'Sep 2025',
    img: 'img/projects/palaypro.jpg',
    desc: 'A web-based system for tracking rice drying and milling operations, from intake to output.',
  },
  {
    title: 'POS Web Based',
    tag: 'private',
    date: 'Aug 2025',
    img: 'img/projects/TindaPOS.png',
    desc: 'A web-based point-of-sale system for managing sales transactions, inventory, and receipts.',
  },
]

export const extraProjects = [
  {
    title: 'Smart Parcel Box (Embedded System)',
    tag: 'private',
    date: 'May 2025',
    img: 'img/projects/smartparcelbox.avif',
    desc: 'An embedded smart parcel box built for secure, unattended package delivery.',
  },
]

/* ------------------------------------------------------------------ */
/* Right column — skill marquee, expertise, contact                    */
/* ------------------------------------------------------------------ */

export const skillRow1 = [
  { key: 'javascript', label: 'JavaScript', src: 'img/jslogo.png', alt: 'JavaScript' },
  { key: 'php', label: 'PHP', src: 'img/phplogo.png', alt: 'PHP' },
  { key: 'html5', label: 'HTML5', src: 'img/htmlogo.png', alt: 'HTML5' },
]

export const skillRow2 = [
  { key: 'vue', label: 'Vue.js', src: 'img/vuejs_icon.png', alt: 'Vue.js' },
  { key: 'css3', label: 'CSS3', src: 'img/csslogo.png', alt: 'CSS3' },
  { key: 'csharp', label: 'C#', src: 'img/csharplogo.png', alt: 'C#' },
  { key: 'laravel', label: 'Laravel', src: 'img/laravel_logo.jpg', alt: 'Laravel' },
  { key: 'vite', label: 'Vite', src: 'img/vite_logo.png', alt: 'Vite' },
  { key: 'react', label: 'React', src: 'img/react_logo.png', alt: 'Laravel' },
]

export const expertise = [
  {
    label: 'Web Development',
    icon: 'fa-solid fa-laptop',
    tint: '#3a2a52',
    body: 'Building responsive, high-performance web applications with React, TypeScript, and modern front-end tooling.',
  },
  {
    label: 'UI / UX Design',
    icon: 'fa-brands fa-uikit',
    tint: '#1a3350',
    body: 'Designing in Figma — wireframes, prototypes, and interfaces backed by usability principles.',
  },
]

export const contacts = [
  {
    label: 'Facebook',
    icon: 'fa-brands fa-facebook-f',
    href: 'https://web.facebook.com/nash.ramirez.399',
    toast: 'Opening Facebook…',
  },
  {
    label: 'Gmail',
    icon: 'fa-solid fa-envelope',
    href: `mailto:${messageEmail}`,
    toast: null,
  },
  {
    label: 'GitHub',
    icon: 'fa-brands fa-github',
    href: 'https://github.com/devjonash',
    toast: 'Opening GitHub…',
  },
  {
    label: 'LinkedIn',
    icon: 'fa-brands fa-linkedin-in',
    href: 'https://linkedin.com/in/jonashclosaramirez',
    toast: 'Opening LinkedIn…',
  },
]

export const contactNote =
  "Let's build something great together — feel free to connect with me through any of the platforms above."

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

export const TOAST_OPENING_CREDENTIAL = 'Opening credential'
export const TOAST_OPENING_CERTIFICATE = 'Opening certificate'

/**
 * Organisation logo shown inside the About → Certificates list badge.
 * Mirrors the original `certBadgeInitial()` mapping.
 */
export function certBadgeLogo(org) {
  if (/tesda/i.test(org)) return { src: 'img/tesda.jpg', alt: 'TESDA' }
  if (/freecodecamp/i.test(org)) return { src: 'img/freecodecamp_logo.jpg', alt: 'freeCodeCamp' }
  if (/cisco|netacad/i.test(org)) return { src: 'img/cisco_logo.png', alt: 'Cisco' }
  if (/hackerrank/i.test(org)) return { src: 'img/hackerrank_logo.png', alt: 'HackerRank' }
  return null
}

/**
 * Tint class for the About → Certificates list badge.
 * Mirrors the original `certBadgeClass()` mapping.
 */
export function certBadgeTint(org) {
  if (/tesda/i.test(org)) return 'bg-[#1a7a3c]'
  if (/freecodecamp/i.test(org)) return 'bg-[#0a0a23]'
  if (/cisco|netacad/i.test(org)) return 'bg-[#1a94ff]'
  return ''
}

/** `public` → `Public`, `private` → `Private` (tag pill label). */
export function tagLabel(tag) {
  return tag.charAt(0).toUpperCase() + tag.slice(1)
}

/** Long date format used by the hero pill. */
export function formatToday(date = new Date()) {
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/** Time-of-day greeting used by the typewriter hero line. */
export function greetingPhrases(date = new Date()) {
  const hour = date.getHours()
  const part = hour < 12 ? 'morning' : hour < 18 ? 'afternoon' : 'evening'
  return [`Hey there, good ${part}!`, "You're now in my creative space :)"]
}
