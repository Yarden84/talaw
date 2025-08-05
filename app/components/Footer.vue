<template>
  <footer class="bg-gray-900 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="text-center">
        <p class="text-gray-300">
          Copyright © Revital Amir {{ currentYear }}
        </p>
        <p class="text-gray-400 mt-2">
          Designed and Developed by 
          <a 
            href="https://yarden-amir.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-teal-300 hover:text-teal-200 transition duration-300 font-medium"
          >
            T & Y
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script> 