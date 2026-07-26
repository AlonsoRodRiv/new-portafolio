<template>
  <div id="top" class="flex flex-col min-h-screen bg-paper text-left">
    <HeaderPortafolio />

    <div class="h-16"></div>

    <main class="flex-1 py-10 px-6 md:px-8 container mx-auto max-w-5xl">
      <BannerPrincipal />
      <SobreMi />
      <ExperienciaProfesional />
      <Habilidades />
      <ProyectosBackend />
      <ProyectosFrontend />
      <Contacto />
    </main>

    <FooterPortafolio />
  </div>
</template>

<script setup lang="ts">
import HeaderPortafolio from '@/components/portafolio/HeaderPortafolio.vue';
import BannerPrincipal from '@/components/portafolio/BannerPrincipal.vue';
import ProyectosFrontend from '@/components/portafolio/ProyectosFrontend.vue';
import ProyectosBackend from '@/components/portafolio/ProyectosBackend.vue';
import ExperienciaProfesional from '@/components/portafolio/ExperienciaProfesional.vue';
import Habilidades from '@/components/portafolio/Habilidades.vue';
import SobreMi from '@/components/portafolio/SobreMi.vue';
import Contacto from '@/components/portafolio/Contacto.vue';
import FooterPortafolio from '@/components/portafolio/FooterPortafolio.vue';
</script>
