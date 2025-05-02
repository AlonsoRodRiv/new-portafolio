<template>
  <section id="skills" class="mb-12">
    <div class="flex items-center mb-6">
      <i class="fas fa-tools text-2xl text-blue-600 mr-3"></i>
      <h2 class="text-3xl font-bold text-gray-800">Habilidades</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Frontend Skills -->
      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 class="text-xl font-bold mb-4 flex items-center">
          <i class="fas fa-laptop-code text-blue-500 mr-2"></i>
          Frontend
        </h3>
        <div class="space-y-4">
          <div v-for="(skill, index) in frontendSkills" :key="index">
            <div class="flex justify-between mb-1">
              <span class="font-semibold flex items-center">
                <i :class="skill.icon + ' ' + skill.iconColor + ' mr-2'"></i>
                {{ skill.name }}
              </span>
              <span>{{ skill.level }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div
                class="bg-blue-600 h-2.5 rounded-full"
                :style="{ width: skill.level + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Backend Skills -->
      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 class="text-xl font-bold mb-4 flex items-center">
          <i class="fas fa-server text-blue-500 mr-2"></i>
          Backend
        </h3>
        <div class="space-y-4">
          <div v-for="(skill, index) in backendSkills" :key="index">
            <div class="flex justify-between mb-1">
              <span class="font-semibold flex items-center">
                <i :class="skill.icon + ' ' + skill.iconColor + ' mr-2'"></i>
                {{ skill.name }}
              </span>
              <span>{{ skill.level }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div
                class="bg-blue-600 h-2.5 rounded-full"
                :style="{ width: skill.level + '%' }"
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

// Definiendo el tipo para habilidades
interface Skill {
  name: string;
  level: number;
  icon: string;
  iconColor: string;
}

// Habilidades de Frontend
const frontendSkills = ref<Skill[]>([
  { name: 'HTML/CSS', level: 90, icon: 'fab fa-html5', iconColor: 'text-orange-500' },
  {
    name: 'JavaScript/TypeScript',
    level: 85,
    icon: 'fab fa-js-square',
    iconColor: 'text-yellow-500',
  },
  { name: 'Vue.js', level: 80, icon: 'fab fa-vuejs', iconColor: 'text-green-500' },
  { name: 'Angular', level: 75, icon: 'fab fa-angular', iconColor: 'text-red-500' },
  { name: 'Tailwind CSS', level: 90, icon: 'fab fa-css3-alt', iconColor: 'text-blue-400' },
]);

// Habilidades de Backend
const backendSkills = ref<Skill[]>([
  { name: 'Java', level: 85, icon: 'fab fa-java', iconColor: 'text-red-600' },
  { name: 'Spring Boot', level: 80, icon: 'fas fa-leaf', iconColor: 'text-green-600' },
  {
    name: 'Bases de Datos (SQL)',
    level: 75,
    icon: 'fas fa-database',
    iconColor: 'text-blue-600',
  },
  { name: 'RESTful APIs', level: 85, icon: 'fas fa-cloud', iconColor: 'text-cyan-500' },
  { name: 'Cloud (AWS)', level: 70, icon: 'fab fa-aws', iconColor: 'text-orange-400' },
]);
</script>

<style scoped>
/* Animaciones para hover */
.rounded-lg {
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

.rounded-lg:hover {
  transform: translateY(-3px);
}

/* Animaciones para íconos */
.fas,
.fab {
  transition: transform 0.2s ease;
}

.font-semibold:hover .fas,
.font-semibold:hover .fab {
  transform: scale(1.2);
}
</style>
