
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView, Picker } from "react-native";
import { Container, Content, Form, Button, DatePicker } from 'native-base';

class SchoolFacility3 extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>

                <View style={{ backgroundColor: '#E6DC82', padding: 10 }}>
                    <Text style={styles.headerText}>New Student Information</Text>
                </View>

                <Content style={{ width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.34)', padding: 20, margin: 10 }}>

                    <View style={{ width: '85%', borderBottomColor: '#333', borderBottomWidth: 1, margin: 10, marginLeft: 30 }}>
                        <Text style={styles.subText}>Facilities &amp; Conditions - Part 3</Text>
                    </View>



                    <Form style={{ width: '75%', justifyContent: 'center', alignSelf: 'center' }}>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Facilities available</Text>
                            <TextInput style={styles.textInput} />
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Toilet type</Text>
                            <TextInput style={styles.textInput} />
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Power Source</Text>
                            <Picker 
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    onValueChange={()=>{}}>
                                 <Picker.Item label='PHCN' value='PHCN' />
                                 <Picker.Item label='Solar' value='Solar' />
                                 <Picker.Item label='Generator' value='Generator' />
                                 <Picker.Item label='None' value='None' />
                               </Picker>
                        </View>
                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Health Facility</Text>
                            <Picker 
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    onValueChange={()=>{}}>
                                 <Picker.Item label='Health Clinic' value='Health Clinic' />
                                 <Picker.Item label='First Aid Kit' value='First Aid Kit' />
                                 <Picker.Item label='None' value='None' />
                               </Picker>
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Sports Facilities</Text>
                            <Picker 
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    onValueChange={()=>{}}>
                                 <Picker.Item label='Yes' value='Yes' />
                                 <Picker.Item label='No' value='No' />
                               </Picker>
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Seating</Text>
                            <TextInput style={styles.textInput} />
                        </View>



                        <View style={{ margin: 15, alignSelf: 'flex-start' }}>
                            <Text style={styles.headerText}>Student/Teacher Book</Text>
                            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, alignSelf: 'stretch' }} />
                        </View>

                        <View style={{ width: '50%', justifyContent: 'center', alignSelf: 'center' }}>

                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelText}>Number of core subject textbooks available
to children provided by Governement</Text>
                                <TextInput style={styles.textInput} />
                            </View>


                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelText}>Number of core subject teachers textbooks
available in the school provided by Government</Text>
                                <TextInput style={styles.textInput} />
                            </View>


                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelText}>Number of students by subjects</Text>
                                <TextInput style={styles.textInput} />
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.buttonView}>
                                    <Button block style={styles.button2} onPress={() => { this.props.navigation.navigate("Facility2") }}>
                                        <Text style={styles.buttonText}>Previous</Text>
                                    </Button>
                                </View>

                                <View style={styles.buttonView}>
                                    <Button block style={styles.button} onPress={() => { this.props.navigation.navigate("HeadTeacher") }}>
                                        <Text style={styles.buttonText}>Submit</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </Form>

                </Content>
            </Container>

        );
    }
}
export default SchoolFacility3;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "flex-start", backgroundColor: '#fff', alignItems: 'center' },
    buttonView: { width: '60%', alignSelf: 'flex-end', margin: '3%' },
    button: { backgroundColor: '#098BD3',color: '#fff', textAlign: 'center', paddingLeft: 15, width: '65%',flex: 1,
    flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', marginRight: 10,},
    
    button2: { backgroundColor: '#E6DC82', color: '#fff', textAlign: 'center', paddingLeft: 15, width: '65%',flex: 1,
    flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', marginRight: 10, },
    
    buttonText: { fontSize: 15, color: '#fff', alignSelf: 'center' },
    inputView: { width: '100%', alignItems: 'stretch' },
    headerText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: '500', textTransform: 'capitalize', alignSelf: 'center' },
    subText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold', textTransform: 'capitalize', alignSelf: 'flex-start' },

    labelText: { maxWidth: '45%', minHeight: 35, lineHeight: 15, textAlign: 'right', marginRight: 10, justifyContent: 'flex-end', alignItems: 'flex-end', fontSize: 15 },
    textInput: {
        width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15,
        borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7',
        color: '#000', flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',
    }
});