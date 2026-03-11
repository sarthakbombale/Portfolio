import React from 'react';
import WindowWrapper from '../hoc/WindowWrapper';
import { WindowControls } from '#components';
import { socials } from '#constants';

const Contact = () => {
  return (
    <>
      <div id='window-header'>
        {/* Added controls so the window can actually be closed/interacted with */}
        <WindowControls target="contact" />
        <h2>Contact</h2>
      </div>

      <div className="p-5 space-y-5">
        <img src="/images/sarthak.jpg" alt="Sarthak" className="w-30 h-30 rounded-full object-cover"/>
        <h3>Let's Connect</h3>
        <p>Got an idea? A bug to squash? Or just wanna talk tech? I'm in</p>
        <p>contact @ sarthakbomble250@gmail.com</p>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a href={link} target='_blank' rel='noopener noreferrer' title={text}>
                <img src={icon} alt={text} className='size-5' />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

// CRITICAL FIX: The wrapper handles the 'isOpen' logic from your store.
// If you don't wrap it with the "contact" ID, it won't respect the click event.
export default WindowWrapper(Contact, "contact");