<template>
  <footer
    class="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 px-6 md:px-8 shadow-inner"
  >
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 class="text-xl font-bold mb-4 flex items-center">
            <i class="fas fa-code mr-2 text-blue-400"></i>
            {{ nombre }}
          </h3>
          <p class="text-gray-300 mb-4">
            {{ descripcion }}
          </p>
          <div class="flex space-x-4">
            <a
              v-for="red in redesSociales"
              :key="red.nombre"
              :href="red.url"
              class="text-gray-300 hover:text-white transition-colors"
              target="_blank"
            >
              <i :class="red.icono + ' text-xl'"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-bold mb-4">Enlaces rápidos</h3>
          <ul class="space-y-2">
            <li v-for="(link, index) in enlacesRapidos" :key="index">
              <a
                :href="link.url"
                class="text-gray-300 hover:text-blue-400 flex items-center transition-colors"
              >
                <i class="fas fa-chevron-right mr-2 text-xs text-blue-400"></i> {{ link.nombre }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xl font-bold mb-4">Contacto</h3>
          <div class="space-y-3">
            <p
              v-for="(item, index) in datosContacto"
              :key="index"
              class="flex items-center text-gray-300"
            >
              <i :class="item.icono + ' mr-3 text-blue-400'"></i> {{ item.valor }}
            </p>
          </div>
        </div>
      </div>

      <div
        class="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center"
      >
        <p class="text-sm text-gray-400 mb-4 md:mb-0">
          © {{ new Date().getFullYear() }} {{ nombre }}. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Datos personales
const nombre = ref('Jonh Rodriguez');
const descripcion = ref(
  'Desarrollador Full-Stack apasionado por crear soluciones web innovadoras y funcionales.',
);

// Enlaces rápidos
const enlacesRapidos = ref([
  { nombre: 'Front-end', url: '#frontend' },
  { nombre: 'Back-end', url: '#backend' },
  { nombre: 'Habilidades', url: '#skills' },
  { nombre: 'Sobre Mi', url: '#about' },
  { nombre: 'Contacto', url: '#contact' },
]);

// Datos de contacto
const datosContacto = ref([
  {
    valor: 'San Salvador, El Salvador',
    icono: 'fas fa-map-marker-alt',
  },
  {
    valor: 'jonhalonsorodriguez@gmail.com',
    icono: 'fas fa-envelope',
  },
  {
    valor: '+503 7016 9190',
    icono: 'fas fa-phone-alt',
  },
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
/* Animaciones para íconos en hover */
.fas,
.fab {
  transition: transform 0.2s ease;
}

a:hover .fas,
a:hover .fab {
  transform: scale(1.2);
}
</style>
