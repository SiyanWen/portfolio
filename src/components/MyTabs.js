import React from 'react';
import { Tabs } from 'antd';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
const MyTabs = () => (
  <Tabs 
    defaultActiveKey="1"
    items={[
      {
        label: 'Introduction',
        key: '1',
        children: <Tab1  />,
      },
      {
        label: 'Projects',
        key: '2',
        children: <Tab2 />,
      },
      {
        label: 'Art works',
        key: '3',
        children: <Tab3  />,
      },
    ]}
    
  />
);
export default MyTabs;