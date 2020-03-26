
import React, { Component } from "react";
import {View,KeyboardAvoidingView, FlatList,TextInput, ScrollView, useState,SectionList, StyleSheet} from "react-native";
import { Container, Header, Content, List, ListItem ,Text} from 'native-base';
import { connect } from 'react-redux'
import {Codes} from "./code"
import { Table, Row, Rows } from 'react-native-table-component';


 const MainSchoolCodeView = (props) => {

    const { state, setParams, navigate } = props.navigation;
    const params = state.params || {};

    // const [tableHead, settableHead] = useState(["fullname", "code"]);


   return (
    <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>
      <Content>
      <List>
        {
         params.mappedArray.map((items, index) => {
             return (
                 
                <SectionList
                sections={[
                  {title: 'SCHOOL NAME', data: [items.SchoolName]},
                  {title: 'CODE', data: [items.code]},
                  { title: "LGA", data: [items.lga] }
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
              />
         
                
             );
         })
       }
        </List> 
      
        </Content>
    </KeyboardAvoidingView>
);
    
}



const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })
export default MainSchoolCodeView
