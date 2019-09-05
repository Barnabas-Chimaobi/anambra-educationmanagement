import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from "../screens/Login";
import Welcome  from "../screens/Welcome";
import Home  from "../screens/Home";
import Main from './main';
import TeacherIndex  from "../screens/teacher/TeacherIndex";
import SchoolIndex  from "../screens/school/SchoolIndex";
import StudentIndex  from "../screens/student/StudentIndex";
import TeacherStart  from "../screens/teacher/TeacherStart";

const  Screens = createSwitchNavigator({
    Welcome,
    Login,
    Home,
    Main,
});

export default createAppContainer(Screens);