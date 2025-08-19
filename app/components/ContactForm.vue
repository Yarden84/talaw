<template>
  <div class="relative">
    <!-- Loader Overlay -->
    <div 
      v-if="isSubmitting" 
      class="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-10 rounded-lg"
    >
      <div class="text-center">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mb-4"></div>
        <p class="text-gray-700 font-medium">
          {{ languageState.currentLanguage === 'he' ? 'שולח הודעה...' : 'Sending message...' }}
        </p>
      </div>
    </div>

    <!-- Thank You Message -->
    <div 
      v-if="showThankYou" 
      class="bg-white rounded-lg shadow-xl p-8 text-center"
    >
      <div class="mb-6">
        <div class="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-2">
          {{ languageState.currentLanguage === 'he' ? 'תודה רבה!' : 'Thank You!' }}
        </h3>
        <p class="text-gray-600 mb-6">
          {{ languageState.currentLanguage === 'he' 
            ? 'הודעתכם נשלחה בהצלחה. נחזור אליכם בהקדם האפשרי.' 
            : 'Your message has been sent successfully. We will get back to you as soon as possible.' 
          }}
        </p>
        <button 
          @click="resetForm"
          class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
        >
          {{ languageState.currentLanguage === 'he' ? 'שלח הודעה נוספת' : 'Send Another Message' }}
        </button>
      </div>
    </div>

    <!-- Contact Form -->
    <form 
      v-if="!showThankYou"
      name="contact" 
      method="POST" 
      data-netlify="true" 
      netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit" 
      class="bg-white rounded-lg shadow-xl p-8"
    >
      <input type="hidden" name="form-name" value="contact" />
      
      <div style="display: none;">
        <label>Don't fill this out if you're human: <input name="bot-field" /></label>
      </div>

      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
            {{ languageState.currentLanguage === 'he' ? 'שם פרטי *' : 'First Name *' }}
          </label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName"
            v-model="form.firstName"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300"
            :placeholder="languageState.currentLanguage === 'he' ? 'הזינו את השם הפרטי שלכם' : 'Enter your first name'"
          />
        </div>
        <div>
          <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
            {{ languageState.currentLanguage === 'he' ? 'שם משפחה *' : 'Last Name *' }}
          </label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName"
            v-model="form.lastName"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300"
            :placeholder="languageState.currentLanguage === 'he' ? 'הזינו את שם המשפחה שלכם' : 'Enter your last name'"
          />
        </div>
      </div>
      
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
            {{ languageState.currentLanguage === 'he' ? 'כתובת אימייל *' : 'Email Address *' }}
          </label>
          <input 
            type="email" 
            id="email" 
            name="email"
            v-model="form.email"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300"
            :placeholder="languageState.currentLanguage === 'he' ? 'הזינו את כתובת האימייל שלכם' : 'Enter your email address'"
          />
        </div>
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
            {{ languageState.currentLanguage === 'he' ? 'מספר טלפון' : 'Phone Number' }}
          </label>
          <input 
            type="tel" 
            id="phone" 
            name="phone"
            v-model="form.phone"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300"
            :placeholder="languageState.currentLanguage === 'he' ? 'הזינו את מספר הטלפון שלכם' : 'Enter your phone number'"
          />
        </div>
      </div>
      
      <div class="mb-6">
        <label for="service" class="block text-sm font-medium text-gray-700 mb-2">
          {{ languageState.currentLanguage === 'he' ? 'שירות נדרש' : 'Service Needed' }}
        </label>
        <div class="relative">
          <select 
            id="service" 
            name="service"
            v-model="form.service"
            :class="[
              'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300 appearance-none bg-white',
              languageState.currentLanguage === 'he' ? 'pl-12 pr-4' : 'pl-4 pr-12'
            ]"
          >
            <option value="">{{ languageState.currentLanguage === 'he' ? 'בחרו שירות' : 'Select a service' }}</option>
            <option value="creators-protection">{{ languageState.currentLanguage === 'he' ? 'הגנה על יוצרים' : 'Creators Protection' }}</option>
            <option value="users-protection">{{ languageState.currentLanguage === 'he' ? 'הגנה על משתמשים' : 'Users Protection' }}</option>
            <option value="power-of-attorney">{{ languageState.currentLanguage === 'he' ? 'ייפוי כוח מתמשך' : 'Power of Attorney' }}</option>
            <option value="general-consultation">{{ languageState.currentLanguage === 'he' ? 'ייעוץ כללי' : 'General Consultation' }}</option>
          </select>
          <div :class="[
            'absolute inset-y-0 flex items-center pointer-events-none',
            languageState.currentLanguage === 'he' ? 'left-0 pl-3' : 'right-0 pr-3'
          ]">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
      
      <div class="mb-6">
        <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
          {{ languageState.currentLanguage === 'he' ? 'הודעה *' : 'Message *' }}
        </label>
        <textarea 
          id="message" 
          name="message"
          v-model="form.message"
          required
          rows="5"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300"
          :placeholder="languageState.currentLanguage === 'he' ? 'ספרו לנו על הצרכים המשפטיים שלכם...' : 'Tell us about your legal needs...'"
        ></textarea>
      </div>
      
      <div class="text-center">
        <button 
          type="submit" 
          :disabled="isSubmitting"
          class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ isSubmitting 
            ? (languageState.currentLanguage === 'he' ? 'שולח...' : 'Sending...') 
            : (languageState.currentLanguage === 'he' ? 'שלח הודעה' : 'Send Message') 
          }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { languageState } from '../stores/language.js'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const isSubmitting = ref(false)
const showThankYou = ref(false)

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const resetForm = () => {
  showThankYou.value = false
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  }
}

const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    await $fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...form.value
      })
    })
    
    showThankYou.value = true
  } catch (error) {
    console.error('Form submission error:', error)
    const errorMessage = languageState.currentLanguage === 'he'
      ? 'הייתה שגיאה בשליחת ההודעה. אנא נסו שוב.'
      : 'There was an error sending your message. Please try again.'
    alert(errorMessage)
  } finally {
    isSubmitting.value = false
  }
}
</script> 