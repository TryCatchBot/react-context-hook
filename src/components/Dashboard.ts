import { User } from "./User";
import { Sidebar } from "./Sidebar";
import { Profile } from "./Profile";
import React from "react";

interface DashboardProps {
  user: User;
}

const Dashboard = ({ user }: DashboardProps) => {
  return (
    <div>
      <Sidebar user={user} />
      <Profile user={user} />
    </div>
  );
};

export default Dashboard;
