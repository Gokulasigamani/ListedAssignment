import { useState } from 'react';
import SmallNavBar from './SmallNavBar';
import SmallSidebar from './SmallSideBar';
import SmallFileUpload from './SmallFileUpload';
import SmallTableComponent from './SmallTableComponent';

function SmallDashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showUpload, setShowUpload] = useState(true);
  const [isFileUploadActive, setFileUploadActive] = useState(false);

  const toggleSidebar = () => {
    // Toggle sidebar and update file upload active state based on sidebar state
    setSidebarOpen(!isSidebarOpen);
    setFileUploadActive(!isSidebarOpen);
  };

  const handleUploadComplete = () => {
    setShowUpload(false);
    setFileUploadActive(false);
  };

  return (
    <div className="w-full h-screen flex relative">
      <SmallSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`flex-1 p-4 mt-[60px] transition-transform duration-300 ${isSidebarOpen ? 'ml-[-250px]' : 'ml-0'} ${
          isFileUploadActive ? 'pointer-events-none' : ''
        }`}
      >
        <SmallNavBar toggleSidebar={toggleSidebar} />
        <div className="mt-4">
          <div className="max-w-[300px] mx-auto">
            <SmallFileUpload onUploadComplete={handleUploadComplete} />
            {!showUpload && (
              <div className="mt-4 max-sm:w-full -ml-[px] overflow-x-auto">
                <SmallTableComponent />
              </div>
            )}
          </div>
        </div>
      </div>
      {isFileUploadActive && (
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
      )}
    </div>
  );
}

export default SmallDashboard;
