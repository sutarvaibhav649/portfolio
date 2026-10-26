# Vaibhav — Developer Portfolio

A responsive, dark terminal-inspired developer portfolio built with React, Vite, Tailwind CSS, and Lucide icons.

## Requirements

- Node.js 20.19+ or 22.12+ recommended for Vite 6
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Before publishing

1. Edit `src/data/portfolio.js`.
2. Add your professional email, GitHub profile, LinkedIn profile, and resume URL.
3. Replace the placeholder domain in `index.html` with your actual canonical URL.
4. Add only real repository/demo URLs to each project.
5. Verify all project descriptions, statuses, and technology lists match what you personally built.
6. Add your resume PDF under `public/` if you prefer a local resume link, for example `/vaibhav-resume.pdf`.
7. Test the website at mobile, tablet, and desktop widths.

## Build and test the production bundle

```bash
npm run lint
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Deploy to Vercel

### Option A: GitHub integration

1. Create a new GitHub repository and push this project.
2. In Vercel, select **Add New → Project** and import the repository.
3. Keep the detected Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
4. Deploy.
5. Add your custom domain in Vercel if you own one, then update `og:url` and the canonical URL metadata.

### Option B: Vercel CLI

```bash
npm install
npm run build
npx vercel
```

Follow the CLI prompts and deploy to production when ready.

## Project structure

```text
vaibhav-portfolio/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ProjectCard.jsx
│   │   └── SectionHeading.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Implementation notes

- Project links are omitted unless you provide real URLs; no fake demos or repository links are included.
- Contact links are enabled only when configured in `src/data/portfolio.js`.
- Semantic landmarks, skip navigation, keyboard focus indicators, mobile navigation state, descriptive link labels, and reduced-motion support are included.
- No backend is required for a portfolio. Use a backend only if you later need features such as a validated contact API, content management, or dynamic project data.
- Review skill claims and project descriptions for accuracy before publishing.
