import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from "../screens/Login";
import Welcome  from "../screens/Welcome";
import Home  from "../screens/Home";
import Main from './main';

const  Screens = createSwitchNavigator({
    // Welcome,
    // Login,
    // Home,
    Main,
});

export default createAppContainer(Screens);