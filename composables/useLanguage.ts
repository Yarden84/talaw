import { ref, computed, readonly } from 'vue'

export const useLanguage = () => {
  const currentLanguage = ref('en')
  const isRTL = computed(() => currentLanguage.value === 'he')

  const initLanguage = () => {
    if (process.client) {
      const savedLanguage = localStorage.getItem('language')
      if (savedLanguage && ['en', 'he'].includes(savedLanguage)) {
        currentLanguage.value = savedLanguage
      }
      updateDirection()
    }
  }

  const setLanguage = (lang: string) => {
    if (['en', 'he'].includes(lang)) {
      currentLanguage.value = lang
      if (process.client) {
        localStorage.setItem('language', lang)
        updateDirection()
      }
    }
  }

  const updateDirection = () => {
    if (process.client) {
      document.documentElement.dir = isRTL.value ? 'rtl' : 'ltr'
      document.documentElement.lang = currentLanguage.value
    }
  }

  const getLocalizedContent = (content: any, field: string) => {
    if (!content) return null
    const localizedField = `${field}_${currentLanguage.value}`
    return content[localizedField] || content[field] || null
  }

  return {
    currentLanguage: readonly(currentLanguage),
    isRTL: readonly(isRTL),
    initLanguage,
    setLanguage,
    getLocalizedContent
  }
} 