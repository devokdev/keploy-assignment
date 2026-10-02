import React from 'react'

export type FlowStep = 'request' | 'api' | 'observe' | 'testcase' | 'replay'

interface FlowDiagramProps {
  activeStep?: FlowStep
}

interface StepInfo {
  id: FlowStep
  num: string
  label: string
  desc: string
  icon: string
}

const STEPS: StepInfo[] = [
  {
    id: 'request',
    num: '01',
    label: 'API Request',
    desc: 'Client makes HTTP call',
    icon: '⚡',
  },
  {
    id: 'api',
    num: '02',
    label: 'Go App (Gin/Echo)',
    desc: 'Runs actual business logic',
    icon: '⚙️',
  },
  {
    id: 'observe',
    num: '03',
    label: 'Keploy Observes',
    desc: 'Captures request & response',
    icon: '👀',
  },
  {
    id: 'testcase',
    num: '04',
    label: 'Captured Test',
    desc: 'Stored as YAML artifact',
    icon: '📄',
  },
  {
    id: 'replay',
    num: '05',
    label: 'Deterministic Replay',
    desc: 'Re-runs & asserts diffs',
    icon: '🛡️',
  },
]

const EXPLANATIONS: Record<FlowStep, string> = {
  request: 'A real incoming API request from curl, Postman, or a web frontend hits your endpoint.',
  api: 'Your Go service executes its routes and handler code naturally.',
  observe: 'Keploy intercepts network packets at the kernel/process level without modifying your source code.',
  testcase: 'Keploy serializes the exact request, mock dependencies (DBs/APIs), and response into a version-controlled YAML test file.',
  replay: 'During CI or local validation, Keploy replays the request, mocks external calls, and compares live output against the recorded golden response.',
}

export function FlowDiagram({ activeStep = 'observe' }: FlowDiagramProps) {
  const activeInfo = STEPS.find((s) => s.id === activeStep) || STEPS[2]

  return (
    <div className="flow-diagram-container" role="region" aria-label="Keploy Execution Flow Diagram">
      <div className="flow-diagram-header">
        <div className="flow-diagram-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
          Mental Model: Interaction to Regression Test
        </div>
        <span className="flow-step-tracker">
          Step {activeInfo.num} / 05 — {activeInfo.label}
        </span>
      </div>

      <div className="flow-diagram-steps">
        {STEPS.map((step) => {
          const isActive = step.id === activeStep
          return (
            <div
              key={step.id}
              className={`flow-step-card ${isActive ? 'active' : ''}`}
              aria-current={isActive ? 'step' : undefined}
            >
              <span className="flow-step-num">{step.num}</span>
              <span className="flow-step-icon" aria-hidden="true">{step.icon}</span>
              <div className="flow-step-label">{step.label}</div>
              <div className="flow-step-desc">{step.desc}</div>
            </div>
          )
        })}
      </div>

      <div className="flow-callout-explanation">
        <strong>What is happening right now:</strong> {EXPLANATIONS[activeStep]}
      </div>
    </div>
  )
}
