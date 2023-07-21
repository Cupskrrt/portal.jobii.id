import { useState, useEffect } from "react";
import FolderCard from "./FolderCard";

const FoldersList = ({ onContextMenu, data, error, currentDirectory, changeDirectory }) => {
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const getFolderName = (path) => {
    const parts = path.replace(currentDirectory, '').split("/");
    return parts[0]; // Get the first part as folder name
  };
  
  const handleContextMenu = (event) => {
    event.preventDefault();
    onContextMenu(event);
    console.log("Context menu opened! folder");
  };

  // Filter the 'content' array to get only the paths that are direct children of the current directory
  const folderPaths = data.content.filter((path) => {
    const parts = path.replace(currentDirectory, '').split("/");
    return parts.length === 2 && path.startsWith(currentDirectory) && !path.endsWith("/");
  });

  // Get unique folder names from 'folderPaths'
  const folderNames = Array.from(new Set(folderPaths.map(getFolderName)));

  return (
    <div className="flex flex-wrap">
      {folderNames.map((folderName, index) => {
        const path = `${currentDirectory}${folderName}/`; // Use currentDirectory to construct path
        return (
          <FolderCard
            key={index}
            folderName={folderName}
            onContextMenu={handleContextMenu}
            path={path}
            changeDirectory={changeDirectory}
          />
        );
      })}
    </div>
  );
};

export default FoldersList;
