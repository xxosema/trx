import { useState, useEffect } from 'react';

const Preloader = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);

  const trxAscii = [
    "████████╗██████╗ ██╗  ██╗",
    "╚══██╔══╝██╔══██╗╚██╗██╔╝",
    "   ██║  ██████╔╝ ╚███╔╝ ",
    "   ██║  ██╔══██╗ ██╔██╗ ",
    "   ██║  ██║  ██║██╔╝ ██╗",
    "   ╚═╝  ╚═╝  ╚═╝╚═╝  ╚═╝"
  ];

  useEffect(() => {
    // Mostrar línea por línea cada 200ms (más rápido)
    if (currentLine < trxAscii.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, 200); // Reducido de 800ms a 200ms

      return () => clearTimeout(timer);
    } else {
      // Cuando todas las líneas estén mostradas, esperar solo 1 segundo y completar
      const finalTimer = setTimeout(() => {
        onComplete();
      }, 1000); // Reducido de 3000ms a 1000ms

      return () => clearTimeout(finalTimer);
    }
  }, [currentLine, trxAscii.length, onComplete]);

  return (
    <div 
      className="h-screen p-2 sm:p-6"
      style={{ backgroundColor: '#210d06' }}
    >
      <div 
        className="flex flex-col-reverse sm:flex-row h-full relative mx-2 sm:mx-0 sm:rounded-border sm:crt-effects"
      >
        {/* Contenido centrado en toda la pantalla */}
        <div className="w-full flex items-center justify-center h-full">
          <div 
            className="text-center"
            style={{
              width: '100%',
              maxWidth: '600px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Contenedor para ASCII con ancho fijo */}
            <div 
              style={{
                width: '400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              {trxAscii.slice(0, currentLine + 1).map((line, index) => (
                <div 
                  key={index} 
                  className="font-mono text-xs mb-1"
                  style={{ 
                    color: '#ff1200',
                    textShadow: '0 0 4px rgba(255, 18, 0, 0.6), 0 0 8px rgba(255, 18, 0, 0.4)',
                    lineHeight: '1.2',
                    textAlign: 'center',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <span style={{ 
                    whiteSpace: 'pre',
                    fontFamily: 'monospace',
                    letterSpacing: '0.5px'
                  }}>
                    {line}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Texto LOADING */}
            <div 
              className="mt-6"
              style={{
                textAlign: 'center',
                width: '100%'
              }}
            >
              <span 
                className="font-mono text-xs font-bold"
                style={{ 
                  color: '#ff1200',
                  textShadow: '0 0 4px rgba(255, 18, 0, 0.6), 0 0 8px rgba(255, 18, 0, 0.4)'
                }}
              >
                LOADING
                <span className="ml-2">...</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
