import { useState } from 'react';

const SmallFileUpload = ({ onUploadComplete }) => {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      setIsUploading(true);
      setTimeout(() => {
        setIsUploading(false);
        console.log('File uploaded:', file.name);
        onUploadComplete(); // Notify parent component that upload is complete
      }, 2000);
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div className="max-w-[300px] mx-auto mt-8 text-center">
      <div className="border-2 border-dashed border-gray-300 py-10 rounded-lg mb-4 relative min-h-[100px] flex items-center justify-center">
        <label className="cursor-pointer text-blue-500 hover:underline">
          <span>Choose file</span>
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>
      <button
        onClick={handleUpload}
        className={`w-full h-10 bg-indigo-500 text-white rounded-lg flex items-center justify-center ${
          isUploading ? 'cursor-not-allowed' : 'hover:bg-indigo-300'
        }`}
        disabled={isUploading}
      >
        {isUploading ? (
          <div className="loader" />
        ) : (
          'Upload'
        )}
      </button>

      <style>
        {`
          .loader {
            border: 3px solid #f3f3f3;
            border-radius: 50%;
            border-top: 3px solid #3498db;
            width: 24px;
            height: 24px;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default SmallFileUpload;
