<template>
  <section id="about" class="mb-12">
    <div class="flex items-center mb-6">
      <i class="fas fa-user text-2xl text-blue-600 mr-3"></i>
      <h2 class="text-3xl font-bold text-gray-800">Sobre Mi</h2>
    </div>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div class="flex-shrink-0">
          <img
            :src="fotoPerfil"
            alt="Jonh Rodriguez"
            class="rounded-full w-48 h-48 object-cover border-4 border-blue-100 shadow-md"
          />
          <div class="mt-4 flex justify-center space-x-3">
            <a
              v-for="red in redesSociales"
              :key="red.nombre"
              :href="red.url"
              class="text-gray-700 hover:text-blue-600 transition-colors"
              target="_blank"
            >
              <i :class="red.icono + ' text-xl'"></i>
            </a>
          </div>
        </div>
        <div class="space-y-4 text-center md:text-left flex-1">
          <h3 class="text-2xl font-bold text-gray-800">
            {{ nombre }}
          </h3>
          <p
            class="text-blue-600 font-medium flex items-center justify-center md:justify-start mb-4"
          >
            <i class="fas fa-code mr-2"></i> {{ profesion }}
          </p>
          <p v-for="(parrafo, index) in biografia" :key="index" class="text-gray-600">
            {{ parrafo }}
          </p>

          <div class="pt-4">
            <h4 class="text-lg font-semibold mb-3 flex items-center">
              <i class="fas fa-graduation-cap mr-2 text-blue-600"></i> Educación
            </h4>
            <div class="space-y-2">
              <div v-for="(item, index) in educacion" :key="index" class="flex items-center">
                <i :class="item.icono + ' text-gray-500 mr-2'"></i>
                <span>{{ item.descripcion }}</span>
              </div>
            </div>
          </div>

          <div class="pt-4">
            <h4 class="text-lg font-semibold mb-3 flex items-center">
              <i class="fas fa-language mr-2 text-blue-600"></i> Idiomas
            </h4>
            <div class="flex flex-wrap gap-2">
              <div
                v-for="(idioma, index) in idiomas"
                :key="index"
                class="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm"
              >
                <span class="font-medium mr-1">{{ idioma.nombre }}</span>
                <span class="text-gray-600">({{ idioma.nivel }})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Datos personales
const fotoPerfil = require('@/assets/foto.jpg');
const nombre = ref('Jonh Rodriguez');
const profesion = ref('Desarrollador Full-Stack');
const biografia = ref([
  'Hola, soy un Desarrollador Full-Stack-Junior apasionado por crear aplicaciones web hermosas y funcionales. Tengo experiencia trabajando con una variedad de tecnologías, incluidas Vue.js, Angular y más.',
  'En mi tiempo libre, disfruto aprendiendo sobre nuevas tecnologías y experimentando con diferentes frameworks y bibliotecas. Siempre estoy esforzándome por mejorar mis habilidades y mantenerme actualizado con las últimas tendencias de la industria.',
]);

// Educación
const educacion = ref([
  {
    descripcion: 'Universidad Nacional de Ingeniería - Ingeniería de Software',
    icono: 'fas fa-university',
  },
  {
    descripcion: 'Alura Latam - Full-Stack Developer',
    icono: 'fas fa-certificate',
  },
]);

// Idiomas
const idiomas = ref([
  { nombre: 'Español', nivel: 'Nativo' },
  { nombre: 'Inglés', nivel: 'Intermedio' },
]);

// Redes sociales
const redesSociales = ref([
  {
    nombre: 'GitHub',
    url: 'https://github.com/tunombre',
    icono: 'fab fa-github',
  },
  {
    nombre: 'LinkedIn',
    url: 'https://linkedin.com/in/tunombre',
    icono: 'fab fa-linkedin-in',
  },
]);
</script>

<style scoped>
/* Efectos para la foto de perfil */
.rounded-full {
  transition: transform 0.3s ease-in-out;
}
.rounded-full:hover {
  transform: scale(1.05);
}

/* Animaciones para íconos */
.fas,
.fab {
  transition: transform 0.2s ease;
}

a:hover .fab {
  transform: scale(1.3);
}

.flex-shrink-0 a:hover {
  transform: translateY(-3px);
}

.flex-shrink-0 a {
  transition: transform 0.2s ease;
  display: inline-block;
}
</style>
