# Record and Replay a Go API with Keploy

A polished, single-page developer tutorial demonstrating how to convert live Go (Gin) + Redis traffic into deterministic, zero-code regression tests and mocks with Keploy.

Built for the **Keploy DevRel Candidate Assignment**.

---

## 🎯 What This Tutorial Teaches

This guide explains the complete record-to-replay testing lifecycle:
1. **Mental Model First**: Explains how Keploy captures network socket traffic at the transport boundary without modifying Go source code or inserting SDKs.
2. **Step-by-Step Execution**:
   - Starting the Redis dependency via Docker Compose
   - Building the Go Gin application container
   - Running `keploy record` to intercept wire calls
   - Exercising the OTP verification API via cURL
   - Inspecting generated test specs (`test-1.yml`) and dependency mocks (`mocks.yml`)
   - Understanding why dynamic values (random OTPs, dates) are isolated under `assertions.noise`
   - Replaying tests with `keploy test` without needing a live Redis database
3. **Interactive & Accessible UI**:
   - Interactive 7-phase Keploy lifecycle flow diagram
   - System topology diagram (cURL → Gin → Redis)
   - Annotated YAML inspector with tree schema breakdown highlighting dynamic noise fields
   - Subtle copy-to-clipboard buttons with immediate feedback
   - Zero-flash Light/Dark theme toggle persisting user preferences
   - Lightweight `IntersectionObserver` progress navigation

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Static Export)
- **Authoring**: [MDX](https://nextjs.org/docs/app/building-your-application/configuring/mdx) (`@next/mdx`)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Native CSS tokens (restrained editorial aesthetic, 760px reading column, zero bloated component libraries)

---

## 🚀 Running Locally

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

# Start local dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build

```bash
npm run build
```

Builds static artifacts into `.next/` / `out/`, verified for static hosting.

---

## ☁️ Deployment to Vercel

1. Push your repository to GitHub.
2. Connect your repository on [Vercel](https://vercel.com/).
3. Framework preset: **Next.js** (default settings).
4. Click **Deploy**.

---

## 📂 Project Structure

```text
├── app/
│   ├── layout.tsx             # Root HTML layout with SEO metadata & theme script
│   └── page.mdx               # Primary tutorial authored in MDX
├── components/
│   ├── AnnotatedYaml.tsx      # Side-by-side YAML inspector with noise annotations
│   ├── ArchitectureDiagram.tsx# System architecture component (Client -> Gin -> Redis)
│   ├── Callout.tsx            # Educational callout boxes (Why, Info, Success, Warning)
│   ├── CodeBlock.tsx          # Code block container with copy button
│   ├── CopyButton.tsx         # Accessible clipboard copy button with feedback
│   ├── FlowDiagram.tsx        # 7-stage Keploy execution flow timeline
│   ├── GotchaAccordion.tsx    # Native accessible <details>/<summary> accordion
│   ├── ThemeToggle.tsx        # Light/Dark mode toggle with localStorage persistence
│   └── TutorialProgress.tsx   # Lightweight scroll-position progress tracker
├── styles/
│   └── globals.css            # Restrained design system & typography tokens
├── mdx-components.tsx         # MDX component bindings
├── next.config.mjs            # Next.js MDX & static output export configuration
├── tsconfig.json              # Strict TypeScript config
└── package.json               # Minimal dependency footprint
```

---

## 📝 Editorial Notes

This tutorial is an original, pedagogical guide based on the official Keploy Go Gin + Redis quickstart. It focuses on the *why* behind every command, explaining eBPF socket capture, automated Redis mocking, and noise filtration for unpredictable data.
