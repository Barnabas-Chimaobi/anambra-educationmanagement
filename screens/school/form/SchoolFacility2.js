
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView, Picker } from "react-native";
import { Container, Content, Form, Button, DatePicker} from 'native-base';

class SchoolFacility2 extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>

                <View style={{ backgroundColor: '#E6DC82', padding: 10 }}>
                    <Text style={styles.headerText}>New School Information</Text>
                </View>

                <Content style={{ width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.34)', padding: 20, margin: 10 }}>

                <View style={{width: '85%', borderBottomColor: '#333', borderBottomWidth: 1, margin :10, marginLeft: 30}}>
                    <Text style={styles.subText}>Facilities &amp; Conditions - Part 2</Text>
                </View>
                
                   

                    <Form style={{ width: '50%', justifyContent: 'center', alignSelf: 'center' }}>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Is there a Parent Teacher Association (PTA)?</Text>
                            <Picker 
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    onValueChange={()=>{}}>
                                 <Picker.Item label='Yes' value='Yes' />
                                 <Picker.Item label='No' value='No' />
                               </Picker>
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Date of last inspection visit</Text>
                            <DatePicker
                                defaultDate={new Date(2018, 4, 4)}
                                minimumDate={new Date(2018, 1, 1)}
                                maximumDate={new Date(2018, 12, 31)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setDate}
                                disabled={false}
                            />
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Number of Inspection Visits in the last academic year</Text>
                            <TextInput style={styles.textInput} />
                        </View>
                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Which authority conducted the last inspection?</Text>
                            <Picker 
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    onValueChange={()=>{}}>
                                 <Picker.Item label='Federal' value='Federal' />
                                 <Picker.Item label='State' value='State' />
                                 <Picker.Item label='L.G.A' value='L.G.A' />
                               </Picker>
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Has your school received grants in the last two academic sessions?</Text>
                            <Picker 
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    onValueChange={()=>{}}>
                                 <Picker.Item label='Yes' value='Yes' />
                                 <Picker.Item label='No' value='No' />
                               </Picker>
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>If yes, what type of grants?</Text>
                            <TextInput style={styles.textInput} />
                        </View>
                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Which tier of Governement owns the school?</Text>
                            <Picker 
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    onValueChange={()=>{}}>
                                 <Picker.Item label='Federal' value='Federal' />
                                 <Picker.Item label='State' value='State' />
                                 <Picker.Item label='L.G.A' value='L.G.A' />
                               </Picker>
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>How many children were enrolled with birth certificates by:</Text>
                            <Picker 
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    onValueChange={()=>{}}>
                                 <Picker.Item label='Npoc' value='Npoc' />
                                 <Picker.Item label='Hospital' value='Hospital' />
                                 <Picker.Item label='Courts' value='Courts' />
                                 <Picker.Item label='Others' value='Others' />
                                 <Picker.Item label='L.G.A' value='L.G.A' />
                               </Picker>
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Total number of children by class</Text>
                            <TextInput style={styles.textInput} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Age Distribution</Text>
                            <TextInput style={styles.textInput} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>JSCE/SSCE for the previous academic year</Text>
                            <TextInput style={styles.textInput} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Children with special needs</Text>
                            <TextInput style={styles.textInput} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>How many non-teaching staff
                            are working at the school?</Text>
                            <TextInput style={styles.textInput} />
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>How many staff are working at the school?</Text>
                            <TextInput style={styles.textInput} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>How many classrooms are in the school?</Text>
                            <TextInput style={styles.textInput} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>How many classes are held outside?</Text>
                            <TextInput style={styles.textInput} />
                        </View>



                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Does the school have good whiteboards
                            in all classes?</Text>
                            <TextInput style={styles.textInput} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Source of safe drinking water</Text>
                            <Picker 
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    onValueChange={()=>{}}>
                                 <Picker.Item label='Pipe-borne water' value='Pipe-borne water' />
                                 <Picker.Item label='Borehole' value='Borehole' />
                                 <Picker.Item label='Well' value='Well' />
                                 <Picker.Item label='Others' value='Others' />
                                 <Picker.Item label='No source of safe water' value='No source of safe water' />
                               </Picker>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.buttonView}>
                                <Button block style={styles.button2} onPress={() => { this.props.navigation.navigate("Facility") }}>
                                    <Text style={styles.buttonText}>Previous</Text>
                                </Button>
                            </View>

                            <View style={styles.buttonView}>
                                <Button block style={styles.button} onPress={() => { this.props.navigation.navigate("Facility3") }}>
                                    <Text style={styles.buttonText}>Submit</Text>
                                </Button>
                            </View>
                        </View>
                    </Form>
                </Content>
            </Container>

        );
    }
}
export default SchoolFacility2;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "flex-start", backgroundColor: '#fff', alignItems: 'center' },
    buttonView: { width: '60%', alignSelf: 'flex-end', margin: '3%' },
    button: { backgroundColor: '#098BD3' },
    button2: { backgroundColor: '#E6DC82' },
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