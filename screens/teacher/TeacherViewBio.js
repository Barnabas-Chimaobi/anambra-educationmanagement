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
            data:{
              "personId": 3,
              "person": {
                "name": "William Tanner ",
                "dateOfBirth": "2016-09-08T00:00:00",
                "stateId": 1,
                "state": {
                  "id": 1,
                  "name": "Abia State",
                  "active": true
                },
                "lgaId": 1,
                "lga": {
                  "id": 1,
                  "state": {
                    "id": 1,
                    "name": "Abia State",
                    "active": true
                  },
                  "name": "Aba North",
                  "active": true
                },
                "sexId": 1,
                "sex": {
                  "gender": "Female",
                  "active": false,
                  "id": 1
                },
                "hometown": "Inglewood",
                "address": "Compton",
                "permanentAddress": "N/A",
                "alergy": "N/A",
                "phone": "2347031568998",
                "email": "me@tanner.com",
                "nextOfKin": {
                  "name": "Kyle Xy",
                  "phone": "565868638",
                  "email": "dad@tanner.com",
                  "address": "Compton",
                  "personId": 3,
                  "id": 3
                },
                "id": 3
              },
              "teacherRecordId": 3,
              "teacherRecord": {
                "academicSessionId": 1,
                "academicSession": {
                  "name": "2019",
                  "active": true,
                  "id": 1
                },
                "onPremises": true,
                "teacherQualifications": [
                  {
                    "qualificationId": 1,
                    "qualification": null,
                    "teacherRecordId": 3,
                    "id": 3
                  }
                ],
                "teacherSubjects": [
                  {
                    "subjectId": 11,
                    "subject": {
                      "name": "Biology",
                      "active": true,
                      "id": 11
                    },
                    "teacherRecordId": 3,
                    "id": 5
                  }
                ],
                "teacherStreams": null,
                "teacherSpecialization": null,
                "teacherInstitutions": null,
                "firstAppointment": "2018-05-03T23:00:00",
                "currentAppointment": "2018-05-03T23:00:00",
                "retirement": "2018-05-03T23:00:00",
                "yearsOfExperience": 4,
                "trainingsAttended": 3,
                "streamsTaught": 2,
                "gradeLevelId": 1,
                "gradeLevel": {
                  "name": "GL12",
                  "active": false,
                  "id": 1
                },
                "rankId": 1,
                "rank": {
                  "name": "Teacher",
                  "active": false,
                  "id": 1
                },
                "postHeld": "Head Teacher",
                "datePosted": "2018-05-23T23:00:00",
                "postingHistories": [
                  {
                    "institution": "ddd",
                    "date": "2018-05-03T23:00:00",
                    "teacherRecordId": 3,
                    "id": 3
                  }
                ],
                "staffTypeId": 1,
                "staffType": null,
                "staffClassId": 1,
                "staffClass": null,
                "schoolId": 1,
                "school": {
                  "name": "Test School",
                  "coordinatesId": 1,
                  "coordinates": null,
                  "address": "Awka",
                  "town": "Awka",
                  "ward": "Awka North",
                  "lgaId": 1,
                  "lga": {
                    "id": 1,
                    "state": {
                      "id": 1,
                      "name": "Abia State",
                      "active": true
                    },
                    "name": "Aba North",
                    "active": true
                  },
                  "email": "test@school.com",
                  "phone": "080",
                  "dateEstablished": "2019-09-13T14:51:56.2596634",
                  "locationId": 1,
                  "location": null,
                  "schoolRecordId": null,
                  "schoolRecord": null,
                  "active": true,
                  "id": 1
                },
                "id": 3
              },
              "id": 3
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

    static navigationOptions =  {
      title: 'View Teacher',
      headerLeft: null
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
                            <Text style={styles.dataText}>{this.state.data.teacherRecord.teacherQualifications[0].qualification}</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Subject area of specialization</Text>
                            <Text style={styles.dataText}>{this.state.data.teacherRecord.teacherSpecialization}</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Subjects taught</Text>
                            <Text style={styles.dataText}>{this.state.data.teacherRecord.teacherSubjects[0].subject.name}</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Date of first appointment</Text>
                            <Text style={styles.dataText}>{this.state.data.teacherRecord.firstAppointment.toString().substring(0,10)}</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Date of present appointment</Text>
                            <Text style={styles.dataText}>{this.state.data.teacherRecord.currentAppointment.toString().substring(0,10)}</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Expected date of retirement</Text>
                            <Text style={styles.dataText}>{this.state.data.teacherRecord.retirement.toString().substring(0,10)}</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Years of experience</Text>
                            <Text style={styles.dataText}>{this.state.data.teacherRecord.yearsOfExperience}</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Grade Level</Text>
                            <Text style={styles.dataText}>{this.state.data.teacherRecord.gradeLevel.name}</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Rank</Text>
                            <Text style={styles.dataText}>{this.state.data.teacherRecord.rank.name}</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Post held in school</Text>
                            <Text style={styles.dataText}>{this.state.data.teacherRecord.postHeld}</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Year posted to school</Text>
                            <Text style={styles.dataText}>{this.state.data.teacherRecord.datePosted.toString().substring(0,10)}</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Number of streams taught</Text>
                            <Text style={styles.dataText}>{this.state.data.teacherRecord.streamsTaught}</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Number of trainings attended</Text>
                            <Text style={styles.dataText}>{this.state.data.teacherRecord.trainingsAttended}</Text>
                        </View>

                        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                            <View style={styles.buttonView}>
                                <Button block style={styles.button2} onPress={() => { this.props.navigation.navigate("View") }}>
                                    <Text style={styles.button2Text}>Previous</Text>
                                </Button>
                            </View>

                            <View style={styles.buttonView}>
                                <Button block style={styles.button} onPress={() => { this.props.navigation.navigate("Teacher") }}>
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

    containerBtn: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      buttonContainer: {
        flex: 1,
      },

    buttonView: { width: '30%', alignSelf: 'flex-end', margin: '3%' },
    button: { backgroundColor: '#098BD3' },
    button2: { backgroundColor: '#E6DC82' },
    button2Text: { fontSize: 15, color: '#000', alignSelf: 'center', fontWeight: '600' },
    buttonText: { fontSize: 15, color: '#fff', alignSelf: 'center', fontWeight: '600' },


    headerText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: '500', textTransform: 'capitalize', alignSelf: 'center' },
    subText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold', textTransform: 'capitalize', alignSelf: 'flex-start' },

    labelText: { width: '45%', height: 35, lineHeight: 35, textAlign: 'right', marginRight: 10, justifyContent: 'flex-end', alignItems: 'flex-end', fontSize: 15 },

    dataText: {height: 35, lineHeight: 35, paddingLeft: 5, flex: 1, flexDirection: 'row', justifyContent: 'flex-end'},

    textInput: {
        width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15,
        borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7',
        color: '#000', flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',
    }
});