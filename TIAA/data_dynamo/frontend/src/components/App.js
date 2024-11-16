import React, { useState } from 'react';  // Added useState import
import './Dashboard.css';
import './SourceTargetView.css'
import './SourceTarget.css'
import { Home, Dashboard, Assessment, Link, Code, Settings, Help, 
  CloudQueue, Storage, Add, AccountTree, Api, Search, Close, TableChart, WorkspacePremium } from '@mui/icons-material';

// Create SourceTargetView component in the same file for now
const SourceTargetView = () => {
    return (
        <div className="source-target-view">
            <div className="river-header">
                <h1>Untitled River 2024-11-16 02:59</h1>
                <div className="river-type">Source to Target River</div>
            </div>

            <div className="river-tabs">
                <button className="tab-button active">Source</button>
                <button className="tab-button">Target</button>
                <button className="tab-button">Settings</button>
            </div>

            <div className="source-selection">
                <h2>Select Data Source</h2>
                <div className="search-bar">
                    <div className="search-input-container">
                        <Search className="search-icon" />
                        <input type="text" placeholder="Search Sources" />
                    </div>
                    <div className="categories">
                        <button className="category-button active">Categories</button>
                        <button className="category-button">A-Z</button>
                        <button className="category-button">Z-A</button>
                    </div>
                </div>

                <div className="source-section-title">Marketing</div>
                <div className="source-grid">
                    <div className="source-card">
                        <CloudQueue style={{ color: '#4285F4', fontSize: '48px' }} />
                        <span className="source-name">Google Ads</span>
                    </div>
                    <div className="source-card">
                        <Api style={{ color: '#1877F2', fontSize: '48px' }} />
                        <span className="source-name">Facebook Ads</span>
                    </div>
                    <div className="source-card">
                        <Storage style={{ color: '#000000', fontSize: '48px' }} />
                        <span className="source-name">TikTok</span>
                    </div>
                    <div className="source-card">
                        <CloudQueue style={{ color: '#00A4EF', fontSize: '48px' }} />
                        <span className="source-name">Bing Ads</span>
                        <span className="source-subtitle">Microsoft Bing Ads</span>
                    </div>
                    <div className="source-card">
                        <Assessment style={{ color: '#0A66C2', fontSize: '48px' }} />
                        <span className="source-name">LinkedIn Ads</span>
                    </div>
                    <div className="source-card">
                        <Api style={{ color: '#14171A', fontSize: '48px' }} />
                        <span className="source-name">X (Twitter)</span>
                    </div>
                </div>
            </div>

            <div className="action-buttons">
                <button className="run-button">RUN</button>
                <button className="save-button">Save</button>
            </div>
        </div>
    );
};
  
// NavItem Component
const NavItem = ({ icon, text, active }) => {
    return (
      <div className={`nav-item ${active ? 'active' : ''}`}>
        {icon}
        <span>{text}</span>
      </div>
    );
};
  
// Pipeline Card Component
const PipelineCard = ({ icon, title }) => {
    return (
      <div className="pipeline-card">
        <div className="pipeline-icons">
          {icon}
          <Storage />
        </div>
        <span>{title}</span>
      </div>
    );
};

// Updated Main Content Component
const MainContent = () => {
    const [currentView, setCurrentView] = useState('dashboard');

    const handleCreateSourceToTarget = () => {
        setCurrentView('source-target');
    };

    return (
        <div className="main-content">
            {currentView === 'dashboard' ? (
                <>
                    <div className="welcome-section">
                        <h1>Good Morning, User</h1>
                        <p>Quickly create new Rivers or access your recent activity and updates</p>
                    </div>

                    <div className="section-title">Popular Data Pipelines</div>
                    <div className="pipeline-grid">
                        <PipelineCard icon={<CloudQueue />} title="Salesforce" />
                        <PipelineCard icon={<Api />} title="Facebook" />
                        <PipelineCard icon={<Storage />} title="Shopify" />
                        <PipelineCard icon={<Assessment />} title="Google Sheets" />
                        <PipelineCard icon={<Dashboard />} title="Google Ads" />
                    </div>

                    <div className="section-title">Create Your Data Pipelines & Workflows</div>
                    <div className="create-pipeline-grid">
                        <div className="create-pipeline-card">
                            <Storage />
                            <h3>Source to Target River</h3>
                            <p>Extract & load data from any source into target data warehouse</p>
                            <button className="create-pipeline-btn" onClick={handleCreateSourceToTarget}>
                                Create Source to Target River
                            </button>
                        </div>
                        
                        <div className="create-pipeline-card">
                            <AccountTree />
                            <h3>Logic River</h3>
                            <p>Transform data using SQL and Python and orchestrate automated workflows</p>
                            <button className="create-pipeline-btn">
                                Create Logic River
                            </button>
                        </div>
                        
                        <div className="create-pipeline-card">
                            <Api />
                            <h3>Action River</h3>
                            <p>Make any REST API call, or connect to a REST API as source or target</p>
                            <button className="create-pipeline-btn">
                                Create Action River
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <SourceTargetView />
            )}
        </div>
    );
};


