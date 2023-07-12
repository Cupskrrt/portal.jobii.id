import React from 'react';
import FileCard from '../components/FileCard';
import FolderCard from '../components/FolderCard';
import TopBar from '../components/StorageTopBar';

const StoragePage = () => {
  return (
    <>
      <TopBar />
      <div className="p-4 bg-white shadow-md">
        Breadcrumb Soon..
      </div>
      <div className="p-4">
        <h1 className='font-bold text-lg mb-2 ml-2'>Folders</h1>
        <div className="flex flex-wrap">
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
