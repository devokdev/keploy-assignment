import React from 'react'

interface CalloutProps {
  type?: 'why' | 'info' | 'success' | 'warning'
  title?: string
  children: React.ReactNode
}

export function Callout({ type = 'why', title, children }: CalloutProps) {
  const getIcon = () => {
    switch (type) {
      case 'why':
        return '💡'
      case 'info':
        return 'ℹ️'
      case 'success':
        return '✅'
      case 'warning':
        return '⚠️'
      default:
        return '💡'
    }
  }

  const getDefaultTitle = () => {
    switch (type) {
      case 'why':
        return 'Why this matters'
      case 'info':
        return 'Note'
      case 'success':
        return 'Expected result'
      case 'warning':
        return 'Gotcha / Watch out'
      default:
        return 'Insight'
    }
  }

  return (
    <aside className={`callout ${type}`} role="note">
      <div className="callout-icon" aria-hidden="true">
        {getIcon()}
      </div>
      <div className="callout-content">
        <strong>{title || getDefaultTitle()}</strong>
        <div style={{ marginTop: '0.25rem' }}>{children}</div>
      </div>
    </aside>
  )
}
