export const usePageContent = async (slug) => {
  try {
    const { data } = await useAsyncData(`content-${slug}`, () => 
      queryContent(`/${slug}`).findOne()
    )
    return { data: data.value, error: null }
  } catch (error) {
    console.warn(`Content not found for ${slug}, using fallback`)
    return { data: null, error }
  }
} 