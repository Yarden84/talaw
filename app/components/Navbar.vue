<template>
  <nav 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-transparent'
    ]"
  >
    <div class="container mx-auto px-4">
      <div :class="['flex justify-between items-center py-4', 
        languageState.currentLanguage === 'he' ? 'flex-row-reverse' : 'flex-row'
      ]">
        <div :class="['flex items-center', languageState.currentLanguage === 'he' ? 'flex-row-reverse' : 'flex-row']">
          <NuxtLink 
            to="/" 
            :class="[
              'text-2xl font-bold transition duration-300',
              languageState.currentLanguage === 'he' ? 'font-display-he' : 'font-display',
              isScrolled ? 'text-gray-900' : 'text-white'
            ]"
          >
            <img 
              v-if="isScrolled && !logoError"
              src="/art-logo.svg" 
              alt="Revital Amir Law Logo" 
              class="w-[150px] h-auto"
              @error="logoError = true"
            />
            <img 
              v-else-if="!isScrolled && !logoError"
              src="/art-logo-white.svg" 
              alt="Revital Amir Law Logo" 
              class="w-[150px] h-auto"
              @error="logoError = true"
            />
            <span v-else>Revital Amir Law</span>
          </NuxtLink>
        </div>

        <div :class="['hidden md:flex items-center', languageState.currentLanguage === 'he' ? 'space-x-reverse space-x-8' : 'space-x-8']">
          <NuxtLink 
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path" 
            :class="[
              'font-medium transition duration-300',
              isScrolled 
                ? 'text-gray-700 hover:text-teal-600' 
                : 'text-white hover:text-teal-300',
              currentPath === link.path && isScrolled ? 'text-teal-600 border-b-2 border-teal-600' : '',
              currentPath === link.path && !isScrolled ? 'text-teal-300 border-b-2 border-teal-300' : ''
            ]"
          >
            {{ languageState.currentLanguage === 'he' ? link.name_he : link.name_en }}
          </NuxtLink>
        </div>

        <div :class="['hidden md:flex items-center space-x-4', languageState.currentLanguage === 'he' ? 'flex-row-reverse' : 'flex-row']">
          <div :class="['flex items-center space-x-2 border rounded-lg p-1', languageState.currentLanguage === 'he' ? 'flex-row-reverse' : 'flex-row', isScrolled ? 'border-gray-300' : 'border-white/30']">
            <button
              @click="setLanguage('en')"
              :class="[
                'px-3 py-1 rounded text-sm font-medium transition duration-300',
                languageState.currentLanguage === 'en' 
                  ? 'bg-teal-600 text-white' 
                  : isScrolled 
                    ? 'text-gray-600 hover:text-teal-600' 
                    : 'text-white hover:text-teal-300'
              ]"
            >
              EN
            </button>
            <button
              @click="setLanguage('he')"
              :class="[
                'px-3 py-1 rounded text-sm font-medium transition duration-300',
                languageState.currentLanguage === 'he' 
                  ? 'bg-teal-600 text-white' 
                  : isScrolled 
                    ? 'text-gray-600 hover:text-teal-600' 
                    : 'text-white hover:text-teal-300'
              ]"
            >
              עב
            </button>
          </div>
          
          <button 
            :class="[
              'font-bold py-2 px-6 rounded-lg transition duration-300',
              isScrolled 
                ? 'bg-white border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white' 
                : 'bg-transparent border border-white text-white hover:bg-white hover:text-gray-900'
            ]"
          >
            {{ languageState.currentLanguage === 'he' ? 'ייעוץ חינם' : 'Free Consultation' }}
          </button>
        </div>

        <div class="md:hidden">
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            :class="[
              'focus:outline-none transition duration-300',
              isScrolled 
                ? 'text-gray-700 hover:text-teal-600' 
                : 'text-white hover:text-teal-300'
            ]"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      <div 
        v-if="isMobileMenuOpen" 
        :class="[
          'md:hidden border-t py-4 transition-colors duration-300',
          isScrolled 
            ? 'border-gray-200 bg-white' 
            : 'border-white/20 bg-gray-900/90'
        ]"
      >
        <div :class="['flex flex-col space-y-4', languageState.currentLanguage === 'he' ? 'flex-row-reverse' : 'flex-row']">
          <NuxtLink 
            v-for="link in navLinks"
            :key="`mobile-${link.path}`"
            :to="link.path" 
            @click="isMobileMenuOpen = false"
            :class="[
              'font-medium transition duration-300',
              isScrolled 
                ? 'text-gray-700 hover:text-teal-600' 
                : 'text-white hover:text-teal-300',
              currentPath === link.path && isScrolled ? 'text-teal-600' : '',
              currentPath === link.path && !isScrolled ? 'text-teal-300' : ''
            ]"
          >
            {{ languageState.currentLanguage === 'he' ? link.name_he : link.name_en }}
          </NuxtLink>
          
          <div :class="['flex items-center justify-center space-x-2 border rounded-lg p-1 mx-4', languageState.currentLanguage === 'he' ? 'flex-row-reverse' : 'flex-row', isScrolled ? 'border-gray-300' : 'border-white/30']">
            <button
              @click="setLanguage('en')"
              :class="[
                'px-3 py-1 rounded text-sm font-medium transition duration-300',
                languageState.currentLanguage === 'en' 
                  ? 'bg-teal-600 text-white' 
                  : isScrolled 
                    ? 'text-gray-600 hover:text-teal-600' 
                    : 'text-white hover:text-teal-300'
              ]"
            >
              EN
            </button>
            <button
              @click="setLanguage('he')"
              :class="[
                'px-3 py-1 rounded text-sm font-medium transition duration-300',
                languageState.currentLanguage === 'he' 
                  ? 'bg-teal-600 text-white' 
                  : isScrolled 
                    ? 'text-gray-600 hover:text-teal-600' 
                    : 'text-white hover:text-teal-300'
              ]"
            >
              עב
            </button>
          </div>
          
          <button 
            :class="[
              'font-bold py-2 px-6 rounded-lg transition duration-300 w-full',
              isScrolled 
                ? 'bg-white border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white' 
                : 'bg-transparent border border-white text-white hover:bg-white hover:text-gray-900'
            ]"
          >
            {{ languageState.currentLanguage === 'he' ? 'ייעוץ חינם' : 'Free Consultation' }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { languageState, setLanguage, initLanguage } from '../../stores/language.js'

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
const logoError = ref(false)

const navLinks = [
  { name_en: 'Home', name_he: 'בית', path: '/' },
  { name_en: 'About', name_he: 'אודות', path: '/about' },
  { name_en: 'Creators Protection', name_he: 'הגנה על יוצרים', path: '/creators-protection' },
  { name_en: 'Users Protection', name_he: 'הגנה על משתמשים', path: '/users-protection' },
  { name_en: 'Power of Attorney', name_he: 'ייפוי כוח', path: '/power-of-attorney' },
  { name_en: 'Articles', name_he: 'מאמרים', path: '/articles' },
  { name_en: 'Contact', name_he: 'צור קשר', path: '/contact' }
]

const currentPath = ref('/')

onMounted(() => {
  initLanguage()
  
  const route = useRoute()
  currentPath.value = route.path
  
  watch(() => route.path, (newPath) => {
    currentPath.value = newPath
  })
  
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 10
  }
  
  window.addEventListener('scroll', handleScroll)
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script> 