# Record & Replay a Go API with Keploy

> **Keploy DevRel Assignment Submission**  
> An interactive, editorial-grade developer tutorial demonstrating how Keploy intercepts network sockets to generate zero-code regression tests and mocks for a Go (Gin) + Redis microservice.

[![Next.js](https://img.shields.io/badge/Framework-Next.js%2015-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![MDX](https://img.shields.io/badge/Authoring-MDX-yellow?style=flat-square&logo=mdx)](https://mdxjs.com/)
[![Design System](https://img.shields.io/badge/Theme-Keploy%20Docs%20Design-FF914D?style=flat-square)](https://keploy.io/docs)

---

## 💡 Overview & DevRel Philosophy

Great developer documentation does not simply list terminal commands—it clarifies the **underlying mental model**, builds intuition, and eliminates developer friction before it occurs.

This submission was designed with three core DevRel principles:
1. **Explain the "Why" Before the "How"**: Demystifies Keploy's eBPF/transport-layer socket capture, explaining why code modification or heavy SDK instrumentation is unnecessary.
2. **First-Class Interactive Visuals**: Rather than static screenshots that age poorly, key architectural concepts are explained with purpose-built interactive components:
   - **System Topology Diagram**: Visualizes the client, Go Gin app, and Redis network boundaries.
   - **7-Stage Lifecycle Flow**: An interactive timeline tracing `cURL → eBPF Intercept → YAML Test Gen → Redis Mock Gen → Replay`.
   - **Annotated YAML Tree**: An interactive inspector that explains how `assertions.noise` isolates non-deterministic OTPs and timestamps to guarantee stable CI passes.
3. **Restrained, Editorial Aesthetics**: Faithful implementation of Keploy's official documentation design system (`#111215` background, `#ff914d` brand accents, `DM Sans` + `JetBrains Mono` typography, accessible dark/light modes).

---

## 🛠️ Tech Stack & Engineering Decisions

| Layer | Choice | Rationale |
| :--- | :--- | :--- |
| **Framework** | Next.js 15 (App Router) | High performance, static export support, SEO optimization |
| **Authoring** | MDX (`@next/mdx`) | Native markdown documentation with embedded React components |
| **Styling** | Native CSS Tokens (`globals.css`) | 0kb UI library bloat, precise styling matching Keploy docs |
| **Type Safety** | Strict TypeScript | Robust component interfaces and props validation |
| **Accessibility** | Semantic HTML + ARIA | Screen-reader accessible accordions, keyboard navigable controls |

---

## 🧭 Tutorial Syllabus & Concepts Covered

- **Prerequisites & Architecture**: Docker Network isolation (`ginRedisApp`) and container orchestration.
- **Step 1: Starting Redis**: Explaining why stateful cache instances create flaky test environments if unmocked.
- **Step 2: Building the Go Gin Application**: Compiling the HTTP API service.
- **Step 3: Recording Wire Traffic**: Running `keploy record` to intercept inbound HTTP and outbound Redis TCP socket frames.
- **Step 4: Triggering the OTP Verification Endpoint**: Exercising the auth controller with cURL.
- **Step 5: Inspecting Generated Tests & Mocks**:
  - `test-1.yml`: Request/response contract and automated noise filter rules.
  - `mocks.yml`: Binary Redis protocol frames captured for offline simulation.
- **Step 6: Replaying Without Real Redis**: Running `keploy test` to validate regression parity with zero database dependencies.

---

## 🚀 Running Locally

### Prerequisites
- Node.js `18.17+` or `20+`
- npm / pnpm / yarn

### Quickstart

```bash
# 1. Clone the repository
git clone https://github.com/devokdev/keploy-assignment.git
cd keploy-assignment

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build

Verify static compilation:

```bash
npm run build
```

---

## 📂 Project Structure

```text
keploy-assignment/
├── app/
│   ├── layout.tsx             # Root layout, theme scripts, Keploy breadcrumbs & SEO
│   └── page.mdx               # Full tutorial content authored directly in MDX
├── components/
│   ├── AnnotatedYaml.tsx      # Interactive YAML schema inspector with noise tags
│   ├── ArchitectureDiagram.tsx# Grid-aligned system topology (Client -> Gin -> Redis)
│   ├── Callout.tsx            # Educational callout boxes (Why, Info, Warning, Success)
│   ├── CodeBlock.tsx          # Syntax-highlighted code block container
│   ├── CopyButton.tsx         # Accessible clipboard copy button with feedback
│   ├── FlowDiagram.tsx        # 7-stage interactive record/replay lifecycle timeline
│   ├── GotchaAccordion.tsx    # Native accessible <details>/<summary> troubleshooting
│   ├── TableOfContents.tsx    # Sticky scroll-spy "On this page" navigation
│   ├── ThemeToggle.tsx        # Dark/Light theme switcher with localStorage persistence
│   └── TutorialProgress.tsx   # Quick-jump section navigation pills
├── styles/
│   └── globals.css            # Keploy docs design system tokens & typography
├── mdx-components.tsx         # Next.js MDX component bindings
├── next.config.mjs            # MDX bundler configuration
└── package.json               # Lightweight dependency manifest
```

---

## 👤 Candidate Information

- **Candidate**: Kartavya (devokdev)
- **Role**: Developer Relations Engineer Candidate
- **Repository**: [github.com/devokdev/keploy-assignment](https://github.com/devokdev/keploy-assignment)

