import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from "../screens/Login";
import Welcome  from "../screens/Welcome";
import Home  from "../screens/Home";
import Main from './main';
import {connect } from 'react-redux';

const  Screens = createSwitchNavigator({
    // Welcome,
    // Login,
    // Home,
    Main,
});


export default createAppContainer(Screens);