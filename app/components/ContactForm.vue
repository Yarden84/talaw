<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-display font-bold text-center text-gray-900 mb-4">Get In Touch</h2>
        <p class="text-lg text-gray-600 text-center mb-12">Ready to discuss your legal needs? Contact us today for a consultation.</p>
        
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true" 
          netlify-honeypot="bot-field"
          @submit.prevent="handleSubmit" 
          class="bg-white rounded-lg shadow-lg p-8"
        >
          <input type="hidden" name="form-name" value="contact" />
          
          <div style="display: none;">
            <label>Don't fill this out if you're human: <input name="bot-field" /></label>
          </div>

          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
              <input 
                type="text" 
                id="firstName" 
                name="firstName"
                v-model="form.firstName"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
              <input 
                type="text" 
                id="lastName" 
                name="lastName"
                v-model="form.lastName"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                v-model="form.email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone"
                v-model="form.phone"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          
          <div class="mb-6">
            <label for="service" class="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
            <select 
              id="service" 
              name="service"
              v-model="form.service"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300"
            >
              <option value="">Select a service</option>
              <option value="creators-protection">Creators Protection</option>
              <option value="users-protection">Users Protection</option>
              <option value="power-of-attorney">Power of Attorney</option>
              <option value="general-consultation">General Consultation</option>
            </select>
          </div>
          
          <div class="mb-6">
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
            <textarea 
              id="message" 
              name="message"
              v-model="form.message"
              required
              rows="5"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300"
              placeholder="Tell us about your legal needs..."
            ></textarea>
          </div>
          
          <div class="text-center">
            <button 
              type="submit" 
              :disabled="isSubmitting"
              class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const isSubmitting = ref(false)

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
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
    
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
    
    alert('Thank you for your message. We will get back to you soon!')
  } catch (error) {
    console.error('Form submission error:', error)
    alert('There was an error sending your message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script> 