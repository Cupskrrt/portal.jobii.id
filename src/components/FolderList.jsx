import { useState, useEffect } from "react";
import FolderCard from "./FolderCard";
import { useGetFilesQuery } from "../redux/storage.slice";

const FoldersList = () => {
  const [currentFolder, setCurrentFolder] = useState("");
  const { data, error } = useGetFilesQuery();

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const getFolderName = (path) => {
    const parts = path.split("/");
    return parts[parts.length - 2]; // Get the second last part as folder name
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
    // Handle context menu actions here
    console.log("Context menu opened!");
  };

  // Filter the 'content' array to get only the paths that have another "/" after the current folder
  const folderPaths = data.content.filter((path) => {
    const pathAfterCurrentFolder = path.slice(currentFolder.length);
    const parts = pathAfterCurrentFolder.split("/");
    return parts.length > 2 && parts[1] !== "";
  });

  // Get unique folder names from 'folderPaths'
  const folderNames = Array.from(
    new Set(folderPaths.map(getFolderName))
  );

  return (
    <div className="flex">
      {folderNames.map((folderName, index) => (
        <FolderCard
          key={index}
          folderName={folderName}
          onContextMenu={handleContextMenu}
        />
      ))}
    </div>
  );
};

export default FoldersList;
