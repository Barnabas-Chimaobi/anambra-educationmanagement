
import React, { Component } from "react";
import {View,Text,StyleSheet, Image,TextInput,ScrollView} from "react-native";
import {Button} from 'native-base';

class SchoolFacility2 extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
            <View style={{width:'100%', backgroundColor:'rgba(255, 255, 255, 0.34)', padding: 20, margin: 10}}>
                <View style={{backgroundColor:'#E6DC82', padding :10}}>
                    <Text style={styles.headerText}>New School Information</Text>
                </View>

                <View style={{margin: 15, alignSelf:'flex-start' }}>
                    <Text style={styles.headerText}>Facilities & Conditions - Part 2</Text>
                    <View  style={{ borderBottomColor: 'black',borderBottomWidth: 1,alignSelf:'stretch'}} />
                </View>

                <View style={{width:'50%',justifyContent:'center', alignSelf:'center'}}>

                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Is there a Parent Teacher Association (PTA)?</Text>
                        <TextInput style={styles.textInput}/>
                    </View>


                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Date of last inspection visit</Text>
                        <TextInput style={styles.textInput}/>
                    </View>


                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Number of Inspection Visits in the last academic year</Text>
                        <TextInput style={styles.textInput}/>
                    </View>
                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Which authority conducted the last inspection?</Text>
                        <TextInput style={styles.textInput}/>
                    </View>


                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Has your school received grants in the last two academic sessions?</Text>
                        <TextInput style={styles.textInput}/>
                    </View>


                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>If yes, what type of grants?</Text>
                        <TextInput style={styles.textInput}/>
                    </View>
                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Which tier of Governement owns the school?</Text>
                        <TextInput style={styles.textInput}/>
                    </View>


                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>How many children were enrolled with birth certificates by:</Text>
                        <TextInput style={styles.textInput}/>
                    </View>


                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Total number of children by class</Text>
                        <TextInput style={styles.textInput}/>
                    </View>

                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Age Distribution</Text>
                        <TextInput style={styles.textInput}/>
                    </View>

                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>JSCE/SSCE for the previous academic year</Text>
                        <TextInput style={styles.textInput}/>
                    </View>

                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Children with special needs</Text>
                        <TextInput style={styles.textInput}/>
                    </View>

                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>How many non-teaching staff
 are working at the school?</Text>
                        <TextInput style={styles.textInput}/>
                    </View>


                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>How many staff are working at the school?</Text>
                        <TextInput style={styles.textInput}/>
                    </View>

                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>How many classrooms are in the school?</Text>
                        <TextInput style={styles.textInput}/>
                    </View>

                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>How many classes are held outside?</Text>
                        <TextInput style={styles.textInput}/>
                    </View>



                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Does the school have good whiteboards
in all classes?</Text>
                        <TextInput style={styles.textInput}/>
                    </View>

                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelText}>Source of safe drinking water</Text>
                        <TextInput style={styles.textInput}/>
                    </View>

                    <View style={{flexDirection:'row'}}>
                        <View style={styles.buttonView}>
                            <Button block style={styles.button2} onPress={()=>{this.props.navigation.navigate("Facility")}}>
                                    <Text style={styles.buttonText}>Previous</Text>
                            </Button>
                        </View>

                        <View style={styles.buttonView}>
                            <Button block style={styles.button} onPress={()=>{this.props.navigation.navigate("Facility3")}}>
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
export default SchoolFacility2;

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