// Create Menu Component
const CreateMenu = ({ isOpen, onClose, onCreateSourceToTarget }) => {
    return (
        <div className={`create-menu ${isOpen ? 'open' : ''}`}>
            <div className="create-menu-header">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2>Create Data Pipelines & Workflows</h2>
                    <Close style={{ cursor: 'pointer' }} onClick={onClose} />
                </div>
                <p>Each type of River helps you accomplish different tasks.</p>
            </div>

            <div className="create-menu-content">
                <div className="river-option" onClick={onCreateSourceToTarget}>
                    <div className="river-option-icon">
                        <TableChart style={{ fontSize: '32px' }} />
                    </div>
                    <div className="river-option-content">
                        <h3>Source to Target River</h3>
                        <p>Extract & load data from any source into target data warehouse or other destination</p>
                    </div>
                </div>

                <div className="river-option">
                    <div className="river-option-icon">
                        <AccountTree style={{ fontSize: '32px' }} />
                    </div>
                    <div className="river-option-content">
                        <h3>Logic River</h3>
                        <p>Transform data using SQL and Python and orchestrate automated data workflows</p>
                    </div>
                </div>

                <div className="river-option">
                    <div className="river-option-icon">
                        <Api style={{ fontSize: '32px' }} />
                    </div>
                    <div className="river-option-content">
                        <h3>Action River</h3>
                        <p>Make any REST API call, or connect to a REST API as either a data source or a data target</p>
                    </div>
                </div>

                <div className="river-option kits">
                    <div className="river-option-icon">
                        <WorkspacePremium style={{ fontSize: '32px' }} />
                    </div>
                    <div className="river-option-content">
                        <h3>Rivery Kits</h3>
                        <p>Rivery Kits are instant data model templates. Build end-to-end data solutions in minutes.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Updated Sidebar Component
const Sidebar = ({ onCreateClick }) => {
    return (
        <div className="sidebar">
            <div className="logo-section">
                <h1>Data Dynamo</h1>
            </div>

            <div className="org-section">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="org-badge">
                            <span>asu</span>
                        </div>
                        <span>Production</span>
                    </div>
                </div>
            </div>

            <div className="create-btn-section">
                <button className="create-river-btn" onClick={onCreateClick}>
                    <Add />
                    <span>Create River</span>
                </button>
            </div>

            <nav className="nav-menu">
                <NavItem icon={<Home />} text="Home" active />
                <NavItem icon={<Dashboard />} text="Dashboard" />
                <NavItem icon={<Assessment />} text="Activities" />
                <NavItem icon={<CloudQueue />} text="Rivers" />
                <NavItem icon={<Storage />} text="Kits" />
                <NavItem icon={<Link />} text="Connections" />
                <NavItem icon={<Code />} text="Variables" />
                <NavItem icon={<AccountTree />} text="Environments" />
                <NavItem icon={<Settings />} text="Settings" />
                <NavItem icon={<Help />} text="Help" />
            </nav>
        </div>
    );
};

// Main App Component
const App = () => {
    const [isCreateMenuOpen, setIsCreateMenuOpen] = useState(false);
    const [currentView, setCurrentView] = useState('dashboard');

    const handleCreateClick = () => {
        setIsCreateMenuOpen(true);
    };

    const handleCreateMenuClose = () => {
        setIsCreateMenuOpen(false);
    };

    const handleCreateSourceToTarget = () => {
        setCurrentView('source-target');
        setIsCreateMenuOpen(false);
    };

    return (
        <div className="app-container">
            <Sidebar onCreateClick={handleCreateClick} />
            <CreateMenu 
                isOpen={isCreateMenuOpen} 
                onClose={handleCreateMenuClose}
                onCreateSourceToTarget={handleCreateSourceToTarget}
            />
            <MainContent currentView={currentView} setCurrentView={setCurrentView} />
        </div>
    );
};

export default App;