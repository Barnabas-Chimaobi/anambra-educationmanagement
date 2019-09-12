import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView, Picker, Dimensions } from "react-native";
import { Container, Content, Form, Button, DatePicker } from 'native-base';
import { CheckBox } from 'react-native-elements'



class ViewteacherBio extends Component {

    constructor(props) {
        super(props);
        state = Dimensions.get("window");

        this.state = {
            chosenDate: new Date(),
            checked: false,
            checkedYes: false,
            data: {
                "id": 1,
                "person": {
                  "address": "",
                  "dateOfBirth": "",
                  "email": "",
                  "hometown": "",
                  "id": 1,
                  "lga": {
                    "active": true,
                    "id": 1,
                    "name": "",
                    "state": {
                      "active": true,
                      "id": 1,
                      "name": "",
                    },
                  },
                  "lgaId": 1,
                  "name": "",
                  "nextOfKin": {
                    "address": "",
                    "email": "",
                    "id": 1,
                    "name": "",
                    "personId": 1,
                    "phone": "",
                  },
                  "phone": "",
                  "sex": {
                    "active": false,
                    "gender": "",
                    "id": 1,
                  },
                  "sexId": 1,
                  "state": {
                    "active": true,
                    "id": 1,
                    "name": "",
                  },
                  "stateId": 1,
                },
                "personId": 1,
                "teacherRecord": {
                  "academicSession": {
                    "active": true,
                    "id": 1,
                    "name": "",
                  },
                  "academicSessionId": 1,
                  "currentAppointment": "2018-05-16T23:00:00",
                  "datePosted": "2018-05-30T23:00:00",
                  "firstAppointment": "2018-05-03T23:00:00",
                  "gradeLevel": {
                    "active": false,
                    "id": 9,
                    "name": "GL12",
                  },
                  "gradeLevelId": 9,
                  "id": 1,
                  "onPremises": false,
                  "postHeld": "N",
                  "postingHistories": [
                   {
                      "comments": "-",
                      "endDate": "2018-05-30T23:00:00",
                      "id": 1,
                      "schoolId": 1,
                      "startDate": "2018-05-30T23:00:00",
                      "teacherRecordId": 1,
                    },
                  ],
                  "qualifications": [
                   {
                      "courseName": "Msc",
                      "endDate": "2016-09-08T00:00:00",
                      "grade": "-",
                      "id": 1,
                      "startDate": "2016-09-08T00:00:00",
                      "teacherRecordId": 1,
                    },
                  ],
                  "rank": {
                    "active": false,
                    "id": 1,
                    "name": "",
                  },
                  "rankId": 1,
                  "retirement": "2067-05-03T23:00:00",

                  "schoolId": 1,
                  "specialization": "",
                  "staffClass": null,
                  "staffClassId": 2,
                  "staffType": null,
                  "staffTypeId": 2,
                  "streamsTaught": 1,
                  "teacherSubjects": [
                   {
                      "id": 1,
                      "subject": {
                        "active": true,
                        "id": 14,
                        "name": "",
                      },
                      "subjectId": 14,
                      "teacherRecordId": 1,
                    },
                  ],
                  "trainingsAttended": 0,
                  "yearsOfExperience": 2,
                },
                "teacherRecordId": 1,
              }
        }
        this.setDate = this.setDate.bind(this);
    }

    componentDidMount(){
        const data = this.props.navigation.getParam('data', '');
        console.log("Received",data);
        if (data){

            this.setState({ data:data })
        }
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
                    <Text style={styles.headerText}>Existing Teacher Information</Text>
                </View>

                <Content>
                    <View style={{ width: '85%', borderBottomColor: '#333', borderBottomWidth: 1, margin: 10, marginLeft: 30 }}>
                        <Text style={styles.subText}>Academic Details</Text>
                    </View>

                    <Form style={{ width: '75%', marginBottom: 40, alignSelf: 'center' }}>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Highest academic qualification</Text>
                            <Text style={styles.labelText}>{this.state.data.teacherRecord.qualifications[0].courseName}</Text>
                        </View>

                        {/* <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Institutions attended, with date</Text>
                            <Text style={styles.labelText}>{this.state.data.teacherRecord.qualifications}</Text>
                        </View> */}


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Subject area of specialization</Text>
                            <Text style={styles.labelText}>{this.state.data.teacherRecord.specialization}</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Subjects taught</Text>
                            <Text style={styles.labelText}>{this.state.data.teacherRecord.teacherSubjects[0].subject.name}</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Date of first appointment</Text>
                            <Text style={styles.labelText}>{this.state.data.teacherRecord.firstAppointment.toString().substring(0,10)}</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Date of present appointment</Text>
                            <Text style={styles.labelText}>{this.state.data.teacherRecord.currentAppointment.toString().substring(0,10)}</Text>
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Expected date of retirement</Text>
                            <Text style={styles.labelText}>{this.state.data.teacherRecord.retirement.toString().substring(0,10)}</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Years of experience</Text>
                            <Text style={styles.labelText}>{this.state.data.teacherRecord.yearsOfExperience}</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Grade Level</Text>
                            <Text style={styles.labelText}>{this.state.data.teacherRecord.gradeLevel.name}</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Rank</Text>
                            <Text style={styles.labelText}>{this.state.data.teacherRecord.rank.name}</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Post held in school</Text>
                            <Text style={styles.labelText}>{this.state.data.teacherRecord.postHeld}</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Year posted to school</Text>
                            <Text style={styles.labelText}>{this.state.data.teacherRecord.datePosted.toString().substring(0,10)}</Text>
                        </View>

                        {/* <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Posting history with date</Text>
                            <Text style={styles.labelText}>{this.state.data.teacherRecord.qualifications.name}</Text>
                        </View> */}


                        {/* <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Type of Staff</Text>
                            <Text style={styles.labelText}>{this.state.data.teacherRecord.qualifications.name}</Text>

                        </View> */}


                        {/* <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Number of subjects taught</Text>
                            <Text style={styles.labelText}>{this.state.data.teacherRecord.qualifications.name}</Text>
                        </View> */}

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Number of streams taught</Text>
                            <Text style={styles.labelText}>{this.state.data.teacherRecord.streamsTaught}</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Number of trainings attended</Text>
                            <Text style={styles.labelText}>{this.state.data.teacherRecord.trainingsAttended}</Text>
                        </View>

                        <View style={styles.containerBtn}>
                        <View style={styles.buttonContainer}>
                            <Button style={styles.buttonOne} small primary onPress={() => { this.props.navigation.goBack() }}>
                                <Text style={styles.buttonText}>Previous</Text>
                            </Button>
                            </View>

                            <View style={styles.buttonContainer}>
                            <Button style={styles.button} small primary onPress={() => { this.props.navigation.navigate("Teacher") }}>
                                <Text style={styles.buttonText}>Close</Text>
                            </Button>
                            </View>
                        </View>


                    </Form>
                </Content>
            </Container>



        );
    }
}
export default ViewteacherBio;

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