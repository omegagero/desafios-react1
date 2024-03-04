import React from 'react';
import Banner from './Banner';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Sidebar Component</h2>
      <Banner />
      <Banner />
    </div>
  );
};

export default Sidebar;
