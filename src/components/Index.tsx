import {useState} from 'react';
import { Dashboard } from './Dashboard';
import { DashboardContext } from './useContext/Context';


export interface User   {
    isSubscribed: boolean;
    name: string;
}

// interface DemoProps {}

const Index = () => {


    const [user] = useState<User>({
        isSubscribed: true,
        name: "You",
    });



  return (
    <div>
        <DashboardContext.Provider value={user}>
        <Dashboard />
        {/* <p>Massive</p> */}
        </DashboardContext.Provider>
    </div>
  )
}


export default Index;
