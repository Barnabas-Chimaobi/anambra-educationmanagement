import React, { Component } from "react";
import {View,Text,StyleSheet, Image,TextInput,ScrollView} from "react-native";
import {Button} from 'native-base';

class StudentBiodataPreview extends Component {

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
                    <Text style={styles.headerText}>Personal Details</Text>
                    <View  style={{ borderBottomColor: 'black',borderBottomWidth: 1,alignSelf:'stretch'}} />
                </View>

                <View style={{width:'50%',justifyContent:'center', alignSelf:'center'}}>

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

                </View>
            </View>
    </ScrollView>

       );
    }
}
export default StudentBiodataPreview;

const styles = StyleSheet.create({
    container: {flex: 1,justifyContent: "flex-start",backgroundColor:'#fff',alignItems: 'center'},
    buttonView:{width:'30%', alignSelf:'flex-end', margin:'3%'},
    button:{backgroundColor:'#098BD3'},
    buttonText:{fontSize:15, color:'#fff',alignSelf:'center'},
    inputView: { width: '100%',alignItems: 'stretch'},
    headerText:{fontSize:18, fontFamily: 'Roboto', fontWeight:'bold',textTransform:'capitalize', alignSelf:'center'},
    labelText:{fontSize: 15, marginRight:15},
    textInput:{width:'100%',fontSize: 15, fontWeight:'bold', marginRight:15, borderColor:'#F7F7F7', borderWidth: 1, backgroundColor:'#F7F7F7', color:'#000',justifyContent: 'flex-end', alignItems:'stretch'}
});