import { useState } from 'react';
import SmallNavBar from './SmallNavBar';
import SmallSidebar from './SmallSideBar';
import SmallFileUpload from './SmallFileUpload';
import SmallTableComponent from './SmallTableComponent';

function SmallDashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showUpload, setShowUpload] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleUploadComplete = () => {
    setShowUpload(false);
  };

  return (
    <div className="w-full h-screen flex">
      <SmallSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 p-4 mt-[60px] transition-transform duration-300 ${isSidebarOpen ? 'ml-[250px]' : 'ml-0'}`}>
        <SmallNavBar toggleSidebar={toggleSidebar} />
        <div className="mt-4">
          <SmallFileUpload onUploadComplete={handleUploadComplete} />
          {!showUpload && (
            <div className="mt-4">
              <SmallTableComponent />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SmallDashboard;
