<template>
  <div class="min-h-screen bg-gray-50">
    <section class="relative min-h-screen flex items-center">
      <div class="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900 to-transparent z-10"></div>
      <div class="absolute right-0 top-0 bottom-0 w-1/2 z-0">
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
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <NuxtLink to="/about" class="flex items-center space-x-4 pt-4">
                    <span class="text-teal-600 font-semibold">Read More</span>
                    <svg class="w-5 hs-5 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <h2 class="text-3xl font-display font-bold text-center text-gray-900 mb-12">Our Legal Services</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <NuxtLink 
            to="/creators-protection"
            class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 group"
          >
            <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-100 transition duration-300">
              <svg class="w-8 h-8 text-gray-600 group-hover:text-teal-600 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-display font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition duration-300">Creators Protection</h3>
            <p class="text-gray-600">Comprehensive legal protection for content creators, artists, and intellectual property owners.</p>
          </NuxtLink>
          
          <NuxtLink 
            to="/users-protection"
            class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 group"
          >
            <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-100 transition duration-300">
              <svg class="w-8 h-8 text-gray-600 group-hover:text-teal-600 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-display font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition duration-300">Users Protection</h3>
            <p class="text-gray-600">Legal guidance and protection for individuals navigating complex legal situations.</p>
          </NuxtLink>
          
          <NuxtLink 
            to="/power-of-attorney"
            class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 group"
          >
            <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-100 transition duration-300">
              <svg class="w-8 h-8 text-gray-600 group-hover:text-teal-600 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-display font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition duration-300">Power of Attorney</h3>
            <p class="text-gray-600">Expert assistance with power of attorney documents and estate planning needs.</p>
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
import { getLocalizedContent } from '../stores/language.js'

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

useHead({
  title: `${getLocalizedContent(homeContent.value, 'title') || 'Revital Amir Law'} - Protecting Your Legal Interests`,
  meta: [
    { name: 'description', content: getLocalizedContent(homeContent.value, 'description') || 'Professional legal services for creators, users, and individuals. Expert attorney Revital Amir ready to protect your legal interests.' }
  ]
})
</script> 