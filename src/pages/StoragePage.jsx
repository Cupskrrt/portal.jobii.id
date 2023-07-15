// StoragePage.js
import React, { useState, useEffect } from 'react';
import FileCard from '../components/FileCard';
import FolderCard from '../components/FolderCard';
import TopBar from '../components/StorageTopBar';
import ContextMenu from '../components/ContextMenu';

const StoragePage = () => {
  const [contextMenu, setContextMenu] = useState({visible: false, x: 0, y: 0});

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu({visible: true, x: event.clientX, y: event.clientY});
  };

  const handleOptionClick = (option) => {
    console.log(option);
    setContextMenu({visible: false, x: 0, y: 0}); // Hide context menu after clicking an option
  };

  useEffect(() => {
    const hideContextMenu = () => {
      setContextMenu({visible: false, x: 0, y: 0});
    };
    window.addEventListener('click', hideContextMenu);
    window.addEventListener('contextmenu', hideContextMenu);

    return () => {
      window.removeEventListener('click', hideContextMenu);
      window.removeEventListener('contextmenu', hideContextMenu);
    };
  }, []); // Pass an empty dependency array to only run this effect on mount and unmount

  return (
    <>
      <TopBar />
      <div className="p-4">
        <div className="px-3 py-1 bg-white rounded shadow text-lg font-bold inline-block">
          Breadcrumb Soon..
        </div>

        <h1 className='font-bold text-lg mb-2 ml-2 mt-4'>Folders</h1>
        <div className="flex flex-wrap">
          <FolderCard onContextMenu={handleContextMenu} />
          <FolderCard onContextMenu={handleContextMenu} />
          <FolderCard onContextMenu={handleContextMenu} />
          <FolderCard onContextMenu={handleContextMenu} />
          <FolderCard onContextMenu={handleContextMenu} />
          <FolderCard onContextMenu={handleContextMenu} />
        </div>

        <h1 className='font-bold text-lg mb-2 ml-2'>Files</h1>
        <div className='flex flex-wrap justify-start'>
          <FileCard onContextMenu={handleContextMenu} />
          <FileCard onContextMenu={handleContextMenu} />
          <FileCard onContextMenu={handleContextMenu} />
          <FileCard onContextMenu={handleContextMenu} />
          <FileCard onContextMenu={handleContextMenu} />
          <FileCard onContextMenu={handleContextMenu} />
          <FileCard onContextMenu={handleContextMenu} />
          <FileCard onContextMenu={handleContextMenu} />
          <FileCard onContextMenu={handleContextMenu} />
          <FileCard onContextMenu={handleContextMenu} />
          <FileCard onContextMenu={handleContextMenu} />
          <FileCard onContextMenu={handleContextMenu} />
          <FileCard onContextMenu={handleContextMenu} />
        </div>

        {contextMenu.visible && <ContextMenu style={{top: `${contextMenu.y}px`, left: `${contextMenu.x}px`}} onOptionClick={handleOptionClick} />}
      </div>
    </>
  );
};

export default StoragePage;
