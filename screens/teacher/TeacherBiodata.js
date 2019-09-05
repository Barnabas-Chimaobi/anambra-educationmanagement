import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView, Picker, Dimensions } from "react-native";
import { Container, Content, Form, Button, DatePicker } from 'native-base';
import { CheckBox } from 'react-native-elements'



class TeacherBiodata extends Component {

    constructor(props) {
        super(props);
        state = Dimensions.get("window");

        this.state = {
            chosenDate: new Date(),
            checked: false,
            checkedYes: false
        }
        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }

    componentWillMount() {
        Dimensions.addEventListener("change", this.handler);
    }

    componentWillUnmount() {
        // Important to stop updating state after unmount
        Dimensions.removeEventListener("change", this.handler);
      }
    

    render() {
        return (

            <Container>


                <View style={{ width: '100%', backgroundColor: '#E6DC82', padding: 10 }}>
                    <Text style={styles.headerText}>New Teacher Information</Text>
                </View>

                <Content>
                    <View style={{ width: '85%', borderBottomColor: '#333', borderBottomWidth: 1, margin: 10, marginLeft: 30 }}>
                        <Text style={styles.subText}>Academic Details</Text>
                    </View>

                    <Form style={{ width: '75%', marginBottom: 40, alignSelf: 'center' }}>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Highest academic qualification</Text>
                            <TextInput style={styles.textInput} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Institutions attended, with date</Text>
                            <TextInput style={styles.textInput} />
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Subject area of specialization</Text>
                            <TextInput style={styles.textInput} />
                        </View>
                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Subjects taught</Text>
                            <CheckBox style={{ backgroundColor: 'transparent' }}
                                title='Mathematics'
                                checked={this.state.checkedYes}
                                onPress={() => this.setState({ checked: !this.state.checkedYes })}
                            />
                            <CheckBox
                                title='English'
                                checked={this.state.checked}
                                onPress={() => this.setState({ checked: !this.state.checked })}
                            /> 
                            <CheckBox
                                title='Health Science'
                                checked={this.state.checked}
                                onPress={() => this.setState({ checked: !this.state.checked })}
                            />
                            <CheckBox
                                title='Social Studies'
                                checked={this.state.checked}
                                onPress={() => this.setState({ checked: !this.state.checked })}
                            />
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Date of first appointment</Text>
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
                                {/* <Text>
                                    Date: {this.state.chosenDate.toString().substr(4, 12)}
                                </Text> */}
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Date of present appointment</Text>
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
                                {/* <Text>
                                    Date: {this.state.chosenDate.toString().substr(4, 12)}
                                </Text> */}
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Expected date of retirement</Text>
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
                                {/* <Text>
                                    Date: {this.state.chosenDate.toString().substr(4, 12)}
                                </Text> */}
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Years of experience</Text>
                            <TextInput style={styles.textInput} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Grade Level</Text>
                            <Picker style={styles.textInput}>
                                <Picker.Item label="level 1" value="level 1" />
                                <Picker.Item label="level 2" value="level 2" />
                            </Picker>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Rank</Text>
                            <Picker style={styles.textInput}>
                                <Picker.Item label=" 1" value=" 1" />
                                <Picker.Item label=" 2" value=" 2" />
                            </Picker>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Post held in school</Text>
                            <Picker style={styles.textInput}>
                                <Picker.Item label=" 1" value=" 1" />
                                <Picker.Item label=" 2" value=" 2" />
                            </Picker>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Year posted to school</Text>
                            <Picker style={styles.textInput}>
                                <Picker.Item label=" 1" value=" 1" />
                                <Picker.Item label=" 2" value=" 2" />
                            </Picker>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Posting history with date</Text>
                            <TextInput placeHolder='Institution Name' style={styles.textInput} />
                            <Picker style={styles.textInput}>
                                <Picker.Item label=" 1" value=" 1" />
                                <Picker.Item label=" 2" value=" 2" />
                            </Picker>
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Type of Staff</Text>
                            <CheckBox style={{ backgroundColor: 'transparent' }}
                                title='Permanent'
                                checked={this.state.checkedYes}
                                onPress={() => this.setState({ checked: !this.state.checkedYes })}
                            />
                            <CheckBox
                                title='Temporary'
                                checked={this.state.checked}
                                onPress={() => this.setState({ checked: !this.state.checked })}
                            /> 
                           
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Number of subjects taught</Text>
                            <TextInput style={styles.textInput} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Number of streams taught</Text>
                            <TextInput style={styles.textInput} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Number of trainings attended</Text>
                            <TextInput style={styles.textInput} />
                        </View>

                        <View style={styles.containerBtn}>
                        <View style={styles.buttonContainer}>
                            <Button style={styles.buttonOne} small primary onPress={() => { this.props.navigation.navigate("Academic") }}>
                                <Text style={styles.buttonText}>Previous</Text>
                            </Button>
                            </View>
                    
                            <View style={styles.buttonContainer}>
                            <Button style={styles.button} small primary onPress={() => { this.props.navigation.navigate("Teacher") }}>
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
export default TeacherBiodata;

const styles = StyleSheet.create({
    // container: { flex: 1, backgroundColor: '#fff', alignItems: 'center' },
    // buttonView: { width: '30%', alignSelf: 'flex-end', margin: '3%' },

    containerBtn: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonContainer: {
        flex: 1,
      },

    buttonOne: {
        backgroundColor: '#E6DC82', color: '#fff', textAlign: 'center', paddingLeft: 15, width: '65%',
         alignSelf: 'flex-start', alignItems: 'center', marginRight: 10,
    },
    button: {
        backgroundColor: '#098BD3', color: '#fff', textAlign: 'center', paddingLeft: 15, width: '53%',
      alignSelf: 'flex-end', alignItems: 'center', marginRight: 10,
    },
    buttonText: { fontSize: 15, color: '#fff', textAlign: 'center', alignContent: 'center', alignSelf: 'center' },

    headerText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: '500', textTransform: 'capitalize', alignSelf: 'center' },
    subText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold', textTransform: 'capitalize', alignSelf: 'flex-start' },

    labelText: { width: '45%', height: 35, lineHeight: 35, textAlign: 'right', marginRight: 10, justifyContent: 'flex-end', alignItems: 'flex-end', fontSize: 15 },
    textInput: {
        width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15,
        borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7',
        color: '#000', flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',
    }
});