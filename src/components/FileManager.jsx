import { useState, useEffect } from 'react';
import FilesList from '../components/Filelist';
import FoldersList from '../components/FolderList';
import TopBar from '../components/StorageTopBar';
import ContextMenu from '../components/ContextMenu';
import { useGetFilesQuery } from "../redux/storage.slice"; // import useGetFilesQuery here

const FileManager = () => {
  const [contextMenu, setContextMenu] = useState({visible: false, x: 0, y: 0});
  const [currentDirectory, setCurrentDirectory] = useState("/");
  const { data, error } = useGetFilesQuery(); // use the query hook here

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

  const folderPaths = data.content.filter((path) => {
    const parts = path.replace(currentDirectory, '').split("/");
    return parts.length === 2 && path.startsWith(currentDirectory) && path.endsWith("/");
  });

  const filePaths = data.content.filter((path) => {
    const parts = path.split("/");
    return (!path.endsWith("/") && parts[0] === currentDirectory);
  });

  return (
    <>
      <TopBar onSearch = {handleSearch} />
      <div className="p-4">
        <div className="px-3 py-1 bg-white rounded shadow text-lg font-bold inline-block">
          Breadcrumb Soon..
        </div>

        {(folderPaths.length > 0 || filePaths.length > 0) && (
          <>
            <h1 className='font-bold text-lg mb-2 ml-2 mt-4'>Folders</h1>
            <div className="flex flex-wrap">
              <FoldersList 
                onContextMenu={handleContextMenu} 
                data={folderPaths} 
                currentDirectory={currentDirectory} 
                changeDirectory={setCurrentDirectory}
              />
            </div>

            <h1 className='font-bold text-lg mb-2 ml-2'>Files</h1>
            <div className='flex flex-wrap'>
              <FilesList 
                onContextMenu={handleContextMenu} 
                data={filePaths} 
                currentDirectory={currentDirectory}
                changeDirectory={setCurrentDirectory}
              />
            </div>

            {contextMenu.visible && <ContextMenu style={{top: `${contextMenu.y}px`, left: `${contextMenu.x}px`}} onOptionClick={handleOptionClick} />}
          </>
        )}
      </div>
    </>
  );
};

export default FileManager;
