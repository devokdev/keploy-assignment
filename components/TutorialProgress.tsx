'use client'

import React, { useEffect, useState } from 'react'

interface NavStep {
  id: string
  label: string
  num: string
}

const NAV_STEPS: NavStep[] = [
  { id: 'step-1-setup', label: 'Setup', num: '01' },
  { id: 'step-2-record', label: 'Record', num: '02' },
  { id: 'step-3-traffic', label: 'Capture', num: '03' },
  { id: 'step-4-replay', label: 'Replay', num: '04' },
  { id: 'step-5-regression', label: 'Break It', num: '05' },
]

export function TutorialProgress() {
  const [activeId, setActiveId] = useState<string>('step-1-setup')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    )

    NAV_STEPS.forEach((step) => {
      const el = document.getElementById(step.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="tutorial-progress-bar" aria-label="Tutorial Progress Navigation">
      <div className="tutorial-progress-label">TUTORIAL STEPS</div>
      <div className="tutorial-progress-items">
        {NAV_STEPS.map((step) => {
          const isActive = activeId === step.id
          return (
            <a
              key={step.id}
              href={`#${step.id}`}
              className={`progress-item ${isActive ? 'active' : ''}`}
              aria-current={isActive ? 'true' : undefined}
            >
              <span className="progress-num">{step.num}</span>
              <span className="progress-text">{step.label}</span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
