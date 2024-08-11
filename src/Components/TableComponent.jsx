import { useState, useRef, useEffect } from 'react';

const TableComponent = () => {
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

  const data = [
    { sno: 1, link: 'https://www.instagram.com', prefix: 'Instagram', tags: ['Tag1', 'Tag2'] },
    { sno: 2, link: 'https://www.twitter.com', prefix: 'Twitter', tags: ['Tag3', 'Tag4'] },
    { sno: 3, link: 'https://www.facebook.com', prefix: 'Facebook', tags: ['Tag3', 'Tag4'] },
    { sno: 4, link: 'https://www.linkedin.com', prefix: 'LinkedIn', tags: ['Tag3', 'Tag4'] },
    { sno: 5, link: 'https://www.snapchat.com', prefix: 'Snapchat', tags: ['Tag3', 'Tag4'] },
    { sno: 6, link: 'https://www.tiktok.com', prefix: 'TikTok', tags: ['Tag3', 'Tag4'] },
  ];

  const tagsOptions = ['Tag1', 'Tag2', 'Tag3', 'Tag4', 'Tag5'];

  return (
    <div className="flex justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-5 overflow-hidden w-full max-w-4xl">
        <div className="overflow-x-auto">
          <div className="relative">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 z-10">S.No</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Links</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prefix</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Add Tags</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Select Tags</th>
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 relative">
                      <div className="relative">
                        <button
                          onClick={() => toggleDropdown(rowIndex)}
                          className="flex items-center bg-transparent border border-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-100 focus:outline-none"
                        >
                          Add Tags
                          <svg className="h-5 w-5 ml-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        {dropdownOpen === rowIndex && (
                          <div
                            ref={(el) => dropdownRefs.current[rowIndex] = el}
                            className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10"
                            style={{ maxHeight: '200px', overflowY: 'auto' }}
                          >
                            <ul className="py-1">
                              {tagsOptions.map((tag, index) => (
                                <li key={index} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                                  {tag}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Select</button>
                    </td>
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
