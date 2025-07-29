// components/common/UserCard.tsx
import React from 'react';
import { UserProps } from '../../interfaces';

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border p-4 rounded shadow-md my-2">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p>{user.email}</p>
      <p>
        {user.address.street}, {user.address.city}
      </p>
    </div>
  );
};

export default UserCard;
