<template>
  <div class="min-h-screen bg-gray-50">
    <PageHeader 
      :title="contentData?.title || 'About Revital Amir'"
      :description="contentData?.description || 'Dedicated legal professional with extensive experience in protecting rights and interests.'"
    />

    <section class="py-24 bg-white min-h-screen">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="flex gap-32 items-center">
            <div class="w-[50%] space-y-6">
              <h3 class="text-2xl font-display font-bold text-gray-900 mb-6">{{ contentData?.backgroundTitle || 'Professional Background' }}</h3>
              <p class="text-gray-600 leading-relaxed text-lg">
                {{ contentData?.firstParagraph || 'Revital Amir is a dedicated legal professional with extensive experience in protecting the rights and interests of creators, users, and individuals. With a passion for justice and a commitment to excellence, Revital provides comprehensive legal solutions tailored to each client\'s unique needs.' }}
              </p>
              <p class="text-gray-600 leading-relaxed text-lg">
                {{ contentData?.secondParagraph || 'Our firm specializes in intellectual property protection, user rights advocacy, and estate planning services. We believe in building lasting relationships with our clients based on trust, transparency, and results.' }}
              </p>
              <div class="flex items-center space-x-4 pt-4">
                <div class="w-12 h-1 bg-teal-600"></div>
                <span class="text-teal-600 font-semibold">{{ contentData?.yearsExperience || '15+ Years Experience' }}</span>
              </div>
            </div>
            <div class="w-[300px] border-[1px] border-gray-900 rounded-lg p-1">
              <img 
                :src="contentData?.portraitImage || '/lawyer-portrait.jpg'" 
                :alt="contentData?.portraitAlt || 'Revital Amir - Professional Attorney'" 
                class="w-full border-[1px] border-gray-900 rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-display font-bold text-center text-gray-900 mb-12">Education & Experience</h2>
          
          <div class="grid md:grid-cols-2 gap-12">
            <div class="space-y-6">
              <h3 class="text-2xl font-display font-bold text-gray-900 mb-4">Education</h3>
              <div class="space-y-4">
                <div class="border-l-4 border-teal-600 pl-4">
                  <h4 class="font-bold text-gray-900">Juris Doctor (J.D.)</h4>
                  <p class="text-gray-600">[Law School Name]</p>
                  <p class="text-gray-500 text-sm">Year of Graduation</p>
                </div>
                <div class="border-l-4 border-teal-600 pl-4">
                  <h4 class="font-bold text-gray-900">Bachelor of Arts</h4>
                  <p class="text-gray-600">[University Name]</p>
                  <p class="text-gray-500 text-sm">Year of Graduation</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-6">
              <h3 class="text-2xl font-display font-bold text-gray-900 mb-4">Professional Experience</h3>
              <div class="space-y-4">
                <div class="border-l-4 border-teal-600 pl-4">
                  <h4 class="font-bold text-gray-900">Areas of Practice</h4>
                  <ul class="text-gray-600 space-y-1">
                    <li>• Intellectual Property Protection</li>
                    <li>• Creators Rights & Copyright Law</li>
                    <li>• User Protection & Privacy Rights</li>
                    <li>• Estate Planning & Power of Attorney</li>
                    <li>• Contract Law & Negotiations</li>
                  </ul>
                </div>
                <div class="border-l-4 border-teal-600 pl-4">
                  <h4 class="font-bold text-gray-900">Professional Memberships</h4>
                  <ul class="text-gray-600 space-y-1">
                    <li>• State Bar Association</li>
                    <li>• American Bar Association</li>
                    <li>• Intellectual Property Law Association</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
// Load content using our working API method
const { data: apiResponse } = await useAsyncData('about-content', () => 
  $fetch('/api/about-content')
)

// Extract content data from API response
const contentData = computed(() => {
  if (apiResponse.value?.success && apiResponse.value?.content) {
    return apiResponse.value.content
  }
  return null
})

useHead({
  title: `${contentData.value?.title || 'About Revital Amir'} - Professional Attorney`,
  meta: [
    { name: 'description', content: contentData.value?.description || 'Learn about Revital Amir, a dedicated legal professional with 15+ years of experience in intellectual property protection, user rights, and estate planning.' }
  ]
})
</script> 