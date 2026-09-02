import React from 'react';
import WindowWrapper from '../hoc/WindowWrapper';
import { techStack } from '../constants';
import { Check, Flag } from 'lucide-react';

// FIX 1: Use a relative path instead of 'src/...'
// FIX 2: Corrected the spelling from 'WindowControlls' to 'WindowControls'
import WindowControls from '../components/WindowControls';

const Terminal: React.FC = () => {
    return (
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden font-mono text-sm max-w-2xl">
            {/* Header - White/Light Gray Theme */}
            <div className="flex justify-between items-center px-4 py-2 border-b border-gray-100 bg-gray-50 text-gray-400">
                {/* Ensure the component name matches your import */}
                <WindowControls target="terminal" />
                <h2 className="text-gray-600">Tech Stack</h2>
            </div>

            {/* Terminal Input Line */}
            <div className='p-6 pb-2 text-black'>
                <p className="mb-4">
                    <span className='font-bold'>@sarthak %</span> show tech stack
                </p>

                {/* Table Headers */}
                <div className='flex border-b border-dashed border-gray-300 pb-2 mb-4 text-gray-600 font-bold'>
                    <p className='w-1/3 pl-8'>Category</p>
                    <p className='w-2/3'>Technologies</p>
                </div>
            </div>

            {/* Tech Stack List */}
            <ul className='px-6 space-y-3'>
                {techStack.map(({ category, items }) => (
                    <li key={category} className='flex items-start'>
                        {/* Category Column */}
                        <div className="flex items-center w-1/3 gap-3">
                            <Check className="text-green-500" size={16} />
                            <h3 className="text-green-600 font-medium">{category}</h3>
                        </div>

                        {/* Technologies Column */}
                        <div className="w-2/3 text-gray-800">
                            {items.join(', ')}
                        </div>
                    </li>
                ))}
            </ul>

            {/* Separator Line */}
            <div className="px-6 py-4">
                <div className="border-b border-dashed border-gray-300"></div>
            </div>

            {/* Footnote Section */}
            <div className='px-6 pb-6 space-y-1'>
                <p className="flex items-center gap-2 text-green-600 font-medium">
                    <Check size={16} /> 5 of 5 stacks loaded successfully (100%)
                </p>
                <p className='flex items-center gap-2 text-black'>
                    <Flag size={14} fill="black" />
                    Render time: 6ms
                </p>
            </div>
        </div>
    );
};

const TerminalWindow = WindowWrapper(Terminal, 'terminal');
export default TerminalWindow;