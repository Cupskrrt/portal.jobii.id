import { useState, useEffect } from "react";
import useSWR from 'swr'
import FileCard from './FileCard';

const fetcher = url => fetch(url).then(res => res.json())

const FilesList = () => {
  const { data: files, error, mutate } = useSWR('https://your-api-url.com/endpoint', fetcher);

  if (error) return <div>Failed to load</div>
  if (!files) return <div>Loading...</div>

  const handleContextMenu = (event) => {
    event.preventDefault();
    // Handle context menu actions here
    console.log('Context menu opened!');
  };

  return (
    <div>
      {files.map((file, index) => (
        <FileCard 
          key={index}
          thumbnail={file.thumbnail}
          fileName={file.fileName}
          onContextMenu={handleContextMenu}
        />
      ))}
    </div>
  );
};

export default FilesList;
