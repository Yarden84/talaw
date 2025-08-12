<template>
  <div class="min-h-screen bg-gray-50">
    <PageHeader 
      :title="getLocalizedContent(contentData, 'title') || 'Creators Protection'"
      :description="getLocalizedContent(contentData, 'description') || 'Comprehensive legal protection for content creators, artists, and intellectual property owners.'"
    />

    <PageContent 
      :office-vision="getLocalizedContent(contentData, 'officeVision') || 'Our office is dedicated to protecting the creative rights and intellectual property of artists, writers, musicians, and digital content creators. We understand the unique challenges faced by creative professionals in today\'s digital landscape and provide tailored legal solutions to safeguard your creative works and business interests.'"
      :services="getLocalizedServices(contentData) || []"
    />

    <Footer />
  </div>
</template>

<script setup>
import { getLocalizedContent, languageState } from '../stores/language.js'

const { data: apiResponse } = await useAsyncData('creators-protection-content', () => 
  $fetch('/api/creators-protection-content')
)

const contentData = computed(() => {
  if (apiResponse.value?.success && apiResponse.value?.content) {
    return apiResponse.value.content
  }
  return null
})

const getLocalizedServices = (content) => {
  if (!content) return null
  const currentLang = languageState.currentLanguage
  return content[`services_${currentLang}`] || content.services || null
}

useHead({
  title: `${getLocalizedContent(contentData.value, 'title') || 'Creators Protection'} - Revital Amir Law`,
  meta: [
    { name: 'description', content: getLocalizedContent(contentData.value, 'description') || 'Comprehensive legal protection for content creators, artists, and intellectual property owners. Expert legal services by Revital Amir.' }
  ]
})
</script> 