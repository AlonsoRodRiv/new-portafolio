<template>
  <header
    class="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 px-6 md:px-8 fixed top-0 left-0 right-0 z-50 shadow-lg"
  >
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-2xl font-bold flex items-center">
        <i class="fas fa-code mr-2 text-blue-400"></i>
        Jonh Rodriguez
      </h1>
      <nav
        :class="[
          'md:flex md:space-x-6 md:items-center',
          {
            hidden: !isMenuOpen,
            'absolute top-full left-0 right-0 bg-gray-800 p-4 shadow-lg': isMenuOpen,
          },
          'md:relative md:bg-transparent md:p-0',
        ]"
      >
        <a
          href="#frontend"
          class="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 md:inline-block md:py-0"
        >
          <i class="fas fa-laptop-code mr-1"></i> Front-end
        </a>
        <a
          href="#backend"
          class="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 md:inline-block md:py-0"
        >
          <i class="fas fa-server mr-1"></i> Back-end
        </a>
        <a
          href="#skills"
          class="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 md:inline-block md:py-0"
        >
          <i class="fas fa-tools mr-1"></i> Habilidades
        </a>
        <a
          href="#about"
          class="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 md:inline-block md:py-0"
        >
          <i class="fas fa-user mr-1"></i> Sobre Mi
        </a>
        <a
          href="#contact"
          class="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 md:inline-block md:py-0"
        >
          <i class="fas fa-envelope mr-1"></i> Contacto
        </a>
      </nav>
      <button
        class="inline-flex items-center justify-center text-sm border border-gray-600 bg-gray-800 hover:bg-gray-700 transition-colors duration-300 h-9 rounded-md px-3 md:hidden"
        aria-label="Menu"
        @click="toggleMenu"
      >
        <i v-if="!isMenuOpen" class="fas fa-bars text-white text-xl"></i>
        <i v-else class="fas fa-times text-white text-xl"></i>
        <span class="sr-only">{{ isMenuOpen ? 'Cerrar menú' : 'Abrir menú' }}</span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
/* Animaciones para íconos en hover */
.fas,
.fab {
  transition: transform 0.2s ease;
}

a:hover .fas,
a:hover .fab {
  transform: scale(1.2);
}
</style>
