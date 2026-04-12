import React from 'react';
import WindowWrapper from '../hoc/WindowWrapper';
import { WindowControls } from '#components';

const Photos = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <h2 className="flex-1 text-center font-bold text-sm">Photos</h2>
      </div>

      <div className="flex h-125 bg-white">
        {/* Sidebar - Matches your #photos .sidebar CSS */}
        <div className="sidebar">
          <h2>Library</h2>
          <ul>
            <li>
              <img src="/images/photos.png" alt="All Photos" className="w-4" />
              <p>All Photos</p>
            </li>
            <li className="opacity-50">
              <p>Favorites</p>
            </li>
            <li className="opacity-50">
              <p>Recent</p>
            </li>
          </ul>
        </div>

        {/* Gallery - Matches your #photos .gallery CSS */}
        <div className="gallery overflow-y-auto flex-1">
          <ul>
            {/* The CSS uses nth-child selectors for this specific grid layout */}
            <li><img src="/images/project-1.png" alt="Gallery 1" /></li>
            <li><img src="/images/project-2.png" alt="Gallery 2" /></li>
            <li><img src="/images/project-3.png" alt="Gallery 3" /></li>
            <li><img src="/images/project-4.png" alt="Gallery 4" /></li>
          </ul>
        </div>
      </div>
    </>
  );
};


export default WindowWrapper(Photos, "photos");