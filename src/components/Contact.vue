<script setup lang="ts">
import { ref } from 'vue'

const contacts = ref([
  {
    icon: '📧',
    title: 'Email',
    value: 'votre.email@example.com',
    link: 'mailto:votre.email@example.com',
    color: 'var(--contact-color)',
    description: 'Pour toute demande professionnelle'
  },
  {
    icon: '💼',
    title: 'LinkedIn',
    value: 'linkedin.com/in/votreprofil',
    link: 'https://linkedin.com/in/votreprofil',
    color: '#0077B5',
    description: 'Réseau professionnel'
  },
  {
    icon: '🐙',
    title: 'GitHub',
    value: 'github.com/votreprofil',
    link: 'https://github.com/votreprofil',
    color: '#333',
    description: 'Mes projets open source'
  },
  {
    icon: '💬',
    title: 'Discord',
    value: 'VotreUsername#0000',
    link: '#',
    color: '#5865F2',
    description: 'Discussion instantanée'
  },
  {
    icon: '🐦',
    title: 'Twitter',
    value: '@votrehandle',
    link: 'https://twitter.com/votrehandle',
    color: '#1DA1F2',
    description: 'Actualités et partages'
  },
  {
    icon: '📱',
    title: 'Téléphone',
    value: '+33 6 XX XX XX XX',
    link: 'tel:+33600000000',
    color: 'var(--me-color)',
    description: 'Disponible en semaine'
  }
])
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <div class="header fade-slide-down">
        <h1 class="title">Get In Touch</h1>
      </div>

      <div class="contacts-grid">
        <a
            v-for="(contact, index) in contacts"
            :key="index"
            :href="contact.link"
            class="contact-card fade-slide-up"
            :style="{ animationDelay: `${0.2 + index * 0.1}s` }"
        >
          <div class="contact-icon" :style="{ color: contact.color }">
            {{ contact.icon }}
          </div>
          <h3>{{ contact.title }}</h3>
          <p class="contact-description">{{ contact.description }}</p>
          <div class="contact-value" :style="{ color: contact.color }">
            {{ contact.value }}
          </div>
        </a>
      </div>

      <div class="quote-section fade-slide-up" style="animation-delay: 1.3s">
        <div class="quote-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" class="quote-icon">
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path>
          </svg>
          <p class="quote-text">
            "Toujours ouvert aux nouvelles opportunités et aux projets innovants. Discutons de votre prochain défi !"
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
  background: var(--contact-color);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contacts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.contact-card {
  background: rgba(255,255,255,0.3);
  border-radius: 24px;
  border: 1px solid rgba(0,0,0,0.1);
  padding: 32px;
  transition: all 0.3s ease;
  text-align: center;
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: pointer;
}

.contact-icon {
  font-size: 4rem;
  margin-bottom: 20px;
  display: inline-block;
  transition: transform 0.3s ease;
}

.contact-card:hover .contact-icon {
  transform: scale(1.1) rotate(5deg);
}

.contact-card h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: #333;
}

.contact-description {
  font-size: 0.95rem;
  color: #666;
  margin: 0 0 16px 0;
  line-height: 1.5;
}

.contact-value {
  font-size: 1rem;
  font-weight: 600;
  padding: 10px 16px;
  border-radius: 12px;
  background: rgba(255,255,255,0.5);
  display: inline-block;
  word-break: break-word;
}

.social-link svg {
  width: 24px;
  height: 24px;
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
  color: var(--contact-color);
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

  .contacts-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .contact-card {
    padding: 24px;
  }

  .contact-icon {
    font-size: 3rem;
  }

  .contact-card h3 {
    font-size: 1.5rem;
  }

  .social-link svg {
    width: 20px;
    height: 20px;
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

  .contact-card {
    padding: 20px;
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