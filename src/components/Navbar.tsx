import React from 'react';
import { navLinks } from '../constants/index.ts';


const Navbar: React.FC = () => {
    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="Apple logo" />
                <p className='font-bold'>Sarthak's Portfolio</p>
                <ul>
                    {navLinks.map(({ id, name }) => (
                        // 3. Added a return statement (common JS/TS mistake)
                        <li key={id}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;