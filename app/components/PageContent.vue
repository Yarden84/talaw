<template>
  <section class="py-16 bg-white min-h-screen">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="space-y-20">
          <div>
            <h2 class="text-3xl font-display font-bold text-gray-900 mb-8">
              {{ languageState.currentLanguage === 'he' ? 'החזון שלנו' : 'Our Vision' }}
            </h2>
            <p class="text-lg text-gray-600 leading-8">
              {{ officeVision }}
            </p>
          </div>
          
          <div v-if="services?.length">
            <h2 class="text-3xl font-display font-bold text-gray-900 mb-10">
              {{ languageState.currentLanguage === 'he' ? 'השירותים שלנו' : 'Our Services' }}
            </h2>
            <div class="grid md:grid-cols-2 gap-10">
              <div 
                v-for="service in services"
                :key="service"
                class="group relative"
              >
                <div class="absolute top-0.5 left-0.5 -right-0.5 -bottom-0.5 bg-teal-600/30 rounded-lg transition-all duration-300 group-hover:top-0 group-hover:left-0 group-hover:-right-1 group-hover:-bottom-1 group-hover:blur-sm group-hover:bg-teal-600/40"></div>
                <div class="bg-gray-50 p-4 rounded-lg relative z-10 transition-all duration-300 group-hover:transform group-hover:-translate-x-1 group-hover:-translate-y-0.5 group-hover:scale-[1.03]">
                  <h3 class="font-semibold text-gray-900 text-sm cursor-context-menu">{{ service }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { languageState } from '../stores/language.js'

defineProps({
  officeVision: {
    type: String,
    required: true
  },
  services: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
</style> 