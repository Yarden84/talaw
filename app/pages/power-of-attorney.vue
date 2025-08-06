<template>
  <div class="min-h-screen bg-gray-50">
    <PageHeader 
      :title="contentData?.title || 'Power of Attorney'"
      :description="contentData?.description || 'Expert assistance with power of attorney documents and estate planning needs.'"
    />

    <PageContent 
      :office-vision="contentData?.officeVision || 'Our estate planning practice is built on the understanding that preparing for the future requires careful consideration of your personal values, family dynamics, and financial goals. We provide compassionate and comprehensive legal services to help you protect your assets and ensure your wishes are honored throughout your lifetime and beyond.'"
      :services="contentData?.services || []"
    />

    <Footer />
  </div>
</template>

<script setup>
const { data: apiResponse } = await useAsyncData('power-of-attorney-content', () => 
  $fetch('/api/power-of-attorney-content')
)

const contentData = computed(() => {
  if (apiResponse.value?.success && apiResponse.value?.content) {
    return apiResponse.value.content
  }
  return null
})

useHead({
  title: `${contentData.value?.title || 'Power of Attorney'} - Revital Amir Law`,
  meta: [
    { name: 'description', content: contentData.value?.description || 'Expert assistance with power of attorney documents and estate planning needs. Professional legal services by Revital Amir.' }
  ]
})
</script> 