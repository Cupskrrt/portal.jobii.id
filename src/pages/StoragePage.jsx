
import { useState, useEffect } from 'react';
import FilesList from '../components/Filelist';
import FoldersList from '../components/FolderList';
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

  const handleSearch = (query) => {
    
  };

  useEffect(() => {
    const hideContextMenu = () => {
      setContextMenu({visible: false, x: 0, y: 0});
    };
    window.addEventListener('click', hideContextMenu);
    window.addEventListener('contextmenu', hideContextMenu);
    window.addEventListener('scroll', hideContextMenu);

    return () => {
      window.removeEventListener('click', hideContextMenu);
      window.removeEventListener('contextmenu', hideContextMenu);
      window.removeEventListener('scroll', hideContextMenu);
    };
  }, []); // Pass an empty dependency array to only run this effect on mount and unmount

  return (
    <>
      <TopBar onSearch = {handleSearch} />
      <div className="p-4">
        <div className="px-3 py-1 bg-white rounded shadow text-lg font-bold inline-block">
          Breadcrumb Soon..
        </div>

        <h1 className='font-bold text-lg mb-2 ml-2 mt-4'>Folders</h1>
        <div className="flex flex-wrap">
          <FoldersList onContextMenu={handleContextMenu} />
        </div>

        <h1 className='font-bold text-lg mb-2 ml-2'>Files</h1>
        <div className='flex flex-wrap'>
          <FilesList onContextMenu={handleContextMenu}/>
        </div>

        {contextMenu.visible && <ContextMenu style={{top: `${contextMenu.y}px`, left: `${contextMenu.x}px`}} onOptionClick={handleOptionClick} />}
      </div>
    </>
  );
};

export default StoragePage;
  