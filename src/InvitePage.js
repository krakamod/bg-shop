import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

function InvitePage() {
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  useEffect(() => {
    // Check if the current user is an admin
    const checkAdminStatus = async () => {
      try {
        const response = await fetch('/api/current-user');
        const data = await response.json();
        setIsAdmin(data.isAdmin);
        setLoading(false);
      } catch (error) {
        console.error('Error checking admin status:', error);
      }
    };

    checkAdminStatus();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/invite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setFeedbackMessage('Invite sent successfully');
      } else {
        setFeedbackMessage('Failed to send invite');
      }
    } catch (error) {
      setFeedbackMessage('An error occurred while sending the invite');
    }
  };

  if (!isAdmin) {
    return <Redirect to="/" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="invite-page">
      <h1>Invite User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Invite</button>
      </form>
      {feedbackMessage && <p className="feedback">{feedbackMessage}</p>}
    </div>
  );
}

export default InvitePage;
