<template>
  <div class="min-h-screen bg-gray-50">
    <PageHeader 
      :title="getLocalizedContent(contentData, 'title') || 'Users Protection'"
      :description="getLocalizedContent(contentData, 'description') || 'Legal guidance and protection for individuals navigating complex legal situations.'"
    />

    <div class="opacity-0 translate-y-8 animate-section" ref="contentSection">
      <PageContent 
        :office-vision="getLocalizedContent(contentData, 'officeVision') || 'We are committed to protecting individual users\' rights in an increasingly complex digital and legal environment. Our practice focuses on empowering individuals with the knowledge and legal support they need to navigate personal legal challenges, privacy concerns, and consumer protection issues.'"
        :services="getLocalizedServices(contentData) || []"
      />
    </div>

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
  title: `${getLocalizedContent(contentData.value, 'title') || 'Users Protection'} - Revital Amir Law`,
  meta: [
    { name: 'description', content: getLocalizedContent(contentData.value, 'description') || 'Legal guidance and protection for individuals navigating complex legal situations. Expert legal services by Revital Amir.' }
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