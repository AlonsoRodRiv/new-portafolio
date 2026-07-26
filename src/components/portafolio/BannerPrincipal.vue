<template>
  <section class="mb-16 pt-10 md:pt-16">
    <p class="font-mono-label text-xs uppercase tracking-[0.18em] text-subtle mb-6">
      Perfil profesional · San Salvador, El Salvador
    </p>
    <h1 class="font-serif-display text-5xl md:text-7xl leading-[0.98] tracking-tight text-ink mb-3">
      Juan Alonso<br />Rodríguez
    </h1>
    <p
      class="font-serif-display italic text-2xl md:text-3xl text-indigo2 inline-block border-b-2 border-indigo2 pb-1 mb-8"
    >
      Java Backend Developer
    </p>
    <p class="text-subtle text-lg leading-relaxed max-w-[54ch] mb-10">
      Construyo y mantengo los sistemas backend de la banca salvadoreña: procesamiento por lotes,
      facturación electrónica y APIs REST sobre Spring Boot, con SOAP y JMS/MQ para las
      integraciones que nadie ve pero todos necesitan.
    </p>
    <div class="flex flex-wrap items-center gap-8">
      <a
        href="#contact"
        class="text-indigo2 font-semibold border-b border-indigo2 pb-0.5 hover:opacity-75 transition-opacity"
      >
        Contáctame →
      </a>
      <a
        :href="cvUrl"
        download
        class="text-ink font-semibold border-b border-ink pb-0.5 hover:opacity-75 transition-opacity"
      >
        Descargar CV
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const cvUrl = `${process.env.BASE_URL}cv/CV-Juan-Alonso-Rodriguez.pdf`;
</script>
