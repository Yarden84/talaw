<template>
  <div class="min-h-screen bg-gray-50">
    <PageHeader 
      title="Articles"
      description="Legal insights, updates, and educational content from our experienced legal team."
    />

    <section class="py-16 bg-white min-h-screen">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-display font-bold text-center text-gray-900 mb-12">Coming Soon</h2>
          <p class="text-lg text-gray-600 text-center">
            Legal articles and insights will be available soon. Check back for valuable legal information and updates.
          </p>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
useHead({
  title: 'Articles - Revital Amir Law',
  meta: [
    { name: 'description', content: 'Legal insights, updates, and educational content from our experienced legal team. Stay informed with Revital Amir Law.' }
  ]
})
</script> 