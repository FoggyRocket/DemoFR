import { createStackNavigator } from 'react-navigation';
import Login from './Login'
import Signup from './Signup'

const auth = ()=>{
    return {
        Login : Login,
        Signup : Signup
    }
}
export default auth