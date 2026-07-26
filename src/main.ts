import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/index.css';

const saved = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (saved === 'dark' || (!saved && prefersDark)) {
  document.documentElement.classList.add('dark');
}

createApp(App).use(store).use(router).mount('#app');
