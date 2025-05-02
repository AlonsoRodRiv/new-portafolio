<template>
  <section id="contact" class="mb-12">
    <div class="flex items-center mb-6">
      <i class="fas fa-envelope text-2xl text-blue-600 mr-3"></i>
      <h2 class="text-3xl font-bold text-gray-800">Contacto</h2>
    </div>

    <div class="bg-white p-8 rounded-lg shadow-lg">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4 flex items-center">
            <i class="fas fa-comment-dots text-blue-500 mr-2"></i>
            ¡Hablemos!
          </h3>
          <p class="text-gray-600 mb-6">
            {{ descripcion }}
          </p>

          <div class="space-y-5">
            <div
              v-for="(item, index) in datosContacto"
              :key="index"
              class="flex items-center group"
            >
              <div
                class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors"
              >
                <i :class="item.icono + ' text-blue-600 text-lg'"></i>
              </div>
              <div>
                <p class="text-sm text-gray-500">
                  {{ item.tipo }}
                </p>
                <a
                  v-if="item.enlace"
                  :href="item.enlace"
                  class="font-medium hover:text-blue-600 transition-colors"
                  >{{ item.valor }}</a
                >
                <p v-else class="font-medium">
                  {{ item.valor }}
                </p>
              </div>
            </div>
          </div>

          <div class="flex space-x-4 mt-8">
            <a
              v-for="red in redesSociales"
              :key="red.nombre"
              :href="red.url"
              :class="
                red.bgClass +
                ' w-12 h-12 rounded-full flex items-center justify-center text-white hover:' +
                red.hoverClass +
                ' transition-colors shadow-md'
              "
              target="_blank"
              rel="noopener"
            >
              <i :class="red.icono + ' text-lg'"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Información de contacto
const descripcion = ref(
  'Estoy disponible para proyectos freelance, oportunidades laborales o simplemente para charlar sobre desarrollo web. No dudes en contactarme a través de cualquiera de estos medios:',
);

// Datos de contacto
const datosContacto = ref([
  {
    tipo: 'Email',
    valor: 'jonhalonsorodriguez@gmail.com',
    enlace: 'mailto:jonhalonsorodriguez@gmail.com',
    icono: 'fas fa-envelope',
  },
  {
    tipo: 'Teléfono',
    valor: '+503 7016 9190',
    enlace: 'tel:+50370169190',
    icono: 'fas fa-phone',
  },
  {
    tipo: 'Ubicación',
    valor: 'San Salvador, El Salvador',
    enlace: null,
    icono: 'fas fa-map-marker-alt',
  },
]);

// Redes sociales
const redesSociales = ref([
  {
    nombre: 'GitHub',
    url: 'https://github.com/tunombre',
    icono: 'fab fa-github',
    bgClass: 'bg-gray-900',
    hoverClass: 'bg-gray-700',
  },
  {
    nombre: 'LinkedIn',
    url: 'https://linkedin.com/in/tunombre',
    icono: 'fab fa-linkedin-in',
    bgClass: 'bg-blue-600',
    hoverClass: 'bg-blue-700',
  },
  {
    nombre: 'Twitter',
    url: 'https://twitter.com/tunombre',
    icono: 'fab fa-twitter',
    bgClass: 'bg-blue-400',
    hoverClass: 'bg-blue-500',
  },
  {
    nombre: 'WhatsApp',
    url: 'https://wa.me/51987654321',
    icono: 'fab fa-whatsapp',
    bgClass: 'bg-green-500',
    hoverClass: 'bg-green-600',
  },
]);
</script>

<style scoped>
/* Animaciones para íconos */
.fas,
.fab {
  transition: transform 0.2s ease;
}

a:hover .fas,
a:hover .fab,
button:hover .fas {
  transform: scale(1.2);
}

/* Efecto de elevación para botones de redes sociales */
.rounded-full {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.rounded-full:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
</style>
