import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { projectData } from '../data/projectData';

const Modal = ({ selectedItem }) => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // Estado para el reproductor de video personalizado
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  
  // Estado para la vista de pantalla completa de imágenes
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);
  
  // Efecto para cerrar pantalla completa con Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isImageFullscreen) {
        setIsImageFullscreen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isImageFullscreen]);

  // Efecto para la máquina de escribir por líneas
  useEffect(() => {
    if (selectedItem && (selectedItem.type === 'pdf' || selectedItem.type === 'pattern')) {
      setIsTyping(true);
      setTypedText('');
      
      let fullText;
      
      // Texto específico para archivos pattern
      if (selectedItem.type === 'pattern') {
        fullText = 'OCTOBER, 2025';
      }
      // Texto específico para INFO_ESP.PDF
      else if (selectedItem.id === 'esp') {
        fullText = `DURANTE SIGLOS, EL TRAJE GALLEGO FUE UN SISTEMA DE INNOVACIÓN APLICADO: CAPAS QUE PROTEGÍAN, TEJIDOS QUE DURABAN, FORMAS QUE PERTENECÍAN A UNA COMUNIDAD. TRX ACTUALIZA ESA LÓGICA EN DIMENSIÓN TÉCNICA.

LA COLECCIÓN —DOS LOOKS, TRX_001 Y TRX_002— SUSTITUYE ORNAMENTO POR FUNCIÓN, LANA POR NYLON O PRESILLAS POR CINCHAS INDUSTRIALES. CADA PRENDA ES UN MÓDULO: ADAPTABLE, TÉCNICO, DISEÑADO PARA RESPONDER A NECESIDADES ACTUALES.

TRX NO REPLICA EL PASADO: LO TRADUCE. DEL TRAJE COMO MEMORIA CULTURAL AL TRAJE COMO DISPOSITIVO CONTEMPORÁNEO. UNA INTERFAZ ENTRE IDENTIDAD Y PRESENTE`;
      } else if (selectedItem.id === 'eng') {
        // Texto específico para INFO_ENG.PDF
        fullText = `FOR CENTURIES, THE GALICIAN COSTUME WAS A SYSTEM OF APPLIED INNOVATION: LAYERED GARMENTS FOR PROTECTION, FABRICS BUILT TO LAST, FORMS THAT REINFORCED COMMUNITY. TRX UPDATES THAT LOGIC IN A TECHNICAL DIMENSION.

THE COLLECTION —TWO LOOKS, TRX_001 AND TRX_002— REPLACES ORNAMENT WITH FUNCTION, WOOL WITH NYLON OR TRADITIONAL FASTENINGS WITH INDUSTRIAL STRAPS. EACH GARMENT IS A MODULE: ADAPTIVE, TECHNICAL, DESIGNED TO RESPOND TO TODAY'S NEEDS.

TRX DOES NOT REPLICATE THE PAST: IT TRANSLATES IT. FROM COSTUME AS CULTURAL MEMORY TO COSTUME AS A CONTEMPORARY DEVICE. AN INTERFACE BETWEEN IDENTITY AND THE PRESENT`;
      } else if (selectedItem.id === 'gal') {
        // Texto específico para INFO_GAL.PDF
        fullText = `DURANTE SÉCULOS, O TRAXE GALEGO FOI UN SISTEMA DE INNOVACIÓN APLICADA: CAPAS QUE PROTEXÍAN, TECIDOS QUE DURABAN, FORMAS QUE PERTENCÍAN A UNHA COMUNIDADE. TRX ACTUALIZA ESA LÓXICA EN DIMENSIÓN TÉCNICA.

A COLECCIÓN —DÚAS PROPOSTAS, TRX_001 E TRX_002— SUBSTITÚE ORNAMENTO POR FUNCIÓN, LA POR NAILON, PRESILLAS POR CINCHAS INDUSTRIAIS. CADA PEZA É UN MÓDULO: ADAPTÁBEL, TÉCNICO, DESEÑADO PARA RESPONDER ÁS NECESIDADES ACTUAIS.

TRX NON REPLICA O PASADO: TRADÚCEO. DO TRAXE COMO MEMORIA CULTURAL AO TRAXE COMO DISPOSITIVO CONTEMPORÁNEO. UNHA INTERFACE ENTRE IDENTIDADE E PRESENTE`;
      } else {
        // Texto original para otros PDFs
        fullText = `TRX REPRESENTA LA CULMINACIÓN DE UNA DÉCADA DE INVESTIGACIÓN EN ARQUITECTURA EXPERIMENTAL Y DISEÑO COMPUTACIONAL.
NACIDO EN LOS LABORATORIOS DE LA UNIVERSIDAD DE SANTIAGO DE COMPOSTELA, ESTE PROYECTO REVOLUCIONA LOS PARADIGMAS TRADICIONALES DE CONSTRUCCIÓN MEDIANTE LA IMPLEMENTACIÓN DE ALGORITMOS GENÉTICOS Y SISTEMAS DE FABRICACIÓN DIGITAL AVANZADOS.

LA METODOLOGÍA TRX SE FUNDAMENTA EN TRES PILARES ESENCIALES: LA OPTIMIZACIÓN ESTRUCTURAL MEDIANTE MACHINE LEARNING, LA SOSTENIBILIDAD MATERIAL A TRAVÉS DE COMPOSITES BIODEGRADABLES, Y LA ADAPTABILIDAD ESPACIAL MEDIANTE SISTEMAS MODULARES INTELIGENTES.
CADA ELEMENTO ARQUITECTÓNICO ES GENERADO ALGORÍTMICAMENTE, CONSIDERANDO VARIABLES AMBIENTALES, ESTRUCTURALES Y ESTÉTICAS EN TIEMPO REAL.

LOS PROTOTIPOS TRX_001 Y TRX_002 REPRESENTAN DOS ENFOQUES DISTINTOS: MIENTRAS QUE TRX_001 SE CENTRA EN LA EFICIENCIA ENERGÉTICA Y LA INTEGRACIÓN PAISAJÍSTICA, TRX_002 EXPLORA LA FLEXIBILIDAD PROGRAMÁTICA Y LA TRANSFORMACIÓN TEMPORAL.
AMBOS COMPARTEN LA FILOSOFÍA DE QUE LA ARQUITECTURA DEBE SER UN ORGANISMO VIVO, CAPAZ DE EVOLUCIONAR Y ADAPTARSE A LAS NECESIDADES CAMBIANTES DE SUS USUARIOS.

EL FUTURO DEL PROYECTO TRX APUNTA HACIA LA IMPLEMENTACIÓN A GRAN ESCALA EN ENTORNOS URBANOS COMPLEJOS, DONDE LA INTELIGENCIA ARTIFICIAL Y LA ROBÓTICA COLABORATIVA PERMITIRÁN LA CONSTRUCCIÓN DE ESTRUCTURAS QUE SE AUTO-OPTIMIZAN Y SE REGENERAN CONTINUAMENTE.
ESTABLECIENDO UN NUEVO ESTÁNDAR PARA LA ARQUITECTURA DEL SIGLO XXI.`;
      }
      
      // Para archivos pattern, escribir letra por letra
      if (selectedItem.type === 'pattern') {
        let currentChar = 0;
        const charSpeed = 50; // 50ms entre caracteres para pattern
        
        const charInterval = setInterval(() => {
          if (currentChar < fullText.length) {
            setTypedText(fullText.slice(0, currentChar + 1));
            currentChar++;
          } else {
            setIsTyping(false);
            clearInterval(charInterval);
          }
        }, charSpeed);
        
        return () => clearInterval(charInterval);
      }
      
      // Para archivos PDF, escribir línea por línea
      const lines = fullText.split('\n');
      let currentLine = 0;
      const lineSpeed = 100; // 100ms entre líneas
      
      const lineInterval = setInterval(() => {
        if (currentLine < lines.length) {
          setTypedText(lines.slice(0, currentLine + 1).join('\n'));
          currentLine++;
        } else {
          setIsTyping(false);
          clearInterval(lineInterval);
        }
      }, lineSpeed);
      
      return () => clearInterval(lineInterval);
    }
  }, [selectedItem]);
  
  // Funciones para el reproductor de video personalizado
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };



  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setCurrentTime(current);
      setProgress((current / total) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Función para alternar pantalla completa de imágenes
  const toggleImageFullscreen = () => {
    console.log('toggleImageFullscreen llamado, estado actual:', isImageFullscreen); // Debug
    setIsImageFullscreen(prev => {
      const newState = !prev;
      console.log('Nuevo estado será:', newState); // Debug
      return newState;
    });
  };

  console.log('Modal selectedItem:', selectedItem); // Debug

  if (!selectedItem) {
    return (
      <div className="w-full sm:w-3/5 flex items-center justify-center relative h-full">
        <div className="text-center">
          <div className="font-mono text-xs" style={{ 
            color: '#ff1200',
            textShadow: '0 0 4px rgba(255, 18, 0, 0.6), 0 0 8px rgba(255, 18, 0, 0.4)'
          }}>
            {[
              "████████╗██████╗ ██╗  ██╗",
              "╚══██╔══╝██╔══██╗╚██╗██╔╝",
              "   ██║  ██████╔╝ ╚███╔╝ ",
              "   ██║  ██╔══██╗ ██╔██╗ ",
              "   ██║  ██║  ██║██╔╝ ██╗",
              "   ╚═╝  ╚═╝  ╚═╝╚═╝  ╚═╝"
            ].map((line, index) => (
              <div key={index} className="whitespace-pre font-mono">
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Función para renderizar el ASCII de TRX en pequeño
    const renderSmallTRX = () => (
    <div className="absolute top-3 sm:top-6 left-1/2 transform -translate-x-1/2 z-10">
      <div className="font-mono text-[2px] sm:text-[4px]" style={{
        color: '#ff1200',
        textShadow: '0 0 2px rgba(255, 18, 0, 0.4), 0 0 4px rgba(255, 18, 0, 0.3)'
      }}>
        {[
          "████████╗██████╗ ██╗  ██╗",
          "╚══██╔══╝██╔══██╗╚██╗██╔╝",
          "   ██║  ██████╔╝ ╚███╔╝ ",
          "   ██║  ██╔══██╗ ██╔██╗ ",
          "   ██║  ██║  ██║██╔╝ ██╗",
          "   ╚═╝  ╚═╝  ╚═╝╚═╝  ╚═╝"
        ].map((line, index) => (
          <div key={index} className="whitespace-pre font-mono">
            {line}
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    console.log('Rendering content for:', selectedItem.name, 'Type:', selectedItem.type); // Debug
    
    switch (selectedItem.type) {
      case 'info':
        return (
          <div className="p-6 relative">
            {renderSmallTRX()}
            <h2 className="text-2xl font-mono text-white mb-4">{selectedItem.name}</h2>
            <div className="bg-gray-900 p-4 rounded border border-red-500">
              <p className="text-gray-300 font-mono mb-4">
                Este es un archivo PDF de información del proyecto TRX.
              </p>
              <button className="bg-red-600 text-white px-6 py-2 font-mono hover:bg-red-700 transition-colors">
                DESCARGAR PDF
              </button>
            </div>
          </div>
        );
      
      case 'image':
        console.log('Image case - name:', selectedItem.name, 'Fullscreen:', isImageFullscreen); // Debug
        return (
          <div className="w-full h-full flex items-center justify-center relative">
            {renderSmallTRX()}
            
            {/* Contenedor de imagen y botón */}
            <div className="flex flex-col items-center justify-center w-full h-full" style={{ transform: 'translateX(-2%)' }}>
              {/* Imagen principal */}
              <img 
                src={selectedItem.url} 
                alt={selectedItem.name} 
                className="max-w-[90%] max-h-[90%] object-contain cursor-pointer hover:scale-[1.01] transition-transform duration-200 rounded-lg"
                onClick={() => {
                  console.log('Click en imagen, cambiando a fullscreen'); // Debug
                  toggleImageFullscreen();
                }}
                onLoad={() => console.log('Imagen cargada correctamente:', selectedItem.name)} // Debug
                onError={(e) => console.error('Error cargando imagen:', selectedItem.name, e)} // Debug
              />
              
              {/* Botón "CLICK TO EXPAND" solo en mobile */}
              <div className="block sm:hidden text-center mt-2">
                <button 
                  onClick={toggleImageFullscreen}
                  className="font-mono text-[10px] text-red-500 hover:text-red-400 transition-colors cursor-pointer"
                >
                  CLICK TO EXPAND
                </button>
              </div>
            </div>
            
            {/* Nombre del archivo en pequeño - Solo en desktop */}
            <div className="hidden sm:block absolute bottom-2 left-1/2 transform -translate-x-1/2">
              <span className="font-mono text-[8px] sm:text-[10px]" style={{
                color: '#ff1200',
                textShadow: '0 0 2px rgba(255, 18, 0, 0.4)'
              }}>
                {selectedItem.name}
              </span>
            </div>
            
            {/* Overlay de pantalla completa */}
            {isImageFullscreen && (
              <div 
                className="fixed inset-0 z-[9999] flex items-center justify-center"
                style={{ 
                  position: 'fixed', 
                  top: 0, 
                  left: 0, 
                  right: 0, 
                  bottom: 0,
                  backgroundColor: '#000000',
                  backdropFilter: 'none',
                  WebkitBackdropFilter: 'none',
                  filter: 'none',
                  WebkitFilter: 'none',
                  backgroundImage: 'none',
                  boxShadow: 'none',
                  textShadow: 'none',
                  transform: 'none',
                  perspective: 'none',
                  transformStyle: 'flat'
                }}
              >
                <img 
                  src={selectedItem.url} 
                  alt={selectedItem.name} 
                  className="max-w-[95%] max-h-[95%] object-contain"
                  style={{
                    filter: 'none',
                    WebkitFilter: 'none',
                    backdropFilter: 'none',
                    WebkitBackdropFilter: 'none',
                    transform: 'none',
                    perspective: 'none'
                  }}
                />
                
                {/* Botón para cerrar pantalla completa */}
                <button 
                  onClick={() => {
                    console.log('Cerrando fullscreen'); // Debug
                    toggleImageFullscreen();
                  }}
                  className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-black font-mono text-sm px-4 py-2 rounded transition-colors z-[10000]"
                  style={{
                    filter: 'none',
                    WebkitFilter: 'none',
                    backdropFilter: 'none',
                    WebkitBackdropFilter: 'none',
                    transform: 'none',
                    perspective: 'none'
                  }}
                >
                  CLOSE
                </button>
                
                {/* Nombre del archivo en pantalla completa */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[10000]">
                  <span className="font-mono text-sm text-red-500 bg-black/80 px-4 py-2 rounded">
                    {selectedItem.name}
                  </span>
                </div>
              </div>
            )}
          </div>
        );
      
      case 'video':
        return (
          <div className="p-1 sm:p-8 flex items-center justify-center h-full relative">
            {renderSmallTRX()}
            <div className="relative max-w-[50%] max-h-[50%] flex items-center justify-center" style={{ 
              transform: window.innerWidth < 640 ? 'translateY(-10%)' : 'none' 
            }}>
              <video
                ref={videoRef}
                src={selectedItem.url}
                className="max-w-full max-h-full object-contain rounded-lg"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
              >
                Tu navegador no soporta el elemento de video.
              </video>
              
              {/* Controles personalizados cyberpunk */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm p-3 z-20" style={{ transform: 'translateY(100%)' }}>
                {/* Controles principales */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={togglePlay}
                      className="bg-red-600 hover:bg-red-700 text-black font-mono text-xs px-3 py-1.5 rounded transition-colors"
                    >
                      {isPlaying ? '⏸ PAUSE' : '▶ PLAY'}
                    </button>
                    <span className="text-red-500 font-mono text-xs">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>
                  
                  <button 
                    onClick={toggleFullscreen}
                    className="bg-red-600 hover:bg-red-700 text-black font-mono text-xs px-2 py-1.5 rounded transition-colors"
                  >
                    ⛶
                  </button>
                </div>
                
                {/* Barra de progreso */}
                <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-red-600 h-full transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            {/* Nombre del archivo en pequeño - Solo en desktop */}
            <div className="hidden sm:block absolute bottom-2 left-1/2 transform -translate-x-1/2">
              <span className="font-mono text-[8px] sm:text-[10px]" style={{
                color: '#ff1200',
                textShadow: '0 0 2px rgba(255, 18, 0, 0.4)'
              }}>
                {selectedItem.name}
              </span>
            </div>
          </div>
        );
      
      case 'pdf':
        return (
          <div className="p-1 sm:p-8 flex items-center justify-center h-full relative">
            {renderSmallTRX()}
            <div className="w-full max-w-none">
              <div className="space-y-1 sm:space-y-4 px-2 sm:px-20">
                <div className="font-mono text-[12px] sm:text-sm leading-[1.2] sm:leading-tight uppercase text-center sm:text-left" style={{ 
                  color: '#ff1200',
                  textShadow: 'none',
                  whiteSpace: 'pre-wrap',
                  fontWeight: '600'
                }}>
                  {typedText}
                  {isTyping && <span className="text-red-500 font-bold animate-pulse" style={{ animationDuration: '0.8s' }}>|</span>}
                  {!isTyping && typedText && <span className="text-red-500 font-bold animate-pulse" style={{ animationDuration: '0.8s' }}>_</span>}
                </div>
              </div>
            </div>
            
            {/* Nombre del archivo en pequeño - Solo en desktop */}
            <div className="hidden sm:block absolute bottom-2 left-1/2 transform -translate-x-1/2">
              <span className="font-mono text-[8px] sm:text-[10px]" style={{
                color: '#ff1200',
                textShadow: '0 0 2px rgba(255, 18, 0, 0.4)'
              }}>
                {selectedItem.name}
              </span>
            </div>
          </div>
        );
      
      case 'pattern':
        return (
          <div className="p-1 sm:p-8 flex items-center justify-center h-full relative">
            {renderSmallTRX()}
            <div className="text-center">
              <div className="font-mono text-[12px] sm:text-sm leading-[1.2] sm:leading-tight uppercase text-center" style={{ 
                color: '#ff1200',
                textShadow: 'none',
                fontWeight: '600'
              }}>
                {typedText}
                {!isTyping && typedText && <span className="text-red-500 font-bold animate-pulse" style={{ animationDuration: '0.8s' }}>_</span>}
              </div>
            </div>
          </div>
        );
      
      case 'section':
        return (
          <div className="p-1 sm:p-8 flex items-center justify-center h-full relative">
            {renderSmallTRX()}
            <div className="w-full max-w-none">
              <div className="space-y-1 sm:space-y-4 px-2 sm:px-6">
                <div className="font-mono text-[12px] sm:text-sm leading-[1.2] sm:leading-tight uppercase text-center sm:text-left" style={{ 
                  color: '#ff1200',
                  textShadow: 'none',
                  whiteSpace: 'pre-wrap',
                  fontWeight: '600'
                }}>
                  AWAITING USER INPUT...
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'contact':
        // Si es el enlace de la web, email o teléfono, mostrar el logo TRX
        if (selectedItem.id === 'website' || selectedItem.id === 'email' || selectedItem.id === 'phone') {
          return (
            <div className="p-1 sm:p-8 flex items-center justify-center h-full relative">
              <div className="text-center">
                <div className="font-mono text-xs" style={{ 
                  color: '#ff1200',
                  textShadow: '0 0 4px rgba(255, 18, 0, 0.6), 0 0 8px rgba(255, 18, 0, 0.4)'
                }}>
                  {[
                    "████████╗██████╗ ██╗  ██╗",
                    "╚══██╔══╝██╔══██╗╚██╗██╔╝",
                    "   ██║  ██████╔╝ ╚███╔╝ ",
                    "   ██║  ██╔══██╗ ██╔██╗ ",
                    "   ██║  ██║  ██║██╔╝ ██╗",
                    "   ╚═╝  ╚═╝ ═╝╚═╝ ═╝"
                  ].map((line, index) => (
                    <div key={index} className="whitespace-pre font-mono">
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        }
        
        // Para otros elementos de contacto, mostrar la interfaz normal
        return (
          <div className="p-6 relative">
            {renderSmallTRX()}
            <h2 className="text-2xl font-mono text-white mb-4">CONTACTO</h2>
            <div className="bg-gray-900 p-4 rounded border border-red-500">
              <p className="text-gray-300 font-mono mb-4">
                Para más información sobre el proyecto TRX:
              </p>
              <div className="bg-gray-800 p-3 rounded mb-4">
                <p className="text-red-500 font-mono">{selectedItem.email}</p>
              </div>
              <button className="bg-red-600 text-white px-6 py-2 font-mono hover:bg-red-700 transition-colors">
                ENVIAR EMAIL
              </button>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="p-6 relative">
            {renderSmallTRX()}
            <h2 className="text-2xl font-mono text-white mb-4">Contenido no disponible</h2>
            <p className="text-gray-400 font-mono">Este tipo de contenido no está soportado.</p>
          </div>
        );
    }
  };

  return (
    <div className="w-full sm:w-3/5 relative h-full">
      {renderContent()}
    </div>
  );
};

export default Modal;
