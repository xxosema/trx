import { useState, useEffect } from 'react';
import { projectData } from '../data/projectData';

const Sidebar = ({ onItemClick, selectedItem }) => {
  const [expandedSections, setExpandedSections] = useState({
    info: true,        // Solo THE PROJECT abierto por defecto
    trx_001: false,    // TRX_001 cerrado
    trx_002: false,    // TRX_002 cerrado
    contact: false     // CONTACT cerrado
  });

  // En desktop, todas las secciones abiertas y no se pueden cerrar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setExpandedSections({
          info: true,
          trx_001: true,
          trx_002: true,
          contact: true
        });
      } else {
        setExpandedSections({
          info: true,
          trx_001: false,
          trx_002: false,
          contact: false
        });
      }
    };

    // Ejecutar al montar el componente
    handleResize();
    
    // Escuchar cambios de tamaño de ventana
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSection = (section) => {
    // En desktop (pantallas >= 640px) no se pueden cerrar las secciones
    if (window.innerWidth >= 640) {
      return;
    }
    
    setExpandedSections(prev => {
      // Si la sección ya está abierta, la cerramos
      if (prev[section]) {
        return {
          ...prev,
          [section]: false
        };
      }
      // Si la sección está cerrada, la abrimos y cerramos las demás
      return {
        info: section === 'info',
        trx_001: section === 'trx_001',
        trx_002: section === 'trx_002',
        contact: section === 'contact'
      };
    });
  };

  const handleItemClick = (item, type) => {
    console.log('Sidebar - Item clicked:', item); // Debug
    console.log('Sidebar - Type:', type); // Debug
    console.log('Sidebar - Calling onItemClick with:', { ...item, type: item.type }); // Debug - Usar item.type en lugar de type
    onItemClick({ ...item, type: item.type }); // Corregido: usar item.type en lugar de type
  };



  return (
    <div className="w-full sm:w-2/5 border-r-0 sm:border-r h-auto sm:h-full relative" style={{
      borderRightColor: '#ff1200',
      borderRightWidth: '1px',
      boxShadow: '2px 0 4px rgba(255, 18, 0, 0.3)'
    }}>
      <div className="space-y-0 h-auto sm:h-full flex flex-col">
        {/* THE PROJECT Section */}
        <div className="flex-shrink-0">
          <button
            onClick={() => toggleSection('info')}
            className="w-full text-left px-3 py-2.5 font-mono text-xs flex justify-between items-center hover:bg-red-700 hover:text-white transition-colors focus:outline-none focus:ring-0 border-0 shadow-none sidebar-item-hover"
            style={{ backgroundColor: '#ff1200', color: 'black' }}
          >
            THE PROJECT ↓
          </button>
          
          {expandedSections.info && (
            <div>
              {projectData.info.map((item, index) => (
                <div key={item.id}>
                  <button
                    onClick={() => handleItemClick(item, 'info')}
                    className={`w-full text-left px-3 py-2.5 font-mono text-xs hover:bg-red-600/80 hover:text-black transition-colors focus:outline-none focus:ring-0 border-0 shadow-none sidebar-item-hover ${
                      selectedItem?.id === item.id ? 'bg-red-600/80 text-black' : ''
                    }`}
                    style={{ 
                      color: '#ff1200',
                      textShadow: '0 0 2px rgba(255, 18, 0, 0.4)'
                    }}
                  >
                    {item.name}
                  </button>
                  {/* Borde rojo entre elementos (solo desde el texto indentado hasta el borde derecho) */}
                  {index < projectData.info.length - 1 && (
                    <div className="item-border"></div>
                  )}
                </div>
              ))}
            </div>
          )}
          {/* Borde rojo después de la sección (de borde a borde) */}
          <div className="sidebar-border mt-1"></div>
        </div>

        {/* TRX_001 Section */}
        <div className="flex-shrink-0">
          <button
            onClick={() => toggleSection('trx_001')}
            className="w-full text-left px-3 py-2.5 font-mono text-xs flex justify-between items-center hover:bg-red-700 hover:text-white transition-colors focus:outline-none focus:ring-0 border-0 shadow-none sidebar-item-hover"
            style={{ backgroundColor: '#ff1200', color: 'black' }}
          >
            TRX_001 ↓
          </button>
          
          {expandedSections.trx_001 && (
            <div>
              {projectData.projects[0].files.map((item, index) => (
                <div key={item.id}>
                  <button
                    onClick={() => handleItemClick(item, 'project')}
                    className={`w-full text-left px-3 py-2.5 font-mono text-xs hover:bg-red-600/80 hover:text-black transition-colors focus:outline-none focus:ring-0 border-0 shadow-none sidebar-item-hover ${
                      selectedItem?.id === item.id ? 'bg-red-600/80 text-black' : ''
                    }`}
                    style={{ color: '#ff1200' }}
                  >
                    {item.name}
                  </button>
                  {/* Borde rojo entre elementos (solo desde el texto indentado hasta el borde derecho) */}
                  {index < projectData.projects[0].files.length - 1 && (
                    <div className="item-border"></div>
                  )}
                </div>
              ))}
            </div>
          )}
          {/* Borde rojo después de la sección (de borde a borde) */}
          <div className="sidebar-border mt-1"></div>
        </div>

        {/* TRX_002 Section */}
        <div className="flex-shrink-0">
          <button
            onClick={() => toggleSection('trx_002')}
            className="w-full text-left px-3 py-2.5 font-mono text-xs flex justify-between items-center hover:bg-red-700 hover:text-white transition-colors focus:outline-none focus:ring-0 border-0 shadow-none sidebar-item-hover"
            style={{ backgroundColor: '#ff1200', color: 'black' }}
          >
            TRX_002 ↓
          </button>
          
          {expandedSections.trx_002 && (
            <div>
              {projectData.projects[1].files.map((item, index) => (
                <div key={item.id}>
                  <button
                    onClick={() => handleItemClick(item, 'project')}
                    className={`w-full text-left px-3 py-2.5 font-mono text-xs hover:bg-red-600/80 hover:text-black transition-colors focus:outline-none focus:ring-0 border-0 shadow-none sidebar-item-hover ${
                      selectedItem?.id === item.id ? 'bg-red-600/80 text-black' : ''
                    }`}
                    style={{ color: '#ff1200' }}
                  >
                    {item.name}
                  </button>
                  {/* Borde rojo entre elementos (solo desde el texto indentado hasta el borde derecho) */}
                  {index < projectData.projects[1].files.length - 1 && (
                    <div className="item-border"></div>
                  )}
                </div>
              ))}
            </div>
          )}
          {/* Borde rojo después de la sección (de borde a borde) */}
          <div className="sidebar-border mt-1"></div>
        </div>

        {/* CONTACT Section */}
        <div className="flex-shrink-0">
          <button
            onClick={() => toggleSection('contact')}
            className="w-full text-left px-3 py-2.5 font-mono text-xs flex justify-between items-center hover:bg-red-700 hover:text-white transition-colors focus:outline-none focus:ring-0 border-0 shadow-none sidebar-item-hover"
            style={{ backgroundColor: '#ff1200', color: 'black' }}
          >
            CONTACT ↓
          </button>
          
          {expandedSections.contact && (
            <div>
              <button 
                onClick={() => window.open('mailto:hola@xosema.com', '_blank')}
                className="w-full text-left px-3 py-2.5 font-mono text-xs hover:bg-red-600/80 hover:text-black transition-colors focus:outline-none focus:ring-0 border-0 shadow-none sidebar-item-hover"
                style={{ color: '#ff1200' }}
              >
                HOLA@XOSEMA.COM
              </button>
              {/* Borde rojo entre elementos */}
              <div className="item-border"></div>
              <button 
                onClick={() => window.open('tel:+34648700293', '_blank')}
                className="w-full text-left px-3 py-2.5 font-mono text-xs hover:bg-red-600/80 hover:text-black transition-colors focus:outline-none focus:ring-0 border-0 shadow-none sidebar-item-hover"
                style={{ color: '#ff1200' }}
              >
                +34648700293
              </button>
              {/* Borde rojo entre elementos */}
              <div className="item-border"></div>
              <button 
                onClick={() => window.open('https://xose.info', '_blank')}
                className="w-full text-left px-3 py-2.5 font-mono text-xs hover:bg-red-600/80 hover:text-black transition-colors focus:outline-none focus:ring-0 border-0 shadow-none sidebar-item-hover"
                style={{ color: '#ff1200' }}
              >
                HTTPS://XOSE.INFO
              </button>
              {/* Borde rojo después de la sección (de borde a borde) */}
              <div className="sidebar-border mt-1"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
