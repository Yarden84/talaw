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
                {{ contentData?.mainParagraph || 'Revital Amir is a dedicated legal professional with extensive experience in protecting the rights and interests of creators, users, and individuals. With a passion for justice and a commitment to excellence, Revital provides comprehensive legal solutions tailored to each client\'s unique needs.' }}
              </p>
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
          <h2 class="text-3xl font-display font-bold text-center text-gray-900 mb-12">
            {{ contentData?.educationSectionTitle || 'Education & Experience' }}
          </h2>
          
          <div class="grid md:grid-cols-2 gap-12">
            <div class="space-y-6">
              <h3 class="text-2xl font-display font-bold text-gray-900 mb-4">
                {{ contentData?.education?.title || 'Education' }}
              </h3>
              <div class="space-y-4">
                <div 
                  v-for="degree in contentData?.education?.degrees || defaultEducation"
                  :key="degree.degree"
                  class="border-l-4 border-teal-600 pl-4"
                >
                  <h4 class="font-bold text-gray-900">{{ degree.degree }}</h4>
                  <p class="text-gray-600">{{ degree.institution }}</p>
                  <p class="text-gray-500 text-sm">{{ degree.year }}</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-6">
              <h3 class="text-2xl font-display font-bold text-gray-900 mb-4">
                {{ contentData?.experience?.title || 'Professional Experience' }}
              </h3>
              <div class="space-y-4">
                <div class="border-l-4 border-teal-600 pl-4">
                  <h4 class="font-bold text-gray-900">
                    {{ contentData?.experience?.areasOfPractice?.title || 'Areas of Practice' }}
                  </h4>
                  <ul class="text-gray-600 space-y-1">
                    <li 
                      v-for="area in contentData?.experience?.areasOfPractice?.areas || defaultAreas"
                      :key="area"
                    >
                      • {{ area }}
                    </li>
                  </ul>
                </div>
                <div class="border-l-4 border-teal-600 pl-4">
                  <h4 class="font-bold text-gray-900">
                    {{ contentData?.experience?.memberships?.title || 'Professional Memberships' }}
                  </h4>
                  <ul class="text-gray-600 space-y-1">
                    <li 
                      v-for="org in contentData?.experience?.memberships?.organizations || defaultMemberships"
                      :key="org"
                    >
                      • {{ org }}
                    </li>
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
const { data: apiResponse } = await useAsyncData('about-content', () => 
  $fetch('/api/about-content')
)

const contentData = computed(() => {
  if (apiResponse.value?.success && apiResponse.value?.content) {
    return apiResponse.value.content
  }
  return null
})

const defaultEducation = [
  {
    degree: "Juris Doctor (J.D.)",
    institution: "[Law School Name]",
    year: "Year of Graduation"
  },
  {
    degree: "Bachelor of Arts",
    institution: "[University Name]",
    year: "Year of Graduation"
  }
]

const defaultAreas = [
  "Intellectual Property Protection",
  "Creators Rights & Copyright Law",
  "User Protection & Privacy Rights",
  "Estate Planning & Power of Attorney",
  "Contract Law & Negotiations"
]

const defaultMemberships = [
  "State Bar Association",
  "American Bar Association",
  "Intellectual Property Law Association"
]

useHead({
  title: `${contentData.value?.title || 'About Revital Amir'} - Professional Attorney`,
  meta: [
    { name: 'description', content: contentData.value?.description || 'Learn about Revital Amir, a dedicated legal professional with 15+ years of experience in intellectual property protection, user rights, and estate planning.' }
  ]
})
</script> 