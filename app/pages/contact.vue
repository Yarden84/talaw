<template>
  <div class="min-h-screen bg-gray-50">
    <PageHeader 
      :title="getLocalizedContent(contentData, 'title') || 'Contact Us'"
      :description="getLocalizedContent(contentData, 'description') || 'Ready to discuss your legal needs? Get in touch with us today for a consultation.'"
    />

    <section class="py-16 bg-white min-h-screen opacity-0 translate-y-8 animate-section" ref="contactSection">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-2 gap-12">
            <div class="space-y-8">
              <h2 :class="['text-3xl font-bold text-gray-900 mb-8', languageState.currentLanguage === 'he' ? 'font-display-he' : 'font-display']">
                {{ getLocalizedContent(contentData, 'getInTouchTitle') || 'Get In Touch' }}
              </h2>
              
              <div class="space-y-6">
                <div 
                  v-for="item in contactItems"
                  :key="item.key"
                  :class="['flex items-start space-x-4', languageState.currentLanguage === 'he' ? 'space-x-reverse' : '']"
                >
                  <div class="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.iconPath"></path>
                      <path v-if="item.secondPath" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.secondPath"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 mb-2">{{ item.label }}</h3>
                    <p class="text-gray-600" :class="{ 'whitespace-pre-line': item.multiline }">{{ item.value }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { getLocalizedContent, languageState } from '../stores/language.js'

const { data: apiResponse } = await useAsyncData('contact-content', () => 
  $fetch('/api/contact-content')
)

const contentData = computed(() => {
  if (apiResponse.value?.success && apiResponse.value?.content) {
    return apiResponse.value.content
  }
  return null
})

const contactSection = ref(null)

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

  if (contactSection.value) observer.observe(contactSection.value)
})

const contactItems = computed(() => [
  {
    key: 'phone',
    label: getLocalizedContent(contentData.value, 'phoneLabel') || 'Phone',
    value: contentData.value?.phone || '+1 (555) 123-4567',
    iconPath: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    multiline: false
  },
  {
    key: 'email',
    label: getLocalizedContent(contentData.value, 'emailLabel') || 'Email',
    value: contentData.value?.email || 'info@revitalamirlaw.com',
    iconPath: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    multiline: false
  },
  {
    key: 'office',
    label: getLocalizedContent(contentData.value, 'officeLabel') || 'Office',
    value: getLocalizedContent(contentData.value, 'officeAddress') || '123 Legal Street\nSuite 100\nCity, State 12345',
    iconPath: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
    secondPath: 'M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    multiline: true
  },
  {
    key: 'hours',
    label: getLocalizedContent(contentData.value, 'officeHoursLabel') || 'Office Hours',
    value: getLocalizedContent(contentData.value, 'officeHours') || 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 2:00 PM\nSunday: Closed',
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    multiline: true
  }
])

useHead({
  title: `${getLocalizedContent(contentData.value, 'title') || 'Contact Us'} - Revital Amir Law`,
  meta: [
    { name: 'description', content: getLocalizedContent(contentData.value, 'description') || 'Contact Revital Amir Law for legal consultation. Get in touch with our experienced attorney for creators protection, users protection, and power of attorney services.' }
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