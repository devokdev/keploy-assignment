import React from 'react'

interface AnnotatedYamlProps {
  title?: string
}

export function AnnotatedYaml({ title = 'keploy/test-set-0/tests/test-1.yml' }: AnnotatedYamlProps) {
  return (
    <div className="annotated-yaml-container">
      <div className="annotated-yaml-header">
        <div className="annotated-yaml-file">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          <span>{title}</span>
        </div>
        <span className="annotated-yaml-tag">Annotated Breakdown</span>
      </div>

      <div className="annotated-yaml-grid">
        <div className="annotated-tree-col">
          <div className="annotated-tree-title">Schema Breakdown</div>
          <div className="tree-node">
            <div className="tree-node-name root">test-1.yml</div>
            <div className="tree-branch">
              <div className="tree-item">
                <span className="tree-key">req</span>
                <span className="tree-desc">Recorded inbound request</span>
                <div className="tree-sub-branch">
                  <span className="tree-sub-item">├── <strong>method:</strong> POST</span>
                  <span className="tree-sub-item">├── <strong>url:</strong> /api/getVerificationCode</span>
                  <span className="tree-sub-item">└── <strong>header:</strong> Host, Content-Type, Accept</span>
                </div>
              </div>
              <div className="tree-item">
                <span className="tree-key">resp</span>
                <span className="tree-desc">Recorded HTTP response & status</span>
                <div className="tree-sub-branch">
                  <span className="tree-sub-item">├── <strong>status_code:</strong> 200</span>
                  <span className="tree-sub-item">├── <strong>header:</strong> Content-Type: application/json</span>
                  <span className="tree-sub-item">└── <strong>body:</strong> &#123;"data": "...", "msg": "..."&#125;</span>
                </div>
              </div>
              <div className="tree-item highlight-noise">
                <span className="tree-key">assertions.noise</span>
                <span className="tree-desc">Dynamic non-deterministic paths</span>
                <div className="tree-sub-branch">
                  <span className="tree-sub-item">├── <strong>body.otp</strong> (random 4-digit token)</span>
                  <span className="tree-sub-item">└── <strong>header.Date</strong> (dynamic server time)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="annotated-code-col">
          <div className="annotated-code-title">Generated Test Spec</div>
          <pre className="annotated-code-pre">
            <code>
{`version: api.keploy.io/v1beta1
kind: Http
name: test-1
spec:
  metadata: {}
  req:
    method: POST
    proto_major: 1
    proto_minor: 1
    url: /api/getVerificationCode?email=dev@example.com&username=shivam
    header:
      Accept: '*/*'
      Host: localhost:3001
      User-Agent: curl/8.4.0
    body: ""
  resp:
    status_code: 200
    header:
      Content-Type: application/json; charset=utf-8
      Date: Thu, 02 Oct 2026 15:20:00 GMT
    body: '{"data":{"otp":2121},"msg":"OTP sent successfully"}'
  objects: []
  assertions:
    noise:
      - body.otp
      - header.Date
  created: 1717200000`}
            </code>
          </pre>
        </div>
      </div>

      <div className="annotated-yaml-footer">
        <strong>DevRel Insight:</strong> Notice the <code>assertions.noise</code> block. Since OTPs are randomly generated on every call and timestamps constantly advance, strict byte-for-byte matching would cause false positives. Keploy automatically marks volatile paths as noise so tests remain resilient and deterministic.
      </div>
    </div>
  )
}
