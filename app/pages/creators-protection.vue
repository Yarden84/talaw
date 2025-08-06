<template>
  <div class="min-h-screen bg-gray-50">
    <PageHeader 
      :title="contentData?.title || 'Creators Protection'"
      :description="contentData?.description || 'Comprehensive legal protection for content creators, artists, and intellectual property owners.'"
    />

    <PageContent 
      :office-vision="contentData?.officeVision || 'Our office is dedicated to protecting the creative rights and intellectual property of artists, writers, musicians, and digital content creators. We understand the unique challenges faced by creative professionals in today\'s digital landscape and provide tailored legal solutions to safeguard your creative works and business interests.'"
      :services="contentData?.services || []"
    />

    <Footer />
  </div>
</template>

<script setup>
const { data: apiResponse } = await useAsyncData('creators-protection-content', () => 
  $fetch('/api/creators-protection-content')
)

const contentData = computed(() => {
  if (apiResponse.value?.success && apiResponse.value?.content) {
    return apiResponse.value.content
  }
  return null
})

useHead({
  title: `${contentData.value?.title || 'Creators Protection'} - Revital Amir Law`,
  meta: [
    { name: 'description', content: contentData.value?.description || 'Comprehensive legal protection for content creators, artists, and intellectual property owners. Expert legal services by Revital Amir.' }
  ]
})
</script> 