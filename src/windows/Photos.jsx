import React, { useState } from 'react';
import WindowWrapper from '../hoc/WindowWrapper';
import { WindowControls } from '#components';

const personalImages = [
  '/images/sarthak.jpg',
  '/images/Sarthak.png'
];

const projectImages = [
  '/images/project-1.png',
  '/images/project-2.png',
  '/images/project-3.png',
  '/images/project-4.png'
];

const Photos = () => {
  const [activeSection, setActiveSection] = useState('me');
  const visibleImages = activeSection === 'projects' ? projectImages : personalImages;

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <h2 className="flex-1 text-center font-bold text-sm">Photos</h2>
      </div>

      <div className="photos-body">
        <aside className="sidebar">
          <h2>Library</h2>
          <ul>
            <li
              className={activeSection === 'me' ? 'active' : ''}
              onClick={() => setActiveSection('me')}
            >
              <p>Me</p>
            </li>
            <li
              className={activeSection === 'projects' ? 'active' : 'muted'}
              onClick={() => setActiveSection('projects')}
            >
              <p>Projects</p>
            </li>
          </ul>
        </aside>

        <div className={`gallery ${activeSection}`}>
          <ul>
            {visibleImages.map((img, index) => (
              <li key={`${img}-${index}`} className="photo-card">
                <img
                  src={img}
                  alt={`${activeSection === 'projects' ? 'Project' : 'Me'} photo ${index + 1}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default WindowWrapper(Photos, "photos");