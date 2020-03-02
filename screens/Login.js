import React, { Component } from "react";
import {View,Text,StyleSheet, Image,TextInput} from "react-native";
import { Container, Header, Content, Button,Form, Item, Input, Label,Card, CardItem, Body } from 'native-base';
import { background } from "../constants/images";
import { LinearGradient } from "expo-linear-gradient";



class Login extends Component {

    constructor(props) {
        super(props);
    }

    render() {
       
        return (

            <LinearGradient colors={['#098BD3', '#469aa0', '#64a085','#8daa64','#b4b446','#fec608']}
                            style={styles.container}
                            locations={[-5.7,22.72,53.6,73.16,86.22,97.8]}>
                   <View>
                        <Image source={background.logo} resizeMode="center" style={styles.logo} />
                    </View>
                    <View style={{marginBottom: '7%'}}>
                        <Text style={styles.mainText}>Ministry of Basic Education</Text>
                        <Text style={styles.descriptionText}>Student, Teacher and School Infromation Base</Text>
                    </View>

                    <View style={{width:'80%', backgroundColor:'rgba(255, 255, 255, 0.34)', padding: 20, margin: 10}}>
                        <View>
                            <Text style={styles.headerText}>Login</Text>
                        </View>
                        <View style={{margin:'3%'}}>
                            <Text>User Id</Text>
                            <TextInput style={styles.textInput} />
                        </View>

                        <View style={{margin:'3%'}}>
                            <Text>Password</Text>
                            <TextInput style={styles.textInput} />
                        </View>

                        
                    </View>

                    <View style={styles.buttonView}>
                        <Button block small style={styles.button} onPress={() => { this.props.navigation.navigate("Home") }}>
                            <Text style={styles.buttonText}>Login</Text>
                        </Button>
                    </View>


            </LinearGradient>
        );
    }
}
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor:'rgba(254, 198, 8, 0.17)',
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        margin: '5%',
    },
    mainText:{padding:'1%', fontSize:19, textAlign: 'center', fontFamily: 'Roboto', 
              fontWeight:'bold', textTransform:'uppercase',alignSelf:'center'},
    descriptionText:{padding:'0.5%',fontSize:15, textAlign: 'center', lineHeight:29,fontFamily: 'Roboto', 
                     textTransform:'capitalize', alignSelf:'center'},
    buttonView:{width:'30%', alignSelf:'center', margin:'3%'},
    button:{backgroundColor:'#0884d2'},
    buttonText:{fontSize:15, color:'#fff',alignSelf:'center'},
    inputView: { width: '100%', alignItems: 'stretch'},
    textInput: {paddingTop: 5, marginTop: 5, backgroundColor:'rgba(255,255,255,.5)', color:'#000'},
    headerText:{fontSize:20, lineHeight:29,fontFamily: 'Roboto', fontWeight:'bold',textTransform:'capitalize', alignSelf:'center'},


});