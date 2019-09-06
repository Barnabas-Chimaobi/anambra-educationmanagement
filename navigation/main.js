import React from 'react';
import { Platform,View,Text,TouchableOpacity,ScrollView,StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SafeAreaView from 'react-native-safe-area-view';
import { createDrawerNavigator,DrawerItems,DrawerNavigatorItems  } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import Home  from "../screens/Home";
import TeacherIndex from '../screens/teacher/TeacherIndex';
import TeacherStart from '../screens/teacher/TeacherStart';
import TeacherBiodata from '../screens/teacher/form/TeacherBiodata';
import TeacherAcademic from '../screens/teacher/form/TeacherAcademic';
import Viewteacher from '../screens/teacher/TeacherView';
import ViewteacherBio from '../screens/teacher/TeacherViewBio';
import StudentIndex from '../screens/student/StudentIndex';
import StudentNextOfKin from '../screens/student/form/StudentNextOfKin';
import StudentStart from '../screens/student/StudentStart';
import SchoolIndex from '../screens/school/SchoolIndex';
import SchoolStart from '../screens/school/SchoolStart';
import StudentBiodataPreview from '../screens/student/preview/StudentBiodataPreview';
import StudentNextOfKinPreview from '../screens/student/preview/StudentNextOfKinPreview';
import StudentBiodata from '../screens/student/form/StudentBiodata';
import SchoolProfile from '../screens/school/form/SchoolProfile';
import SchoolFacility from '../screens/school/form/SchoolFacility';
import SchoolFacility2 from '../screens/school/form/SchoolFacility2';
import SchoolFacility3 from '../screens/school/form/SchoolFacility3';
import SchoolHeadTeacher from '../screens/school/form/SchoolHeadTeacher';

const TeacherStack = createStackNavigator({
  Teacher: TeacherIndex,
  Start: TeacherStart,
  Biodata:  TeacherBiodata,
  Academic: TeacherAcademic,
  View: Viewteacher,
  ViewBio: ViewteacherBio,
},
{

  /* The header config from HomeScreen is now here */
  defaultNavigationOptions: {
    title: 'MINISTRY OF BASIC EDUCATION',
    sub: 'Student, Teacher and School Information Base',
    headerStyle: {
      backgroundColor: '#098BD3',
      height: 100
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 18,
      alignSelf: 'center',
      alignContent: 'center'
    },
  },
});



const StudentStack = createStackNavigator({
  Student: StudentIndex,
  Start: StudentStart,
  Biodata: StudentBiodata,
  NextOfKin: StudentNextOfKin,
  BiodataPreview: StudentBiodataPreview,
  NextOfKinPreview: StudentNextOfKinPreview
},

{
  /* The header config from HomeScreen is now here */
  defaultNavigationOptions: {
    title: 'MINISTRY OF BASIC EDUCATION',
    sub: 'Student, Teacher and School Information Base',
    headerStyle: {
      backgroundColor: '#098BD3',
      height: 100
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 18,
      alignSelf: 'center',
      alignContent: 'center'
    },
  },
}
);

const SchoolStack = createStackNavigator({
  School: SchoolIndex,
  Start: SchoolStart,
  Profile: SchoolProfile,
  Facility: SchoolFacility,
  Facility2: SchoolFacility2,
  Facility3: SchoolFacility3,
  HeadTeacher: SchoolHeadTeacher,
},
  {

    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      title: 'MINISTRY OF BASIC EDUCATION',
      sub: 'Student, Teacher and School Information Base',
      headerStyle: {
        backgroundColor: '#098BD3',
        height: 100
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
        alignContent: 'center'
      },
    },
  });

SchoolStack.navigationOptions = {
  drawerLabel: 'School',
  drawerIcon: ({ focused }) => (
    <Ionicons
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-mail' : 'md-mail'}
      color="#0b6623"
      size={30}
    />
  ),
};

const HomeStack = createStackNavigator({
  Home: Home
})

const CustomDrawerContentComponent = props => (
    <ScrollView>
      <SafeAreaView
        style={styles.container}
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        <DrawerNavigatorItems {...props} />
      </SafeAreaView>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});

export default createDrawerNavigator({
  Home: HomeStack,
  Teacher: TeacherStack,
  Student: StudentStack,
  School: SchoolStack,
  },
  {
    initialRouteName: 'Teacher',
    contentComponent: CustomDrawerContentComponent ,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentOptions: {
      activeBackgroundColor: '#098BD3',
      activeTintColor: '#fff',
      inactiveTintColor: '#000',
      inactiveBackgroundColor: 'white'
    }
  }
  );
