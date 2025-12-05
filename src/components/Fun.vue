<script setup lang="ts">
import { ref } from 'vue'

const hobbies = ref([
  {
    icon: '🎮',
    title: 'Gaming',
    description: 'Passionné de jeux vidéo, stratégie et RPG',
    color: 'var(--me-color)',
    details: ['PC Gaming', 'Jeux compétitifs', 'Exploration d\'univers']
  },
  {
    icon: '💻',
    title: 'Tech & Innovation',
    description: 'Veille technologique et nouvelles technologies',
    color: 'var(--project-color)',
    details: ['IA & Machine Learning', 'Nouvelles frameworks', 'Gadgets tech']
  },
  {
    icon: '📚',
    title: 'Apprentissage',
    description: 'Toujours en quête de nouvelles connaissances',
    color: 'var(--skill-color)',
    details: ['Tutoriels en ligne', 'Documentation', 'Side projects']
  },
  {
    icon: '🏍️',
    title: 'Moto & Karting',
    description: 'Passionné de vitesse et de sensations fortes',
    color: 'var(--fun-color)',
    details: ['Balades moto', 'Karting']
  },
  {
    icon: '🎌',
    title: 'Anime & Manga',
    description: 'Fan de culture japonaise et d\'histoires épiques',
    color: 'var(--contact-color)',
    details: ['Anime', 'Mangas']
  },
  {
    icon: '🌊',
    title: 'Jet Ski',
    description: 'Sports nautiques et liberté sur l\'eau',
    color: 'var(--me-color)',
    details: ['Vitesse', 'Mer', 'Sensations']
  }
])
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <div class="header fade-slide-down">
        <h1 class="title">My Fun Side</h1>
      </div>

      <div class="hobbies-grid">
        <div
            v-for="(hobby, index) in hobbies"
            :key="index"
            class="hobby-card fade-slide-up"
            :style="{ animationDelay: `${0.2 + index * 0.1}s` }"
        >
          <div class="hobby-icon" :style="{ color: hobby.color }">
            {{ hobby.icon }}
          </div>
          <h3>{{ hobby.title }}</h3>
          <p class="hobby-description">{{ hobby.description }}</p>
          <div class="hobby-details">
            <span
                v-for="(detail, idx) in hobby.details"
                :key="idx"
                class="detail-tag"
                :style="{ borderColor: hobby.color, color: hobby.color }"
            >
              {{ detail }}
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
            "Le code est ma passion, mais c'est dans l'équilibre entre travail et loisirs que je trouve ma créativité."
          </p>
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
  background: var(--fun-color);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hobbies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
}

.hobby-card {
  background: rgba(255,255,255,0.3);
  border-radius: 24px;
  border: 1px solid rgba(0,0,0,0.1);
  padding: 32px;
  transition: all 0.3s ease;
  text-align: center;
}

.hobby-icon {
  font-size: 4rem;
  margin-bottom: 20px;
  display: inline-block;
  transition: transform 0.3s ease;
}

.hobby-card:hover .hobby-icon {
  transform: scale(1.1) rotate(5deg);
}

.hobby-card h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: #333;
}

.hobby-description {
  font-size: 1rem;
  color: #666;
  margin: 0 0 20px 0;
  line-height: 1.5;
}

.hobby-details {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.detail-tag {
  padding: 6px 14px;
  border: 2px solid;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  background: rgba(255,255,255,0.5);
  transition: all 0.3s ease;
}

.detail-tag:hover {
  transform: scale(1.05);
  background: rgba(255,255,255,0.8);
}

.section-title h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin: 0;
}

.section-title svg {
  color: var(--fun-color);
  flex-shrink: 0;
}

.project-card h3 {
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: #333;
}

.project-card p {
  font-size: 0.95rem;
  color: #666;
  margin: 0;
  line-height: 1.5;
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
  color: var(--fun-color);
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

  .hobbies-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .hobby-card {
    padding: 24px;
  }

  .hobby-icon {
    font-size: 3rem;
  }

  .hobby-card h3 {
    font-size: 1.5rem;
  }

  .section-title h2 {
    font-size: 1.8rem;
  }

  .section-title svg {
    width: 24px;
    height: 24px;
  }

  .quote-card {
    padding: 32px 24px;
  }

  .quote-text {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 2rem;
  }

  .hobby-card {
    padding: 20px;
  }

  .section-title h2 {
    font-size: 1.5rem;
  }

  .quote-card {
    padding: 24px 20px;
  }

  .quote-text {
    font-size: 1rem;
  }

  .quote-icon {
    width: 36px;
    height: 36px;
  }
}
</style>