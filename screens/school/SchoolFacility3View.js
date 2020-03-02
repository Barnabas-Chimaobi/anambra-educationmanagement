import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView, Picker, Dimensions } from "react-native";
import { Container, Content, Form, Button, DatePicker, Row, Col } from 'native-base';
import { CheckBox } from 'react-native-elements'
import SchoolProfile from "./form/SchoolProfile";



class SchoolFacility3View extends Component {

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
                        <Text style={styles.subText}>Facilities &amp; Conditions - Part 3</Text>
                    </View>

                    <Form style={{ width: '75%', marginBottom: 40, alignSelf: 'center' }}>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Toilet type</Text>
                            <Text style={styles.dataText}>WC</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Power Source</Text>
                            <Text style={styles.dataText}>PHCN</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Health Facility</Text>
                            <Text style={styles.dataText}>Sick Bay</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Sports Facilities</Text>
                            <Text style={styles.dataText}>Yes</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Seating</Text>
                            <Text style={styles.dataText}>Desks</Text>
                        </View>

                        <View style={{ margin: 15, alignSelf: 'flex-start' }}>
                            <Text style={styles.headerText}>Student/Teacher Book</Text>
                            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, alignSelf: 'stretch' }} />
                        </View>

                        <View style={{ width: '75%', justifyContent: 'flex-end', alignSelf: 'center' }}>

                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelTextLong}>Number of core subject teachers textbooks
                                        available in the school provided by Government</Text>
                                <Text style={styles.dataText}>50</Text>
                            </View>

                            <Row>
                                <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                    <Col><Text style={styles.labelText}>Number of students by subjects</Text></Col>
                                    
                                    <Col>
                                        <Row>
                                            <Col><Text style={styles.text2Input}>Maths:</Text></Col>
                                            <Col><Text style={styles.text2Input}>50{"\n"}</Text></Col>
                                        </Row>
                                        
                                        <Row>
                                            <Col><Text style={styles.text2Input}>Physics:</Text></Col>
                                            <Col><Text style={styles.text2Input}>45{"\n"}</Text></Col>
                                        </Row>
                                        
                                        <Row>
                                            <Col><Text style={styles.text2Input}>Social Studies:</Text></Col>
                                            <Col><Text style={styles.text2Input}>48{"\n"}</Text></Col>
                                        </Row>
                                    </Col>
                                
                                </View>
                            </Row>
                        </View>


                        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                            <View style={styles.buttonView}>
                                <Button block style={styles.button2} onPress={() => { this.props.navigation.navigate("Facility2View") }}>
                                    <Text style={styles.button2Text}>Previous</Text>
                                </Button>
                            </View>

                            <View style={styles.buttonView}>
                                <Button block style={styles.button} onPress={() => { this.props.navigation.navigate("HeadView") }}>
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
export default SchoolFacility3View;

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
    labelTextLong: { width: '45%', minHeight: 35, lineHeight: 15, textAlign: 'right', marginRight: 10, justifyContent: 'flex-end', alignItems: 'flex-end', fontSize: 15 },
    
    dataText: {height: 35, lineHeight: 35, paddingLeft: 5, flex: 1, flexDirection: 'row', fontWeight: '600', justifyContent: 'flex-end'},

    textInput: {
        width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15,
        borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7',
        color: '#000', flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',
    },
    text2Input: {
        width: '55%', minHeight: 35, fontSize: 15, paddingLeft: 5, marginRight: 15,
        borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7',
        color: '#000', flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',
    }
});