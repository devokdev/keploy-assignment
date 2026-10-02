import React from 'react'

export type FlowStep = 'request' | 'api' | 'observe' | 'testcase' | 'replay'

interface FlowDiagramProps {
  activeStep?: FlowStep
  compact?: boolean
  stepNumber?: string
  stepTitle?: string
}

interface StepInfo {
  id: FlowStep
  num: string
  label: string
  desc: string
  icon: string
  targetId: string
}

const STEPS: StepInfo[] = [
  {
    id: 'api',
    num: '01',
    label: 'Go App Setup',
    desc: 'Runs actual business logic',
    icon: '⚙️',
    targetId: 'step-1-setup',
  },
  {
    id: 'observe',
    num: '02',
    label: 'Keploy Observes',
    desc: 'Captures request & response',
    icon: '👀',
    targetId: 'step-2-record',
  },
  {
    id: 'request',
    num: '03',
    label: 'Real API Request',
    desc: 'Client triggers traffic',
    icon: '⚡',
    targetId: 'step-3-traffic',
  },
  {
    id: 'testcase',
    num: '04',
    label: 'Captured Test',
    desc: 'Stored as YAML artifact',
    icon: '📄',
    targetId: 'step-3-yaml',
  },
  {
    id: 'replay',
    num: '05',
    label: 'Deterministic Replay',
    desc: 'Re-runs & asserts diffs',
    icon: '🛡️',
    targetId: 'step-4-replay',
  },
]

const EXPLANATIONS: Record<FlowStep, string> = {
  api: 'Your Go service executes its routes and handler code naturally without invasive SDKs.',
  observe: 'Keploy intercepts network packets at the transport/process level without modifying your source code.',
  request: 'A real incoming HTTP request from curl, Postman, or a web frontend triggers your service.',
  testcase: 'Keploy serializes the exact request, mock dependencies (DBs/APIs), and response into version-controlled YAML.',
  replay: 'During CI or local validation, Keploy replays the request, mocks external calls, and compares live output against the recorded golden response.',
}

export function FlowDiagram({
  activeStep = 'observe',
  compact = false,
  stepNumber,
  stepTitle,
}: FlowDiagramProps) {
  const activeInfo = STEPS.find((s) => s.id === activeStep) || STEPS[1]

  // Render a compact, elegant banner for subsequent steps to prevent repetitive cognitive load
  if (compact) {
    return (
      <div className="flow-step-badge-banner" role="region" aria-label={`Current Step: ${activeInfo.label}`}>
        <div className="flow-badge-left">
          <span className="flow-badge-indicator">
            {stepNumber || `STEP ${activeInfo.num} / 05`}
          </span>
          <span className="flow-badge-title">
            {stepTitle || activeInfo.label}
          </span>
        </div>
        <a href="#mental-model" className="flow-badge-link" aria-label="Jump to full mental model diagram">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
          View Full Mental Model
        </a>
      </div>
    )
  }

  return (
    <div className="flow-diagram-container" id="mental-model" role="region" aria-label="Keploy Execution Flow Diagram">
      <div className="flow-diagram-header">
        <div className="flow-diagram-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
          Interactive Mental Model: Request to Regression Test
        </div>
        <span className="flow-step-tracker">
          Click any stage to jump to instructions
        </span>
      </div>

      <nav className="flow-diagram-steps" aria-label="Mental model stage navigation">
        {STEPS.map((step) => {
          const isActive = step.id === activeStep
          return (
            <a
              key={step.id}
              href={`#${step.targetId}`}
              className={`flow-step-card ${isActive ? 'active' : ''}`}
              aria-current={isActive ? 'step' : undefined}
            >
              <span className="flow-step-num">{step.num}</span>
              <span className="flow-step-icon" aria-hidden="true">{step.icon}</span>
              <div className="flow-step-label">{step.label}</div>
              <div className="flow-step-desc">{step.desc}</div>
            </a>
          )
        })}
      </nav>

      <div className="flow-callout-explanation">
        <strong>Stage Focus:</strong> {EXPLANATIONS[activeStep]}
      </div>
    </div>
  )
}
