import { useState, useEffect } from "react";
import FolderCard from "./FolderCard";

const FoldersList = ({ onContextMenu, data, currentDirectory, changeDirectory }) => {

  const getItemName = (path) => {
    const parts = path.replace(currentDirectory, '').split("/");
    return parts[0]; // Get the first part as folder name
  };
  
  // Filter the 'content' array to get only the paths that are direct children of the current directory
  const folderPaths = data.content.filter((path) => {
    const parts = path.replace(currentDirectory, '').split("/");
    return parts.length === 2 && path.startsWith(currentDirectory) && !path.endsWith("/");
  });

  console.log("folderPaths", folderPaths); // DEBUG

  // Get unique folder names from 'folderPaths'
  const itemNames = Array.from(new Set(folderPaths.map(getItemName)));

  console.log("itemNames", itemNames); // DEBUG

  return (
    <div className="flex flex-wrap">
      {itemNames.map((itemName, index) => {
        const path = `${currentDirectory}${itemName}/`; // Use currentDirectory to construct path
        return (
          <FolderCard
            key={index}
            itemName={itemName}
            onContextMenu={onContextMenu}
            path={path}
            changeDirectory={changeDirectory}
          />
        );
      })}
    </div>
  );
};

export default FoldersList;
