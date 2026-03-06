import React from 'react';
import dayjs from 'dayjs';
import { navLinks, navIcons, type NavIcon } from '#constants';
// 1. Used the alias #store defined in your vite.config.ts
// 2. Added { } because useWindowStore is a named export, not a default export
import { useWindowStore } from '#store/window';

const Navbar: React.FC = () => {
    // Destructure the action from the store
    const { openWindow } = useWindowStore();

    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="Apple logo" />
                <p className='font-bold'>Sarthak's Portfolio</p>

                <ul>
                    {navLinks.map(({ id, name, type }) => (
                        <li key={id} onClick={() => openWindow(type)}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    {navIcons.map(({ id, img }: NavIcon) => (
                        <li key={id}>
                            <img
                                src={img}
                                alt={`icon-${id}`}
                                className='icon-hover w-5 h-5'
                            />
                        </li>
                    ))}
                </ul>
                <time>
                    <span className="text-sm font-medium">
                        {dayjs().format("ddd MMM D h:mm A")}
                    </span>
                </time>
            </div>
        </nav>
    );
};

export default Navbar;