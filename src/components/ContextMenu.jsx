import { HiDownload, HiTrash, HiPencilAlt, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { useDeleteItemMutation, useRenameItemMutation } from '../redux/storage.slice';

const ContextMenu = ({ style, onOptionClick, path, itemName }) => {

  const [deleteItem, {isLoading: itemLoading}] = useDeleteItemMutation();
  const [renameItem] = useRenameItemMutation();

  const handleDeleteItem = async(itemName) => {
    await deleteItem(itemName)
    console.log(`${itemName} deleted`)
  };

  const handleRenameItem = async (itemName) => {
    const newName = window.prompt('Enter the new name', itemName);
    if (newName) {
      await renameItem({ itemName, newName });
      console.log(`${itemName} renamed to ${newName}`);
    }
  };

  return (
    <div className="fixed bg-white border rounded shadow-md" style={style}>
      <div className="py-1">
        <a href={`http://localhost:5000/download/${path}/${itemName}`} className="flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => onOptionClick('download')}>
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
