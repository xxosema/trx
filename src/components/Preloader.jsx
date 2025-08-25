import { useState, useEffect } from 'react';

const Preloader = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const trxAscii = [
    "████████╗██████╗ ██╗  ██╗",
    "╚══██╔══╝██╔══██╗╚██╗██╔╝",
    "   ██║  ██████╔╝ ╚███╔╝ ",
    "   ██║  ██╔══██╗ ██╔██╗ ",
    "   ██║  ██║  ██║██╔╝ ██╗",
    "   ╚═╝  ╚═╝  ╚═╝╚═╝  ╚═╝"
  ];

  useEffect(() => {
    if (currentLine < trxAscii.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, 200); // 200ms entre cada línea

      return () => clearTimeout(timer);
    } else {
      // Esperar un poco más antes de completar
      const finalTimer = setTimeout(() => {
        setIsComplete(true);
        setTimeout(() => {
          onComplete();
        }, 500); // 500ms de transición
      }, 800);

      return () => clearTimeout(finalTimer);
    }
  }, [currentLine, onComplete]);

  if (isComplete) {
    return (
      <div className="fixed inset-0 p-2 sm:p-6 z-50 animate-fadeOut" style={{ backgroundColor: '#210d06' }}>
        <div className="flex items-center justify-center h-[90vh] sm:h-full relative rounded-border crt-effects mx-2 sm:mx-0">
          <div className="font-mono text-xs opacity-0 animate-fadeOut text-center p-8" style={{ 
            color: '#ff1200',
            textShadow: '0 0 4px rgba(255, 18, 0, 0.6), 0 0 8px rgba(255, 18, 0, 0.4)'
          }}>
            {trxAscii.map((line, index) => (
              <div key={index} className="whitespace-pre font-mono">
                {line}
              </div>
            ))}
            
            {/* LOADING con puntos animados */}
            <div className="mt-4 text-center">
              <span className="font-mono text-xs" style={{ 
                color: '#ff1200',
                textShadow: '0 0 4px rgba(255, 18, 0, 0.6), 0 0 8px rgba(255, 18, 0, 0.4)'
              }}>
                LOADING
                <span className="animate-pulse">...</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 p-2 sm:p-6 z-50" style={{ backgroundColor: '#210d06' }}>
      <div className="flex items-center justify-center h-[90vh] sm:h-full relative rounded-border crt-effects mx-2 sm:mx-0">
        <div className="font-mono text-xs text-center p-8" style={{ 
          color: '#ff1200',
          textShadow: '0 0 4px rgba(255, 18, 0, 0.6), 0 0 8px rgba(255, 18, 0, 0.4)'
        }}>
          {trxAscii.map((line, index) => (
            <div
              key={index}
              className={`whitespace-pre font-mono transition-all duration-300 ${
                index <= currentLine
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-2'
              }`}
            >
              {line}
            </div>
          ))}
          
          {/* LOADING con puntos animados */}
          <div className="mt-4 text-center">
            <span className="font-mono text-xs" style={{ 
              color: '#ff1200',
              textShadow: '0 0 4px rgba(255, 18, 0, 0.6), 0 0 8px rgba(255, 18, 0, 0.4)'
            }}>
              LOADING
              <span className="animate-pulse">...</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
