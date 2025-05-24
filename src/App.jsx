import React, { useState } from "react";
import flowData from "./flowData";
import LicenseTreeImage from "./components/LicenseTreeImage";
import GitHubLink from './components/GitHubLink';
import MermaidCode from './components/MermaidCode';

function App() {
  const [currentNode, setCurrentNode] = useState(flowData);
  const [history, setHistory] = useState([]);

  const licenseLinks = {
    "Apache License": "https://www.apache.org/licenses/LICENSE-2.0",
    "MIT License": "https://opensource.org/licenses/MIT",
    "BSD License": "https://opensource.org/licenses/BSD-3-Clause",
    "GPL License": "https://www.gnu.org/licenses/gpl-3.0.html",
    "Mozilla License": "https://www.mozilla.org/en-US/MPL/2.0/",
    "LGPL License": "https://www.gnu.org/licenses/lgpl-3.0.html"
  };

  const handleOptionClick = (option) => {
    setHistory([...history, currentNode]);
    if (option.next) {
      setCurrentNode(option.next);
    } else if (option.result) {
      setCurrentNode({ result: option.result });
    }
  };

  const handleRestart = () => {
    setCurrentNode(flowData);
    setHistory([]);
  };

  return (
    <>
    <div style={{ maxWidth: 480, margin: "40px auto", padding: 24, border: "1px solid #ddd", borderRadius: 8, fontFamily: 'sans-serif', background: '#fafbfc' }}>
      <h2 style={{ textAlign: "center" }}>Choose the Right Open Source License</h2>
      {currentNode.result ? (
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <div style={{ fontSize: 20, marginBottom: 16 }}>Recommended License:</div>
          <a
            href={licenseLinks[currentNode.result]}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              fontSize: 32,
              fontWeight: "bold",
              color: "#1976d2",
              marginBottom: 32,
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
            onMouseOver={(e) => e.target.style.color = '#2196f3'}
            onMouseOut={(e) => e.target.style.color = '#1976d2'}
          >
            {currentNode.result}
          </a>
          <button 
            onClick={handleRestart} 
            style={{ 
              padding: "8px 24px", 
              fontSize: 16, 
              borderRadius: 4, 
              border: "1px solid #1976d2", 
              background: "#fff", 
              color: "#1976d2", 
              cursor: "pointer" 
            }}
          >
            Restart
          </button>
        </div>
      ) : (
        <div>
          <div style={{ fontSize: 18, marginBottom: 24, textAlign: "center" }}>{currentNode.question}</div>
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: 16 
          }}>
            {currentNode.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(option)}
                style={{
                  flex: 1,
                  maxWidth: "200px",
                  padding: "12px 24px",
                  fontSize: 16,
                  borderRadius: 4,
                  border: "1px solid #1976d2",
                  background: "#1976d2",
                  color: "#fff",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap"
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
    <LicenseTreeImage />
    <MermaidCode />
    <GitHubLink />
    </>
  );
}

export default App;