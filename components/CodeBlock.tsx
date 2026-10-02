import React from 'react'
import { CopyButton } from './CopyButton'

interface CodeBlockProps {
  children?: React.ReactNode
  className?: string
  title?: string
}

export function CodeBlock({ children, className, title }: CodeBlockProps) {
  // Extract language from className (e.g. "language-bash")
  const match = /language-(\w+)/.exec(className || '')
  const language = match ? match[1] : ''

  // Extract raw string content for copying
  let rawText = ''
  if (typeof children === 'string') {
    rawText = children
  } else if (React.isValidElement(children)) {
    const props = children.props as { children?: React.ReactNode }
    if (typeof props.children === 'string') {
      rawText = props.children
    } else if (Array.isArray(props.children)) {
      rawText = props.children.map(c => (typeof c === 'string' ? c : '')).join('')
    }
  }

  // Fallback string extraction if nested
  if (!rawText && children) {
    rawText = String(children)
  }

  return (
    <div className="code-block-wrapper">
      <div className="code-header">
        <span className="code-language">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          {title || language || 'snippet'}
        </span>
        <CopyButton code={rawText.trim()} />
      </div>
      <pre className={className}>
        <code>{children}</code>
      </pre>
    </div>
  )
}
