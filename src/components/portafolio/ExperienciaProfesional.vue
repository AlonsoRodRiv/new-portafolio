<template>
  <section id="experience" class="mb-16">
    <h2 class="section-title">Experiencia Profesional</h2>

    <div>
      <article
        v-for="(exp, index) in experiencias"
        :key="index"
        class="py-6 border-b border-hairline first:pt-0"
      >
        <div class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-1">
          <h3 class="font-serif-display text-xl text-ink">
            {{ exp.empresa }}
            <span class="text-subtle font-body text-base">— {{ exp.rol }}</span>
          </h3>
          <span class="font-mono-label text-xs text-subtle whitespace-nowrap">{{
            exp.periodo
          }}</span>
        </div>

        <div v-for="(proyecto, pIndex) in exp.proyectos" :key="pIndex" class="mt-4">
          <h4 class="font-semibold text-ink text-sm mb-1">{{ proyecto.titulo }}</h4>
          <p class="text-subtle text-sm leading-relaxed max-w-[70ch] mb-2">
            {{ proyecto.descripcion }}
          </p>
          <p class="font-mono-label text-[0.7rem] uppercase tracking-[0.08em] text-indigo2">
            {{ proyecto.tecnologias.join(' · ') }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Proyecto {
  titulo: string;
  descripcion: string;
  tecnologias: string[];
}

interface Experiencia {
  empresa: string;
  rol: string;
  periodo: string;
  proyectos: Proyecto[];
}

const experiencias = ref<Experiencia[]>([
  {
    empresa: 'TechyWe',
    rol: 'Java Backend Developer',
    periodo: 'Mayo 2025 — Presente',
    proyectos: [
      {
        titulo: 'Banco Hipotecario (BH)',
        descripcion:
          'Incorporación a un middleware existente de procesamiento por lotes y asignación de productos, construido con Java Spring Boot y Maven. Análisis técnico, corrección de errores y mejoras de código en backend y base de datos. Mantenimiento en producción, resolviendo incidentes reportados.',
        tecnologias: ['Java Spring Boot', 'Maven', 'SQL', 'Producción'],
      },
      {
        titulo: 'Billing RUBRIDOC',
        descripcion:
          'Desarrollo y mantenimiento de un sistema de facturación electrónica en producción, construido con Java Spring Boot, Maven y AWS S3 para almacenamiento de documentos. Nuevas funcionalidades REST, optimización de procesos y resolución de bugs críticos.',
        tecnologias: ['Java Spring Boot', 'Maven', 'AWS S3', 'REST APIs'],
      },
    ],
  },
  {
    empresa: 'QUANTO',
    rol: 'Full Stack Junior Developer',
    periodo: 'Abril 2024 — Mayo 2024',
    proyectos: [
      {
        titulo: 'Sistema de Gestión de Productos',
        descripcion:
          'Mantenimiento y corrección de errores en un sistema de gestión de productos. Responsable de identificar y resolver errores del sistema.',
        tecnologias: ['Angular 16', 'Ionic Framework'],
      },
    ],
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
  margin-bottom: 1.4rem;
}
</style>
