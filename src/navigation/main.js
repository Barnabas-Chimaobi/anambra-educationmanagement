import React from 'react';
import {StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Home  from "../screens/home";
import StudentIndex from '../screens/student/index';
import StudentBiodata from '../screens/student/Biodata';
import OtherData from '../screens/student/OtherData';
import StudentView from '../screens/student/view';
import TeacherIndex from '../screens/teacher';
import TeacherBiodata from '../screens/teacher/Biodata';
import TeacherOtherData from '../screens/teacher/OtherData';
import TeacherView from '../screens/teacher/view';
import SchoolIndex from '../screens/school';
import SchoolProfile from '../screens/school/SchoolProfile';
import SchoolOtherData from '../screens/school/SchoolOtherData';
import SchoolFacility from '../screens/school/SchoolFacility';
import SchoolView from '../screens/school/view';
import CameraTest from '../../screens/CameraTest';

const StudentStack = createStackNavigator({
  Student: StudentIndex,
  StudentBiodata: StudentBiodata,
  OtherData: OtherData,
  StudentView: StudentView
});

const TeacherStack = createStackNavigator({
  Teacher: TeacherIndex,
  TeacherBiodata: TeacherBiodata,
  TeacherOtherData: TeacherOtherData,
  TeacherView: TeacherView
});

const SchoolStack = createStackNavigator({
  School: SchoolIndex,
  SchoolProfile: SchoolProfile,
  SchoolOtherData: SchoolOtherData,
  SchoolFacility:SchoolFacility,
  SchoolView:SchoolView
});

const HomeStack = createStackNavigator({
  Home: Home,
  // Camera: CameraTest
})


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});

export default createStackNavigator({
  HomeStack,
  StudentStack,
  TeacherStack,
  SchoolStack
},{
  defaultNavigationOptions  : ({ navigation }) => ({
    // title: `${navigation.state.params.name}`,
     headerStyle: {
        backgroundColor: '#098BD3',
      },
      title: "Home",
      headerTintColor: '#E6DC82',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  }),
})

