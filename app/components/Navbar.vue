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
      <div class="flex justify-between items-center py-4">
        <div class="flex items-center">
          <NuxtLink 
            to="/" 
            :class="[
              'text-2xl font-display font-bold transition duration-300',
              isScrolled 
                ? 'text-gray-900 hover:text-teal-600' 
                : 'text-white hover:text-teal-300'
            ]"
          >
            <img 
              v-if="isScrolled"
              src="/art-logo.svg" 
              alt="Revital Amir Law Logo" 
              class="w-[150px] h-auto"
            />
            <img 
              v-else
              src="/art-logo-white.svg" 
              alt="Revital Amir Law Logo" 
              class="w-[150px] h-auto"
            />
          </NuxtLink>
        </div>

        <div class="hidden md:flex items-center space-x-8">
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
            {{ link.name }}
          </NuxtLink>
        </div>

        <div class="hidden md:block">
          <button 
            :class="[
              'font-bold py-2 px-6 rounded-lg transition duration-300',
              isScrolled 
                ? 'bg-white border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white' 
                : 'bg-transparent border border-white text-white hover:bg-white hover:text-gray-900'
            ]"
          >
            Free Consultation
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
        <div class="flex flex-col space-y-4">
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
            {{ link.name }}
          </NuxtLink>
          <button 
            :class="[
              'font-bold py-2 px-6 rounded-lg transition duration-300 w-full',
              isScrolled 
                ? 'bg-white border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white' 
                : 'bg-transparent border border-white text-white hover:bg-white hover:text-gray-900'
            ]"
          >
            Free Consultation
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Creators Protection', path: '/creators-protection' },
  { name: 'Users Protection', path: '/users-protection' },
  { name: 'Power of Attorney', path: '/power-of-attorney' },
  { name: 'Articles', path: '/articles' },
  { name: 'Contact', path: '/contact' }
]

const currentPath = ref('/')

onMounted(() => {
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