import React from 'react';

const FolderCard = () => {
  return (
    <div className="w-[223px] h-[66px] border rounded-lg m-2 flex items-center space-x-2 bg-white shadow-lg">
      <div className=" h-5 w-5 flex items-center justify-center rounded-lg text-black">
        <span>0</span>
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
      <div className="w-[223px] h-[234px] border rounded-lg m-2 flex-row-reverse items-center space-x-2 space-y-4 bg-white shadow-lg">
        <div className="bg-green-500 h-[170px] w-auto flex items-center justify-center rounded-lg text-white">
          {/* Replace this with an actual icon */}
          <span>File</span>
        </div>
        <div>
          <h2 className="flex justify-center font-[15]">File Name</h2>
          {/* Add other details like file size or modification date here */}
        </div>
      </div>
    );
  };


const StoragePage = () => {
  return (
    <>
      <div className="flex gap-4 p-4 items-center bg-white shadow-md">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
          New
        </button>
        <button className="px-4 py-2 bg-gray-300 text-black rounded-md">
          Upload
        </button>
        <button className="px-4 py-2 bg-gray-300 text-black rounded-md">
          Download
        </button>
        <input className="w-96 px-4 py-2 border rounded-md" type="text" placeholder="Search..." />
      </div>
      <div className="p-4 bg-white shadow-md">
        Breadcrumb Soon..
      </div>
      <div className="flex flex-wrap p-4">
        {/* Render multiple folder cards */}
        <FolderCard />
        <FolderCard />
        <FolderCard />
        <FolderCard />
        <FolderCard />
        <FolderCard />
      </div>
      <div className='flex flex-wrap justify-start p-4'>
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
    </>
  );
};

export default StoragePage;
