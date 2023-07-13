import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

const THUMBNAIL = "https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"; // Default thumbnail URL
const FILENAME = "File Name"; // Default file name

const FileCard = ({ thumbnail = THUMBNAIL, fileName = FILENAME, onContextMenu }) => {
    const handleIconClick = (event) => {
        event.stopPropagation();
        // Handle icon click here. This is where you will open your context menu.
        onContextMenu(event);
    };

    const handleCardClick = () => {
        // Handle card click here.
        console.log('Card clicked!');
    };

    return (
      <div 
        className="w-[223px] h-[234px] border rounded-lg m-2 flex-col space-y-4 bg-white shadow-lg p-0" 
        onClick={handleCardClick}
        onContextMenu={handleIconClick}
      >
        <img className="w-full h-[170px] object-cover rounded-t-lg"
             src={thumbnail}
             alt='Preview'/>
        <div className="flex justify-between items-center px-3 py-1">
          <h2 className="font-[15] pl-2">{fileName}</h2>
          <div className="icon cursor-pointer rounded-full inline-flex items-center justify-center transition-all duration-0 hover:bg-gray-200 p-1">
            <HiOutlineDotsVertical onClick={handleIconClick} />
          </div>
        </div>
      </div>
    );
};

export default FileCard;
