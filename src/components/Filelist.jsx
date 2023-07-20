import { useState } from "react";
import FileCard from "./FileCard";
import { useGetFilesQuery } from "../redux/storage.slice";

const FilesList = () => {
  const { data, error } = useGetFilesQuery();

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const getFileName = (path) => {
    const parts = path.split("/");
    return parts[parts.length - 1];
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
    // Handle context menu actions here
    console.log("Context menu opened!");
  };

  const currentFolder = "";

  // Filter the 'content' array to get only the paths that do not end with a '/'
  const filePaths = data.content.filter((path) => {
    const parts = path.split("/");
    // Check if the path is a file within the current folder
    return (!path.endsWith("/") && (parts.length === 2 || parts[1] === currentFolder));
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
            onContextMenu={handleContextMenu}
          />
        );
      })}
    </div>
  );
};

export default FilesList;
