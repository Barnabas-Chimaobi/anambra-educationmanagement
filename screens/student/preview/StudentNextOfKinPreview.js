import React, { Component } from "react";
import {View,Text,StyleSheet, Image,TextInput,ScrollView} from "react-native";
import {Button, Container, Form, Content} from 'native-base';

class StudentNextOfKinPreview extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            
            <Container>
                <View style={{width: '100%',backgroundColor:'#E6DC82', padding :10}}>
                    <Text style={styles.headerText}>Existing Student Information</Text>
                </View>

                <Content>

                    <View style={{width: '85%', borderBottomColor: '#333', borderBottomWidth: 1, margin :10, marginLeft: 30}}>
                            <Text style={styles.subText}>Guardian & Next of Kin Details</Text>
                    </View>
                    
                    <Form style={{ width: '75%', marginBottom: 40, alignSelf: 'center' }}>

                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Next of Kin Name</Text>
                        <Text style={styles.textInput}>Okonkwo Kingston</Text>
                    </View>


                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Next of Kin Phone Number</Text>
                        <Text style={styles.textInput}>08097654878</Text>
                    </View>


                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Next of Kin Residential Address</Text>
                        <Text style={styles.textInput}>34 Emeka Abalu crescent</Text>
                    </View>
                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Names of Parents/ Guardians</Text>
                        <Text style={styles.textInput}>Okonkwo Mercy</Text>
                    </View>

                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>State of Origin</Text>
                        <Text style={styles.textInput}>Enugu</Text>
                    </View>
                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>L.G.A</Text>
                        <Text style={styles.textInput}>Oji</Text>
                    </View>


                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Realtionship with Pupil</Text>
                        <Text style={styles.textInput}>Parent</Text>
                    </View>


                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Residential Address</Text>
                        <Text style={styles.textInput}>34 Emeka Abalu crescent</Text>
                    </View>


                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Phone Number</Text>
                        <Text style={styles.textInput}>08065897485</Text>
                    </View>

                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Email</Text>
                        <Text style={styles.textInput}>kingstonokonkwo@gmail.com</Text>
                    </View>

                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>ANSSID Number</Text>
                        <Text style={styles.textInput}>12BCNDJ785</Text>
                    </View>
                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Occupation</Text>
                        <Text style={styles.textInput}>Trader</Text>
                    </View>



                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <View style={styles.buttonView}>
                            <Button block style={styles.button2} onPress={()=>{this.props.navigation.navigate("BiodataPreview")}}>
                                    <Text style={styles.buttonText}>Previous</Text>
                            </Button>
                        </View>

                        <View style={styles.buttonView}>
                            <Button block style={styles.button} onPress={()=>{this.props.navigation.navigate("Student")}}>
                                    <Text style={styles.buttonText2}>Submit</Text>
                            </Button>
                        </View>
                    </View>

                    </Form>
                </Content>
            </Container>

         );
    }
}
export default StudentNextOfKinPreview;

const styles = StyleSheet.create({
    container: {flex: 1,justifyContent: "flex-start",backgroundColor:'#fff',alignItems: 'center'},
    buttonView:{width:'30%', alignSelf:'flex-end', margin:'3%'},
    button:{backgroundColor:'#098BD3'},
    button2:{backgroundColor:'#E6DC82'},
    buttonText:{fontSize:15, color:'#000',alignSelf:'center', fontWeight:'700'},
    buttonText2:{fontSize:15, color:'#fff',alignSelf:'center', fontWeight:'700'},
    inputView: { width: '100%',alignItems: 'stretch'},
    headerText:{fontSize:18, fontFamily: 'Roboto', fontWeight:'bold',textTransform:'capitalize', alignSelf:'center'},
    subText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold', textTransform: 'capitalize', alignSelf: 'flex-start' },
    labelText: { width: '45%', height: 35, lineHeight: 35, textAlign: 'right', marginRight: 10, justifyContent:'flex-end', alignItems: 'flex-end', fontSize: 15},
    textInput: {width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15, 
                borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7', 
                color: '#000', flex: 1,flexDirection: 'row',justifyContent: 'flex-end',alignItems: 'center',}
});