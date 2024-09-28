import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data from API
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    // Check if the current user is an admin
    const checkAdminStatus = async () => {
      try {
        const response = await fetch('/api/current-user');
        const data = await response.json();
        setIsAdmin(data.isAdmin);
      } catch (error) {
        console.error('Error checking admin status:', error);
      }
    };

    fetchUsers();
    checkAdminStatus();
  }, []);

  if (!isAdmin) {
    return <Redirect to="/" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="users-page">
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.isAdmin ? 'Admin' : 'User'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersPage;
