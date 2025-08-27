const RightInfo = () => {
  return (
    <div className="absolute right-0 top-0 bottom-0 w-8 flex flex-col items-center justify-between py-8 font-mono text-[10px] hidden sm:flex" style={{ color: '#ff1200' }}>
      {/* Línea vertical roja */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px]" style={{ 
        backgroundColor: '#ff1200',
        boxShadow: '0 0 2px rgba(255, 18, 0, 0.6)'
      }}></div>

      {/* TRX_TRAXE en la parte superior */}
      <div className="writing-mode-vertical-rl transform rotate-180 text-center">
        <span className="block">TRX_TRAXE</span>
      </div>

      {/* A PROJECT BY XOSE RODRÍGUEZ en el centro */}
      <div className="writing-mode-vertical-rl transform rotate-180 text-center">
        <span className="block">A PROJECT BY XOSE RODRÍGUEZ</span>
      </div>

      {/* TRX_TERMINALv0.0.1 en la parte inferior */}
      <div className="writing-mode-vertical-rl transform rotate-180 text-center">
        <span className="block">TRX_TERMINALv0.0.1</span>
      </div>
    </div>
  );
};

export default RightInfo;
