import React, { useState } from 'react';
import Sidebar from './Sidebar';

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle Sidebar</button>

      <div className={`content ${collapsed ? 'sidebar-collapsed' : ''}`}>
        {/* Your main content goes here */}
        <h1>Main Content</h1>
      </div>

      <Sidebar collapsed={collapsed} />
    </div>
  );
};

export default App;
