import { useEffect } from "react";
import { useUserContext } from "./useContext/Context";

// interface ProfileProps {
//     user: User;
// }

const Profile = () => {
    const user = useUserContext();
    

    useEffect(() => {
        console.log(user.name)
    },[])
    
  return (
    <div>
        <div>{user.name}</div>
    </div>
  );
}

export default Profile;
