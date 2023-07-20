import { useState, useEffect } from "react";
import useSWR from 'swr'
import FolderCard from './FolderCard';

const fetcher = url => fetch(url).then(res => res.json())

const FoldersList = () => {
  const { data: folders, error, mutate } = useSWR('https://your-api-url.com/endpoint', fetcher);

  if (error) return <div>Failed to load</div>
  if (!folders) return <div>Loading...</div>

  const handleContextMenu = (event) => {
    event.preventDefault();
    // Handle context menu actions here
    console.log('Context menu opened!');
  };

  return (
    <div>
      {folders.map((folder, index) => (
        <FolderCard 
          key={index}
          folderName={folder.name}
          onContextMenu={handleContextMenu}
        />
      ))}
    </div>
  );
};

export default FoldersList;
