'use client'

import React, { useEffect, useState } from 'react'

interface NavStep {
  id: string
  label: string
  num: string
}

const NAV_STEPS: NavStep[] = [
  { id: 'step-1-sample-app', label: 'Sample App', num: '01' },
  { id: 'step-2-start-redis', label: 'Start Redis', num: '02' },
  { id: 'step-3-build-app', label: 'Build App', num: '03' },
  { id: 'step-4-start-recording', label: 'Record', num: '04' },
  { id: 'step-5-exercise-api', label: 'Exercise API', num: '05' },
  { id: 'step-6-inspect-artifacts', label: 'Inspect YAML', num: '06' },
  { id: 'step-7-replay-test', label: 'Replay Tests', num: '07' },
  { id: 'step-8-mental-model', label: 'Mental Model', num: '08' },
]

export function TutorialProgress() {
  const [activeId, setActiveId] = useState<string>('step-1-sample-app')

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
    <nav className="tutorial-progress-bar" aria-label="Tutorial Progress Quick Navigation">
      <div className="tutorial-progress-label">QUICK NAVIGATION</div>
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
