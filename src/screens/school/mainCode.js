
import React, { Component } from "react";
import {View,KeyboardAvoidingView, FlatList,TextInput, ScrollView, useState} from "react-native";
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
         params.mappedArray.map((item, index) => {
             return (
                 <React.Fragment key={item.personId}>
                     <ListItem key={item.personId}>
                     <Text key={item}>{item.SchoolName} - {item.code} - {item.lga}</Text>
                    </ListItem>
                 </React.Fragment>
                
             );
         })
       }
        </List> 
        </Content>
    </KeyboardAvoidingView>
);
    
}

export default MainSchoolCodeView
