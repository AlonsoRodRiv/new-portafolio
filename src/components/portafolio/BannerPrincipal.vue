<template>
  <section
    class="mb-12 bg-gradient-to-r from-blue-900 to-gray-900 text-white rounded-lg shadow-xl overflow-hidden"
  >
    <div class="container mx-auto py-16 px-8 flex flex-col items-center text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Desarrollador Full-Stack</h1>
      <p class="text-xl mb-8 max-w-2xl">
        Creando soluciones web innovadoras y funcionales con tecnologías modernas
      </p>
      <div class="flex flex-wrap gap-4 justify-center">
        <a
          href="#contact"
          class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-md text-white font-medium shadow-lg"
        >
          <i class="fas fa-envelope mr-2"></i> Contáctame
        </a>
        <!-- <a
          href="#portfolio"
          class="inline-flex items-center justify-center px-6 py-3 bg-gray-700 hover:bg-gray-800 transition-colors duration-300 rounded-md text-white font-medium border border-gray-600"
        >
          <i class="fas fa-briefcase mr-2"></i> Ver Portafolio
        </a> -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No se requiere lógica específica para este componente
</script>

<style scoped>
/* Animaciones para íconos en hover */
.fas {
  transition: transform 0.2s ease;
}

a:hover .fas {
  transform: scale(1.2);
}
</style>
