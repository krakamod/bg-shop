import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import InvitePage from './InvitePage';

describe('InvitePage', () => {
  test('renders InvitePage component', () => {
    render(
      <Router>
        <InvitePage />
      </Router>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('displays the invite form for admin users', async () => {
    const mockCurrentUser = { isAdmin: true };

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
        <InvitePage />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByText('Invite User')).toBeInTheDocument();
      expect(screen.getByLabelText('Email:')).toBeInTheDocument();
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
        <InvitePage />
      </Router>
    );

    await waitFor(() => {
      expect(screen.queryByText('Invite User')).not.toBeInTheDocument();
    });
  });

  test('submits the invite form successfully', async () => {
    const mockCurrentUser = { isAdmin: true };

    global.fetch = jest.fn((url) => {
      if (url === '/api/current-user') {
        return Promise.resolve({
          json: () => Promise.resolve(mockCurrentUser),
        });
      }
      if (url === '/api/invite') {
        return Promise.resolve({
          ok: true,
        });
      }
      return Promise.resolve({
        json: () => Promise.resolve([]),
      });
    });

    render(
      <Router>
        <InvitePage />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByText('Invite User')).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'test@example.com' } });
    fireEvent.click(screen.getByText('Send Invite'));

    await waitFor(() => {
      expect(screen.getByText('Invite sent successfully')).toBeInTheDocument();
    });
  });

  test('displays an error message on failed invite submission', async () => {
    const mockCurrentUser = { isAdmin: true };

    global.fetch = jest.fn((url) => {
      if (url === '/api/current-user') {
        return Promise.resolve({
          json: () => Promise.resolve(mockCurrentUser),
        });
      }
      if (url === '/api/invite') {
        return Promise.resolve({
          ok: false,
        });
      }
      return Promise.resolve({
        json: () => Promise.resolve([]),
      });
    });

    render(
      <Router>
        <InvitePage />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByText('Invite User')).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'test@example.com' } });
    fireEvent.click(screen.getByText('Send Invite'));

    await waitFor(() => {
      expect(screen.getByText('Failed to send invite')).toBeInTheDocument();
    });
  });
});
