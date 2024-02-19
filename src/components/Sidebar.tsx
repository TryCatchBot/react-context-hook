import React from 'react';
import {User} from ".";

interface SeidebarProps {
    user: User;
}

const Sidebar = ({user}: SeidebarProps) => {
  return (
    <div>
        <div>{user.name}</div>
        <div>SubscriptionStatus: {user.isSubscribed}</div>
    </div>
  );
}

export default Sidebar;
