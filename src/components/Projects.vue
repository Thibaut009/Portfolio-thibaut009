<script setup lang="ts">
import { ref } from 'vue'

const projects = ref([
  {
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    description: 'Plateforme e-commerce complète avec gestion des produits, panier, paiement et interface d\'administration.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    color: 'var(--project-color)',
    year: '2024'
  },
  {
    title: 'Task Management App',
    category: 'Frontend',
    description: 'Application de gestion de tâches collaborative avec système de notifications en temps réel.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    color: 'var(--me-color)',
    year: '2024'
  },
  {
    title: 'Portfolio Dashboard',
    category: 'Full Stack',
    description: 'Dashboard interactif pour suivre et analyser les performances d\'un portfolio d\'investissement.',
    technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Chart.js'],
    color: 'var(--skill-color)',
    year: '2023'
  },
  {
    title: 'Social Media API',
    category: 'Backend',
    description: 'API RESTful complète pour une application de réseau social avec authentification JWT.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Redis'],
    color: 'var(--fun-color)',
    year: '2023'
  },
  {
    title: 'Mobile Weather App',
    category: 'Mobile',
    description: 'Application mobile de météo avec prévisions détaillées et notifications personnalisées.',
    technologies: ['React Native', 'TypeScript', 'OpenWeather API'],
    color: 'var(--contact-color)',
    year: '2023'
  },
  {
    title: 'Blog CMS',
    category: 'Full Stack',
    description: 'Système de gestion de contenu pour blogs avec éditeur markdown et gestion des médias.',
    technologies: ['Next.js', 'Prisma', 'MySQL', 'AWS S3'],
    color: 'var(--project-color)',
    year: '2022'
  }
])
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <div class="header fade-slide-down">
        <h1 class="title">MY PROJECTS</h1>
      </div>

      <div class="projects-grid fade-slide-up">
        <div
            v-for="(project, index) in projects"
            :key="project.title"
            class="project-card"
            :style="{ animationDelay: `${0.2 + index * 0.1}s` }"
        >
          <div class="card-header">
            <div class="header-top">
              <span class="category" :style="{ color: project.color }">
                {{ project.category }}
              </span>

              <span class="year">{{ project.year }}</span>
            </div>

            <h2 class="project-title">{{ project.title }}</h2>
          </div>

          <div class="card-body">
            <p class="description">{{ project.description }}</p>

            <div class="technologies">
              <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="tech-tag"
                  :style="{ color: project.color, borderColor: project.color }"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="card-footer">
            <button class="view-btn" :style="{ backgroundColor: project.color }">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Voir le projet
            </button>
          </div>
        </div>
      </div>

      <div class="quote-section fade-slide-up" style="animation-delay: 1.3s">
        <div class="quote-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" class="quote-icon">
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path>
          </svg>
          <p class="quote-text">
            "Chaque projet est une nouvelle aventure qui enrichit mes compétences et nourrit ma créativité."
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Wrapper */
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
  z-index: 2;
  width: 90%;
  max-width: 1200px;
  padding: 0 20px;
}

/* Title */
.header {
  text-align: center;
  margin-bottom: 60px;
}

.title {
  font-size: 4rem;
  font-weight: 700;
  background: var(--project-color);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* GRID */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

/* CARD */
.project-card {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: slideUp 0.9s forwards;
}

/* Card header */
.card-header {
  padding: 26px;
}

.header-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.category {
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
}

.year {
  color: #999;
  font-size: 0.9rem;
  font-weight: 600;
}

.project-title {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: #333;
}

/* Body */
.card-body {
  padding: 0 26px 26px;
  flex-grow: 1;
}

.description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
}

/* Tags */
.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  padding: 6px 14px;
  border-radius: 14px;
  font-size: 0.85rem;
  border: 2px solid;
  background: rgba(255, 255, 255, 0.5);
}

/* Footer button */
.card-footer {
  padding: 0 26px 26px;
}

.view-btn {
  width: 100%;
  padding: 14px;
  border-radius: 14px;
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.view-btn:hover {
  transform: scale(1.03);
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
  color: var(--project-color);
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

/* Animations */
.fade-slide-down {
  opacity: 0;
  transform: translateY(-30px);
  animation: slideDown 0.9s forwards;
}

.fade-slide-up {
  opacity: 0;
  transform: translateY(30px);
  animation: slideUp 0.9s forwards;
}

@keyframes slideDown {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 2rem;
  }

  .card-header,
  .card-body,
  .card-footer {
    padding: 20px;
  }

  .project-title {
    font-size: 1.3rem;
  }
}
</style>
