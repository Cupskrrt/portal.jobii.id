// ContextMenu.js
import React from 'react';
import { HiDownload, HiTrash, HiPencilAlt, HiOutlineArrowNarrowRight } from 'react-icons/hi';

const ContextMenu = ({ style, onOptionClick }) => {
  return (
    <div className="fixed bg-white border rounded shadow-md" style={style}>
      <div className="py-1">
        <a href="#" className="flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => onOptionClick('download')}>
          <HiDownload className="mr-2" /> Download
        </a>
        <a href="#" className="flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => onOptionClick('move')}>
          <HiOutlineArrowNarrowRight className="mr-2" /> Move To
        </a>
        <a href="#" className="flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => onOptionClick('delete')}>
          <HiTrash className="mr-2" /> Delete
        </a>
        <a href="#" className="flex items-center block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => onOptionClick('rename')}>
          <HiPencilAlt className="mr-2" /> Rename
        </a>
      </div>
    </div>
  );
};

export default ContextMenu;
