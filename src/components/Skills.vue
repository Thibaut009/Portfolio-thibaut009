<script setup lang="ts">
import { ref } from 'vue'

const skillCategories = ref([
  {
    title: 'Frontend',
    icon: 'M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 4v10h16V7H4z',
    color: 'var(--skill-color)',
    skills: ['Vue.js', 'React', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'JavaScript', 'Sass', 'Bootstrap']
  },
  {
    title: 'Backend',
    icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
    color: 'var(--me-color)',
    skills: ['Node.js', 'Express', 'PHP', 'Python', 'API REST', 'GraphQL', 'Laravel', 'Symfony']
  },
  {
    title: 'Database',
    icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
    color: 'var(--project-color)',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Firebase', 'SQLite']
  },
  {
    title: 'DevOps & Tools',
    icon: 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z',
    color: 'var(--fun-color)',
    skills: ['Git', 'Docker', 'CI/CD', 'AWS', 'Linux', 'Nginx', 'Jenkins', 'GitHub Actions']
  }
])
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <div class="header fade-slide-down">
        <h1 class="title">My Skills</h1>
      </div>

      <div class="skills-grid">
        <div
            v-for="(category, index) in skillCategories"
            class="category-card fade-slide-up"
            :style="{ animationDelay: `${0.2 + index * 0.1}s` }"
        >
          <div class="card-header">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                :stroke="category.color"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
              <path :d="category.icon"></path>
              <circle v-if="category.title === 'DevOps & Tools'" cx="12" cy="12" r="3"></circle>
            </svg>
            <h2 class="category-title" :style="{ color: category.color }">
              {{ category.title }}
            </h2>
          </div>

          <div class="skills-list">
            <span
                v-for="skill in category.skills"
                :key="skill"
                class="skill-tag"
                :style="{ borderColor: category.color, color: category.color }"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

      <div class="quote-section fade-slide-up" style="animation-delay: 1.3s">
        <div class="quote-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" class="quote-icon">
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path>
          </svg>
          <p class="quote-text">
            "Les compétences s'acquièrent avec passion, mais c'est dans la pratique régulière et la curiosité que la maîtrise s'installe."
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* --- Structure générale identique à la page Fun --- */
.wrapper {
  position: relative;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  min-height: 100vh;
}

.content {
  position: relative;
  z-index: 2;
  width: 90%;
  max-width: 1200px;
  padding: 0 20px;
}

.header {
  text-align: center;
  margin-bottom: 60px;
}

.title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 20px;
  background: var(--skill-color);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* --- Grid harmonisée avec la page Fun --- */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

/* --- Cartes identiques visuellement aux hobby-cards --- */
.category-card {
  background: rgba(255,255,255,0.3);
  border-radius: 24px;
  border: 1px solid rgba(0,0,0,0.1);
  padding: 32px;
  text-align: center;
  transition: all 0.3s ease;
}

.category-card:hover svg {
  transform: scale(1.1) rotate(5deg);
  transition: 0.3s ease;
}

/* --- Header centré, cohérent avec la page Fun --- */
.card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
}

.card-header svg {
  width: 48px;
  height: 48px;
}

.category-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  color: #333;
}

/* --- Badges identiques aux tags des hobbies --- */
.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 10px;
}

.skill-tag {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 2px solid;
  background: rgba(255,255,255,0.5);
  transition: all 0.3s ease;
}

.skill-tag:hover {
  transform: scale(1.05);
  background: rgba(255,255,255,0.8);
}

.quote-section {
  margin-top: 60px;
}

.quote-card {
  background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 100%);
  backdrop-filter: blur(12px);
  border-radius: 24px;
  border: 1px solid rgba(0,0,0,0.1);
  padding: 48px;
  text-align: center;
  position: relative;
}

.quote-icon {
  color: var(--skill-color);
  opacity: 0.3;
  margin-bottom: 20px;
}

.quote-text {
  font-size: 1.3rem;
  color: #333;
  font-style: italic;
  font-weight: 500;
  line-height: 1.7;
  margin: 0;
}

/* --- Animations identiques à Fun --- */
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

/* --- Responsive identique à la page Fun --- */
@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .category-card {
    padding: 24px;
  }

  .card-header svg {
    width: 36px;
    height: 36px;
  }

  .category-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 2rem;
  }

  .category-card {
    padding: 20px;
  }

  .category-title {
    font-size: 1.3rem;
  }

  .card-header svg {
    width: 32px;
    height: 32px;
  }
}
</style>