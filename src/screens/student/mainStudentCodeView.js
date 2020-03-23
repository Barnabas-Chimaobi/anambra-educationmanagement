
import React, { Component } from "react";
import {View,KeyboardAvoidingView, FlatList,TextInput, ScrollView} from "react-native";
import { Container, Header, Content, List, ListItem ,Text} from 'native-base';
import { connect } from 'react-redux'
import {Codes} from "./code"


 const MainStudentCodeView = (props) => {

    const { state, setParams, navigate } = props.navigation;
    const params = state.params || {};

    //console.log(params.mappedArray, ", MAPPED ARRAY");

//    return(
//    <View>
//         {
//         params.mappedArray.map((item, index) => {
//             return (
//                 <View>
//                     <Text key={item}>{item.firstname}</Text>
//                 </View>
//             );
//         })
//       }
//    </View>
//    )

   return (
    <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>
      <Content>
        <List>
      
        {
         params.mappedArray.map((item, index) => {
             return (
                 <React.Fragment key={item.personId}>
                     <ListItem key={item.personId}>
                     <Text key={item}>{item.fullname} - {item.code} - {item.lga}</Text>
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

export default MainStudentCodeView
