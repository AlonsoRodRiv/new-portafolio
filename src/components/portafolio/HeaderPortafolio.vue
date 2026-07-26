<template>
  <header
    class="bg-paper/95 backdrop-blur border-b border-hairline fixed top-0 left-0 right-0 z-50"
  >
    <div class="container mx-auto flex justify-between items-center py-4 px-6 md:px-8">
      <a href="#top" class="font-serif-display text-xl text-ink tracking-tight">
        Juan Alonso Rodríguez
      </a>

      <div class="flex items-center gap-2">
        <nav
          :class="[
            'md:flex md:gap-6 md:items-center',
            {
              hidden: !isMenuOpen,
              'absolute top-full left-0 right-0 bg-paper border-b border-hairline p-6 space-y-3 md:space-y-0':
                isMenuOpen,
            },
            'md:relative md:border-0 md:p-0',
          ]"
        >
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="nav-link"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
        </nav>

        <button
          class="w-9 h-9 flex items-center justify-center border border-hairline rounded-sm text-subtle hover:text-ink hover:border-subtle transition-colors"
          :aria-label="isDark ? 'Cambiar a modo día' : 'Cambiar a modo noche'"
          @click="toggleTheme"
        >
          <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
        </button>

        <button
          class="w-9 h-9 flex items-center justify-center border border-hairline rounded-sm text-subtle hover:text-ink md:hidden"
          aria-label="Menú"
          @click="toggleMenu"
        >
          <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const links = [
  { href: '#about', label: 'Sobre Mí' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#backend', label: 'Back-end' },
  { href: '#frontend', label: 'Front-end' },
  { href: '#contact', label: 'Contacto' },
];

const isMenuOpen = ref(false);
const isDark = ref(document.documentElement.classList.contains('dark'));

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const closeMenu = () => {
  isMenuOpen.value = false;
};
const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle('dark', isDark.value);
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
};
</script>

<style scoped>
.nav-link {
  display: block;
  font-size: 0.9rem;
  color: var(--subtle);
  text-decoration: none;
  padding-bottom: 2px;
  border-bottom: 1px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;
}
.nav-link:hover {
  color: var(--indigo);
  border-bottom-color: var(--indigo);
}
</style>
