<template>
  <section id="contact" class="mb-16">
    <h2 class="section-title">Contacto</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <p class="text-subtle leading-relaxed max-w-[50ch]">
        {{ descripcion }}
      </p>

      <div class="space-y-5">
        <div v-for="(item, index) in datosContacto" :key="index">
          <p class="font-mono-label text-[0.7rem] uppercase tracking-[0.14em] text-subtle mb-0.5">
            {{ item.tipo }}
          </p>
          <a
            v-if="item.enlace"
            :href="item.enlace"
            class="text-ink font-semibold hover:text-indigo2 transition-colors"
          >
            {{ item.valor }}
          </a>
          <p v-else class="text-ink font-semibold">{{ item.valor }}</p>
        </div>

        <div>
          <p class="font-mono-label text-[0.7rem] uppercase tracking-[0.14em] text-subtle mb-0.5">
            LinkedIn
          </p>
          <a
            href="https://linkedin.com/in/juan-alonso-rodriguez-rivera-0b88291aa"
            target="_blank"
            rel="noopener"
            class="text-ink font-semibold hover:text-indigo2 transition-colors break-all"
          >
            linkedin.com/in/juan-alonso-rodriguez-rivera-0b88291aa
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const descripcion = ref(
  'Estoy disponible para oportunidades laborales, proyectos freelance o simplemente para charlar sobre desarrollo backend. No dudes en contactarme a través de cualquiera de estos medios.',
);

const datosContacto = ref([
  {
    tipo: 'Email',
    valor: 'jonhalonsorodriguez@gmail.com',
    enlace: 'mailto:jonhalonsorodriguez@gmail.com',
  },
  {
    tipo: 'Teléfono',
    valor: '+503 7016 9190',
    enlace: 'tel:+50370169190',
  },
  {
    tipo: 'Ubicación',
    valor: 'San Salvador, El Salvador',
    enlace: null,
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
