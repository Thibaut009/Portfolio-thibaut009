<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import avatar from '../assets/landing-memojis.webp'
import { initFluid } from 'smokey-fluid-cursor'

const router = useRouter()
const goTo = (path: string) => {
  router.push(path)
}

onMounted(() => {
  initFluid({
    id: 'fluid-bg',
    simResolution: 128,
    dyeResolution: 1440,
    captureResolution: 512,
    densityDissipation: 1.0,
    velocityDissipation: 1.5,
    pressure: 0.1,
    curl: 3,
    splatRadius: 0.25,
    splatForce: 7000,
    shading: true,
    colorUpdateSpeed: 10,
    paused: false,
    backColor: { r: 0.5, g: 0, b: 0 },
    transparent: true
  })
})
</script>

<template>
  <div class="wrapper">
    <canvas id="fluid-bg"></canvas>
    <div class="content">
      <div class="title fade-slide-down">Hey, I'm Thibaut Gabet👋</div>
      <h1 class="hero fade-slide-down">Dev Full Stack</h1>
      <img class="avatar" :src="avatar" alt="avatar" />

      <div class="nav">
        <!-- Me -->
        <button class="nav-btn fade-slide-up" @click="goTo('/me')">
          <div class="btn-content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" :stroke="`var(--me-color)`" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"></path>
              <line x1="9" x2="9.01" y1="9" y2="9"></line>
              <line x1="15" x2="15.01" y1="9" y2="9"></line>
            </svg>
            <span>Me</span>
          </div>
        </button>

        <!-- Projects.vue -->
        <button class="nav-btn fade-slide-up" @click="goTo('/projects')">
          <div class="btn-content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" :stroke="`var(--project-color)`" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
              <path d="M22 13a18.15 18.15 0 0 1-20 0"></path>
              <rect width="20" height="14" x="2" y="6" rx="2"></rect>
            </svg>
            <span>Projects</span>
          </div>
        </button>

        <!-- Skills -->
        <button class="nav-btn fade-slide-up" @click="goTo('/skills')">
          <div class="btn-content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" :stroke="`var(--skill-color)`" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
              <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
              <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
            </svg>
            <span>Skills</span>
          </div>
        </button>

        <!-- Fun -->
        <button class="nav-btn fade-slide-up" @click="goTo('/fun')">
          <div class="btn-content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" :stroke="`var(--fun-color)`" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5.8 11.3 2 22l10.7-3.79"></path>
              <path d="M4 3h.01"></path>
              <path d="M22 8h.01"></path>
              <path d="M15 2h.01"></path>
              <path d="M22 20h.01"></path>
              <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"></path>
              <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"></path>
              <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"></path>
              <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"></path>
            </svg>
            <span>Fun</span>
          </div>
        </button>

        <!-- Contact -->
        <button class="nav-btn fade-slide-up" @click="goTo('/contact')">
          <div class="btn-content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" :stroke="`var(--contact-color)`" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="10" cy="8" r="5"></circle>
              <path d="M2 21a8 8 0 0 1 10.434-7.62"></path>
              <circle cx="18" cy="18" r="3"></circle>
              <path d="m22 22-1.9-1.9"></path>
            </svg>
            <span>Contact</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

#fluid-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 1;
}

.content {
  position: relative;
  z-index: 2;
  text-align: center;
  width: 90%;
  max-width: 1400px;
  padding: 0 20px;
}

.title {
  font-size: 1.8rem;
  opacity: 0.9;
  font-weight: 600;
  line-height: 1;
}

.hero {
  font-size: 5rem;
  font-weight: 700;
  line-height: 0.6;
  margin: 20px 0;
}

.avatar {
  width: 700px;
  max-width: 95%;
  border-radius: 12px;
}

.nav {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.nav-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  border: 1px solid rgba(0,0,0,0.1);
  background: rgba(255,255,255,0.3);
  padding: 2.5rem 1rem;
  width: 100%;
  height: 140px;
  cursor: pointer;
  backdrop-filter: blur(12px);
  transition: all 0.2s ease;
}

.nav-btn:active {
  transform: scale(0.95);
}

.btn-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: #333;
  font-size: 0.85rem;
  text-align: center;
}

.nav-btn svg {
  width: 26px;
  height: 26px;
  margin-bottom: 6px;
}

/* Animation pour le texte venant du haut */
.fade-slide-down {
  opacity: 0;
  transform: translateY(-30px);
  animation: slideDown 0.9s forwards;
}

@keyframes slideDown {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animation pour les cartes venant du bas */
.fade-slide-up {
  opacity: 0;
  transform: translateY(30px);
  animation: slideUp 0.9s forwards;
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Staggered delay pour chaque carte */
.nav-btn:nth-child(1) { animation-delay: 0.2s; }
.nav-btn:nth-child(2) { animation-delay: 0.2s; }
.nav-btn:nth-child(3) { animation-delay: 0.2s; }
.nav-btn:nth-child(4) { animation-delay: 0.2s; }
.nav-btn:nth-child(5) { animation-delay: 0.2s; }

/* Responsive mobile */
@media (max-width: 650px) {
  .nav {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .nav-btn {
    height: 80px;
    padding: 1rem;
  }
  .avatar {
    max-width: 100%;
  }
  .hero {
    font-size: 2.2rem;
  }
  .title {
    font-size: 1rem;
  }
}
</style>