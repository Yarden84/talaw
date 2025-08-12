<template>
  <section class="py-16 bg-white min-h-screen">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="space-y-12">
          <div>
            <h2 class="text-3xl font-display font-bold text-gray-900 mb-8">
              {{ languageState.currentLanguage === 'he' ? 'החזון שלנו' : 'Our Vision' }}
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              {{ officeVision }}
            </p>
          </div>
          
          <div v-if="services?.length">
            <h2 class="text-3xl font-display font-bold text-gray-900 mb-8">
              {{ languageState.currentLanguage === 'he' ? 'השירותים שלנו' : 'Our Services' }}
            </h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div 
                v-for="service in services"
                :key="service"
                class="bg-gray-50 p-6 rounded-lg border-l-4 border-teal-600"
              >
                <h3 class="font-semibold text-gray-900 mb-2">{{ service }}</h3>
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