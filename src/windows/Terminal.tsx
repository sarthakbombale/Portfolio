import React from 'react';


import WindowWrapper from '../hoc/WindowWrapper';

// ← removed stray “React.FC” here

const Terminal: React.FC = () => {
    return (
        <>
            <div id='window-header'>
                <p>Window Controls</p>
                <h2>tech Stack</h2>
            </div>
            <div className='techstack'>
                <p>
                    <span className='font-bold'>@sarthak %</span> show tech stack
                </p>
                <div className='label'>
                    <p className='w-32'> Category</p>

                </div>
            </div>
        </>
    );
};

// We apply the wrapper here
const TerminalWindow = WindowWrapper(Terminal, 'terminal');

export default TerminalWindow;