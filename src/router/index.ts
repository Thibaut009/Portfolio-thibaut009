import { createRouter, createWebHistory } from 'vue-router'
import Home from "../components/Home.vue";
import Me from "../components/Me.vue";
import Projects from "../components/Projects.vue";
import Skills from "../components/Skills.vue";
import Fun from "../components/Fun.vue";
import Contact from "../components/Contact.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/me', component: Me },
    { path: '/projects', component: Projects },
    { path: '/skills', component: Skills },
    { path: '/fun', component: Fun },
    { path: '/contact', component: Contact },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
