import { useState } from 'react';
import Sidebar from './Sidebar';
import Modal from './Modal';
import Preloader from './Preloader';
import RightInfo from './RightInfo';

const Layout = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleItemClick = (item) => {
    console.log('Layout - handleItemClick called with:', item); // Debug
    setSelectedItem(item);
    console.log('Layout - selectedItem set to:', item); // Debug
  };

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <div className="h-screen p-2 sm:p-6" style={{ backgroundColor: '#210d06' }}>
      <div
        className="flex flex-col-reverse sm:flex-row h-[90vh] sm:h-full relative rounded-border crt-effects crt-flicker mx-2 sm:mx-0"
      >
        <Sidebar onItemClick={handleItemClick} selectedItem={selectedItem} />
        <Modal selectedItem={selectedItem} />
        <RightInfo /> {/* Integrated RightInfo */}
      </div>
    </div>
  );
};

export default Layout;
