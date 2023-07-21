import { useState } from "react";
import FileCard from "./FileCard";

const FilesList = ({ onContextMenu, data, error, currentDirectory, }) => {
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const getFileName = (path) => {
    const parts = path.split("/");
    return parts[parts.length - 1];
  };

  const handleContextMenu = (event, path) => {
    event.preventDefault();
    onContextMenu(event, path);
    console.log("Context menu opened! file");
  };

  // Filter the 'content' array to get only the paths that do not end with a '/'
  // and belong to the current directory
  const filePaths = data.content.filter((path) => {
    const parts = path.split("/");
    // Check if the path is a file within the current directory
    return (!path.endsWith("/") && path.startsWith(currentDirectory) && path.replace(currentDirectory, '').split("/").length === 1);

  });

  // Get file names from 'filePaths'
  const fileNames = filePaths.map(getFileName);

  return (
    <div className="flex flex-wrap">
      {fileNames.map((fileName, index) => {
        const path = filePaths[index]; // Get the original path
        const preview = data.preview[path]; // Get the preview by path

        return (
          <FileCard
            key={index}
            thumbnail={preview} // Use the preview as the thumbnail
            fileName={fileName}
            onContextMenu={(event) => handleContextMenu(event, path)}
            path={path}
          />
        );
      })}
    </div>
  );
};

export default FilesList;
