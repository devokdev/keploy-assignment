'use client'

import React, { useEffect, useState } from 'react'

interface TocItem {
  id: string
  title: string
}

const TOC_ITEMS: TocItem[] = [
  { id: 'what-we-are-building', title: 'What We Are Building' },
  { id: 'prerequisites', title: 'Prerequisites' },
  { id: 'step-1-sample-app', title: '1. Get Sample App' },
  { id: 'step-2-start-redis', title: '2. Start Redis' },
  { id: 'step-3-build-app', title: '3. Build App Container' },
  { id: 'step-4-start-recording', title: '4. Start Recording' },
  { id: 'step-5-exercise-api', title: '5. Exercise the API' },
  { id: 'step-6-inspect-artifacts', title: '6. Inspect YAML Mocks' },
  { id: 'step-7-replay-test', title: '7. Replay with Keploy Test' },
  { id: 'step-8-mental-model', title: '8. The Core Mental Model' },
  { id: 'troubleshooting', title: 'Troubleshooting & Mistakes' },
  { id: 'what-to-explore-next', title: 'What to Explore Next' },
]

export function TableOfContents() {
  const [activeId, setActiveId] = useState<string>('')

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
        rootMargin: '-10% 0px -70% 0px',
        threshold: 0,
      }
    )

    TOC_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <aside className="doc-toc-sidebar" aria-label="On this page navigation">
      <div className="doc-toc-title">ON THIS PAGE</div>
      <ul className="doc-toc-list">
        {TOC_ITEMS.map((item) => {
          const isActive = activeId === item.id
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`doc-toc-link ${isActive ? 'active' : ''}`}
                aria-current={isActive ? 'location' : undefined}
              >
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
