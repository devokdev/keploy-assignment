import type { Metadata } from 'next'
import '@/styles/globals.css'
import { ThemeToggle } from '@/components/ThemeToggle'

// =============================================================================
// SUBMISSION CONFIGURATION:
// Insert your public GitHub repository URL here if already pushed.
// =============================================================================
const GITHUB_REPO_URL = 'https://github.com/keploy/keploy' // TODO: Replace with your assignment repo URL (e.g. https://github.com/your-username/keploy-go-tutorial)

export const metadata: Metadata = {
  title: 'From API Request to Regression Test | Keploy Go Tutorial',
  description:
    'Learn how Keploy turns real API interactions into repeatable regression tests with a practical Go quickstart.',
  keywords: ['Keploy', 'Golang', 'API Testing', 'Regression Testing', 'eBPF', 'Test Generation', 'DevRel'],
  authors: [{ name: 'Keploy DevRel Candidate' }],
  openGraph: {
    title: 'From API Request to Regression Test | Keploy Go Tutorial',
    description:
      'Learn how Keploy turns real API interactions into repeatable regression tests with a practical Go quickstart.',
    type: 'article',
    siteName: 'Keploy Technical Documentation',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('keploy-doc-theme');
                if (storedTheme === 'light' || storedTheme === 'dark') {
                  document.documentElement.setAttribute('data-theme', storedTheme);
                } else {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>
        <header className="site-header">
          <div className="doc-container site-header-inner">
            <div className="logo-group">
              <a href="#" className="logo-badge" aria-label="From API Request to Regression Test Home">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#ff6b35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="#ff6b35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="#ff6b35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>keploy</span>
              </a>
              <span className="logo-tag">Go Quickstart</span>
            </div>

            <div className="header-actions">
              <a
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="header-link"
                aria-label="GitHub Repository (opens in new tab)"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>GitHub</span>
              </a>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="doc-container prose-article">
          {children}
        </main>

        <footer className="site-footer">
          <div className="doc-container site-footer-inner">
            <div>
              Built for the <strong>Keploy DevRel Candidate Assignment</strong>
            </div>
            <div>
              Tutorial based on official Keploy Go Quickstart (Gin + Sample Endpoints)
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
