<template>
  <section id="about" class="mb-16">
    <h2 class="section-title">Sobre Mí</h2>

    <div class="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 items-start">
      <div class="flex flex-col items-center md:items-start gap-4">
        <img
          :src="fotoPerfil"
          alt="Juan Alonso Rodríguez"
          class="w-44 h-44 object-cover rounded-sm border border-hairline grayscale hover:grayscale-0 transition-all duration-500"
        />
        <a
          v-for="red in redesSociales"
          :key="red.nombre"
          :href="red.url"
          target="_blank"
          rel="noopener"
          class="text-subtle hover:text-indigo2 transition-colors text-sm"
        >
          <i :class="red.icono + ' mr-2'"></i>{{ red.nombre }}
        </a>
      </div>

      <div class="space-y-4">
        <p
          v-for="(parrafo, index) in biografia"
          :key="index"
          class="text-subtle leading-relaxed max-w-[65ch]"
        >
          {{ parrafo }}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
          <div>
            <h3 class="font-mono-label text-xs uppercase tracking-[0.14em] text-subtle mb-3">
              Educación
            </h3>
            <ul class="space-y-3">
              <li
                v-for="(item, index) in educacion"
                :key="index"
                class="text-sm text-ink leading-snug border-l-2 border-hairline pl-3"
              >
                {{ item }}
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-mono-label text-xs uppercase tracking-[0.14em] text-subtle mb-3">
              Idiomas
            </h3>
            <ul class="space-y-3">
              <li
                v-for="(idioma, index) in idiomas"
                :key="index"
                class="text-sm text-ink border-l-2 border-hairline pl-3"
              >
                {{ idioma.nombre }} <span class="text-subtle">— {{ idioma.nivel }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const fotoPerfil = require('@/assets/foto.jpg');

const biografia = ref([
  'Soy Desarrollador Backend Java con experiencia en Spring Boot, APIs REST e integraciones empresariales dentro del sector bancario. Actualmente en TechyWe, doy mantenimiento y desarrollo funcionalidades para sistemas en producción de Banco Hipotecario (BH) y el sistema de facturación electrónica RUBRIDOC, trabajando con Maven, AWS S3 y GitHub Actions CI/CD.',
  'Tengo conocimientos en servicios SOAP, mensajería JMS/MQ y bases de datos relacionales (PostgreSQL, MySQL, Oracle). Trabajo profesionalmente con Java 8/11 y practico Java 17. Soy autodidacta, con interés en seguir creciendo hacia arquitecturas cloud y DevOps, y complemento mi flujo de trabajo con herramientas de IA como Claude Code para revisión y validación de código.',
]);

const educacion = ref([
  'Universidad de El Salvador — Ingeniería de Sistemas Computacionales',
  'KODIGO | Creative Technology Academy — Bootcamp Full Stack Jr.',
  'Oracle Next Education | Alura Latam — Especialización Java Backend',
]);

const idiomas = ref([
  { nombre: 'Español', nivel: 'Nativo' },
  { nombre: 'Inglés', nivel: 'Intermedio' },
]);

const redesSociales = ref([
  {
    nombre: 'LinkedIn',
    url: 'https://linkedin.com/in/juan-alonso-rodriguez-rivera-0b88291aa',
    icono: 'fab fa-linkedin-in',
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
