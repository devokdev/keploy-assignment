import React from 'react'

export type FlowStep = 'request' | 'gin' | 'redis' | 'record' | 'artifacts' | 'replay' | 'result'

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
    id: 'request',
    num: '01',
    label: 'API Request',
    desc: 'Developer triggers cURL call',
    icon: '⚡',
    targetId: 'step-5-exercise-api',
  },
  {
    id: 'gin',
    num: '02',
    label: 'Gin Application',
    desc: 'Processes business logic',
    icon: '⚙️',
    targetId: 'step-3-build-app',
  },
  {
    id: 'redis',
    num: '03',
    label: 'Redis Storage',
    desc: 'Stores generated OTP key',
    icon: '📦',
    targetId: 'step-2-start-redis',
  },
  {
    id: 'record',
    num: '04',
    label: 'Keploy Records',
    desc: 'Observes HTTP & TCP wire calls',
    icon: '👀',
    targetId: 'step-4-start-recording',
  },
  {
    id: 'artifacts',
    num: '05',
    label: 'Test & Mocks',
    desc: 'Generates test-1.yml + mocks.yml',
    icon: '📄',
    targetId: 'step-6-inspect-artifacts',
  },
  {
    id: 'replay',
    num: '06',
    label: 'Keploy Replay',
    desc: 'Injects request & mocks Redis',
    icon: '🔁',
    targetId: 'step-7-replay-test',
  },
  {
    id: 'result',
    num: '07',
    label: 'Test Result',
    desc: 'Asserts response with noise filtering',
    icon: '🛡️',
    targetId: 'step-8-mental-model',
  },
]

const EXPLANATIONS: Record<FlowStep, string> = {
  request: 'A real incoming HTTP request (e.g. GET /api/getVerificationCode) triggers the authentication flow.',
  gin: 'The Gin Go application processes the route, generates a 4-digit OTP, and prepares the response.',
  redis: 'The application writes the OTP with a TTL to Redis over a standard TCP connection.',
  record: 'Keploy, running in record mode, observes both the inbound HTTP traffic and outbound Redis network socket calls at the OS/Docker level.',
  artifacts: 'Keploy saves the HTTP transaction to test-1.yml (with dynamic noise rules) and the Redis interaction to mocks.yml.',
  replay: 'Running keploy test starts the application container, injects the original HTTP request, and serves Redis mocks automatically.',
  result: 'Keploy compares the live server response against test-1.yml, ignoring dynamic noise fields like the OTP value and timestamp.',
}

export function FlowDiagram({
  activeStep = 'record',
  compact = false,
  stepNumber,
  stepTitle,
}: FlowDiagramProps) {
  const activeInfo = STEPS.find((s) => s.id === activeStep) || STEPS[3]

  if (compact) {
    return (
      <div className="flow-step-badge-banner" role="region" aria-label={`Current Step: ${activeInfo.label}`}>
        <div className="flow-badge-left">
          <span className="flow-badge-indicator">
            {stepNumber || `STEP ${activeInfo.num} / 07`}
          </span>
          <span className="flow-badge-title">
            {stepTitle || activeInfo.label}
          </span>
        </div>
        <a href="#lifecycle-timeline" className="flow-badge-link" aria-label="Jump to complete lifecycle timeline">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
          View Complete Lifecycle
        </a>
      </div>
    )
  }

  return (
    <div className="flow-diagram-container" id="lifecycle-timeline" role="region" aria-label="Keploy Execution Flow Timeline">
      <div className="flow-diagram-header">
        <div className="flow-diagram-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
          The Keploy Lifecycle: From API Request to Replay
        </div>
        <span className="flow-step-tracker">
          Click any phase to navigate to that section
        </span>
      </div>

      <nav className="flow-diagram-steps timeline-steps" aria-label="Lifecycle stage navigation">
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
        <strong>Phase Focus:</strong> {EXPLANATIONS[activeStep]}
      </div>
    </div>
  )
}
