import React from 'react';
import { Platform,View,Text,TouchableOpacity,ScrollView,StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SafeAreaView from 'react-native-safe-area-view';
import { createDrawerNavigator,DrawerItems,DrawerNavigatorItems  } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import TeacherIndex from '../screens/teacher/TeacherIndex';
import TeacherStart from '../screens/teacher/TeacherStart';
import TeacherBiodata from '../screens/teacher/TeacherBiodata';
import TeacherAcademic from '../screens/teacher/TeacherAcademic';
import TeacherBiodataPreview from '../screens/teacher/TeacherBiodataPreview';
import TeacherAcademicPreview from '../screens/teacher/TeacherAcademicPreview';
import StudentIndex from '../screens/student/StudentIndex';
import SchoolIndex from '../screens/school/SchoolIndex';

const TeacherStack = createStackNavigator({

    AcademicPreview: TeacherAcademicPreview,
    BiodataPreview: TeacherBiodataPreview,
    Academic: TeacherAcademic,
    Biodata:  TeacherBiodata,
    Teacher: TeacherIndex,
    Start: TeacherStart,
});

TeacherStack.navigationOptions = {
  drawerLabel: 'Teacher',
  drawerIcon: ({ focused }) => (
    <Ionicons
      focused={focused}
      name={
        Platform.OS === 'ios' ? 'ios-home': 'md-home'
      }
      color="#0b6623"
      size={30}
    />
  ),
};

const StudentStack = createStackNavigator({
  Student: StudentIndex,
});

StudentStack.navigationOptions = {
  drawerLabel: 'Student',
  drawerIcon: ({ focused }) => (
    <Ionicons
      focused={focused}
      name={
        Platform.OS === 'ios' ? 'ios-contacts': 'md-contacts'
      }
      color="#0b6623"
      size={30}
    />
  ),
};

const SchoolStack = createStackNavigator({
  School: SchoolIndex,
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