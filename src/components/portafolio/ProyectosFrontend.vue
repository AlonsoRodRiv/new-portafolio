<template>
  <section id="frontend" class="mb-16">
    <h2 class="section-title">Proyectos Front-end</h2>
    <p class="font-mono-label text-xs uppercase tracking-[0.14em] text-subtle -mt-4 mb-8">
      Proyectos personales
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <article v-for="(proyecto, index) in proyectos" :key="index" class="group">
        <a
          :href="proyecto.enlace"
          target="_blank"
          rel="noopener noreferrer"
          class="block border border-hairline rounded-sm overflow-hidden mb-4"
        >
          <img
            :src="proyecto.imagen"
            :alt="proyecto.titulo"
            class="w-full h-44 object-cover object-top grayscale-[35%] group-hover:grayscale-0 transition-all duration-500"
          />
        </a>
        <h3 class="font-serif-display text-xl text-ink mb-1">
          {{ proyecto.titulo }}
        </h3>
        <p class="text-subtle text-sm leading-relaxed mb-2">
          {{ proyecto.descripcion }}
        </p>
        <p class="font-mono-label text-[0.7rem] uppercase tracking-[0.08em] text-indigo2 mb-3">
          {{ proyecto.tecnologias.join(' · ') }}
        </p>
        <a
          :href="proyecto.enlace"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-semibold text-ink border-b border-ink pb-0.5 hover:text-indigo2 hover:border-indigo2 transition-colors"
        >
          Ver proyecto →
        </a>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Proyecto {
  titulo: string;
  descripcion: string;
  imagen: string;
  tecnologias: string[];
  enlace: string;
}

const proyectos = ref<Proyecto[]>([
  {
    titulo: 'Forum Challenge Alura',
    descripcion: 'Crea tópicos de diferentes cursos y responde a los tópicos de otros usuarios.',
    imagen: require('@/assets/frontend_foro.png'),
    tecnologias: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Vuex'],
    enlace: 'https://forumcourses.netlify.app',
  },
  {
    titulo: 'Voll Clinic Frontend',
    descripcion: 'Interfaz de usuario para la aplicación de gestión de clínica médica.',
    imagen: require('@/assets/frontend_clinic.png'),
    tecnologias: ['React', 'TypeScript', 'Material UI', 'Redux'],
    enlace: 'https://vollclinic.netlify.app',
  },
  {
    titulo: 'Encriptador de Texto',
    descripcion: 'Aplicación web para cifrar y descifrar mensajes de texto.',
    imagen: require('@/assets/encriptador.png'),
    tecnologias: ['JavaScript', 'HTML5', 'CSS3'],
    enlace: 'https://encriptador.netlify.app',
  },
]);
</script>

<style scoped>
.section-title {
  font-family: var(--font-heading);
  font-size: 2rem;
  color: var(--ink);
  border-bottom: 1px solid var(--hairline);
  padding-bottom: 0.9rem;
  margin-bottom: 2.2rem;
}
</style>
