import { useUserContext } from "./useContext/Context";


// interface SeidebarProps {
//     user: User;
// }

const Sidebar = () => {
    const user = useUserContext();
  return (
    <div>
        <div>{user.name}</div>
        <div>SubscriptionStatus: {user.isSubscribed}</div>
    </div>
  );
}

export default Sidebar;
