export const languageState = reactive({
  currentLanguage: 'en',
  isRTL: computed(() => languageState.currentLanguage === 'he')
})

export const initLanguage = () => {
  if (process.client) {
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage && ['en', 'he'].includes(savedLanguage)) {
      languageState.currentLanguage = savedLanguage
    }
    updateDirection()
  }
}

export const setLanguage = (lang) => {
  if (['en', 'he'].includes(lang)) {
    languageState.currentLanguage = lang
    if (process.client) {
      localStorage.setItem('language', lang)
      updateDirection()
    }
  }
}

export const updateDirection = () => {
  if (process.client) {
    document.documentElement.dir = languageState.isRTL ? 'rtl' : 'ltr'
    document.documentElement.lang = languageState.currentLanguage
  }
}

export const getLocalizedContent = (content, field) => {
  if (!content) return null
  const localizedField = `${field}_${languageState.currentLanguage}`
  return content[localizedField] || content[field] || null
} 