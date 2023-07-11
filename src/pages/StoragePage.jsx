import React, { useState, useEffect } from 'react';
import { HiFolder, HiOutlineDownload, HiOutlineUpload, HiPlusSm, HiChevronDown, HiSearch, HiOutlineDotsVertical, HiDatabase } from 'react-icons/hi';

const RightClickMenu = ({ x, y, options, onClose }) => {
  return (
    <div style={{position: 'absolute', top: y, left: x, background: 'white', boxShadow: '0px 0px 2px rgba(0,0,0,0.15)', borderRadius: '5px', zIndex: 10}}>
      {options.map(option => 
        <button 
          key={option} 
          onClick={onClose} 
          style={{display: 'block', padding: '10px', borderBottom: '1px solid #e5e5e5', width: '150px', textAlign: 'left'}}
        >
          {option}
        </button>
      )}
    </div>
  );
};

const FolderCard = () => {
  const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0 });

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu({ visible: true, x: event.clientX, y: event.clientY });
  };

  const handleCloseContextMenu = () => {
    setContextMenu({ visible: false, x: 0, y: 0 });
  };

  return (
    <div 
      className="w-[223px] h-[66px] border rounded-lg m-2 flex items-center space-x-4 bg-white shadow-lg" 
      onContextMenu={handleContextMenu} 
      onClick={handleCloseContextMenu}
    >
      <div className="pl-5">
        <HiFolder className="h-6 w-6 text-black" />
      </div>
      <div>
        <h2 className="text-xs font-[15]">Folder Name</h2>
        {/* Add other details here */}
      </div>
      {contextMenu.visible && 
        <RightClickMenu 
          x={contextMenu.x} 
          y={contextMenu.y} 
          options={['Open', 'Delete', 'Rename']} 
          onClose={handleCloseContextMenu}
        />
      }
    </div>
  );
};

const FileCard = () => {
  const [contextMenu, setContextMenu] = React.useState({ visible: false, x: 0, y: 0 });

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu({ visible: true, x: event.clientX, y: event.clientY });
  };

  const handleCloseContextMenu = () => {
    setContextMenu({ visible: false, x: 0, y: 0 });
  };

  return (
    <div 
      className="w-[223px] h-[234px] border rounded-lg m-2 flex-col space-y-4 bg-white shadow-lg p-0" 
      onContextMenu={handleContextMenu}
      onClick={handleCloseContextMenu}
    >
      <img className="w-full h-[170px] object-cover rounded-t-lg"
           src='https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg'
           alt='Preview'/>
      <div className="flex justify-between items-center px-3 py-1">
        <h2 className="font-[15]">File Name</h2>
        <HiOutlineDotsVertical />
      </div>
      {contextMenu.visible && 
        <RightClickMenu 
          x={contextMenu.x} 
          y={contextMenu.y} 
          options={['Open', 'Delete', 'Rename', 'ngab']} 
          onClose={handleCloseContextMenu}
        />
      }
    </div>
  );
};

const StoragePage = () => {
  const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0 });

  const handleCloseContextMenu = () => {
    setContextMenu({ visible: false, x: 0, y: 0 });
  };
  
  return (
    <>
      {contextMenu.visible && 
        <RightClickMenu 
          x={contextMenu.x} 
          y={contextMenu.y} 
          options={['Open', 'Delete', 'Rename']} 
          onClose={handleCloseContextMenu}
        />
      }
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