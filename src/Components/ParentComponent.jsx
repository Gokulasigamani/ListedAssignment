import { useState } from 'react';
import TableComponent from './TableComponent'; // Adjust the import path as needed
import FileUpload from './FileUpload'; // Adjust the import path as needed

const ParentComponent = () => {
  const [tableData, setTableData] = useState([]);

  const handleUploadComplete = (extractedData) => {
    setTableData(extractedData);
  };

  return (
    <div>
      <FileUpload onUploadComplete={handleUploadComplete} />
      {tableData.length > 0 && <TableComponent data={tableData} />}
    </div>
  );
};

export default ParentComponent;
