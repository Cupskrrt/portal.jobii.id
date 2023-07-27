import { useState, useEffect } from 'react';
import FilesList from '../components/Filelist';
import FoldersList from '../components/FolderList';
import TopBar from '../components/StorageTopBar';
import ContextMenu from '../components/ContextMenu';
import { useGetFilesQuery, useSearchFilesQuery } from "../redux/storage.slice";
import Breadcrumb from '../components/Breadcrumb';
import { HiOutlineArrowSmLeft } from "react-icons/hi";

const StoragePage = () => {
  const [contextMenu, setContextMenu] = useState({visible: false, x: 0, y: 0, path: '', itemName: ''});
  const [currentDirectory, setCurrentDirectory] = useState("/");
  const { data, error } = useGetFilesQuery();
  const [searchquery, setSearchQuery] = useState('');
  const {data : searchResults, error : searchError } = useSearchFilesQuery(searchquery); 

  const handleContextMenu = (event, path, itemName) => {
    event.preventDefault();
    setContextMenu({
      visible: true, 
      x: event.clientX, 
      y: event.clientY,
      path: path,
      itemName: itemName,
    });
  };

  const handleOptionClick = (option) => {
    console.log(option);
    setContextMenu({visible: false, x: 0, y: 0, path: '', itemName: ''});
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log({searchResults});
  };

  const handleBackClick = () => {
    const parts = currentDirectory.split("/").filter(Boolean);
    if(parts.length > 0) {
      const newPath = "/" + parts.slice(0, parts.length - 1).join("/");
      setCurrentDirectory(newPath);
    }
  };

  useEffect(() => {
    const hideContextMenu = () => {
      setContextMenu({visible: false, x: 0, y: 0, path: '', itemName: ''});
    };
    window.addEventListener('click', hideContextMenu);
    window.addEventListener('contextmenu', hideContextMenu);
    window.addEventListener('scroll', hideContextMenu);

    return () => {
      window.removeEventListener('click', hideContextMenu);
      window.removeEventListener('contextmenu', hideContextMenu);
      window.removeEventListener('scroll', hideContextMenu);
    };
  }, []);

  if(error) return <div className="flex items-center justify-center h-screen border-2 border-red-500 rounded-lg">Failed to load</div>
  if(!data) return <div className="flex items-center justify-center h-screen border-2 border-blue-500 rounded-lg">Loading...</div>

  // Calculate the number of folders and files
  const numberOfFolders = data.content.filter((path) => {
    const parts = path.replace(currentDirectory, '').split("/");
    return parts.length === 2 && path.startsWith(currentDirectory) && !path.endsWith("/");
  }).length;

  const numberOfFiles = data.content.filter((path) => {
    const parts = path.split("/");
    return (!path.endsWith("/") && path.startsWith(currentDirectory) && path.replace(currentDirectory, '').split("/").length === 1);
  }).length;

  return (
    <>
      <TopBar onSearch = {handleSearch} /> 
      <div className="p-4">
        <div className='flex items-center'>
          { currentDirectory !== '/' && 
            <div 
              onClick={handleBackClick} 
              className="icon cursor-pointer rounded-full inline-flex items-center justify-center transition-all duration-200 hover:bg-gray-200 p-1 mr-2"
            >
              <HiOutlineArrowSmLeft size={20} />
            </div>
          }
          <Breadcrumb 
            currentDirectory={currentDirectory}
            changeDirectory={setCurrentDirectory}
          />
        </div>

        {numberOfFolders > 0 && (
          <>
            <h1 className='font-bold text-lg mb-2 ml-2 mt-4'>Folders</h1>
            <FoldersList 
              onContextMenu={handleContextMenu} 
              data={data}
              error={error} 
              currentDirectory={currentDirectory} 
              changeDirectory={setCurrentDirectory}
            />
          </>
        )}

        {numberOfFiles > 0 && (
          <>
            <h1 className='font-bold text-lg mb-2 ml-2 mt-4'>Files</h1>
            <FilesList      
              onContextMenu={handleContextMenu} 
              data={data} 
              error={error} 
              currentDirectory={currentDirectory}
              changeDirectory={setCurrentDirectory}
            />
          </>
        )}

        {contextMenu.visible && 
          <ContextMenu 
            style={{top: `${contextMenu.y}px`, left: `${contextMenu.x}px`}} 
            onOptionClick={handleOptionClick} 
            path={contextMenu.path} 
            itemName={contextMenu.itemName} 
          />}
      </div>
    </>
  );
};

export default StoragePage;
