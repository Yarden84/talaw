<template>
  <div class="min-h-screen bg-gray-50">
    <PageHeader 
      :title="getLocalizedContent(contentData, 'title') || 'Power of Attorney'"
      :description="getLocalizedContent(contentData, 'description') || 'Expert assistance with power of attorney documents and estate planning needs.'"
    />

    <div class="opacity-0 translate-y-8 animate-section" ref="contentSection">
      <PageContent 
        :office-vision="getLocalizedContent(contentData, 'officeVision') || 'Our estate planning practice is built on the understanding that preparing for the future requires careful consideration of your personal values, family dynamics, and financial goals. We provide compassionate and comprehensive legal services to help you protect your assets and ensure your wishes are honored throughout your lifetime and beyond.'"
        :services="getLocalizedServices(contentData) || []"
      />
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { getLocalizedContent, languageState } from '../stores/language.js'

const { data: apiResponse } = await useAsyncData('power-of-attorney-content', () => 
  $fetch('/api/power-of-attorney-content')
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
  title: `${getLocalizedContent(contentData.value, 'title') || 'Power of Attorney'} - Revital Amir Law`,
  meta: [
    { name: 'description', content: getLocalizedContent(contentData.value, 'description') || 'Expert assistance with power of attorney documents and estate planning needs. Professional legal services by Revital Amir.' }
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