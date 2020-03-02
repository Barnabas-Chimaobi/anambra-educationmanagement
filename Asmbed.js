import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Welcome  from "./src/screens/index";
import Main  from "./src/navigation/main";
import {connect } from 'react-redux';

const  Screens = createSwitchNavigator({
    // Welcome,
    Main,
});

export default createAppContainer(Screens);