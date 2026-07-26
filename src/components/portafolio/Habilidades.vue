<template>
  <section id="skills" class="mb-16">
    <h2 class="section-title">Habilidades</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10">
      <div v-for="grupo in grupos" :key="grupo.titulo">
        <h3 class="font-mono-label text-xs uppercase tracking-[0.14em] text-subtle mb-4">
          {{ grupo.titulo }}
        </h3>
        <div class="space-y-4">
          <div v-for="skill in grupo.skills" :key="skill.name">
            <div class="flex justify-between items-baseline mb-1">
              <span class="text-sm font-semibold text-ink">{{ skill.name }}</span>
              <span class="font-mono-label text-[0.7rem] text-subtle">{{ skill.nivel }}</span>
            </div>
            <div class="h-px bg-hairline relative">
              <div
                class="absolute inset-y-0 left-0 bg-indigo2 h-[3px] -top-[1px]"
                :style="{ width: skill.pct + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Skill {
  name: string;
  nivel: string;
  pct: number;
}

interface Grupo {
  titulo: string;
  skills: Skill[];
}

const grupos = ref<Grupo[]>([
  {
    titulo: 'Backend',
    skills: [
      { name: 'Java (8/11, practicando 17)', nivel: 'Profesional', pct: 85 },
      { name: 'Spring Boot / REST APIs / Maven', nivel: 'Intermedio', pct: 80 },
      { name: 'SQL (PostgreSQL, MySQL, Oracle)', nivel: 'Intermedio', pct: 70 },
      { name: 'SOAP & JMS/MQ', nivel: 'Básico', pct: 55 },
      { name: 'AWS S3 & GitHub Actions CI/CD', nivel: 'Intermedio', pct: 65 },
      { name: 'Docker', nivel: 'Básico', pct: 50 },
    ],
  },
  {
    titulo: 'Frontend',
    skills: [
      { name: 'HTML5 / CSS3', nivel: 'Intermedio', pct: 75 },
      { name: 'JavaScript / TypeScript', nivel: 'Intermedio', pct: 65 },
      { name: 'Vue.js', nivel: 'Básico', pct: 55 },
      { name: 'Angular', nivel: 'Básico', pct: 55 },
      { name: 'NestJS', nivel: 'Básico', pct: 40 },
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
  margin-bottom: 2.2rem;
}
</style>
