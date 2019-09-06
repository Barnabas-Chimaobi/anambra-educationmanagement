
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView, Picker } from "react-native";
import { Container, Content, Form, Button} from 'native-base';

class SchoolFacility extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (



            <Container>

                <View style={{ width: '100%', backgroundColor: '#E6DC82', padding: 10 }}>
                    <Text style={styles.headerText}>New School Information</Text>
                </View>

                <Content>

                <View style={{width: '85%', borderBottomColor: '#333', borderBottomWidth: 1, margin :10, marginLeft: 30}}>
                    <Text style={styles.subText}>Facilities &amp; Conditions</Text>
                </View>
                  

                <Form style={{ width: '75%', marginBottom: 40, alignSelf: 'center' }}>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Are facilities shared with other schools?</Text>
                            <Picker 
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    onValueChange={()=>{}}>
                                 <Picker.Item label='Yes' value='Yes' />
                                 <Picker.Item label='No' value='No' />
                               </Picker>
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>If yes, how many schools share facilities?</Text>
                            <TextInput style={styles.textInput} />
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Is there multi-grade teaching?</Text>
                            <Picker 
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    onValueChange={()=>{}}>
                                 <Picker.Item label='Yes' value='Yes' />
                                 <Picker.Item label='No' value='No' />
                               </Picker>
                        </View>
                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Distance from catchment communities</Text>
                            <TextInput style={styles.textInput} />
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Distance from L.G.A Headquarters</Text>
                            <TextInput style={styles.textInput} />
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Number of students living over 1km from the school?</Text>
                            <TextInput style={styles.textInput} />
                        </View>
                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Is the school mixed or single sex?</Text>
                            <Picker 
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    onValueChange={()=>{}}>
                                 <Picker.Item label='Mixed' value='Mixed' />
                                 <Picker.Item label='Girls only' value='Girls only' />
                                 <Picker.Item label='Boys only' value='Boys only' />
                               </Picker>
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>School population</Text>
                            <TextInput style={styles.textInput} />
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Male population</Text>
                            <TextInput style={styles.textInput} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Female population</Text>
                            <TextInput style={styles.textInput} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Are there boarding facilities?</Text>
                            <Picker 
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    onValueChange={()=>{}}>
                                 <Picker.Item label='Yes' value='Yes' />
                                 <Picker.Item label='No' value='No' />
                               </Picker>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>If yes, how many students board at the school?</Text>
                            <TextInput style={styles.textInput} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Availability of perimeter fencing</Text>
                            <Picker 
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    onValueChange={()=>{}}>
                                 <Picker.Item label='Yes, in good condition' value='Yes, in good condition' />
                                 <Picker.Item label='Yes, needs minor repair' value='Yes, needs minor repair' />
                                 <Picker.Item label='Yes, needs major repair' value='Yes, needs major repair' />
                                 <Picker.Item label='No fence or wall' value='No fence or wall' />
                               </Picker>
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Availability of security personnel</Text>
                            <Picker 
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    onValueChange={()=>{}}>
                                 <Picker.Item label='Yes' value='Yes' />
                                 <Picker.Item label='No' value='No' />
                               </Picker>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Form of security</Text>
                            <Picker 
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    onValueChange={()=>{}}>
                                 <Picker.Item label='Government employed' value='Government employed' />
                                 <Picker.Item label='PTA employed' value='PTA employed' />
                                 <Picker.Item label='Philantropist' value='Philantropist' />
                               </Picker>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Number of security personnel</Text>
                            <TextInput style={styles.textInput} />
                        </View>



                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Does the school have land encroachment?</Text>
                            <Picker 
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    onValueChange={()=>{}}>
                                 <Picker.Item label='Yes' value='Yes' />
                                 <Picker.Item label='No' value='No' />
                               </Picker>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Does the school have School Based Management Committee (SBMC)?</Text>
                            <Picker 
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    onValueChange={()=>{}}>
                                 <Picker.Item label='Yes' value='Yes' />
                                 <Picker.Item label='No' value='No' />
                               </Picker>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Did the school prepare a School Improvement Plan (SIP) last year?</Text>
                            <Picker 
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    onValueChange={()=>{}}>
                                 <Picker.Item label='Yes' value='Yes' />
                                 <Picker.Item label='No' value='No' />
                               </Picker>
                        </View>


                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.buttonView}>
                                <Button block style={styles.button2} onPress={() => { this.props.navigation.navigate("Profile") }}>
                                    <Text style={styles.buttonText}>Previous</Text>
                                </Button>
                            </View>

                            <View style={styles.buttonView}>
                                <Button block style={styles.button} onPress={() => { this.props.navigation.navigate("Facility2") }}>
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
export default SchoolFacility;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "flex-start", backgroundColor: '#fff', alignItems: 'center' },
    buttonView: { width: '30%', alignSelf: 'flex-end', margin: '3%' },
    button: { backgroundColor: '#098BD3' },
    button2: { backgroundColor: '#E6DC82' },
    buttonText: { fontSize: 15, color: '#fff', alignSelf: 'center' },
    inputView: { width: '100%', alignItems: 'stretch' },

    headerText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: '500', textTransform: 'capitalize', alignSelf: 'center' },
    subText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold', textTransform: 'capitalize', alignSelf: 'flex-start' },

    labelText: { maxWidth: '45%', minHeight: 35, lineHeight: 15, textAlign: 'right', marginRight: 10, justifyContent:'flex-end', alignItems: 'flex-end', fontSize: 15},
    textInput: {width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15, 
                borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7', 
                color: '#000', flex: 1,flexDirection: 'row',justifyContent: 'flex-end',alignItems: 'center',}

    });