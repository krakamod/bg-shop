import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import UsersPage from './UsersPage';

describe('UsersPage', () => {
  test('renders UsersPage component', () => {
    render(
      <Router>
        <UsersPage />
      </Router>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('displays the users list for admin users', async () => {
    const mockCurrentUser = { isAdmin: true };
    const mockUsers = [
      { id: 1, name: 'User 1', isAdmin: false },
      { id: 2, name: 'User 2', isAdmin: true },
    ];

    global.fetch = jest.fn((url) => {
      if (url === '/api/current-user') {
        return Promise.resolve({
          json: () => Promise.resolve(mockCurrentUser),
        });
      }
      if (url === '/api/users') {
        return Promise.resolve({
          json: () => Promise.resolve(mockUsers),
        });
      }
      return Promise.resolve({
        json: () => Promise.resolve([]),
      });
    });

    render(
      <Router>
        <UsersPage />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByText('Users')).toBeInTheDocument();
      expect(screen.getByText('User 1 - User')).toBeInTheDocument();
      expect(screen.getByText('User 2 - Admin')).toBeInTheDocument();
    });
  });

  test('restricts access to non-admin users', async () => {
    const mockCurrentUser = { isAdmin: false };

    global.fetch = jest.fn((url) => {
      if (url === '/api/current-user') {
        return Promise.resolve({
          json: () => Promise.resolve(mockCurrentUser),
        });
      }
      return Promise.resolve({
        json: () => Promise.resolve([]),
      });
    });

    render(
      <Router>
        <UsersPage />
      </Router>
    );

    await waitFor(() => {
      expect(screen.queryByText('Users')).not.toBeInTheDocument();
    });
  });
});
