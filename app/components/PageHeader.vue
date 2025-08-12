<template>
  <section class="relative h-[500px] md:h-[400px] flex items-center justify-center">
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://cdn.pixabay.com/photo/2016/06/01/06/26/open-book-1428428_1280.jpg')"></div>
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h1 :class="['text-4xl md:text-5xl font-bold mb-6 text-white', languageState.currentLanguage === 'he' ? 'font-display-he' : 'font-display']">
          {{ title }}
        </h1>
        <p class="text-xl text-gray-200 leading-relaxed">
          {{ description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { languageState } from '../stores/language.js'

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script> 