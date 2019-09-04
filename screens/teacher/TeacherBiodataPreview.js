import React, { Component } from "react";
import {View,Text,StyleSheet, Image,TextInput,ScrollView} from "react-native";
import {Button} from 'native-base';

class TeacherBiodataPreview extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <ScrollView contentContainerStyle={styles.container}>
                    <View style={{width:'100%', backgroundColor:'rgba(255, 255, 255, 0.34)', padding: 20, margin: 10}}>
                        <View style={{backgroundColor:'#E6DC82', padding :10}}>
                            <Text style={styles.headerText}>Existing Teacher Information</Text>
                        </View>

                        <View style={{margin: 15, alignSelf:'flex-start' }}>
                            <Text style={styles.headerText}>Personal Details</Text>
                            <View  style={{ borderBottomColor: 'black',borderBottomWidth: 1,alignSelf:'stretch'}} />
                        </View>

                        <View style={{width:'50%',justifyContent:'center', alignSelf:'center'}}>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>First Name</Text>
                                <Text style={styles.textInput}>Chijioke</Text>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Last Name</Text>

                                <Text style={styles.textInput}>Ugwuanyi</Text>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Other Name</Text>

                                <Text style={styles.textInput}>Max</Text>
                            </View>
                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Sex</Text>

                                <Text style={styles.textInput}>Male</Text>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Date of Birth</Text>

                                <Text style={styles.textInput}>20/03/1988</Text>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>State of Origin</Text>

                                <Text style={styles.textInput}>Anambra</Text>
                            </View>
                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>L.G.A</Text>

                                <Text style={styles.textInput}>Onitsha South</Text>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Hometown</Text>

                                <Text style={styles.textInput}>Ebenebe</Text>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Residential Address</Text>

                                <Text style={styles.textInput}>228 works road Awka</Text>
                            </View>
                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Do you live within the school ?</Text>

                                <Text style={styles.textInput}>Yes</Text>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Phone Number</Text>

                                <Text style={styles.textInput}>08065789547</Text>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Next of Kin</Text>

                                <Text style={styles.textInput}>James Chudi</Text>
                            </View>
                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Next of Kin Phone Number</Text>

                                <Text style={styles.textInput}>08065789547</Text>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Email</Text>

                                <Text style={styles.textInput}>Chijioke@jmail.com</Text>
                            </View>


                            <View style={styles.buttonView}>
                               <Button block style={styles.button} onPress={()=>{this.props.navigation.navigate("AcademicPreview")}}>
                                    <Text style={styles.buttonText}>Next</Text>
                               </Button>
                            </View>

                        </View>
                    </View>
            </ScrollView>
        );
    }
}
export default TeacherBiodataPreview;

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