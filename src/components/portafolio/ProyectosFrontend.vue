<template>
  <section id="frontend" class="mb-12">
    <div class="flex items-center mb-6">
      <i class="fas fa-laptop-code text-2xl text-blue-600 mr-3"></i>
      <h2 class="text-3xl font-bold text-gray-800">Proyectos Front-end</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(proyecto, index) in proyectos"
        :key="index"
        class="rounded-lg border bg-white text-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
      >
        <div class="relative overflow-hidden group">
          <img
            :src="proyecto.imagen"
            :alt="proyecto.titulo"
            class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
          >
            <h3 class="text-white font-bold text-lg">
              {{ proyecto.titulo }}
            </h3>
          </div>
        </div>
        <div class="p-5">
          <h3 class="text-xl font-bold mb-2">
            {{ proyecto.titulo }}
          </h3>
          <p class="text-gray-600 mb-4">
            {{ proyecto.descripcion }}
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <div
              v-for="(tech, techIndex) in proyecto.tecnologias"
              :key="techIndex"
              class="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800"
            >
              <i :class="tech.icon + ' mr-1'"></i> {{ tech.nombre }}
            </div>
          </div>
          <div class="flex justify-end">
            <a
              class="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              :href="proyecto.enlace"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fas fa-external-link-alt mr-2"></i> Ver Proyecto
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Definiendo el tipo para las tecnologías
interface Tecnologia {
  nombre: string;
  icon: string;
}

// Definiendo el tipo para los proyectos
interface Proyecto {
  titulo: string;
  descripcion: string;
  imagen: string;
  tecnologias: Tecnologia[];
  enlace: string;
}

// Lista de proyectos frontend
const proyectos = ref<Proyecto[]>([
  {
    titulo: 'Forum Challenge Alura',
    descripcion: 'Crea tópicos de diferentes cursos y responde a los tópicos de otros usuarios',
    imagen: require('@/assets/frontend_foro.png'),
    tecnologias: [
      { nombre: 'Vue.js', icon: 'fab fa-vuejs' },
      { nombre: 'TypeScript', icon: 'fab fa-js-square' },
      { nombre: 'Tailwind CSS', icon: 'fab fa-css3-alt' },
      { nombre: 'Vuex', icon: 'fas fa-database' },
    ],
    enlace: 'https://forumcourses.netlify.app',
  },
  {
    titulo: 'Voll Clinic Frontend',
    descripcion: 'Interfaz de usuario para la aplicación de gestión de clínica médica',
    imagen: require('@/assets/frontend_clinic.png'),
    tecnologias: [
      { nombre: 'React', icon: 'fab fa-react' },
      { nombre: 'TypeScript', icon: 'fab fa-js-square' },
      { nombre: 'Material UI', icon: 'fab fa-css3-alt' },
      { nombre: 'Redux', icon: 'fas fa-database' },
    ],
    enlace: 'https://vollclinic.netlify.app',
  },
  {
    titulo: 'Encriptador de Texto',
    descripcion: 'Aplicación web para cifrar y descifrar mensajes de texto',
    imagen: require('@/assets/encriptador.png'),
    tecnologias: [
      { nombre: 'JavaScript', icon: 'fab fa-js-square' },
      { nombre: 'HTML5', icon: 'fab fa-html5' },
      { nombre: 'CSS3', icon: 'fab fa-css3-alt' },
    ],
    enlace: 'https://encriptador.netlify.app',
  },
]);
</script>

<style scoped>
/* Animaciones para hover en las tarjetas */
.rounded-lg {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.rounded-lg:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
}

/* Animaciones para íconos */
.fas,
.fab {
  transition: transform 0.2s ease;
}

a:hover .fas,
a:hover .fab {
  transform: scale(1.2);
}
</style>
