export default defineEventHandler(async (event) => {
  try {
    const fs = await import('fs')
    const path = await import('path')
    const matter = await import('gray-matter')
    
    const contentPath = path.resolve('./content/users-protection.md')
    const fileContent = fs.readFileSync(contentPath, 'utf-8')
    const { data } = matter.default(fileContent)
    
    return {
      success: true,
      content: data,
      message: 'Content loaded successfully'
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Failed to load content'
    }
  }
}) 