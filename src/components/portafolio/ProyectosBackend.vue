<template>
  <section id="backend" class="mb-16">
    <h2 class="section-title">Proyectos Back-end</h2>
    <p class="font-mono-label text-xs uppercase tracking-[0.14em] text-subtle -mt-4 mb-8">
      Proyectos personales
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
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
            class="w-full h-48 object-cover object-top grayscale-[35%] group-hover:grayscale-0 transition-all duration-500"
          />
        </a>
        <h3 class="font-serif-display text-xl text-ink mb-1">
          {{ proyecto.titulo }}
        </h3>
        <p class="text-subtle text-sm leading-relaxed mb-2 max-w-[60ch]">
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
    titulo: 'Backend Forum Alura Challenge',
    descripcion:
      'API REST completa para un foro de cursos: autenticación con JWT, gestión de roles y persistencia en PostgreSQL. Documentada y probable desde Swagger.',
    imagen: require('@/assets/api_foro.png'),
    tecnologias: ['Java', 'Spring Boot', 'PostgreSQL', 'Spring Security', 'JWT', 'CI', 'EC2'],
    enlace: 'http://ec2-18-219-234-115.us-east-2.compute.amazonaws.com:8080/swagger-ui/index.html#',
  },
  {
    titulo: 'Backend Voll Clinic Alura Challenge',
    descripcion:
      'API para gestión de clínica médica: citas, pacientes y médicos, con seguridad JWT y documentación Swagger para probar los endpoints.',
    imagen: require('@/assets/api_clinic.png'),
    tecnologias: ['Java', 'PostgreSQL', 'Spring Boot', 'Spring Security', 'JWT', 'CI', 'EC2'],
    enlace: 'http://ec2-3-135-231-33.us-east-2.compute.amazonaws.com:8080/swagger-ui/index.html#/',
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
