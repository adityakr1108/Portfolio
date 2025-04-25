import React from 'react';
import './DataFlow.css'; // Import the CSS file

const DataFlow = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="sparkle-container">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DataFlow;  