import React from 'react'

export function ArchitectureDiagram() {
  return (
    <div className="arch-diagram" role="region" aria-label="System Architecture Diagram">
      <div className="arch-header">
        <div className="arch-title">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
            <line x1="6" y1="6" x2="6.01" y2="6"></line>
            <line x1="6" y1="18" x2="6.01" y2="18"></line>
          </svg>
          System Topology: Gin Auth App + Redis + Keploy Agent
        </div>
        <span className="arch-tag">Docker Network: ginRedisApp</span>
      </div>

      <div className="arch-grid">
        <div className="arch-node client-node">
          <div className="node-badge">Client</div>
          <div className="node-title">cURL / HTTP Client</div>
          <div className="node-meta">Triggers Auth API</div>
          <div className="node-detail"><code>localhost:3001</code></div>
        </div>

        <div className="arch-connector">
          <span className="conn-label">HTTP Req</span>
          <span className="conn-arrow">→</span>
        </div>

        <div className="arch-node app-node">
          <div className="node-badge">Service (Port 3001)</div>
          <div className="node-title">Go Gin Application</div>
          <div className="node-meta">OTP &amp; Auth Controller</div>
          <div className="node-keploy-wrapper">
            <span>Interception via</span>
            <strong>keploy record / test</strong>
          </div>
        </div>

        <div className="arch-connector">
          <span className="conn-label">TCP / Redis</span>
          <span className="conn-arrow">→</span>
        </div>

        <div className="arch-node redis-node">
          <div className="node-badge">Cache / Store</div>
          <div className="node-title">Redis (Port 6379)</div>
          <div className="node-meta">Stores OTP with TTL</div>
          <div className="node-detail">Auto-mocked in replay</div>
        </div>
      </div>

      <div className="arch-footer">
        <div className="arch-footer-item">
          <strong>During Record:</strong> Keploy observes incoming HTTP traffic and outbound Redis TCP socket frames, creating <code>test-1.yml</code> and <code>mocks.yml</code>.
        </div>
        <div className="arch-footer-item">
          <strong>During Replay:</strong> Keploy replays the stored HTTP call to the Gin app and mocks the Redis responses directly, requiring zero real database infrastructure.
        </div>
      </div>
    </div>
  )
}
