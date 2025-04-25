
import { useEffect, useRef } from 'react';

const CodeRain = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Much more vibrant colors for maximum contrast against black
    const visibleColors = [
      '#00FFFF', // cyan
      '#FFFFFF', // pure white
      '#7DF9FF', // electric blue
      '#00FFCC', // bright mint green
      '#80FFDB', // aquamarine
      '#48FFCB', // spring green
      '#E0FFFF', // light cyan
      '#F0FFFF', // azure
      '#00E5FF', // bright blue
      '#40E0D0'  // turquoise
    ];
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}[]()<>/*-+!@#$%^&*=;:\'"\\/'.split('');
    const canvas = canvasRef.current;

    const updateContent = () => {
      let content = '';
      const lines = Math.floor(canvas.clientHeight / 20) * 3;
      const cols = Math.floor(canvas.clientWidth / 10);

      for (let i = 0; i < lines; i++) {
        let line = '';
        const color = visibleColors[Math.floor(Math.random() * visibleColors.length)];
        const lineLength = Math.floor(Math.random() * cols) + 10;
        for (let j = 0; j < lineLength; j++) {
          const char = characters[Math.floor(Math.random() * characters.length)];
          // Increased opacity and stronger glow for maximum visibility
          line += `<span style="color:${color};text-shadow:0 0 8px ${color},0 0 12px ${color};opacity:${Math.random() * 0.3 + 0.7};mix-blend-mode:screen;">${char}</span>`;
        }
        content += line + '<br/>';
      }
      canvas.innerHTML = content;
    };

    updateContent();
    const interval = setInterval(updateContent, 2000); // Slightly faster update

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 select-none pointer-events-none bg-black/95">
      <div
        ref={canvasRef as any}
        className="code-rain font-mono text-xs md:text-base whitespace-pre overflow-hidden"
        style={{
          height: '310%',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(0,255,193,0.05) 100%)',
          animation: 'code-flow 19s linear infinite, glow 2s ease-in-out infinite alternate',
          transform: 'translateY(-68%)',
          filter: 'blur(0.3px)', // Reduced blur for sharper text
          WebkitTextStroke: '0.02em rgba(255,255,255,0.3)',
          letterSpacing: '0.05em',
          opacity: '0.9' // Higher base opacity
        }}
      />
    </div>
  );
};

export default CodeRain;
