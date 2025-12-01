<script setup lang="ts">
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    description: 'Plateforme e-commerce complète avec gestion des produits, panier, paiement et interface d\'administration.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    color: 'var(--project-color)',
    year: '2024',
    status: 'Terminé'
  },
  {
    id: 2,
    title: 'Task Management App',
    category: 'Frontend',
    description: 'Application de gestion de tâches collaborative avec système de notifications en temps réel.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    color: 'var(--me-color)',
    year: '2024',
    status: 'En cours'
  },
  {
    id: 3,
    title: 'Portfolio Dashboard',
    category: 'Full Stack',
    description: 'Dashboard interactif pour suivre et analyser les performances d\'un portfolio d\'investissement.',
    technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Chart.js'],
    color: 'var(--skill-color)',
    year: '2023',
    status: 'Terminé'
  },
  {
    id: 4,
    title: 'Social Media API',
    category: 'Backend',
    description: 'API RESTful complète pour une application de réseau social avec authentification JWT.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Redis'],
    color: 'var(--fun-color)',
    year: '2023',
    status: 'Terminé'
  },
  {
    id: 5,
    title: 'Mobile Weather App',
    category: 'Mobile',
    description: 'Application mobile de météo avec prévisions détaillées et notifications personnalisées.',
    technologies: ['React Native', 'TypeScript', 'OpenWeather API'],
    color: 'var(--contact-color)',
    year: '2023',
    status: 'Terminé'
  },
  {
    id: 6,
    title: 'Blog CMS',
    category: 'Full Stack',
    description: 'Système de gestion de contenu pour blogs avec éditeur markdown et gestion des médias.',
    technologies: ['Next.js', 'Prisma', 'MySQL', 'AWS S3'],
    color: 'var(--project-color)',
    year: '2022',
    status: 'Terminé'
  }
])
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <div class="header fade-slide-down">
        <h1 class="title">My Projects</h1>
      </div>

      <div class="projects-grid">
        <div
            v-for="(project, index) in projects"
            :key="project.id"
            class="project-card fade-slide-up"
            :style="{ animationDelay: `${0.2 + index * 0.1}s` }"
        >
          <div class="card-header" :style="{ borderTopColor: project.color }">
            <div class="header-top">
              <span class="category" :style="{ color: project.color }">{{ project.category }}</span>
              <span class="year">{{ project.year }}</span>
            </div>
            <h2 class="project-title">{{ project.title }}</h2>
            <span class="status" :class="project.status === 'En cours' ? 'in-progress' : 'completed'">
              {{ project.status }}
            </span>
          </div>

          <div class="card-body">
            <p class="description">{{ project.description }}</p>

            <div class="technologies">
              <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="tech-tag"
                  :style="{ borderColor: project.color, color: project.color }"
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
  max-width: 1200px;
  padding: 0 20px;
}

.header {
  text-align: center;
  margin-bottom: 50px;
}

.title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 16px;
  background: var(--project-color);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.project-card {
  background: rgba(255,255,255,0.3);
  backdrop-filter: blur(12px);
  border-radius: 24px;
  border: 1px solid rgba(0,0,0,0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.card-header {
  padding: 24px 24px 20px 24px;
  border-top: 4px solid;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.category {
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.year {
  font-size: 0.9rem;
  color: #999;
  font-weight: 600;
}

.project-title {
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: #333;
}

.status {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.status.completed {
  background: rgba(34, 197, 94, 0.2);
  color: #16a34a;
}

.status.in-progress {
  background: rgba(251, 191, 36, 0.2);
  color: #d97706;
}

.card-body {
  padding: 0 24px 20px 24px;
  flex-grow: 1;
}

.description {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
  margin: 0 0 20px 0;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  padding: 6px 14px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 2px solid;
  background: rgba(255,255,255,0.5);
}

.card-footer {
  padding: 0 24px 24px 24px;
}

.view-btn {
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.view-btn:hover {
  transform: scale(1.02);
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

@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .project-title {
    font-size: 1.4rem;
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