import { useState } from 'react';
import { HiDownload, HiTrash, HiPencilAlt, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { useDeleteItemMutation, useRenameItemMutation, useGetFilesQuery, useMoveItemMutation } from '../redux/storage.slice';

const ContextMenu = ({ style, onOptionClick, path, itemName, }) => {

  const [deleteItem] = useDeleteItemMutation();
  const [renameItem] = useRenameItemMutation();
  const [moveItem] = useMoveItemMutation();
  const { refetch } = useGetFilesQuery();

  const [showMoveSubMenu, setShowMoveSubMenu] = useState(false);

  let directory = path.replace(itemName, '').replace(/^\/|\/$/g, '');
  if (directory === "") {
    directory = "file";
  } else {
    directory = 'file-' + directory.replace(/\//g, '-');
  }

  let subdir = path.replace(itemName, '').replace(/^\/|\/$/g, '');
  if (subdir !== "") {
    subdir = subdir + `-`;
  }

  const handleMoveToClick = () => {
    setShowMoveSubMenu(!showMoveSubMenu);
  };
  
  const handleMove = async (sourceFilename, targetDirectory) => {
    await moveItem({ sourceFilename, targetDirectory }).then(() => refetch());
    console.log(`Moved ${sourceFilename} to ${targetDirectory}`);
  };

  const handleDeleteItem = async(itemName) => {
    await deleteItem(itemName).then(() => refetch());
    console.log(`${itemName} deleted`);
  };

  const handleRenameItem = async (itemName) => {
    const oldName = itemName.split('/').filter(Boolean).pop();
    const newName = window.prompt('Enter the new name', oldName.split('.')[0]);
    if (newName) {
      let newNameWithExtension;
      // Check if itemName is a file (contains a '.')
      if(itemName.includes('.')) {
        // If itemName is a file, append the old file extension to the new name
        newNameWithExtension = `${newName}.${itemName.split('.').pop()}`;
      } else {
        // If itemName is a directory, just use the new name
        newNameWithExtension = `${newName}`;
      }
      const oldNameWithPath = `${subdir}${oldName}`;
      const newNameWithPath = `${subdir}${newNameWithExtension}`;
      await renameItem({ itemName: oldNameWithPath, newName: newNameWithPath }).then(() => refetch());
      console.log(`${oldNameWithPath} renamed to ${newNameWithPath}`);
    }
  };

  return (
    <div className="fixed bg-white border rounded shadow-md" style={style}>
      <div className="py-1">
        <a href={`http://127.0.0.1:5000/download/${directory}/${itemName}`} className="flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => onOptionClick('download')}>
          <HiDownload className="mr-2" /> Download
        </a>
        <a href="#" className="flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => onOptionClick('move')}>
          <HiOutlineArrowNarrowRight className="mr-2" /> Move To
        </a>
        <a className="flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={(e) => { e.preventDefault(); handleDeleteItem(itemName); }}>
          <HiTrash className="mr-2" /> Delete
        </a>
        <a className="flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={(e) => { e.preventDefault(); handleRenameItem(itemName); }}>
          <HiPencilAlt className="mr-2" /> Rename
        </a>
      </div>
    </div>
  );
};

export default ContextMenu;
