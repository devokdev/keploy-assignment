# From API Request to Regression Test

A high-polish, single-page developer documentation and tutorial explaining how **Keploy** transforms real Go API traffic into repeatable, zero-code regression tests.

Built as the final submission for the **Keploy DevRel Candidate Assignment**.

---

## 🎯 What This Project Is

This repository contains an MDX-powered documentation experience titled **"From API Request to Regression Test"**. 

It is designed with a strict developer-first ethos:
- **Mental-Model First**: Emphasizes *why* Keploy records and replays traffic at the transport/process layer instead of requiring manual synthetic test authoring.
- **Zero Bloat & Native Web Standards**: Uses native HTML `<details>`/`<summary>` accordions, CSS custom properties, and `IntersectionObserver` navigation without heavy third-party UI libraries.
- **Interactive Stages**: Clickable mental-model stages that smoothly navigate to corresponding steps.
- **Lightweight Progress Navigation**: Clean sticky/header progress tracker reflecting active section position.
- **Accessible Interactions**: Functional copy buttons with feedback, theme toggle with zero hydration flash, and accessible ARIA attributes.
- **Fully Static**: Built using Next.js App Router with MDX support and static output export ready for immediate Vercel deployment.

---

## 🔗 Public Repository Configuration

In `app/layout.tsx`:
```typescript
// Insert your public assignment repository URL:
const GITHUB_REPO_URL = 'https://github.com/your-username/keploy-go-tutorial'
```
*(By default points to the official Keploy GitHub if not yet configured).*

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18.17+ or 20+
- npm / pnpm / yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/keploy-go-tutorial.git
cd keploy-go-tutorial

# Install dependencies
npm install
```

### Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build

To test the production build locally:

```bash
npm run build
```

This compiles the Next.js app and generates static HTML/CSS/JS artifacts in `.next/` / `out/`.

---

## ☁️ Deployment to Vercel

1. Push this repository to a public GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import your repository.
3. Keep default settings (Framework: Next.js).
4. Click **Deploy**.

---

## 🏗️ Architecture & Clean Structure

```text
├── app/
│   ├── layout.tsx             # Root layout with SEO, OpenGraph metadata, Theme context
│   └── page.mdx               # The hero tutorial content written in pure MDX
├── components/
│   ├── Callout.tsx            # Educational callout boxes (Why, Info, Success, Gotchas)
│   ├── CodeBlock.tsx          # Syntax block wrapper with copy feedback
│   ├── CopyButton.tsx         # Clipboard copy button with accessible state and fallbacks
│   ├── FlowDiagram.tsx        # Interactive mental model diagram & compact step banners
│   ├── GotchaAccordion.tsx    # Native accessible details/summary accordion
│   ├── ThemeToggle.tsx        # Dark / Light theme toggle with zero hydration flash
│   └── TutorialProgress.tsx   # Lightweight IntersectionObserver tutorial progress bar
├── styles/
│   └── globals.css            # Clean CSS design system, typography tokens, and responsive layout
├── mdx-components.tsx         # Next.js MDX integration mapping
├── next.config.mjs            # Next.js MDX configuration & static export
├── tsconfig.json              # Strict TypeScript configuration
└── package.json               # Minimal, justified dependencies
```

---

## 💡 Key Design & DevRel Decisions

1. **"Teach Once, Reinforce Lightly"**: Full 5-card diagram presented at the hero for high conceptual clarity, followed by compact step badges (`STEP 0X / 05`) on subsequent steps to prevent repetitive visual clutter.
2. **Pedagogical Mental Model**: Each section explains what command is being executed, why it is executed, what happens behind the scenes, and what the expected output is.
3. **Accessibility**: Full semantic HTML tags, keyboard navigation support, and ARIA labels.
