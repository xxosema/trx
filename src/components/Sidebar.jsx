import { useState, useEffect } from 'react';
import { projectData } from '../data/projectData';

const Sidebar = ({ onItemClick, selectedItem }) => {
  const [expandedSections, setExpandedSections] = useState({
    info: false,       // Todas cerradas por defecto
    trx_001: false,    
    trx_002: false,    
    contact: false     
  });

  // Funciones auxiliares para obtener el archivo activo de cada sección
  const getActiveInfoItem = () => {
    return projectData.info.find(item => item.id === selectedItem?.id);
  };

  const getActiveTrx001Item = () => {
    return projectData.projects[0].files.find(item => item.id === selectedItem?.id);
  };

  const getActiveTrx002Item = () => {
    return projectData.projects[1].files.find(item => item.id === selectedItem?.id);
  };

  const getActiveContactItem = () => {
    // Para contact, verificamos si el selectedItem es de tipo contact
    if (selectedItem?.type === 'contact') {
      // Determinar cuál de los elementos de contact está activo
      if (selectedItem?.id === 'email') return 'HOLA@XOSEMA.COM';
      if (selectedItem?.id === 'phone') return '+34648700293';
      if (selectedItem?.id === 'website') return 'HTTPS://XOSE.INFO';
    }
    return null;
  };

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
          info: false,
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
      const newState = {
        info: section === 'info',
        trx_001: section === 'trx_001',
        trx_002: section === 'trx_002',
        contact: section === 'contact'
      };
      
      // En móvil, cuando se abre una sección, mostrar "Awaiting user input..."
      if (window.innerWidth < 640) {
        const sectionNames = {
          info: 'THE PROJECT',
          trx_001: 'TRX_001',
          trx_002: 'TRX_002',
          contact: 'CONTACT'
        };
        
        onItemClick({
          id: `section-${section}`,
          name: `${sectionNames[section]} - Awaiting user input...`,
          type: 'section',
          section: section
        });
      }
      
      return newState;
    });
  };

  const handleItemClick = (item, type) => {
    console.log('Sidebar - Item clicked:', item); // Debug
    console.log('Sidebar - Type:', type); // Debug
    console.log('Sidebar - Calling onItemClick with:', { ...item, type: item.type }); // Corregido: usar item.type en lugar de type
    console.log('Window width:', window.innerWidth); // Debug - Verificar ancho de ventana
    
    // En móvil, cerrar TODAS las secciones para optimizar espacio
    if (window.innerWidth < 640) {
      console.log('Mobile detected, closing ALL sections...'); // Debug
      
      // Cerrar todas las secciones
      setExpandedSections({
        info: false,
        trx_001: false,
        trx_002: false,
        contact: false
      });
      
      console.log('All sections closed for mobile'); // Debug
    } else {
      console.log('Desktop detected, no section closing'); // Debug
    }
    
    onItemClick({ ...item, type: item.type }); // Corregido: usar item.type en lugar de type
  };



  return (
    <div className="w-full sm:w-2/5 border-r-0 sm:border-r h-auto sm:h-full relative sidebar-optimized" style={{
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
            <span>THE PROJECT ↓</span>
            {/* Mostrar archivo activo en móvil */}
            {window.innerWidth < 640 && getActiveInfoItem() && (
              <span className="text-xs opacity-80 truncate ml-2">
                {getActiveInfoItem().name}
              </span>
            )}
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
            <span>TRX_001 ↓</span>
            {/* Mostrar archivo activo en móvil */}
            {window.innerWidth < 640 && getActiveTrx001Item() && (
              <span className="text-xs opacity-80 truncate ml-2">
                {getActiveTrx001Item().name}
              </span>
            )}
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
            <span>TRX_002 ↓</span>
            {/* Mostrar archivo activo en móvil */}
            {window.innerWidth < 640 && getActiveTrx002Item() && (
              <span className="text-xs opacity-80 truncate ml-2">
                {getActiveTrx002Item().name}
              </span>
            )}
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
            <span>CONTACT ↓</span>
            {/* Mostrar archivo activo en móvil */}
            {window.innerWidth < 640 && getActiveContactItem() && (
              <span className="text-xs opacity-80 truncate ml-2">
                {getActiveContactItem()}
              </span>
            )}
          </button>
          
          {expandedSections.contact && (
            <div>
              <button 
                onClick={() => {
                  // En móvil, cerrar todas las secciones para optimizar espacio
                  if (window.innerWidth < 640) {
                    setExpandedSections({
                      info: false,
                      trx_001: false,
                      trx_002: false,
                      contact: false
                    });
                  }
                  // Llamar a handleItemClick para rastrear el elemento activo
                  handleItemClick({ id: 'email', name: 'HOLA@XOSEMA.COM', type: 'contact' }, 'contact');
                  window.open('mailto:hola@xosema.com', '_blank');
                }}
                className="w-full text-left px-3 py-2.5 font-mono text-xs hover:bg-red-600/80 hover:text-black transition-colors focus:outline-none focus:ring-0 border-0 shadow-none sidebar-item-hover"
                style={{ color: '#ff1200' }}
              >
                HOLA@XOSEMA.COM
              </button>
              {/* Borde rojo entre elementos */}
              <div className="item-border"></div>
              <button 
                onClick={() => {
                  // En móvil, cerrar todas las secciones para optimizar espacio
                  if (window.innerWidth < 640) {
                    setExpandedSections({
                      info: false,
                      trx_001: false,
                      trx_002: false,
                      contact: false
                    });
                  }
                  // Llamar a handleItemClick para rastrear el elemento activo
                  handleItemClick({ id: 'phone', name: '+34648700293', type: 'contact' }, 'contact');
                  window.open('tel:+34648700293', '_blank');
                }}
                className="w-full text-left px-3 py-2.5 font-mono text-xs hover:bg-red-600/80 hover:text-black transition-colors focus:outline-none focus:ring-0 border-0 shadow-none sidebar-item-hover"
                style={{ color: '#ff1200' }}
              >
                +34648700293
              </button>
              {/* Borde rojo entre elementos */}
              <div className="item-border"></div>
              <button 
                onClick={() => {
                  // En móvil, cerrar todas las secciones para optimizar espacio
                  if (window.innerWidth < 640) {
                    setExpandedSections({
                      info: false,
                      trx_001: false,
                      trx_002: false,
                      contact: false
                    });
                  }
                  // Llamar a handleItemClick para rastrear el elemento activo
                  handleItemClick({ id: 'website', name: 'HTTPS://XOSE.INFO', type: 'contact' }, 'contact');
                  window.open('https://xose.info', '_blank');
                }}
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
