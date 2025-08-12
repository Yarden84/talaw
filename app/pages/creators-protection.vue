<template>
  <div class="min-h-screen bg-gray-50">
    <PageHeader 
      :title="getLocalizedContent(contentData, 'title') || 'Creators Protection'"
      :description="getLocalizedContent(contentData, 'description') || 'Comprehensive legal protection for content creators, artists, and intellectual property owners.'"
    />

    <div class="opacity-0 translate-y-8 animate-section" ref="contentSection">
      <PageContent 
        :office-vision="getLocalizedContent(contentData, 'officeVision') || 'Our office is dedicated to protecting the creative rights and intellectual property of artists, writers, musicians, and digital content creators. We understand the unique challenges faced by creative professionals in today\'s digital landscape and provide tailored legal solutions to safeguard your creative works and business interests.'"
        :services="getLocalizedServices(contentData) || []"
      />
    </div>

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

const contentSection = ref(null)

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible')
      }
    })
  }, observerOptions)

  if (contentSection.value) observer.observe(contentSection.value)
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

<style scoped>
.animate-section {
  transition: all 0.8s ease-out;
}

.animate-section.animate-visible {
  opacity: 1;
  transform: translateY(0);
}
</style> 