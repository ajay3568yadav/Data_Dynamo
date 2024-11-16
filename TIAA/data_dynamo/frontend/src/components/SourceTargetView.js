import React from 'react';
import './SourceTargetView.css';

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

export default SourceTargetView