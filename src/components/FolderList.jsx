import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import FolderCard from "./FolderCard";

const FoldersList = ({ onContextMenu, data, currentDirectory, changeDirectory }) => {

  const user = useSelector(state => state.persistedReducer.auth?.user?.email);  // Access email from the store

  const getItemName = (path) => {
    const parts = path.replace(currentDirectory, '').split("/");
    return parts[0]; // Get the first part as folder name
  };
  
  // Filter the 'content' array to get only the paths that are direct children of the current directory
  const folderPaths = data.content.filter((path) => {
    const parts = path.replace(currentDirectory, '').split("/");
    return parts.length === 2 && path.startsWith(currentDirectory) && !path.endsWith("/");
  });


  // Get unique folder names from 'folderPaths'
  const itemNames = Array.from(new Set(folderPaths.map(getItemName)));

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

      {user === 'luthfi@jobii.id' && (
        <FolderCard
          key="supplier"
          itemName="Supplier"
          onContextMenu={onContextMenu}
          path={`${currentDirectory}Supplier/`}
          changeDirectory={changeDirectory}
        />
      )}
    </div>
  );
};

export default FoldersList;
