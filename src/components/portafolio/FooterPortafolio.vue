<template>
  <footer class="border-t border-hairline py-10 px-6 md:px-8">
    <div class="container mx-auto max-w-5xl">
      <div class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-6 mb-8">
        <div>
          <p class="font-serif-display text-lg text-ink mb-1">Juan Alonso Rodríguez</p>
          <p class="text-subtle text-sm max-w-[44ch]">
            Java Backend Developer — Spring Boot, APIs REST e integraciones empresariales en el
            sector bancario.
          </p>
        </div>
        <nav class="flex flex-wrap gap-x-6 gap-y-2">
          <a
            v-for="(link, index) in enlacesRapidos"
            :key="index"
            :href="link.url"
            class="text-sm text-subtle hover:text-indigo2 transition-colors"
          >
            {{ link.nombre }}
          </a>
        </nav>
      </div>

      <div
        class="border-t border-hairline pt-6 flex flex-col md:flex-row justify-between gap-2 text-sm text-subtle"
      >
        <p>© {{ new Date().getFullYear() }} Juan Alonso Rodríguez</p>
        <a
          href="https://linkedin.com/in/juan-alonso-rodriguez-rivera-0b88291aa"
          target="_blank"
          rel="noopener"
          class="hover:text-indigo2 transition-colors"
        >
          <i class="fab fa-linkedin-in mr-1"></i> LinkedIn
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const enlacesRapidos = [
  { nombre: 'Sobre Mí', url: '#about' },
  { nombre: 'Experiencia', url: '#experience' },
  { nombre: 'Habilidades', url: '#skills' },
  { nombre: 'Back-end', url: '#backend' },
  { nombre: 'Front-end', url: '#frontend' },
  { nombre: 'Contacto', url: '#contact' },
];
</script>
