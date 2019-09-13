import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView, Picker, Dimensions } from "react-native";
import { Container, Content, Form, Button, DatePicker, Row, Col } from 'native-base';
import { CheckBox } from 'react-native-elements'
import SchoolProfile from "./form/SchoolProfile";



class SchoolFacility2View extends Component {

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
                        <Text style={styles.subText}>Facilities &amp; Conditions - Part 2</Text>
                    </View>

                    <Form style={{ width: '75%', marginBottom: 40, alignSelf: 'center' }}>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Is there a Parent Teacher Association (PTA)?</Text>
                            <Text style={styles.dataText}>Yes</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Date of last inspection visit</Text>
                            <Text style={styles.dataText}>2018-02-02</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Number of Inspection Visits in the last academic year</Text>
                            <Text style={styles.dataText}>2</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Which authority conducted the last inspection?</Text>
                            <Text style={styles.dataText}>School Board</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Has your school received grants in the last two academic sessions?</Text>
                            <Text style={styles.dataText}>Yes</Text>
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>If yes, what type of grants?</Text>
                            <Text style={styles.dataText}>World Bank Grants</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Which tier of Governement owns the school?</Text>
                            <Text style={styles.dataText}>State Government</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>How many children were enrolled with birth certificates by:</Text>
                            <Text style={styles.dataText}>500</Text>
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Total number of children by class</Text>
                            <Text style={styles.dataText}>20</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Age Distribution</Text>
                            
                            <Row>
                                <Col><Text style={styles.dataText}>3 - 5:</Text></Col>
                                <Col><Text style={styles.dataText}>50{"\n"}</Text></Col>
                            </Row>
                            
                            <Row>
                                <Col><Text style={styles.dataText}>6 - 8:</Text></Col>
                                <Col><Text style={styles.dataText}>45{"\n"}</Text></Col>
                            </Row>
                            
                            <Row>
                                <Col><Text style={styles.dataText}>9 - 12:</Text></Col>
                                <Col><Text style={styles.dataText}>48{"\n"}</Text></Col>
                            </Row>
                            
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>JSCE/SSCE for the previous academic year</Text>
                            <Text style={styles.dataText}>Yes</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Children with special needs</Text>
                            <Text style={styles.dataText}>23</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>How many non-teaching staff
                            are working at the school?</Text>
                            <Text style={styles.dataText}>19</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>How many staff are working at the school?</Text>
                            <Text style={styles.dataText}>45</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>How many classrooms are in the school?</Text>
                            <Text style={styles.dataText}>30</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>How many classes are held outside?</Text>
                            <Text style={styles.dataText}>0</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Does the school have good whiteboards
                            in all classes?</Text>
                            <Text style={styles.dataText}>Yes</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Source of safe drinking water</Text>
                            <Text style={styles.dataText}>Borehole</Text>
                        </View>


                        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                            <View style={styles.buttonView}>
                                <Button block style={styles.button2} onPress={() => { this.props.navigation.navigate("Facility1View") }}>
                                    <Text style={styles.button2Text}>Previous</Text>
                                </Button>
                            </View>

                            <View style={styles.buttonView}>
                                <Button block style={styles.button} onPress={() => { this.props.navigation.navigate("Facility3View") }}>
                                    <Text style={styles.buttonText}>Next</Text>
                                </Button>
                            </View>
                        </View>

                    </Form>
                </Content>
            </Container>

        );
    }
}
export default SchoolFacility2View;

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