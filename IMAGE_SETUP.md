# 📸 Lawyer Image Setup

## How to Add Your Lawyer Portrait

### 1. **Find the Public Folder**
Navigate to: `art-law/public/` in your project directory

### 2. **Upload Your Image**
- Copy your lawyer portrait image to the `public` folder
- **Recommended filename:** `lawyer-portrait.jpg`
- **Supported formats:** JPG, JPEG, PNG, WebP

### 3. **Image Requirements**
- **Minimum size:** 400x500 pixels
- **Recommended size:** 800x1000 pixels or larger
- **Format:** JPG is preferred for web optimization

### 4. **Alternative Filenames**
If you want to use a different name, update the image path in:
`app/pages/index.vue` (line 33)

Change this line:
```html
src="/lawyer-portrait.jpg"
```

To match your filename, for example:
```html
src="/your-image-name.jpg"
```

### 5. **Test Your Image**
After uploading, refresh your browser at `http://localhost:3000` to see the image in the header section.

---

**Note:** The image will appear in the header section with a clean, professional design. 