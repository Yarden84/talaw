<template>
  <div class="min-h-screen bg-gray-50">
    <PageHeader 
      title="Legal Articles & Insights"
      description="Stay informed with our latest legal insights, articles, and updates on important legal matters."
    />

    <section class="py-16 bg-white min-h-screen">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 :class="['text-3xl font-bold text-center text-gray-900 mb-12', languageState.currentLanguage === 'he' ? 'font-display-he' : 'font-display']">Coming Soon</h2>
          <p class="text-lg text-gray-600">
            We're working on bringing you valuable legal insights and articles. Please check back soon for updates on important legal matters, case studies, and expert analysis.
          </p>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { languageState } from '../stores/language.js'

useHead({
  title: 'Legal Articles & Insights - Revital Amir Law',
  meta: [
    { name: 'description', content: 'Stay informed with legal insights, articles, and updates from Revital Amir Law. Expert analysis on creators protection, users protection, and legal matters.' }
  ]
})
</script> 