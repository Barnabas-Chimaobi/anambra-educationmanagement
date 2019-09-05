import React, { Component } from "react";
import {View,Text,StyleSheet, Image,TextInput} from "react-native";
import { Container, Header, Content, Button,Form, Item, Input, Label,Card, CardItem, Body } from 'native-base';
import { background } from "../constants/images";
import { LinearGradient } from "expo-linear-gradient";

class Home extends Component {

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
                    <View>
                        <Text style={styles.mainText}>Ministry of Basic Education</Text>
                        <Text style={styles.descriptionText}>Student, Teacher and School Infromation Base</Text>
                    </View>
                    <View style={{width:'80%', backgroundColor:'rgba(255, 255, 255, 0.34)', padding: 20, margin: 10}}>
                        <View>
                            <Text style={styles.headerText}>Select Module</Text>
                        </View>

                        <View style={styles.buttonView}>
                            <Button block style={{backgroundColor:'rgba(56, 96, 236, 0.35)'}} onPress={() => { this.props.navigation.navigate("TeacherIndex") }}>
                                <Text style={styles.buttonText}>Teacher Information</Text>
                            </Button>
                        </View>

                        <View style={styles.buttonView}>
                            <Button block style={{backgroundColor:'rgba(146, 56, 236, 0.35)'}} onPress={() => { this.props.navigation.navigate("StudentIndex") }}>
                                <Text style={styles.buttonText}>Student Information</Text>
                            </Button>
                        </View>

                        <View style={styles.buttonView}>
                            <Button block style={{backgroundColor:'rgba(236, 56, 196, 0.35)'}} onPress={() => { this.props.navigation.navigate("SchoolIndex") }}>
                                <Text style={styles.buttonText}>School Information</Text>
                            </Button>
                        </View>
                    </View>

                    <View style={styles.buttonViewOne}>
                        <Button style={styles.buttonOne}>
                            <Text style={styles.buttonTextOne}>Logout</Text>
                        </Button>
                    </View>

                    


            </LinearGradient>
        );
    }
}
export default Home;

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
    buttonView:{width:'100%', alignSelf:'center', marginBottom:'3%', padding: '1%'},
    button:{backgroundColor:'#fff', padding: '10'},
    buttonText:{fontSize:20, fontWeight: '600', color:'#000',alignSelf:'center'},
    inputView: {
        width: '100%',
        alignItems: 'stretch'
    },
    headerText:{marginBottom:'5%',fontSize:20, lineHeight:29,fontFamily: 'Roboto', fontWeight:'bold',textTransform:'capitalize', alignSelf:'center'},

    buttonViewOne:{margin: '2%', width:'30%'},
    buttonOne:{backgroundColor:'#0884d2', padding: 9, alignItems: 'center', textAlign: 'center'},
    buttonTextOne:{fontSize:17, color:'#fff', paddingLeft: 20, alignSelf:'center', textAlign: 'center'}


});