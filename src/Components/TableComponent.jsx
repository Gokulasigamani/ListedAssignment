import { useState, useRef, useEffect } from 'react';

const TableComponent = ({ data, fileType }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const dropdownRefs = useRef([]);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRefs.current.every((ref) => ref && !ref.contains(e.target))) {
      setDropdownOpen(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const tagsOptions = ['Tag1', 'Tag2', 'Tag3', 'Tag4', 'Tag5'];

  // Adjust headings based on file type
  const getHeadingText = () => {
    switch (fileType) {
      case 'Excel File':
        return ['S.No', 'Links', 'Prefix', 'Add Tags', 'Select Tags'];
      case 'CSV File':
        return ['S.No', 'URL', 'Prefix', 'Add Tags', 'Tags List'];
      case 'JSON File':
        return ['S.No', 'Link', 'Prefix', 'Add Tags', 'Tag List'];
      case 'Text File':
        return ['S.No', 'Content', 'Prefix', 'Add Tags', 'Tag Details'];
      default:
        return ['S.No', 'Links', 'Prefix', 'Add Tags', 'Select Tags'];
    }
  };

  return (
    <div className="flex justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-5 overflow-hidden w-full max-w-4xl">
        <div className="overflow-x-auto">
          <div className="relative">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {getHeadingText().map((heading, index) => (
                    <th key={index} className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${index === 0 ? 'sticky left-0 bg-gray-50 z-10' : ''}`}>
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((item, rowIndex) => (
                  <tr key={item.sno} className="relative hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 sticky left-0 bg-white">{item.sno}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <a href={item.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">{item.link}</a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.prefix}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button onClick={() => toggleDropdown(rowIndex)} className="bg-transparent border border-gray-400 rounded-md px-3 py-1 text-sm hover:bg-gray-200 focus:outline-none">
                        {dropdownOpen === rowIndex ? 'Close' : 'Add Tag'}
                      </button>
                      {dropdownOpen === rowIndex && (
                        <div ref={(ref) => (dropdownRefs.current[rowIndex] = ref)} className="absolute mt-2 py-2 w-48 bg-white border rounded shadow-xl z-50">
                          {tagsOptions.map((option) => (
                            <button
                              key={option}
                              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                              onClick={() => {
                                console.log(`Tag added: ${option}`);
                                setDropdownOpen(null);
                              }}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.tags.join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
