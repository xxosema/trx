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
      <div className="fixed inset-0 flex items-center justify-center z-50 animate-fadeOut crt-effects" style={{ backgroundColor: '#210d06' }}>
        <div className="font-mono text-xs opacity-0 animate-fadeOut text-center rounded-border p-8" style={{ color: '#ff1200' }}>
          {trxAscii.map((line, index) => (
            <div key={index} className="whitespace-pre font-mono">
              {line}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 crt-effects" style={{ backgroundColor: '#210d06' }}>
      <div className="font-mono text-xs text-center rounded-border p-8" style={{ color: '#ff1200' }}>
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
      </div>
    </div>
  );
};

export default Preloader;
