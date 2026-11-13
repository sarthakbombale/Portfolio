import React, { useState } from 'react';
import { WindowControls } from '#components';
import { experienceEntries, projectEntries } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper';
import { 
  ChevronLeft, 
  ChevronRight, 
  Copy, 
  ExternalLink,
  BriefcaseBusiness,
  Building2,
  PanelLeft, 
  Plus, 
  Search, 
  Share, 
  ShieldHalf,
  Folder,
  Globe
} from 'lucide-react';

const sectionItems = [
  { id: 'experience', label: 'Experience', icon: BriefcaseBusiness },
  { id: 'projects', label: 'Projects', icon: Folder },
];

const Safari: React.FC = () => {
    const [selectedSection, setSelectedSection] = useState('experience');

    return (
        <>
            <div id='window-header'>
                <WindowControls target='safari' />

                <PanelLeft className='ml-10 icon' />

                <div className="flex items-center gap-1 ml-5 ">
                    <ChevronLeft className='icon' />
                    <ChevronRight className='icon' />
                </div>

                <div className="flex-1 flex-center gap-3">
                    <ShieldHalf className='icon' />

                    <div className='search'>
                        <Search className='icon' />

                        <input type="text" placeholder='Search or enter the website name' className='flex-1' />
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <Share className='icon' />
                    <Plus className='icon' />
                    <Copy className='icon' />
                </div>
            </div>

            <div className='finder-layout'>
                <aside className='finder-sidebar'>
                    <div className='sidebar-section-title'>Favourite</div>
                    {sectionItems.map(({ id, label, icon: Icon }) => (
                        <button
                            key={id}
                            type='button'
                            className={selectedSection === id ? 'sidebar-item active' : 'sidebar-item'}
                            onClick={() => setSelectedSection(id)}
                        >
                            <Icon className='sidebar-icon' />
                            <span>{label}</span>
                        </button>
                    ))}
                </aside>

                <main className='finder-content'>
                    {selectedSection === 'experience' && (
                        <section className='section-block'>
                            <div className='section-heading'>
                                <BriefcaseBusiness className='section-icon' />
                                <h2>Experience</h2>
                            </div>

                            <div className='experience-list'>
                                {experienceEntries.map(({ id, company, logo, role, period, location, highlights }) => (
                                    <article className='experience-item' key={id}>
                                        <div className='company-header'>
                                            <img src={logo} alt={company} />
                                            <div>
                                                <h3>{company}</h3>
                                                <p className='role'>{role}</p>
                                            </div>
                                        </div>

                                        <div className='meta'>
                                            <span>{period}</span>
                                            <span>{location}</span>
                                        </div>

                                        <ul>
                                            {highlights.map((highlight) => (
                                                <li key={highlight}>{highlight}</li>
                                            ))}
                                        </ul>
                                    </article>
                                ))}
                            </div>
                        </section>
                    )}

                    {selectedSection === 'projects' && (
                        <section className='section-block'>
                            <div className='section-heading'>
                                <Building2 className='section-icon' />
                                <h2>Projects</h2>
                            </div>

                            <div className='projects-list'>
                                {projectEntries.map(({ id, name, stack, type, liveUrl, highlights }) => (
                                    <div className='project-item' key={id}>
                                        <div className='project-header'>
                                            <h3>{name}</h3>
                                            <span>{type}</span>
                                        </div>
                                        <p className='tech-stack'>{stack}</p>
                                        <ul>
                                            {highlights.map((highlight) => (
                                                <li key={highlight}>{highlight}</li>
                                            ))}
                                        </ul>
                                        {liveUrl && (
                                            <a href={liveUrl} target='_blank' rel='noopener noreferrer'>
                                                Live Project <ExternalLink className='icon-hover' />
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </main>
            </div>
        </>
    );
};

const safariWindow = WindowWrapper(Safari, 'safari');

export default safariWindow;