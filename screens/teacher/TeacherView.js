import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView, Picker } from "react-native";
import { Container, Content, Form, Button} from 'native-base';
import Logic from '../../logic';

class Viewteacher extends Component {

    constructor(props) {
        super(props);

        this.state ={
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
        this.data = {};
    }


    componentDidMount(){
        const data = this.props.navigation.getParam('data', '');
        console.log("Received",data);
        if (data){
           this.lookupNumber(data);
        }
    }

    lookupNumber = (number) =>{

        const url = `http://97.74.6.243/anambra/api/Teachers/number/${number}`;

        console.log("url", url)
        const data = new Logic()
        data.TeacherGetBiodata(url)
        .then((res) => {
            if (res.status == 200 && res.data){
                // this.props.navigation.navigate("View",{data:res.data})
                console.log("NAME",res.data.person.name);

                this.setState({ data: res.data })
                this.data = res.data
            }

       })
      .catch((error) => console.warn(error))


    }

    nextPage = () => {

        this.props.navigation.navigate("ViewBio",{data:this.state.data})
    }

    render() {
        return (

            <Container>


            <View style={{width: '100%',backgroundColor:'#E6DC82', padding :10}}>
                <Text style={styles.headerText}>Existing Teacher Information</Text>
            </View>

                <Content>
                <View style={{width: '85%', borderBottomColor: '#333', borderBottomWidth: 1, margin :10, marginLeft: 30}}>
                    <Text style={styles.subText}>Personal Details</Text>
                </View>

                    <Form style={{ width: '75%', marginBottom: 40, alignSelf: 'center' }}>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>First Name</Text>
                            <Text style={styles.dataText}>{this.state.data.person.name}</Text>
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Sex</Text>
                            <Text style={styles.dataText}>{this.state.data.person.sex.gender}</Text>
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Date of Birth</Text>
                            <Text style={styles.dataText}>{this.state.data.person.dateOfBirth.toString().substring(0,10)}</Text>
                        </View>


                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>State of Origin</Text>
                            <Text style={styles.dataText}>{this.state.data.person.state.name}</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>L.G.A</Text>
                            <Text style={styles.dataText}>{this.state.data.person.lga.name}</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Hometown</Text>
                            <Text style={styles.dataText}>{this.state.data.person.hometown}</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Residential Address</Text>
                            <Text style={styles.dataText}>{this.state.data.person.address}</Text>
                        </View>
                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Do you live within the school ?</Text>
                            <Text style={styles.dataText}>{this.state.data.person.name}</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Phone Number</Text>
                            <Text style={styles.dataText}>{this.state.data.person.phone}</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Next of Kin</Text>
                            <Text style={styles.dataText}>{this.state.data.person.name}</Text>
                        </View>
                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Next of Kin Phone Number</Text>
                            <Text style={styles.dataText}>{this.state.data.person.nextOfKin.name}</Text>
                        </View>

                        <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                            <Text style={styles.labelText}>Email</Text>
                            <Text style={styles.dataText}>{this.state.data.person.nextOfKin.email}</Text>
                        </View>


                        <View style={styles.buttonView}>
                            <Button block style={styles.button} onPress={() => { this.nextPage() }}>
                                <Text style={styles.buttonText}>Next</Text>
                            </Button>
                        </View>

                    </Form>
                </Content>
            </Container>



        );
    }
}
export default Viewteacher;

const styles = StyleSheet.create({
    // container: { flex: 1, backgroundColor: '#fff', alignItems: 'center' },
    // buttonView: { width: '30%', alignSelf: 'flex-end', margin: '3%' },
    // button: { backgroundColor: '#098BD3', color: '#fff', textAlign: 'center', paddingLeft: 15, width: '25%',flex: 1,
    // flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', marginRight: 10, },
    // buttonText: { fontSize: 15, color: '#fff', textAlign: 'center', alignContent: 'center', alignSelf: 'center' },
    buttonView: { width: '20%', alignSelf: 'flex-end', margin: '3%' },
    button: { backgroundColor: '#098BD3' , alignContent: 'center'},
    button2: { backgroundColor: '#E6DC82' },
    button2Text: { fontSize: 15, color: '#000', alignSelf: 'center', fontWeight: '600' },
    buttonText: { fontSize: 15, color: '#fff', alignSelf: 'center', fontWeight: '600' },


    headerText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: '500', textTransform: 'capitalize', alignSelf: 'center' },
    subText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold', textTransform: 'capitalize', alignSelf: 'flex-start' },

    labelText: { width: '45%', height: 35, lineHeight: 35, textAlign: 'right', marginRight: 10, justifyContent:'flex-end', alignItems: 'flex-end', fontSize: 15},
    dataText: {height: 35, lineHeight: 35, paddingLeft: 5, flex: 1,flexDirection: 'row',justifyContent: 'flex-end'},

    textInput: {width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15,
                borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7',
                color: '#000', flex: 1,flexDirection: 'row',justifyContent: 'flex-end',alignItems: 'center',}
});