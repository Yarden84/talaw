<template>
  <div class="min-h-screen bg-gray-50">
    <section class="relative min-h-screen flex items-center">
      <div :class="[
        'absolute inset-0 z-10', 
        languageState.currentLanguage === 'he' 
          ? 'bg-gradient-to-l from-gray-900 via-gray-900 to-transparent' 
          : 'bg-gradient-to-r from-gray-900 via-gray-900 to-transparent'
      ]"></div>
      <div :class="['absolute top-0 bottom-0 w-1/2 z-0', languageState.currentLanguage === 'he' ? 'left-0' : 'right-0']">
        <img 
          src="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Law Office Background" 
          class="w-full h-full object-cover"
        />
      </div>
      
      <div class="max-w-[1200px] mx-auto px-4 relative z-20">
        <div class="grid md:grid-cols-2 gap-12 items-center min-h-screen py-16">
          <div class="space-y-10 text-white">
            <div class="space-y-6">
              <h1 class="text-8xl tracking-[0.10em] md:text-6xl font-display leading-tight">
                {{ getLocalizedContent(homeContent, 'title') || 'Revital Amir Law' }}
              </h1>
              <p class="text-xl text-gray-300 tracking-[0.05em]">
                {{ getLocalizedContent(homeContent, 'subtitle') || 'in Professional Legal Services' }}
              </p>
            </div>
            
            <p class="text-lg text-gray-300 leading-relaxed max-w-lg tracking-[0.05em] leading-12">
              {{ getLocalizedContent(homeContent, 'description') || 'Revital Amir represents creators, users, and individuals in intellectual property protection, legal guidance, and estate planning. Our cases involve creators protection, users protection, power of attorney, and comprehensive legal solutions tailored to your unique needs.' }}
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 flex items-center gap-2">
                Get Assistance
                <svg :class="['w-5 h-5', languageState.currentLanguage === 'he' ? 'transform scale-x-[-1]' : '']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <div class="hidden md:block"></div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="flex gap-32 items-center">
            <div class="w-[50%] space-y-6">
              <h3 class="text-2xl font-display font-bold text-gray-900 mb-6">{{ getLocalizedContent(aboutContent, 'backgroundTitle') || 'About Revital Amir' }}</h3>
              <p class="text-gray-600 leading-relaxed text-lg">
                {{ getLocalizedContent(aboutContent, 'mainParagraph') || 'Revital Amir is a dedicated legal professional with extensive experience in protecting the rights and interests of creators, users, and individuals. With a passion for justice and a commitment to excellence, Revital provides comprehensive legal solutions tailored to each client\'s unique needs.' }}
              </p>
              <NuxtLink to="/about" :class="['flex items-center space-x-4 pt-4', languageState.currentLanguage === 'he' ? 'space-x-reverse ' : '']">
                    <span class="text-teal-600 font-semibold">Read More</span>
                    <svg :class="['w-5 hs-5 inline-block stroke-teal-600', languageState.currentLanguage === 'he' ? 'transform scale-x-[-1] mr-1' : '']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
              </NuxtLink>
            </div>
                <div class="w-[300px] border-[1px] border-gray-900 rounded-lg p-1">
                    <img 
                        :src="aboutContent?.portraitImage || '/lawyer-portrait.jpg'" 
                        :alt="getLocalizedContent(aboutContent, 'portraitAlt') || 'Revital Amir - Professional Attorney'" 
                        class="w-full border-[1px] border-gray-900 rounded-lg object-cover rounded-lg shadow-lg"
                    />
                </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-display font-bold text-center text-gray-900 mb-12">
          {{ getLocalizedContent(homeContent, 'servicesTitle') || 'Our Legal Services' }}
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <NuxtLink 
            v-for="service in homeContent?.services || defaultServices"
            :key="service.link"
            :to="service.link"
            class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 group"
          >
            <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-100 transition duration-300">
              <svg v-if="service.icon === 'creators'" viewBox="0 0 24 14.92" class="w-8 h-8 text-gray-600 group-hover:text-teal-600 transition duration-300">
                <title/>
                <g data-name="Camada 2" id="Camada_2"><g data-name="Camada 1" id="Camada_1-2"><path d="M23.5,4H22V2.5a.5.5,0,0,0-.5-.5H20V.5a.5.5,0,0,0-.5-.5H.5A.5.5,0,0,0,0,.5v9.91a.5.5,0,0,0,.5.5H2v1.5a.5.5,0,0,0,.5.5H4v1.5a.5.5,0,0,0,.5.5h19a.5.5,0,0,0,.5-.5V4.5A.5.5,0,0,0,23.5,4ZM15.8,9.91H4.2A3.74,3.74,0,0,0,1,6.71V4.2A3.74,3.74,0,0,0,4.2,1H15.8A3.74,3.74,0,0,0,19,4.2V6.71A3.74,3.74,0,0,0,15.8,9.91ZM19,7.71V9.91H16.79A2.76,2.76,0,0,1,19,7.71ZM19,1V3.21A2.76,2.76,0,0,1,16.79,1ZM1,1H3.21A2.76,2.76,0,0,1,1,3.21ZM1,7.71A2.76,2.76,0,0,1,3.21,9.91H1Zm2,3.21H19.5a.5.5,0,0,0,.5-.5V3h1v8.91H3Zm20,3H5v-1H21.5a.5.5,0,0,0,.5-.5V5h1Z"/><path d="M10,2.06a3.39,3.39,0,1,0,3.39,3.39A3.4,3.4,0,0,0,10,2.06Zm0,5.78a2.39,2.39,0,1,1,2.39-2.39A2.39,2.39,0,0,1,10,7.85Z"/></g></g>
              </svg>
              <svg v-else-if="service.icon === 'users'" class="w-8 h-8 text-gray-600 group-hover:text-teal-600 transition duration-300" viewBox="0 0 128 128">
                <title/><path d="M79.14,12.12C70,8.59,64,0,64,0S58,8.59,48.86,12.12C37.8,16.4,17.45,16.5,17.45,16.5s-3.81,61.72,6.21,75.85C36.06,109.82,64,118.37,64,128c0-9.63,27.94-18.18,40.34-35.65,10-14.12,6.21-75.85,6.21-75.85S90.2,16.4,79.14,12.12ZM64,87.5A25.5,25.5,0,1,1,89.5,62,25.5,25.5,0,0,1,64,87.5Z"/><path d="M64.64,52.52a9.42,9.42,0,0,1,6.62,2.7L74.12,58l5.59-5.72-2.86-2.8a17.48,17.48,0,1,0-.17,25.17l2.9-2.76-5.51-5.8-2.9,2.76a9.48,9.48,0,1,1-6.53-16.35Z"/>
              </svg>
              <svg v-else-if="service.icon === 'attorney'" class="w-8 h-8 text-gray-600 group-hover:text-teal-600 transition duration-300" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                <g id="_x32_5_x2C__Contract_x2C__Agreement_x2C__Deal_x2C__Legal_x2C__Obligation_x2C__Document"><g><g><path d="M344.976,420.589c-6.355,1.327-11.27,0.736-14.607-1.764c-4.596-3.444-5.14-9.728-5.142-9.755     c-0.299-4.677-6.331-6.412-9.059-2.589l-4.868,6.815c-3.521-2.394-6.954-4.324-10.285-5.855     c0.207-7.801-2.071-13.91-6.801-18.206c-10.813-9.821-30.172-5.17-30.992-4.968c-2.677,0.663-4.307,3.367-3.648,6.045     c0.657,2.678,3.358,4.314,6.044,3.664c4.158-1.015,16.201-2.511,21.886,2.673c1.849,1.686,2.972,4.101,3.364,7.218     c-13.263-3.255-24.443-0.439-32.585,3.476c-17.683,8.5-13.943,34.967,5.375,38.121c19.674,3.208,31.588-7.999,35.928-27.586     c3.25,1.722,6.519,3.849,9.803,6.382c2.259,1.742,5.485,1.238,7.122-1.053l2.104-2.945c4.739,8.223,13.99,13.138,28.41,10.114     c2.702-0.565,4.436-3.215,3.869-5.918C350.329,421.757,347.685,420.022,344.976,420.589z M265.269,435.595     c-9.681-1.581-11.517-14.978-2.653-19.24c8.914-4.284,18.129-5.072,27.559-2.339C287.274,429.227,280.236,438.04,265.269,435.595     z"/><path d="M381,1H71c-2.762,0-5,2.238-5,5v25H41c-2.762,0-5,2.238-5,5v470c0,2.762,2.238,5,5,5h310c2.762,0,5-2.238,5-5v-25h25     c2.762,0,5-2.238,5-5V6C386,3.238,383.762,1,381,1z M376,471H76V11h300V471z"/><path d="M471,101h-15V91c0-2.762-2.238-5-5-5h-5V71c0-2.762-2.238-5-5-5h-30c-2.762,0-5,2.238-5,5v15h-5c-2.762,0-5,2.238-5,5     v190c0,2.762,2.238,5,5,5c0,16.9,0,135.054,0,150c0,0.776,0.181,1.542,0.528,2.236l20,40c1.838,3.676,7.103,3.682,8.943,0l20-40     c0.348-0.694,0.528-1.46,0.528-2.236c0-14.848,0-132.967,0-150c2.762,0,5-2.238,5-5V111h10v85c0,2.762,2.238,5,5,5s5-2.238,5-5     v-90C476,103.238,473.762,101,471,101z M441,401h-30v-85h30V401z M446,276h-40v-65h40V276z M446,176h-40V96     c14.479,0,25.449,0,40,0V176z"/><path d="M301,56h55c2.762,0,5-2.238,5-5s-2.238-5-5-5h-55c-2.762,0-5,2.238-5,5S298.238,56,301,56z"/><path d="M241,81h115c2.762,0,5-2.238,5-5s-2.238-5-5-5H241c-2.762,0-5,2.238-5,5S238.238,81,241,81z"/><path d="M241,106h115c2.762,0,5-2.238,5-5s-2.238-5-5-5H241c-2.762,0-5,2.238-5,5S238.238,106,241,106z"/><path d="M96,181h260c2.762,0,5-2.238,5-5s-2.238-5-5-5H96c-2.762,0-5,2.238-5,5S93.238,181,96,181z"/><path d="M96,206h260c2.762,0,5-2.238,5-5s-2.238-5-5-5H96c-2.762,0-5,2.238-5,5S93.238,206,96,206z"/><path d="M96,231h260c2.762,0,5-2.238,5-5s-2.238-5-5-5H96c-2.762,0-5,2.238-5,5S93.238,231,96,231z"/><path d="M96,256h260c2.762,0,5-2.238,5-5s-2.238-5-5-5H96c-2.762,0-5,2.238-5,5S93.238,256,96,256z"/><path d="M96,281h260c2.762,0,5-2.238,5-5s-2.238-5-5-5H96c-2.762,0-5,2.238-5,5S93.238,281,96,281z"/><path d="M96,306h260c2.762,0,5-2.238,5-5s-2.238-5-5-5H96c-2.762,0-5,2.238-5,5S93.238,306,96,306z"/></g></g></g><g id="Layer_1"/>
              </svg>
            </div>
            <h3 class="text-xl font-display font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition duration-300">
              {{ getLocalizedContent(service, 'title') }}
            </h3>
            <p class="text-gray-600">
              {{ getLocalizedContent(service, 'description') }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="max-w-[1000px] mx-auto my-8">
      <ContactForm />
    </section>
    <Footer />
  </div>
</template>

<script setup>
import { languageState, getLocalizedContent } from '../stores/language.js'

const { data: homeApiResponse } = await useAsyncData('home-content', () => 
  $fetch('/api/home-content')
)

const { data: aboutApiResponse } = await useAsyncData('home-about-content', () => 
  $fetch('/api/about-content')
)

const homeContent = computed(() => {
  if (homeApiResponse.value?.success && homeApiResponse.value?.content) {
    return homeApiResponse.value.content
  }
  return null
})

const aboutContent = computed(() => {
  if (aboutApiResponse.value?.success && aboutApiResponse.value?.content) {
    return aboutApiResponse.value.content
  }
  return null
})

const defaultServices = [
  {
    title_en: "Creators Protection",
    title_he: "הגנה על יוצרים",
    description_en: "Comprehensive legal protection for content creators, artists, and intellectual property owners.",
    description_he: "הגנה משפטית מקיפה ליוצרי תוכן, אמנים ובעלי קניין רוחני.",
    link: "/creators-protection",
    icon: "creators"
  },
  {
    title_en: "Users Protection",
    title_he: "הגנה על משתמשים",
    description_en: "Legal guidance and protection for individuals navigating complex legal situations.",
    description_he: "הדרכה משפטית והגנה לאנשים פרטיים הניווטים במצבים משפטיים מורכבים.",
    link: "/users-protection",
    icon: "users"
  },
  {
    title_en: "Power of Attorney",
    title_he: "ייפוי כוח",
    description_en: "Expert assistance with power of attorney documents and estate planning needs.",
    description_he: "סיוע מומחה במסמכי ייפוי כוח וצרכי תכנון עיזבון.",
    link: "/power-of-attorney",
    icon: "attorney"
  }
]

useHead({
  title: `${getLocalizedContent(homeContent.value, 'title') || 'Revital Amir Law'} - Protecting Your Legal Interests`,
  meta: [
    { name: 'description', content: getLocalizedContent(homeContent.value, 'description') || 'Professional legal services for creators, users, and individuals. Expert attorney Revital Amir ready to protect your legal interests.' }
  ]
})
</script> 