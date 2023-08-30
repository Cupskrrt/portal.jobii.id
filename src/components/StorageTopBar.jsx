import React, { useState, useEffect } from 'react';
import { HiOutlineDownload, HiOutlineUpload, HiPlusSm, HiChevronDown, HiSearch, HiFolder, HiDocument } from 'react-icons/hi';

const TopBar = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  const [newDropdownOpen, setNewDropdownOpen] = useState(false);
  const [uploadDropdownOpen, setUploadDropdownOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearch(search);
    }
  };

  const handleFileUploadClick = (event) => {
    event.stopPropagation();
    // document.getElementById("fileUploadInput").click();
  };

  const handleNewDropdownClick = (event) => {
    event.stopPropagation(); 
    setNewDropdownOpen(!newDropdownOpen);
    if (uploadDropdownOpen) {
      setUploadDropdownOpen(false);
    }
  };

  const handleUploadDropdownClick = (event) => {
    event.stopPropagation(); 
    setUploadDropdownOpen(!uploadDropdownOpen);
    if (newDropdownOpen) {
      setNewDropdownOpen(false);
    }
  };

  useEffect(() => {
    const hideDropdowns = () => {
      setNewDropdownOpen(false);
      setUploadDropdownOpen(false);
    };
    window.addEventListener('click', hideDropdowns);
    window.addEventListener('contextmenu', hideDropdowns);
    window.addEventListener('scroll', hideDropdowns);

    return () => {
      window.removeEventListener('click', hideDropdowns);
      window.removeEventListener('contextmenu', hideDropdowns);
      window.removeEventListener('scroll', hideDropdowns);
    };
  }, []);

  return (
    <div className="flex gap-4 p-4 items-center bg-white shadow-md sticky top-0 z-50">
      {/* New Dropdown */}
      <div className="relative">
        <button onClick={handleNewDropdownClick} className="px-5 py-2 bg-blue-500 text-white flex justify-center items-center rounded-md font-[14]">
          <HiPlusSm className="mr-2 w-5 h-auto"/> New <HiChevronDown className="ml-2 w-5 h-auto"/>
        </button>
        {newDropdownOpen && 
          <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white">
            <div className="py-1 rounded-md bg-white shadow-xs">
              <a href="#" className="flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><HiFolder className="mr-2" /> New Folder</a>
            </div>
          </div>
        }
      </div>
      
      <div className="relative">
        <button onClick={handleUploadDropdownClick} className="pl-4 pr-3 py-2 text-black rounded-md flex items-center font-[14]">
          <HiOutlineUpload className="mr-2" /> Upload <HiChevronDown className="ml-2 w-5 h-auto"/>
        </button>
        {uploadDropdownOpen && 
          <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white">
            <div className="py-1 rounded-md bg-white shadow-xs">
              <a href="#" className="flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><HiFolder className="mr-2" /> Upload Folder</a>
              <a 
                href="#" 
                className="flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={handleFileUploadClick}
              >
                <HiDocument className="mr-2" /> Upload File
              </a>
              <input 
                type="file" 
                id="fileUploadInput" 
                style={{ display: "none" }} 
              />
            </div>
          </div>
        }
      </div>
      
      {/* Download Button */}
      <button className="pl-4 pr-4 py-2 text-black rounded-md flex items-center font-[14]">
        <HiOutlineDownload className="mr-2" /> Download
      </button>
      
      {/* Search Bar */}
      <div className="w-96 px-4 py-2 border rounded-md flex items-center">
        <HiSearch className="mr-2 "/>
        <input 
          type="text" 
          placeholder=" Search" 
          className='flex-auto px-1' 
          value={search}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default TopBar;
