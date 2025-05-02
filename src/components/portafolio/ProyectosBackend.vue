<template>
  <section id="backend" class="mb-12">
    <div class="flex items-center mb-6">
      <i class="fas fa-server text-2xl text-blue-600 mr-3"></i>
      <h2 class="text-3xl font-bold text-gray-800">Proyectos Back-end</h2>
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
              <i class="fas fa-external-link-alt mr-2"></i>> Ver Proyecto
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

// Lista de proyectos backend
const proyectos = ref<Proyecto[]>([
  {
    titulo: 'Backend Forum Alura Challenge',
    descripcion:
      'Usando la Documentación de Swagger API puedes probar la funcionalidad de las consultas del forum',
    imagen: require('@/assets/api_foro.png'),
    tecnologias: [
      { nombre: 'Java', icon: 'fab fa-java' },
      { nombre: 'Spring Boot', icon: 'fas fa-leaf' },
      { nombre: 'PostgreSQL', icon: 'fas fa-database' },
      { nombre: 'Spring Security', icon: 'fas fa-shield-alt' },
      { nombre: 'JWT', icon: 'fas fa-key' },
      { nombre: 'CI', icon: 'fas fa-code-branch' },
      { nombre: 'EC2', icon: 'fab fa-aws' },
    ],
    enlace: 'http://ec2-18-219-234-115.us-east-2.compute.amazonaws.com:8080/swagger-ui/index.html#',
  },
  {
    titulo: 'Backend Voll Clinic Alura Challenge',
    descripcion: 'Prueba los endpoints con Swagger API de Voll Clinic',
    imagen: require('@/assets/api_clinic.png'),
    tecnologias: [
      { nombre: 'Java', icon: 'fab fa-java' },
      { nombre: 'PostgreSQL', icon: 'fas fa-database' },
      { nombre: 'Spring Boot', icon: 'fas fa-leaf' },
      { nombre: 'Spring Security', icon: 'fas fa-shield-alt' },
      { nombre: 'JWT', icon: 'fas fa-key' },
      { nombre: 'CI', icon: 'fas fa-code-branch' },
      { nombre: 'EC2', icon: 'fab fa-aws' },
    ],
    enlace: 'http://ec2-3-135-231-33.us-east-2.compute.amazonaws.com:8080/swagger-ui/index.html#/',
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
