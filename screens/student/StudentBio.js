import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView, Picker, Dimensions } from "react-native";
import { Container, Content, Form, Button, DatePicker } from 'native-base';
import { CheckBox } from 'react-native-elements'

class StudentBio extends Component {

    constructor(props) {
        super(props);
        state = Dimensions.get("window");

        this.state = {
            chosenDate: new Date(),
            checked: false,
            checkedYes: false,
            data: {
                "personId": 2,
                "person": {
                  "name": "Somadina Eche",
                  "dateOfBirth": "1998-09-08T00:00:00",
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
                  "hometown": "Manchester",
                  "address": "556 Holloway Road London",
                  "phone": "447031568998",
                  "email": "me@eche.com",
                  "nextOfKin": {
                    "name": "Josh Eche",
                    "phone": "565868638",
                    "email": "dad@eche.com",
                    "address": "Manchester",
                    "personId": 2,
                    "id": 2
                  },
                  "id": 2
                },
                "studentRecords": [
                  {
                    "academicSessionId": 1,
                    "academicSession": null,
                    "studentId": 1,
                    "studentClassId": 1,
                    "class": {
                      "name": "Primary 1",
                      "active": false,
                      "id": 1
                    },
                    "streamId": 1,
                    "stream": {
                      "name": "Stream 1",
                      "active": true,
                      "id": 1
                    },
                    "isBoarding": true,
                    "distanceFromSchool": 0,
                    "schoolId": 1,
                    "id": 1
                  }
                ],
                "previousEducations": [
                  {
                    "studentId": 1,
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
                      "dateEstablished": "2019-09-11T11:02:53.6516594",
                      "locationId": 1,
                      "location": null,
                      "recordId": null,
                      "record": null,
                      "active": true,
                      "id": 1
                    },
                    "reasonForLeaving": "string",
                    "startDate": "2019-09-09T00:00:00",
                    "endDate": "2019-09-09T00:00:00",
                    "studentClassId": 1,
                    "studentClass": {
                      "name": "Primary 1",
                      "active": false,
                      "id": 1
                    },
                    "id": 1
                  }
                ],
                "studentSpecialNeeds": [
                  {
                    "studentId": 1,
                    "specialNeedId": 1,
                    "specialNeed": {
                      "name": "Albinism",
                      "active": true,
                      "id": 1
                    },
                    "id": 1
                  }
                ],
                "studentVulnerabilities": [
                  {
                    "studentId": 1,
                    "vulnerabilityId": 1,
                    "vulnerability": {
                      "name": "Lost Both Parents",
                      "active": true,
                      "id": 1
                    },
                    "id": 1
                  }
                ],
                "id": 1
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
      title: 'New Student',
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
                    <Text style={styles.headerText}>Existing Student Information</Text>
                </View>

                <Content>
                    <View style={{ width: '85%', borderBottomColor: '#333', borderBottomWidth: 1, margin: 10, marginLeft: 30 }}>
                        <Text style={styles.subText}>Student Details</Text>
                    </View>

                    <Form style={{ width: '75%', marginBottom: 40, alignSelf: 'center' }}>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Current Class</Text>
                            <Text style={styles.dataText}>{this.state.data.studentRecords[0].class.name}</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Current Stream</Text>
                            <Text style={styles.dataText}>{this.state.data.studentRecords[0].stream.name}</Text>
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Lives in School ?</Text>
                            <Text style={styles.dataText}>{this.state.data.studentRecords[0].isBoarding}</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Distance From School</Text>
                            <Text style={styles.dataText}>{this.state.data.studentRecords[0].distanceFromSchool}</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Special Need</Text>
                            <Text style={styles.dataText}>{this.state.data.studentSpecialNeeds[0].specialNeed.name}</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Vulnerability</Text>
                            <Text style={styles.dataText}>{this.state.data.studentVulnerabilities[0].vulnerability.name}</Text>
                        </View>

                        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                            <View style={styles.buttonView}>
                                <Button block style={styles.button2} onPress={() => { this.props.navigation.goBack() }}>
                                    <Text style={styles.button2Text}>Previous</Text>
                                </Button>
                            </View>

                            <View style={styles.buttonView}>
                                <Button block style={styles.button} onPress={() => { this.props.navigation.navigate("Student") }}>
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
export default StudentBio;

const styles = StyleSheet.create({
    // container: { flex: 1, backgroundColor: '#fff', alignItems: 'center' },
    // buttonView: { width: '30%', alignSelf: 'flex-end', margin: '3%' },

    // containerBtn: {
    //     marginTop: 10,
    //     flex: 1,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //   },
    //   buttonContainer: {
    //     flex: 1,
    //   },

    // buttonOne: {
    //     backgroundColor: '#E6DC82', color: '#fff', textAlign: 'center', paddingLeft: 15, width: '65%',
    //      alignSelf: 'flex-start', alignItems: 'center', marginRight: 10,
    // },
    // button: {
    //     backgroundColor: '#098BD3', color: '#fff', textAlign: 'center', paddingLeft: 15, width: '53%',
    //   alignSelf: 'flex-end', alignItems: 'center', marginRight: 10,
    // },
    // buttonText: { fontSize: 15, color: '#fff', textAlign: 'center', alignContent: 'center', alignSelf: 'center' },

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