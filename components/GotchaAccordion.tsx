import React from 'react'

interface GotchaAccordionProps {
  title: string
  type?: 'warning' | 'info'
  children: React.ReactNode
  defaultOpen?: boolean
}

export function GotchaAccordion({
  title,
  type = 'warning',
  children,
  defaultOpen = false,
}: GotchaAccordionProps) {
  const icon = type === 'warning' ? '⚠️' : 'ℹ️'

  return (
    <details className={`gotcha-accordion ${type}`} open={defaultOpen}>
      <summary className="gotcha-summary">
        <span className="gotcha-title">
          <span className="gotcha-icon" aria-hidden="true">{icon}</span>
          <span>{title}</span>
        </span>
        <span className="gotcha-chevron" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </summary>
      <div className="gotcha-body">
        {children}
      </div>
    </details>
  )
}
