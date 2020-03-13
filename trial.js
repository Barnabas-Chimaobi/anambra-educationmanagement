// import React, { Component } from "react";
// import { View, Text, StyleSheet, Image, TextInput, KeyboardAvoidingView, Picker, TouchableOpacity } from "react-native";
// // import { Container, Content, Form, Button, DatePicker, Switch } from 'native-base';
// // import { styles } from "../../constants/styles";
// // import { connect } from 'react-redux'
// // import * as  biodataActions from "../../actions/index";
// // import * as Permissions from 'expo-permissions';
// // import { Camera } from 'expo-camera';
// // import * as FileSystem from 'expo-file-system';
// // import {documentDirectory} from "expo-file-system"


//  class Trial extends Component {


//             base64URL = FileSystem.readAsStringAsync(photo.uri, newer).then(data => {
//             const base64 = 'data:image/jpg;base64' + data;
//             return base64; // are you sure you want to resolve the data and not the base64 string? 
//              }).catch(err => {
//             console.log("​getFile -> err", err);
//              return err ;
//              });
            
//              let fileType = photo.uri.substring(photo.uri.lastIndexOf(".") + 1);

//              let formData = new FormData();
             
//              formData.append("photo", {
//                photo,
//                name: `photo.${fileType}`,
//                type: `image/${fileType}`
//              });
             

//   render(){
//     return(
//       <View>
//         <Text>Messsed up expo</Text>
//       </View>
//     )
//   }
// }

// export default Trial