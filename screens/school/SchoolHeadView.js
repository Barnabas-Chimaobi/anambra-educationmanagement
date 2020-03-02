import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView, Picker, Dimensions } from "react-native";
import { Container, Content, Form, Button, DatePicker, Row, Col } from 'native-base';
import { CheckBox } from 'react-native-elements'
import SchoolProfile from "./form/SchoolProfile";



class SchoolHeadView extends Component {

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
                    <Text style={styles.headerText}>Existing School Information</Text>
                </View>

                <Content>
                    <View style={{ width: '85%', borderBottomColor: '#333', borderBottomWidth: 1, margin: 10, marginLeft: 30 }}>
                        <Text style={styles.subText}>Principal's Information</Text>
                    </View>

                    <Form style={{ width: '75%', marginBottom: 40, alignSelf: 'center' }}>


                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Full Name</Text>
                            <Text style={styles.dataText}>Okoh Okonta Okeke</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Name of current school</Text>
                            <Text style={styles.dataText}>Community Secondary School</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Sex</Text>
                            <Text style={styles.dataText}>M</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Date of Birth</Text>
                            <Text style={styles.dataText}>23-02-1989</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Phone Number</Text>
                            <Text style={styles.dataText}>09071234567</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>State of Origin</Text>
                            <Text style={styles.dataText}>Anambra</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>L.G.A</Text>
                            <Text style={styles.dataText}>Awka North</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Hometown</Text>
                            <Text style={styles.dataText}>My home</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Male population</Text>
                            <Text style={styles.dataText}>200</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Email Address</Text>
                            <Text style={styles.dataText}>ooo@o.com</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Residential Address</Text>
                            <Text style={styles.dataText}>1 ole avenue</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Academic Qualification</Text>
                            <Text style={styles.dataText}>M.Sc</Text>
                        </View>


                        <Row>
                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Col><Text style={styles.labelText}>Posting History</Text></Col>
                                
                                <Col>
                                    <Row>
                                        <Col><Text style={styles.text2Input}>CSS Awka North:</Text></Col>
                                        <Col><Text style={styles.text2Input}>2012-2014{"\n"}</Text></Col>
                                    </Row>
                                    
                                    <Row>
                                        <Col><Text style={styles.text2Input}>GSS Awka South:</Text></Col>
                                        <Col><Text style={styles.text2Input}>2011-2012{"\n"}</Text></Col>
                                    </Row>
                                    
                                </Col>
                            
                            </View>
                        </Row>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Area of Specialisation</Text>
                            <Text style={styles.dataText}>Mathematics</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Length of Stay in school</Text>
                            <Text style={styles.dataText}>4 years</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Number of years in position</Text>
                            <Text style={styles.dataText}>2</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Grade Level</Text>
                            <Text style={styles.dataText}>16</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Rank</Text>
                            <Text style={styles.dataText}>Director</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Post Held in School</Text>
                            <Text style={styles.dataText}>HeadMaster</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Year of First Appointment</Text>
                            <Text style={styles.dataText}>2011</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Date of Present Appointment</Text>
                            <Text style={styles.dataText}>2014-02-02</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Date of Retirement</Text>
                            <Text style={styles.dataText}>Nil</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Number of Subjects Taught</Text>
                            <Text style={styles.dataText}>4</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Number of trainings attended</Text>
                            <Text style={styles.dataText}>6</Text>
                        </View>


                        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                            <View style={styles.buttonView}>
                                <Button block style={styles.button2} onPress={() => { this.props.navigation.navigate("Facility3View") }}>
                                    <Text style={styles.button2Text}>Previous</Text>
                                </Button>
                            </View>

                            <View style={styles.buttonView}>
                                <Button block style={styles.button} onPress={() => { this.props.navigation.navigate("School") }}>
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
export default SchoolHeadView;

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
    
    dataText: {height: 35, lineHeight: 35, paddingLeft: 5, flex: 1, flexDirection: 'row', fontWeight: '600', justifyContent: 'flex-end'},

    textInput: {
        width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15,
        borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7',
        color: '#000', flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',
    }
});