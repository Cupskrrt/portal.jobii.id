import React from "react";
import { HiFolder } from "react-icons/hi";

const FolderCard = ({ folderName = "Folder Name" }) => {
    const handleClick = () => {
        // Handle card click here.
        console.log(`Folder ${folderName} clicked!`);
    };

    return (
      <div 
        className="w-[223px] h-[66px] border rounded-lg m-2 flex items-center space-x-4 bg-white shadow-lg" 
        onClick={handleClick}
      >
        <div className="pl-5">
          <HiFolder className="h-6 w-6 text-black" />
        </div>
        <div>
          <h2 className="text-xs font-[15]">{folderName}</h2>
          {/* Add other details here */}
        </div>
      </div>
    );
};

export default FolderCard;
