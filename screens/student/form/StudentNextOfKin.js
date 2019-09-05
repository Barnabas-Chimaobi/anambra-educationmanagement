import React, { Component } from "react";
import {View,Text,StyleSheet, Image,TextInput,ScrollView} from "react-native";
import {Button} from 'native-base';

class StudentNextOfKin extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <ScrollView contentContainerStyle={styles.container}>
                    <View style={{width:'100%', backgroundColor:'rgba(255, 255, 255, 0.34)', padding: 20, margin: 10}}>
                        <View style={{backgroundColor:'#E6DC82', padding :10}}>
                            <Text style={styles.headerText}>New Student Information</Text>
                        </View>

                        <View style={{margin: 15, alignSelf:'flex-start' }}>
                            <Text style={styles.headerText}>Guardian & Next of Kin Details</Text>
                            <View  style={{ borderBottomColor: 'black',borderBottomWidth: 1,alignSelf:'stretch'}} />
                        </View>

                        <View style={{width:'50%',justifyContent:'center', alignSelf:'center'}}>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Next of Kin Name</Text>
                                <TextInput style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Next of Kin Phone Number</Text>
                                <TextInput style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Next of Kin Residential Address</Text>
                                <TextInput style={styles.textInput}/>
                            </View>
                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Names of Parents/ Guardians</Text>
                                <TextInput style={styles.textInput}/>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>State of Origin</Text>
                                <TextInput style={styles.textInput}/>
                            </View>
                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>L.G.A</Text>
                                <TextInput style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Realtionship with Pupil</Text>
                                <TextInput style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Residential Address</Text>
                                <TextInput style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Phone Number</Text>
                                <TextInput style={styles.textInput}/>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Email</Text>
                                <TextInput style={styles.textInput}/>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>ANSSID Number</Text>
                                <TextInput style={styles.textInput}/>
                            </View>
                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Occupation</Text>
                                <TextInput style={styles.textInput}/>
                            </View>



                            <View style={{flexDirection:'row'}}>
                                <View style={styles.buttonView}>
                                    <Button block style={styles.button2} onPress={()=>{this.props.navigation.navigate("Biodata")}}>
                                            <Text style={styles.buttonText}>Previous</Text>
                                    </Button>
                                </View>

                                <View style={styles.buttonView}>
                                    <Button block style={styles.button} onPress={()=>{this.props.navigation.navigate("Student")}}>
                                            <Text style={styles.buttonText}>Submit</Text>
                                    </Button>
                                </View>
                            </View>

                        </View>
                    </View>
            </ScrollView>
        );
    }
}
export default StudentNextOfKin;

const styles = StyleSheet.create({
    container: {flex: 1,justifyContent: "flex-start",backgroundColor:'#fff',alignItems: 'center'},
    buttonView:{width:'30%', alignSelf:'flex-end', margin:'3%'},
    button:{backgroundColor:'#098BD3'},
    button2:{backgroundColor:'#E6DC82'},
    buttonText:{fontSize:15, color:'#fff',alignSelf:'center'},
    inputView: { width: '100%',alignItems: 'stretch'},
    headerText:{fontSize:18, fontFamily: 'Roboto', fontWeight:'bold',textTransform:'capitalize', alignSelf:'center'},
    labelText:{fontSize: 15, marginRight:15},
    textInput:{width:'100%',fontSize: 15, fontWeight:'bold', marginRight:15, borderColor:'#F7F7F7', borderWidth: 1, backgroundColor:'#F7F7F7', color:'#000',justifyContent: 'flex-end', alignItems:'stretch'}
});