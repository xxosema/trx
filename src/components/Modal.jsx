import { projectData } from '../data/projectData';

const Modal = ({ selectedItem }) => {
  console.log('Modal selectedItem:', selectedItem); // Debug

  if (!selectedItem) {
    return (
      <div className="w-full sm:w-3/5 flex items-center justify-center relative h-full">
        <div className="text-center">
          <div className="font-mono text-xs" style={{ color: '#ff1200' }}>
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
      <div className="font-mono text-[2px] sm:text-[4px]" style={{ color: '#ff1200' }}>
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
        console.log('Image case - name:', selectedItem.name); // Debug
        return (
          <div className="w-full h-full flex items-center justify-center relative">
            {renderSmallTRX()}
            {selectedItem.name === 'IMG_001.JPG' ? (
              <img 
                src={selectedItem.url} 
                alt={selectedItem.name} 
                className="max-w-full max-h-full object-contain"
                onLoad={() => console.log('Imagen cargada correctamente')} // Debug
                onError={(e) => console.error('Error cargando imagen:', e)} // Debug
              />
            ) : (
              <div className="bg-gray-800 h-64 flex items-center justify-center rounded">
                <span className="text-gray-400 font-mono">Vista previa de imagen</span>
              </div>
            )}
          </div>
        );
      
      case 'video':
        return (
          <div className="p-6 relative">
            {renderSmallTRX()}
            <h2 className="text-2xl font-mono text-white mb-4">{selectedItem.name}</h2>
            <div className="bg-gray-900 p-4 rounded border border-red-500">
              <div className="bg-gray-800 h-64 flex items-center justify-center rounded mb-4">
                <span className="text-gray-400 font-mono">Vista previa de video</span>
              </div>
              <button className="bg-red-600 text-white px-6 py-2 font-mono hover:bg-red-700 transition-colors">
                REPRODUCIR VIDEO
              </button>
            </div>
          </div>
        );
      
      case 'pdf':
        return (
                <div className="p-1 sm:p-8 flex items-center justify-center h-full relative">
                  {renderSmallTRX()}
        <div className="w-full max-w-none">
          <div className="space-y-1 sm:space-y-4 px-2 sm:px-4">
                <p className="font-mono text-[9px] sm:text-xs leading-[1.3] sm:leading-tight uppercase" style={{ color: '#ff1200' }}>
                  TRX REPRESENTA LA CULMINACIÓN DE UNA DÉCADA DE INVESTIGACIÓN EN ARQUITECTURA EXPERIMENTAL Y DISEÑO COMPUTACIONAL. NACIDO EN LOS LABORATORIOS DE LA UNIVERSIDAD DE SANTIAGO DE COMPOSTELA, ESTE PROYECTO REVOLUCIONA LOS PARADIGMAS TRADICIONALES DE CONSTRUCCIÓN MEDIANTE LA IMPLEMENTACIÓN DE ALGORITMOS GENÉTICOS Y SISTEMAS DE FABRICACIÓN DIGITAL AVANZADOS.
                </p>
                
                <p className="font-mono text-[9px] sm:text-xs leading-[1.3] sm:leading-tight uppercase" style={{ color: '#ff1200' }}>
                  LA METODOLOGÍA TRX SE FUNDAMENTA EN TRES PILARES ESENCIALES: LA OPTIMIZACIÓN ESTRUCTURAL MEDIANTE MACHINE LEARNING, LA SOSTENIBILIDAD MATERIAL A TRAVÉS DE COMPOSITES BIODEGRADABLES, Y LA ADAPTABILIDAD ESPACIAL MEDIANTE SISTEMAS MODULARES INTELIGENTES. CADA ELEMENTO ARQUITECTÓNICO ES GENERADO ALGORÍTMICAMENTE, CONSIDERANDO VARIABLES AMBIENTALES, ESTRUCTURALES Y ESTÉTICAS EN TIEMPO REAL.
                </p>
                
                <p className="font-mono text-[9px] sm:text-xs leading-[1.3] sm:leading-tight uppercase" style={{ color: '#ff1200' }}>
                  LOS PROTOTIPOS TRX_001 Y TRX_002 REPRESENTAN DOS ENFOQUES DISTINTOS: MIENTRAS QUE TRX_001 SE CENTRA EN LA EFICIENCIA ENERGÉTICA Y LA INTEGRACIÓN PAISAJÍSTICA, TRX_002 EXPLORA LA FLEXIBILIDAD PROGRAMÁTICA Y LA TRANSFORMACIÓN TEMPORAL. AMBOS COMPARTEN LA FILOSOFÍA DE QUE LA ARQUITECTURA DEBE SER UN ORGANISMO VIVO, CAPAZ DE EVOLUCIONAR Y ADAPTARSE A LAS NECESIDADES CAMBIANTES DE SUS USUARIOS.
                </p>
                
                <p className="font-mono text-[9px] sm:text-xs leading-[1.3] sm:leading-tight uppercase" style={{ color: '#ff1200' }}>
                  EL FUTURO DEL PROYECTO TRX APUNTA HACIA LA IMPLEMENTACIÓN A GRAN ESCALA EN ENTORNOS URBANOS COMPLEJOS, DONDE LA INTELIGENCIA ARTIFICIAL Y LA ROBÓTICA COLABORATIVA PERMITIRÁN LA CONSTRUCCIÓN DE ESTRUCTURAS QUE SE AUTO-OPTIMIZAN Y SE REGENERAN CONTINUAMENTE, ESTABLECIENDO UN NUEVO ESTÁNDAR PARA LA ARQUITECTURA DEL SIGLO XXI.
                </p>
              </div>
            </div>
          </div>
        );
      
      case 'contact':
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
