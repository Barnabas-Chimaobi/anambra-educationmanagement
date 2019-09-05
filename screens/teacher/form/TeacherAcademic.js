import React, { Component } from "react";
import {View,Text,StyleSheet, Image,TextInput,ScrollView} from "react-native";
import {Button} from 'native-base';

class TeacherAcademic extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <ScrollView contentContainerStyle={styles.container} >
                    <View style={{width:'100%', backgroundColor:'rgba(255, 255, 255, 0.34)', padding: 20, margin: 10}}>
                        <View style={{backgroundColor:'#E6DC82', padding :10}}>
                            <Text style={styles.headerText}>New Teacher Information</Text>
                        </View>

                        <View style={{margin: 15, alignSelf:'flex-start' }}>
                            <Text style={styles.headerText}>Academic Details</Text>
                            <View  style={{ borderBottomColor: 'black',borderBottomWidth: 1,alignSelf:'stretch'}} />
                        </View>

                        <View style={{width:'50%',justifyContent:'center', alignSelf:'center'}}>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Highest Qualification</Text>
                                <TextInput style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Institutions Attended</Text>
                                <TextInput style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Subject Area Specialisation</Text>
                                <TextInput style={styles.textInput}/>
                            </View>
                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Date of First Appointment</Text>
                                <TextInput style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Expected Retirement Date</Text>
                                <TextInput style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Years of Experience</Text>
                                <TextInput style={styles.textInput}/>
                            </View>
                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Grade Level</Text>
                                <TextInput style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Rank</Text>
                                <TextInput style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Post Held in School</Text>
                                <TextInput style={styles.textInput}/>
                            </View>
                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Year Posted to School</Text>
                                <TextInput style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Posting History</Text>
                                <TextInput style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Type of Staff</Text>
                                <TextInput style={styles.textInput}/>
                            </View>
                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Class of Staff</Text>
                                <TextInput style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Number of Subjects taught</Text>
                                <TextInput style={styles.textInput}/>
                            </View>



                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Number of streams taught</Text>
                                <TextInput style={styles.textInput}/>
                            </View>



                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Number of trainings attended</Text>
                                <TextInput style={styles.textInput}/>
                            </View>



                            <View style={{flexDirection:'row'}}>
                                <View style={styles.buttonView}>
                                    <Button block style={styles.button2} onPress={()=>{this.props.navigation.navigate("Biodata")}}>
                                            <Text style={styles.buttonText}>Previous</Text>
                                    </Button>
                                </View>

                                <View style={styles.buttonView}>
                                    <Button block style={styles.button} onPress={()=>{this.props.navigation.navigate("Teacher")}}>
                                            <Text style={styles.buttonText}>Next</Text>
                                    </Button>
                                </View>
                            </View>

                        </View>
                    </View>
            </ScrollView>
        );
    }
}
export default TeacherAcademic;

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