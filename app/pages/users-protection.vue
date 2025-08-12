<template>
  <div class="min-h-screen bg-gray-50">
    <PageHeader 
      :title="getLocalizedContent(contentData, 'title') || 'Users Protection'"
      :description="getLocalizedContent(contentData, 'description') || 'Legal guidance and protection for individuals navigating complex legal situations.'"
    />

    <PageContent 
      :office-vision="getLocalizedContent(contentData, 'officeVision') || 'We are committed to protecting individual users\' rights in an increasingly complex digital and legal environment. Our practice focuses on empowering individuals with the knowledge and legal support they need to navigate personal legal challenges, privacy concerns, and consumer protection issues.'"
      :services="getLocalizedServices(contentData) || []"
    />

    <Footer />
  </div>
</template>

<script setup>
import { getLocalizedContent, languageState } from '../stores/language.js'

const { data: apiResponse } = await useAsyncData('users-protection-content', () => 
  $fetch('/api/users-protection-content')
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
  title: `${getLocalizedContent(contentData.value, 'title') || 'Users Protection'} - Revital Amir Law`,
  meta: [
    { name: 'description', content: getLocalizedContent(contentData.value, 'description') || 'Legal guidance and protection for individuals navigating complex legal situations. Expert legal services by Revital Amir.' }
  ]
})
</script> 