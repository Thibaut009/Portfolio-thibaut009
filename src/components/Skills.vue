<script setup lang="ts">
import { ref } from 'vue'

const skillCategories = ref([
  {
    id: 1,
    title: 'Frontend',
    icon: 'M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 4v10h16V7H4z',
    color: 'var(--skill-color)',
    skills: ['Vue.js', 'React', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'JavaScript', 'Sass', 'Bootstrap']
  },
  {
    id: 2,
    title: 'Backend',
    icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
    color: 'var(--me-color)',
    skills: ['Node.js', 'Express', 'PHP', 'Python', 'API REST', 'GraphQL', 'Laravel', 'Symfony']
  },
  {
    id: 3,
    title: 'Database',
    icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
    color: 'var(--project-color)',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Firebase', 'SQLite']
  },
  {
    id: 4,
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
            :key="category.id"
            class="category-card fade-slide-up"
            :style="{ animationDelay: `${0.2 + index * 0.1}s` }"
        >
          <div class="card-header" :style="{ borderTopColor: category.color }">
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
            <h2 class="category-title" :style="{ color: category.color }">{{ category.title }}</h2>
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
  background: var(--skill-color);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.category-card {
  background: rgba(255,255,255,0.3);
  backdrop-filter: blur(12px);
  border-radius: 24px;
  border: 1px solid rgba(0,0,0,0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.card-header {
  padding: 30px 30px 20px 30px;
  border-top: 4px solid;
  display: flex;
  align-items: center;
  gap: 16px;
}

.card-header svg {
  flex-shrink: 0;
}

.category-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}

.skills-list {
  padding: 10px 30px 30px 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.skill-tag {
  padding: 10px 18px;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  border: 2px solid;
  background: rgba(255,255,255,0.5);
  transition: all 0.2s ease;
}

.skill-tag:hover {
  transform: scale(1.05);
  background: rgba(255,255,255,0.7);
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
  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 25px;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .category-title {
    font-size: 1.5rem;
  }

  .card-header {
    padding: 24px 24px 16px 24px;
  }

  .card-header svg {
    width: 28px;
    height: 28px;
  }

  .skills-list {
    padding: 10px 24px 24px 24px;
    gap: 10px;
  }

  .skill-tag {
    font-size: 0.9rem;
    padding: 8px 16px;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 2rem;
  }

  .category-title {
    font-size: 1.3rem;
  }

  .card-header {
    padding: 20px 20px 12px 20px;
    gap: 12px;
  }

  .card-header svg {
    width: 24px;
    height: 24px;
  }

  .skills-list {
    padding: 10px 20px 20px 20px;
    gap: 8px;
  }

  .skill-tag {
    font-size: 0.85rem;
    padding: 8px 14px;
  }
}
</style>