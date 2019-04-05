import { createStackNavigator,createDrawerNavigator } from 'react-navigation';
import Home from './Home'
import Profile from './Profile'
const home = ()=>{
    return {
        Home : Home,
        Profile : Profile
    }
}

export default home