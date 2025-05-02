<template>
  <div class="flex flex-col min-h-screen">
    <HeaderPortafolio />

    <div class="h-16"></div>

    <main class="flex-1 py-8 px-6 md:px-8 bg-gray-50">
      <BannerPrincipal />

      <ProyectosFrontend />
      <hr class="my-8" />

      <ProyectosBackend />
      <hr class="my-8" />

      <Habilidades />
      <hr class="my-8" />

      <SobreMi />
      <hr class="my-8" />

      <Contacto />
    </main>

    <FooterPortafolio />
  </div>
</template>

<script setup lang="ts">
// Importando componentes
import HeaderPortafolio from '@/components/portafolio/HeaderPortafolio.vue';
import BannerPrincipal from '@/components/portafolio/BannerPrincipal.vue';
import ProyectosFrontend from '@/components/portafolio/ProyectosFrontend.vue';
import ProyectosBackend from '@/components/portafolio/ProyectosBackend.vue';
import Habilidades from '@/components/portafolio/Habilidades.vue';
import SobreMi from '@/components/portafolio/SobreMi.vue';
import Contacto from '@/components/portafolio/Contacto.vue';
import FooterPortafolio from '@/components/portafolio/FooterPortafolio.vue';
</script>

<style scoped>
/* Mejoras para los scroll smooth */
html {
  scroll-behavior: smooth;
}
</style>
