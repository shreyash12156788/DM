# AI & Data Science Digital Hub

A clean, modern, and academic single-page website for the **Artificial Intelligence & Data Science** engineering department. 

Designed specifically for engineering institutions, educators, students, and research groups.

---

## 🌟 Features

- **Academic Engineering Design**: Restrained, professional visual language using clean slate, deep blue, cyan, and structured card layouts.
- **Single Page Architecture**: Smooth navigation scroll anchors to 9 core sections (Home, About, Academics, Technology, Careers, Projects, Research, Resources, Contact).
- **Search Console & SEO Ready**: Includes Open Graph, Twitter Cards, semantic HTML structure, exact single H1 hierarchy, `robots.txt`, and `sitemap.xml`.
- **Google Verification Placeholder**: Dedicated commented tag in `<head>` ready for quick Search Console activation.
- **Light / Dark Mode**: Built-in toggle with persistence in `localStorage` and OS preference auto-detection.
- **Interactive Search Engine**: Built-in modal (Ctrl+K / Cmd+K) to filter technologies, career roles, example projects, and learning resources.
- **Mobile Responsive**: Fully fluid layout with custom mobile hamburger menu.
- **Zero Heavy Dependencies**: Built with pure HTML5, CSS3, and modern Vanilla JavaScript for maximum loading speed and security.

---

## 📁 File Structure

```text
├── index.html        # Main single-page HTML template with SEO metadata & semantic sections
├── style.css         # Custom CSS stylesheet with variables & dark mode styles
├── script.js         # Interactive JS (Dark mode, Search modal, Active nav observer, Mobile menu)
├── robots.txt        # Search engine crawler instructions
├── sitemap.xml       # XML Sitemap referencing website root
└── README.md         # Documentation & deployment guide
```

---

## 🔍 Google Search Console Verification Guide

To index and monitor your website in Google Search Console:

1. **Open Google Search Console**: Go to [https://search.google.com/search-console](https://search.google.com/search-console) and sign in with your Google account.
2. **Add Property**: Click **Add Property** and select **URL-prefix property**. Enter your final live public domain URL (e.g., `https://yourdomain.com`).
3. **Choose HTML Tag Verification**: Under the verification methods list, select **HTML tag**.
4. **Copy Verification Meta Tag**: Copy Google's generated meta tag snippet:
   ```html
   <meta name="google-site-verification" content="YOUR_UNIQUE_GOOGLE_VERIFICATION_CODE" />
   ```
5. **Paste into `index.html`**: Open `index.html` and locate the placeholder inside the `<head>` section:
   ```html
   <!-- Google Search Console verification tag goes here -->
   <!--
   <meta name="google-site-verification" content="PASTE_REAL_GOOGLE_CODE_HERE">
   -->
   ```
   Uncomment and replace `PASTE_REAL_GOOGLE_CODE_HERE` with your actual token.
6. **Deploy the Updated Website**: Push your changes to your hosting provider (Vercel, Netlify, GitHub Pages).
7. **Click Verify**: Return to Google Search Console and click the **Verify** button.
8. **Submit Sitemap**: Once verified, navigate to **Sitemaps** in the Search Console left sidebar and submit your sitemap path:
   ```text
   sitemap.xml
   ```

> **Note**: Update `https://YOUR-DOMAIN.com/` in `index.html`, `robots.txt`, and `sitemap.xml` with your actual live public production URL before submitting to Search Console.

---

## 🚀 Deployment Instructions

### Option 1: Vercel
1. Install Vercel CLI: `npm i -g vercel` or link your GitHub repository on [Vercel Dashboard](https://vercel.com).
2. Deploy directly by running `vercel` in the project root directory.

### Option 2: Netlify
1. Drag and drop the project folder into [Netlify Drop](https://app.netlify.com/drop).
2. Or connect your GitHub repository and set the publish directory to `./`.

### Option 3: GitHub Pages
1. Push all files (`index.html`, `style.css`, `script.js`, `robots.txt`, `sitemap.xml`, `README.md`) to a GitHub repository.
2. Go to **Repository Settings** -> **Pages**.
3. Set the source branch to `main` (or `master`) and directory to `/ (root)`.
4. Click **Save**. Your site will be published at `https://username.github.io/repository-name/`.

---

## 🛡️ License & Copyright

© 2026 AI & Data Science Digital Hub. Open for academic reference and institutional customization.
