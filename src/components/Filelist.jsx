import { useState } from "react";
import FileCard from "./FileCard";

const FilesList = ({ data, error, currentDirectory, onContextMenu }) => {

  const getItemName = (path) => {
    const parts = path.split("/");
    return parts[parts.length - 1];
  };

  // Filter the 'content' array to get only the paths that do not end with a '/'
  // and belong to the current directory
  const filePaths = data.content.filter((path) => {
    const parts = path.split("/");
    // Check if the path is a file within the current directory
    return (!path.endsWith("/") && path.startsWith(currentDirectory) && path.replace(currentDirectory, '').split("/").length === 1);
  });

  const itemNames = filePaths.map(getItemName);

  return (
    <div className="flex flex-wrap">
      {itemNames.map((itemName, index) => {
        const path = filePaths[index]; // Get the original path
        const preview = data.preview[path]; // Get the preview by path

        return (
          <FileCard
            key={index}
            thumbnail={preview} // Use the preview as the thumbnail
            itemName={itemName} // Use 'itemName' instead of 'fileName'
            path={path}
            onContextMenu={onContextMenu}
          />
        );
      })}
    </div>
  );
};

export default FilesList;
