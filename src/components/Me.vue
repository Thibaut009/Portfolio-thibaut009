<script setup lang="ts">
import { ref } from 'vue'
import avatar from "../assets/landing-memojis.webp";

const timelineItems = ref([
  {
    year: '2025 - 2026',
    title: 'MBA Full Stack Developer',
    subtitle: 'Master 2',
    description: 'Formation approfondie en développement web full stack',
    color: 'var(--me-color)',
    type: 'education'
  },
  {
    year: '2024 - 2025',
    title: 'MBA Full Stack Developer',
    subtitle: 'Master 1',
    description: 'Apprentissage des technologies web modernes',
    color: 'var(--project-color)',
    type: 'education'
  },
  {
    year: '2023 - 2024',
    title: 'Bachelor Developer Web',
    subtitle: 'Bachelor 3',
    description: 'Bachelor en développement web et mobile (certifications professionnelles de développeur d\'applications).\n',
    color: 'var(--skill-color)',
    type: 'education'
  },
  {
    year: '2021 - 2023',
    title: 'BTS SIO (option SLAM)',
    subtitle: 'Bac +2',
    description: 'BTS SIO (Services informatiques aux organisations) option SLAM (Solutions logicielles et applications métier).',
    color: 'var(--fun-color)',
    type: 'education'
  },
  {
    year: '2023 - 2026',
    title: 'Full Stack Developer chez Kapela',
    subtitle: 'Alternance',
    description: 'Développement d\'applications web complètes en entreprise',
    color: 'var(--me-color)',
    type: 'experience'
  },
  {
    year: 'January/February 2023',
    title: 'Developer Web chez Kapela',
    subtitle: 'Stage',
    description: '5 semaines chez Kapela Constellation en tant que développeur web',
    color: 'var(--project-color)',
    type: 'experience'
  },
  {
    year: 'June/July 2022',
    title: 'Developer Web chez Easyteam',
    subtitle: 'Stage',
    description: '6 semaines chez Easyteam Constellation en tant que développeur web.',
    color: 'var(--skill-color)',
    type: 'experience'
  }
])

const educationItems = timelineItems.value.filter(item => item.type === 'education')
const experienceItems = timelineItems.value.filter(item => item.type === 'experience')
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <div class="header fade-slide-down">
        <h1 class="title">About Me</h1>
        <div class="intro-card">
          <div class="avatar-section">
            <div class="avatar-placeholder">
              <img class="avatar" :src="avatar" alt="avatar" />
            </div>
            <div class="intro-text">
              <h2>Thibaut Gabet</h2>
              <p class="age">22 ans</p>
              <p class="status">Étudiant en 3ème année de MBA Full Stack Developer (Master 2)</p>
            </div>
          </div>
        </div>
      </div>

      <div class="journey-section">
        <div class="timeline-section fade-slide-up">
          <div class="section-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
            <h2>Formation</h2>
          </div>
          <div class="timeline">
            <div
                v-for="(item, index) in educationItems"
                :key="index"
                class="timeline-item fade-slide-up"
                :style="{ animationDelay: `${0.2 + index * 0.1}s` }"
            >
              <div class="timeline-dot" :style="{ backgroundColor: item.color }"></div>
              <div class="timeline-content">
                <div class="timeline-card">
                  <div class="card-header">
                    <span class="year" :style="{ color: item.color }">{{ item.year }}</span>
                  </div>
                  <h3>{{ item.title }}</h3>
                  <p class="subtitle">{{ item.subtitle }}</p>
                  <p class="description">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="timeline-section fade-slide-up" style="animation-delay: 0.4s">
          <div class="section-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            <h2>Expériences Professionnelles</h2>
          </div>
          <div class="timeline">
            <div
                v-for="(item, index) in experienceItems"
                :key="index"
                class="timeline-item fade-slide-up"
                :style="{ animationDelay: `${0.6 + index * 0.1}s` }"
            >
              <div class="timeline-dot" :style="{ backgroundColor: item.color }"></div>
              <div class="timeline-content">
                <div class="timeline-card">
                  <div class="card-header">
                    <span class="year" :style="{ color: item.color }">{{ item.year }}</span>
                  </div>
                  <h3>{{ item.title }}</h3>
                  <p class="subtitle">{{ item.subtitle }}</p>
                  <p class="description">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0 0;
}

.content {
  position: relative;
  z-index: 2;
  width: 90%;
  max-width: 1000px;
  padding: 0 20px;
}

.header {
  text-align: center;
  margin-bottom: 60px;
}

.title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 40px;
  background: var(--me-color);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.intro-card {
  background: rgba(255,255,255,0.3);
  backdrop-filter: blur(12px);
  border-radius: 24px;
  border: 1px solid rgba(0,0,0,0.1);
  padding: 40px;
  margin: 0 auto;
}

.avatar-section {
  display: flex;
  align-items: center;
  gap: 30px;
  text-align: left;
}

.avatar-placeholder {
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.avatar {
  width: 330px;
}

.intro-text h2 {
  font-size: 2rem;
  margin: 0 0 8px 0;
  font-weight: 700;
}

.age {
  font-size: 1.1rem;
  color: #666;
  margin: 0 0 12px 0;
}

.status {
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
  margin: 0;
  font-weight: 500;
}

.journey-section {
  margin-top: 80px;
  display: grid;
  gap: 60px;
}

.timeline-section {
  margin-top: 0;
}

.section-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 50px;
}

.section-title h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin: 0;
}

.section-title svg {
  color: var(--me-color);
  flex-shrink: 0;
}

.timeline {
  position: relative;
  padding-left: 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--me-color) 0%, var(--project-color) 25%, var(--skill-color) 50%, var(--fun-color) 75%, var(--contact-color) 100%);
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
}

.timeline-dot {
  position: absolute;
  left: -33px;
  top: 12px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 2px currentColor;
}

.timeline-content {
  padding-left: 20px;
}

.timeline-card {
  background: rgba(255,255,255,0.3);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  border: 1px solid rgba(0,0,0,0.1);
  padding: 24px;
  transition: all 0.3s ease;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.year {
  font-size: 0.9rem;
  font-weight: 700;
}

.timeline-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #333;
}

.subtitle {
  font-size: 1rem;
  color: #666;
  margin: 0 0 12px 0;
  font-weight: 600;
}

.description {
  font-size: 0.95rem;
  color: #555;
  margin: 0;
  line-height: 1.5;
}

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

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }

  .avatar-section {
    flex-direction: column;
    text-align: center;
  }

  .intro-text {
    text-align: center;
  }

  .intro-text h2 {
    font-size: 1.5rem;
  }

  .status {
    font-size: 0.9rem;
  }

  .timeline {
    padding-left: 30px;
  }

  .timeline-dot {
    left: -28px;
  }

  .section-title h2 {
    font-size: 1.6rem;
  }

  .section-title svg {
    width: 24px;
    height: 24px;
  }

  .timeline-card h3 {
    font-size: 1.2rem;
  }

  .intro-card {
    padding: 30px 20px;
  }

  .avatar-placeholder {
    width: 100px;
    height: 100px;
  }

  .timeline-card {
    padding: 20px;
  }

  .journey-section {
    gap: 40px;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 2rem;
  }

  .intro-text h2 {
    font-size: 1.3rem;
  }

  .section-title h2 {
    font-size: 1.4rem;
  }

  .section-title {
    gap: 8px;
  }

  .timeline {
    padding-left: 25px;
  }

  .timeline::before {
    left: 12px;
  }

  .timeline-dot {
    left: -25px;
    width: 10px;
    height: 10px;
  }

  .timeline-content {
    padding-left: 15px;
  }
}
</style>