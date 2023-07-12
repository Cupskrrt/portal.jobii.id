import React from 'react';
import { HiOutlineDownload, HiOutlineUpload, HiPlusSm, HiChevronDown, HiSearch } from 'react-icons/hi';

const TopBar = () => {
  return (
    <div className="flex gap-4 p-4 items-center bg-white shadow-md">
      <button className="px-5 py-2 bg-blue-500 text-white flex justify-center items-center rounded-md font-[14]">
        <HiPlusSm className="mr-2 w-5 h-auto"/> New <HiChevronDown className="ml-2 w-5 h-auto"/>
      </button>
      <button className="px-4 py-2 text-black rounded-md flex items-center font-[14]">
        <HiOutlineUpload className="mr-2" /> Upload
      </button>
      <button className="px-4 py-2 text-black rounded-md flex items-center font-[14]">
        <HiOutlineDownload className="mr-2" /> Download
      </button>
      <div className="w-96 px-4 py-2 border rounded-md flex items-center">
        <HiSearch className="mr-2 "/>
        <input type="text" placeholder=" Search" className='flex-auto px-1' />
      </div>
    </div>
  );
};

export default TopBar;