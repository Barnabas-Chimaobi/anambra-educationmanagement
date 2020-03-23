import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableNativeFeedback } from "react-native";
import { TextInput } from "react-native-paper";
import {Button} from "native-base"
import MainCodeView from "./mainCodeView"

class Code extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    email: "",
    password: "",
    myData: [],
    mappedArrayField: []
  };

  //get the list of all teachers matched the logged in user's email and password

  handleBioChangeText(name) {
    return text => {
      this.setState({ [name]: text });
    };
  }


  authenticateUser =() =>{
    //Extract values from TextInput
    if (this.state.email !== "" && this.state.password !== "") {
    fetch(
        `http://www.asbemis.com/api/teachers?email=${this.state.email}&password=${this.state.password}`
      )
        .then(data => data.json())
        .then(reshapedData => {
          const mappedArray = reshapedData.map(reData => {
            return {
                personId: reData.person.personId,
                Surname: reData.person.surname,
                Othername: reData.person.otherName,
                firstname: reData.person.firstName,
                fullname: reData.person.name,
                lga: reData.person.lga,
                code: reData.code
            }
            });

            this.setState({
              mappedArrayField: mappedArray
            });

            //console.log(this.state.mappedArrayField, ", STATE");

            //console.log(mappedArray, ", ARRAY");

            this.props.navigation.navigate("MainTeacherCodeView", { mappedArray: mappedArray });
  
        })
        .catch(err => {
          console.log(err);
        });
        
    }else{
      alert("please fill your data")
    }
  }
   
 




  render() {
  //   console.log(this.state.mappedArrayField)
  //   const gotten = this.state.mappedArrayField.map((item)=>{
  //     return item
  //  })
  //   console.log(gotten)

    return (
      <View style={styles.container}>
        <View style={styles.input1}>
          <Text style={styles.username}>Email</Text>
          <TextInput style={styles.input}
               value={this.state.email}
               name="email"
               onChangeText={this.handleBioChangeText("email")}
          />
        </View>
        <View style={styles.input1}>
          <Text style={styles.username}>Password</Text>
          <TextInput style={styles.input}
            value={this.state.password}
            name="password"
            onChangeText={this.handleBioChangeText("password")}
          />
        </View>
       {/* <View>
         {this.state.mappedArrayField.map(item=>{
           <MainCodeView mappedArray={item}/>
         })}
       </View> */}
        <View style={styles.buttonView}>
            <Button large block style={{backgroundColor:'#748ffc', padding: 15, margin: 10, width: 180, alignSelf: "center"}} onPress={() => { this.authenticateUser()}}>
                <Text style={styles.buttonText}>View Codes</Text>
            </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input : {
    borderWidth: 0.1,
    margin: 5,
    height: 30,
    backgroundColor: "#f1f3f5"
  },
  input: {
    margin: 10
  },
  username :{
   marginTop: 10,
   marginLeft: 10
  },
  input1:{
    marginLeft: 60,
    marginRight: 60
  }
})

export default Code