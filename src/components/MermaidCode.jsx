import React, { useState } from 'react';

function MermaidCode() {
  const [showCode, setShowCode] = useState(false);

  const mermaidCode = `flowchart TD
    A["Can others close the source after modifying the code?"] -->|Yes| B["Must every modified file include a copyright notice?"]
    A -->|No| C["Must new code use the same license?"]

    B -->|Yes| Apache["Apache License"]
    B -->|No| D["Can the software's advertisement use your name for promotion?"]

    D -->|Yes| MIT["MIT License"]
    D -->|No| BSD["BSD License"]

    C -->|Yes| GPL["GPL License"]
    C -->|No| E["Is it required to provide documentation for source code modifications?"]

    E -->|Yes| Mozilla["Mozilla License"]
    E -->|No| LGPL["LGPL License"]`;

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <button
        onClick={() => setShowCode(!showCode)}
        style={{
          padding: '8px 16px',
          fontSize: '14px',
          borderRadius: '4px',
          border: '1px solid #1976d2',
          background: showCode ? '#1976d2' : '#fff',
          color: showCode ? '#fff' : '#1976d2',
          cursor: 'pointer',
          transition: 'all 0.2s',
          marginBottom: '16px'
        }}
      >
        {showCode ? 'Hide Mermaid Code' : 'Show Mermaid Code'}
      </button>

      {showCode && (
        <pre
          style={{
            textAlign: 'left',
            padding: '16px',
            background: '#f6f8fa',
            border: '1px solid #ddd',
            borderRadius: '4px',
            overflow: 'auto',
            maxWidth: '800px',
            margin: '0 auto',
            fontSize: '14px',
            lineHeight: '1.5',
            fontFamily: 'monospace'
          }}
        >
          <code>{mermaidCode}</code>
        </pre>
      )}
    </div>
  );
}

export default MermaidCode; 