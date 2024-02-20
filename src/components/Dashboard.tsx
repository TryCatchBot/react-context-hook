// import { User } from "./User";
import { Sidebar } from "./Sidebar";
import { Profile } from "./Profile";
// import {User} from ".";

// interface DashboardProps {
//     user: User;
// }

const Dashboard = () => {
  return (
    <div>
      {/* <Sidebar user={user} />
      <Profile user={user} /> */}
      <Sidebar />
      <Profile />
    </div>
  )
}

export default Dashboard;
