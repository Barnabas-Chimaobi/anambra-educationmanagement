import React, { Component } from "react";
import {View,Text,StyleSheet, Image,TextInput,ScrollView} from "react-native";
import {Button, Container, Form, Content} from 'native-base';

class StudentBiodataPreview extends Component {

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
                        <Text style={styles.labelText}>First Name</Text>
                        <Text style={styles.textInput}>Miracle</Text>
                    </View>


                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Last Name</Text>
                        <Text style={styles.textInput}>Okonkwo</Text>
                    </View>


                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Other Name</Text>
                        <Text style={styles.textInput}>Onyebuchi</Text>
                    </View>
                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Sex</Text>
                        <Text style={styles.textInput}>Male</Text>
                    </View>


                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Date of Birth</Text>
                        <Text style={styles.textInput}>13/08/2009</Text>
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
                        <Text style={styles.labelText}>Hometown</Text>
                        <Text style={styles.textInput}>2 neni street, New Haven</Text>
                    </View>


                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Residential Address</Text>
                        <Text style={styles.textInput}>2 neni street, New Haven</Text>
                    </View>

                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Distance from school</Text>
                        <Text style={styles.textInput}>4 kilometers</Text>
                    </View>

                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Boarding ?</Text>
                        <Text style={styles.textInput}>Yes</Text>
                    </View>

                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Phone Number</Text>
                        <Text style={styles.textInput}>08045678987</Text>
                    </View>

                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Email</Text>
                        <Text style={styles.textInput}>miracle@school.com</Text>
                    </View>


                    <View style={styles.buttonView}>
                       <Button block style={styles.button} onPress={()=>{this.props.navigation.navigate("NextOfKinPreview")}}>
                            <Text style={styles.buttonText}>Next</Text>
                       </Button>
                    </View>

                    </Form>
                </Content>
            </Container>

       );
    }
}
export default StudentBiodataPreview;

const styles = StyleSheet.create({
    container: {flex: 1,justifyContent: "flex-start",backgroundColor:'#fff',alignItems: 'center'},
    buttonView:{width:'30%', alignSelf:'flex-end', margin:'3%'},
    button:{backgroundColor:'#098BD3'},
    buttonText:{fontSize:15, color:'#fff',alignSelf:'center', fontWeight:'700'},
    inputView: { width: '100%',alignItems: 'stretch'},
    headerText:{fontSize:18, fontFamily: 'Roboto', fontWeight:'bold',textTransform:'capitalize', alignSelf:'center'},
    subText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold', textTransform: 'capitalize', alignSelf: 'flex-start' },
    labelText: { width: '45%', height: 35, lineHeight: 35, textAlign: 'right', marginRight: 10, justifyContent:'flex-end', alignItems: 'flex-end', fontSize: 15},
    textInput: {width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15, 
                borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7', 
                color: '#000', flex: 1,flexDirection: 'row',justifyContent: 'flex-end',alignItems: 'center',}
});