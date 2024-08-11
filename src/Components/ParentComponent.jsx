import { useState } from 'react';
import TableComponent from './TableComponent'; // Adjust the import path as needed
import FileUpload from './FileUpload'; // Adjust the import path as needed

const ParentComponent = () => {
  const [isUploaded, setIsUploaded] = useState(false);

  const handleUploadComplete = () => {
    setIsUploaded(true);
  };

  return (
    <div>
      <FileUpload onUploadComplete={handleUploadComplete} />
      {isUploaded && <TableComponent />}
    </div>
  );
};

export default ParentComponent;
