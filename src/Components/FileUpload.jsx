import { useState } from 'react';

const FileUpload = ({ onUploadComplete }) => {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setIsUploaded(false);
  };

  const handleUpload = () => {
    if (file) {
      setIsUploading(true);
      setTimeout(() => {
        setIsUploading(false);
        setIsUploaded(true);
        console.log('File uploaded:', file.name);
        onUploadComplete(); // Notify parent component
      }, 2000);
    } else {
      console.log('No file selected');
    }
  };

  const handleRemove = () => {
    setFile(null);
    setIsUploaded(false);
  };

  return (
    <div className="max-w-[500px] mx-auto mt-16 text-center">
      <div className="border-2 border-dashed border-gray-300 py-14 rounded-lg mb-4 relative min-h-[100px] flex items-center justify-center">
        {isUploaded ? (
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
              alt="Excel Icon"
              className="w-12 mb-2 mx-auto"
            />
            <p>{file.name}</p>
            <button
              onClick={handleRemove}
              className="text-red-500 mt-2 bg-transparent hover:underline decoration-clone"
            >
              Remove
            </button>
          </div>
        ) : (
          <label className="cursor-pointer text-blue-500 hover:underline">
            <span>Choose file</span>
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        )}
      </div>
      <button
        onClick={handleUpload}
        className={`w-full transition-all h-12 bg-indigo-500 text-white rounded-lg flex items-center justify-center ${
          isUploading ? 'cursor-not-allowed' : 'hover:bg-indigo-300'
        }`}
        disabled={isUploading}
      >
        {isUploading ? (
          <div className="loader" />
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-upload mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
              <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
            </svg>
            Upload
          </>
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

export default FileUpload;
