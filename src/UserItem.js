import React from 'react';

function UserItem({ user }) {
  return (
    <li>
      {user.name} - {user.isAdmin ? 'Admin' : 'User'}
    </li>
  );
}

export default UserItem;
