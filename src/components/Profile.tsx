import React from 'react';
import {User} from ".";

interface ProfileProps {
    user: User;
}

const Profile = ({user}: ProfileProps) => {
  return (
    <div>
        <div>{user.name}</div>
    </div>
  );
}

export default Profile;
