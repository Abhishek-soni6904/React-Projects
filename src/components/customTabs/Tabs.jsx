import React, { useState } from 'react';
import './tabs.css'
export default function Tabs({ tabsContent }) {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    return (
        <div className="tabWrapper">
            <div className="tabHeadings">
                {tabsContent.map((tab, index) => (
                    <button 
                        key={tab.label} 
                        className={`tabButton ${currentTabIndex === index ? 'active' : ''}`} 
                        onClick={() => setCurrentTabIndex(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="tabContent">
                {tabsContent[currentTabIndex]?.content}
            </div>
        </div>
    );
}