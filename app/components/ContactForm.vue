<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-display font-bold text-center text-gray-900 mb-4">Get In Touch</h2>
        <p class="text-lg text-gray-600 text-center mb-12">Ready to discuss your legal needs? Contact us today for a consultation.</p>
        
        <form @submit.prevent="handleSubmit" class="bg-white rounded-lg shadow-lg p-8">
          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
              <input 
                type="text" 
                id="firstName" 
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

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Here you would typically send the form data to your backend
  console.log('Form submitted:', form.value)
  
  // Reset form
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  }
  
  isSubmitting.value = false
  
  // Show success message (you can implement this as needed)
  alert('Thank you for your message. We will get back to you soon!')
}
</script> 