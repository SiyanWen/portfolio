import React from 'react';
import { Tabs } from 'antd';
import Tab_1 from './Tab_1';
import Tab_2 from './Tab_2';
import Tab_3 from './Tab_3';
const MyTabs = () => (
  <Tabs 
    defaultActiveKey="1"
    items={[
      {
        label: 'Introduction',
        key: '1',
        children: <Tab_1  />,
      },
      {
        label: 'Projects',
        key: '2',
        children: <Tab_2 />,
      },
      {
        label: 'Art works',
        key: '3',
        children: <Tab_3  />,
      },
    ]}
    
  />
);
export default MyTabs;