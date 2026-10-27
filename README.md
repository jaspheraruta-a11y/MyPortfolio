# Jaspher Arota — Personal Developer Portfolio

A modern, responsive, client-focused developer portfolio built with React, TypeScript, Tailwind CSS, and Vite. Features a dark theme with ice-blue neon accents, glassmorphic cards, project modals, and real-world IoT and full-stack project showcases.

---

## 🚀 Quick Customization Guide

All personal information, project data, skills, services, and achievements are centralized in a single data file:
**`src/data/portfolioData.ts`**

You do **not** need to touch individual component files to update your content!

### 1. Update Personal & Social Links
Open `src/data/portfolioData.ts` and modify `personalInfo`:
```typescript
export const personalInfo: PersonalInfo = {
  name: 'Jaspher Arota',
  title: 'Web Developer | Full-Stack Developer | UI/UX Enthusiast',
  socials: {
    email: 'jaspheraruta@gmail.com',
    facebook: 'https://www.facebook.com/jaspher.aruta',
    github: 'https://github.com/jaspherarota',
    linkedin: 'https://linkedin.com/in/your-profile' // <-- update your LinkedIn
  }
};
```

### 2. Connect Your Actual CV / Resume PDF
1. Place your resume PDF in the `/public` folder and name it **`cv.pdf`** (`/public/cv.pdf`).
2. When visitors click **Download CV**, it will automatically download your file.
3. Visitors can also click **Print / Save as PDF** directly from the interactive CV modal.

### 3. Replace Profile Picture
- Place your new portrait in `/src/assets/images/` and update `personalInfo.avatarUrl` in `src/data/portfolioData.ts`.

### 4. Add or Update Projects
In `src/data/portfolioData.ts`, edit or append items in `projectsData`:
- Set `status` to `'Completed Prototype' | 'In Progress' | 'Concept' | 'Hardware Prototype'`.
- Provide real `githubUrl` or `liveUrl` links. Unavailable links are safely hidden.

---

## 🌐 Deploying to Vercel

### Step 1: Push to GitHub
1. Create a repository on GitHub (e.g., `jaspher-portfolio`).
2. Commit and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/jaspher-portfolio.git
   git push -u origin main
   ```

### Step 2: Connect to Vercel
1. Log in to [Vercel](https://vercel.com) with your GitHub account.
2. Click **Add New...** → **Project**.
3. Select your `jaspher-portfolio` repository.
4. Framework Preset will auto-detect as **Vite**.
5. Click **Deploy**. Vercel will build and launch your site with a free `.vercel.app` URL and free SSL certificate in under 60 seconds!

### Step 3: Custom Domain Setup (Optional)
1. In your Vercel project dashboard, navigate to **Settings** → **Domains**.
2. Type your custom domain (e.g., `jaspherarota.dev`).
3. Add the provided DNS CNAME or A records in your domain registrar (Namecheap, GoDaddy, Cloudflare, etc.).
