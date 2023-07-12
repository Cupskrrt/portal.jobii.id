import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

const THUMBNAIL = "https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"; // Default thumbnail URL
const FILENAME = "File Name"; // Default file name

const FileCard = ({ thumbnail = THUMBNAIL, fileName = FILENAME }) => {
    const handleIconClick = (event) => {
        event.stopPropagation();
        // Handle icon click here. This is where you will likely open your context menu.
        console.log('Icon clicked!');
    };

    const handleCardClick = () => {
        // Handle card click here.
        console.log('Card clicked!');
    };

    return (
      <div 
        className="w-[223px] h-[234px] border rounded-lg m-2 flex-col space-y-4 bg-white shadow-lg p-0" 
        onClick={handleCardClick}
      >
        <img className="w-full h-[170px] object-cover rounded-t-lg"
             src={thumbnail}
             alt='Preview'/>
        <div className="flex justify-between items-center px-3 py-1">
          <h2 className="font-[15]">{fileName}</h2>
          <div className="icon">
            <HiOutlineDotsVertical onClick={handleIconClick} />
          </div>
        </div>
        <style jsx>{`
          .icon {
            cursor: pointer;
            border-radius: 100%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition: border 0s ease-in-out;
          }
          .icon:hover {
            border: 0.1px solid #D9D9D9; // Change this to whatever color you want when hovering over the icon
          }
        `}</style>
      </div>
    );
};

export default FileCard;
