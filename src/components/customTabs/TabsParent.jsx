import React from 'react';
import Tabs from './Tabs';

export default function TabsParent() {
    const tabsData = [
        { label: "Home", content: "Welcome to the Home tab. Here you can find the latest updates and news." },
        { label: "About", content: "This is the About tab. Learn more about our mission and team here." },
        { label: "Contact", content: "Get in touch with us through the Contact tab. We’d love to hear from you!" }
    ];

    return <Tabs tabsContent={tabsData} />;
}