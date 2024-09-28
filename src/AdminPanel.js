import React, { useState } from 'react';

function AdminPanel() {
  const [currentView, setCurrentView] = useState('products');

  const renderView = () => {
    switch (currentView) {
      case 'products':
        return <div>Manage Products</div>;
      case 'orders':
        return <div>Manage Orders</div>;
      case 'users':
        return <div>Manage Users</div>;
      default:
        return <div>Manage Products</div>;
    }
  };

  return (
    <div className="admin-panel">
      <nav className="admin-nav">
        <ul>
          <li onClick={() => setCurrentView('products')}>Products</li>
          <li onClick={() => setCurrentView('orders')}>Orders</li>
          <li onClick={() => setCurrentView('users')}>Users</li>
        </ul>
      </nav>
      <div className="admin-content">
        {renderView()}
      </div>
    </div>
  );
}

export default AdminPanel;
