# From API Request to Regression Test

A high-polish, single-page developer documentation and tutorial explaining how **Keploy** transforms real Go API traffic into repeatable, zero-code regression tests.

Built as the final submission for the **Keploy DevRel Candidate Assignment**.

---

## 🎯 What This Project Is

This repository contains an MDX-powered documentation experience titled **"From API Request to Regression Test"**. 

It is designed with a strict developer-first ethos:
- **Mental-model first**: Emphasizes *why* Keploy records and replays traffic at the network/transport layer instead of requiring manual test authoring.
- **Zero bloat**: No unnecessary dependencies, complex state management, or unneeded frameworks.
- **Standout component**: Includes an interactive `<FlowDiagram />` visual tracker and accessible `<CopyButton />` with fallback clipboard support.
- **Fully static**: Built using Next.js App Router with MDX support and static output export ready for immediate Vercel deployment.

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

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import your repository.
3. Keep default settings (Framework: Next.js).
4. Click **Deploy**.

---

## 🏗️ Architecture & Clean Structure

```text
├── app/
│   ├── layout.tsx         # Root layout with SEO, OpenGraph metadata, Theme context
│   └── page.mdx           # The hero tutorial content written in pure MDX
├── components/
│   ├── Callout.tsx        # Educational callout boxes (Why, Info, Success, Gotchas)
│   ├── CodeBlock.tsx      # Syntax block wrapper with copy feedback
│   ├── CopyButton.tsx     # Clipboard copy button with accessible state and fallbacks
│   ├── FlowDiagram.tsx    # Standout visual tracker (Request -> API -> Observe -> Test -> Replay)
│   └── ThemeToggle.tsx    # Dark / Light theme toggle with zero hydration flash
├── styles/
│   └── globals.css        # Clean CSS design system, typography tokens, and responsive layout
├── mdx-components.tsx     # Next.js MDX integration mapping
├── next.config.mjs        # Next.js MDX configuration & static export
├── tsconfig.json          # Strict TypeScript configuration
└── package.json           # Minimal, justified dependencies
```

---

## 💡 Key Design & DevRel Decisions

1. **Content is the Hero**: Rather than overwhelming the reader with marketing fluff or excessive animations, typography, spacing rhythm, and contrast are tuned for high reading comfort and technical retention.
2. **Pedagogical Mental Model**: Each section explains what command is being executed, why it is executed, what happens behind the scenes, and what the expected output is.
3. **Accessibility**: Full semantic HTML tags, keyboard navigation support, and ARIA labels.
