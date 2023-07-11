import React from 'react';
import { HiFolder, HiOutlineDownload, HiOutlineUpload, HiPlusSm, HiChevronDown, HiSearch, HiOutlineDotsVertical, HiDatabase } from 'react-icons/hi';

const FolderCard = () => {
  return (
    <div className="w-[223px] h-[66px] border rounded-lg m-2 flex items-center space-x-4 bg-white shadow-lg">
      <div className="pl-5">
        <HiFolder className="h-6 w-6 text-black" />
      </div>
      <div>
        <h2 className="text-xs font-[15]">Folder Name</h2>
        {/* Add other details here */}
      </div>
    </div>
  );
};

const FileCard = () => {
  return (
    <div className="w-[223px] h-[234px] border rounded-lg m-2 flex-col space-y-4 bg-white shadow-lg p-0">
      <img className="w-full h-[170px] object-cover rounded-t-lg"
           src='https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg'
           alt='Preview'/>
      <div className="flex justify-between items-center px-3 py-1">
        <h2 className="font-[15]">File Name</h2>
        <HiOutlineDotsVertical />
      </div>
    </div>
  );
};


const StoragePage = () => {
  return (
    <>
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
      <div className="p-4 bg-white shadow-md">
        Breadcrumb Soon..
      </div>

      <div className="p-4">
        <h1 className='font-bold text-lg mb-2 ml-2'>Folders</h1>
        <div className="flex flex-wrap">
          {/* Render multiple folder cards */}
          <FolderCard />
          <FolderCard />
          <FolderCard />
          <FolderCard />
          <FolderCard />
          <FolderCard />
        </div>
      </div>

      <div className="p-4">
        <h1 className='font-bold text-lg mb-2 ml-2'>Files</h1>
        <div className='flex flex-wrap justify-start'>
          {/* Render multiple file cards */}
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
        </div>
      </div>


    </>
  );
};

export default StoragePage;
