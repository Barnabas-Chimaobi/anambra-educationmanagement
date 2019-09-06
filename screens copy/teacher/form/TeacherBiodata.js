import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView, Picker, Dimensions, Alert } from "react-native";
import { Container, Content, Form, Button, DatePicker, Switch } from 'native-base';
import { CheckBox } from 'react-native-elements'
import Logic from '../../../logic'
import { AsyncStorage } from 'react-native'

class TeacherBiodata extends Component {

    constructor(props) {
        super(props);
        state = Dimensions.get("window");

        this.state = {
            age: '',
            selectedValue: '',
            chosenDate: new Date(),
            checked: false,
            checkedYes: false,
            input: '',
            Sexes: [],
            States: [],
            Lgas: [],
            First_Name: '',
            Last_Name: '',
            Other_Name: '',
            Sex: '',
            Dob: '',
            StateOrigin: '',
            Lga: '',
            Hometown: '',
            Residential: '',
            liveIn: false,
            NextofKin: '',
            NextofKinPhone: '',
            Email: '',
            Phone: ''
        }
        this.setDate = this.setDate.bind(this);
    }

    updateGender = (Sex) => {
        this.setState({ Sex: Sex })
        console.warn(this.state.Sex)
    }

    updateStateOrigin = (StateOrigin) => {
        this.setState({ StateOrigin: StateOrigin })
    }

    updateLga = (Lga) => {
        this.setState({ Lga: Lga })
    }

    setDate = (newDate) => {
        this.setState({ Dob: newDate });
        console.warn(this.state.Dob)
    }

    toggleliveIn = (value) => {
        this.setState({ liveIn: value })
    }


    componentDidMount() {
        // sex
        const sexes = new Logic()
        sexes.Sexes('http://97.74.6.243/anambra/api/Sexes')
            .then((res) => {
                this.setState({ Sexes: res.data })
            })
            .catch((error) => console.warn(error))

        // states
        const states = new Logic()
        states.States('http://97.74.6.243/anambra/api/States')
            .then((res) => {
                this.setState({ States: res.data })
            })
            .catch((error) => console.warn(error))

        // lgas
        const lgas = new Logic()
        lgas.Lgas('http://97.74.6.243/anambra/api/Lgas')
            .then((res) => {
                this.setState({ Lgas: res.data })
                // console.warn('lgas',this.state)
            })
            .catch((error) => console.warn(error))

    }


    TeacherBiodata = () => {
        const Biodata = {
            person: {
                name: ` ${this.state.First_Name} ${this.state.Last_Name} ${this.state.Other_Name}`,
                dateOfBirth: this.state.Dob,
                state: {
                    id: 1,
                    name: this.state.StateOrigin,
                    active: 1,
                    lga: {
                        id: 1,
                        name: this.state.Lga,
                        active: true
                    },
                },
                lga: {
                    id: 1,
                    name: this.state.Lga,
                    active: true
                },
                sex: {
                    id: 1,
                    name: this.state.Sex,
                    active: true
                },
                hometown: this.state.Hometown,
                address: this.state.Residential,
                phone: this.state.Phone,
                email: this.state.Email,
                nextofKin: {
                    name: this.state.NextofKin,
                    phone: this.state.NextofKinPhone,
                    email: this.state.Email,
                    address: this.state.liveIn,
                    personId: 1,
                    id: 1
                },
                id: 1,
            },
            school: {
                name: "bellflower",
                coordinates: {
                    elevation: 1,
                    lattitudeNorth: 1,
                    lattitudeSouth: 1,
                    id: 1
                },
                address: this.state.liveIn,
                town: this.state.liveIn,
                ward: "mykells",
                lga: {
                    id: 1,
                    name: this.state.Lga,
                    active: true
                },
                email: this.state.Email,
                phone: this.state.Phone,
                dateEstablished: this.state.Dob,
                location: {
                    name: this.state.States,
                    id: 1
                },
                record: {
                    academicSession: {
                        name: "2019/20",
                        active: true,
                        id: 1
                    },
                    educationLevels: [
                        {
                            name: "neco",
                            active: true,
                            id: 1
                        }
                    ],
                    type: {
                        name: "Ssce",
                        active: true,
                        id: 1
                    },
                    operatesShiftSystem: true,
                    sharesFacilities: true,
                    sharedFacilitiesCount: 2,
                    hasMultigradeTeachers: true,
                    distanceFromTown: 0,
                    distanceFromLGA: 0,
                    studentsOutside1km: 0,
                    schoolMix: {
                        name: "boys only",
                        active: true,
                        id: 1
                    },
                    population: 30,
                    populationBoys: 40,
                    populationGirls: 50,
                    hasBoarding: true,
                    boardingBoys: 3,
                    boardingGirls: 60,
                    hasPerimeterFence: true,
                    perimeterFenceNeedsRepair: true,
                    hasSecurityPersonnel: true,
                    securityPersonnelType: {
                        name: 'police',
                        id: 3
                    },
                    securityPersonnelCount: 20,
                    hasLandEncroachment: true,
                    hasSBMC: true,
                    hasSIP: true,
                    hasPlaygorund: true,
                    hasSportsFacillity: true,
                    parentForum: {
                        name: "Pta",
                        active: true,
                        id: 0
                    },
                    lastInspection: "2019-09-06T14:42:31.414Z",
                    inspectionCount: 0,
                    studentTextbooksProvided: 0,
                    teacherTextbooksProvided: 0,
                    inspectionAuthority: {
                        name: "police",
                        active: true,
                        id: 0
                    },
                    grants: [
                        {
                            name: "philantropist",
                            active: true,
                            id: 0
                        }
                    ],
                    ownership: {
                        name: "na me",
                        active: true,
                        id: 0
                    },
                    enrollmentCertificates: [
                        {
                            certificate: {
                                name: "waec",
                                active: true,
                                id: 0
                            },
                            count: 0,
                            id: 0
                        }
                    ],
                    enrollment: [
                        {
                            studentClass: {
                                name: "2013",
                                active: true,
                                id: 0
                            },
                            count: 0,
                            id: 0
                        }
                    ],
                    classRooms: [
                        {
                            studentClass: {
                                name: "3023",
                                active: true,
                                id: 0
                            },
                            stream: {
                                name: "stream 1",
                                active: true,
                                id: 0
                            },
                            deskCount: 3,
                            hasWhiteBoard: true,
                            classHeldOutside: true,
                            id: 1
                        }
                    ],
                    "facilities": [
                        {
                            "name": "string",
                            "type": "string",
                            "active": true,
                            "id": 0
                        }
                    ],
                    "powerSources": [
                        {
                            "name": "string",
                            "active": true,
                            "id": 0
                        }
                    ],
                    "healthFacilities": [
                        {
                            "name": "string",
                            "active": true,
                            "id": 0
                        }
                    ],
                    "id": 0
                },
                "active": true,
                "id": 0
            },
            "teacherRecord": {
                "academicSession": {
                    "name": "string",
                    "active": true,
                    "id": 0
                },
                "onPremises": true,
                "qualifications": [
                    {
                        "courseName": "string",
                        "startDate": "2019-09-06T14:42:31.414Z",
                        "endDate": "2019-09-06T14:42:31.414Z",
                        "grade": "string",
                        "id": 0
                    }
                ],
                "subjects": [
                    {
                        "name": "string",
                        "active": true,
                        "id": 0
                    }
                ],
                "specialization": "string",
                "firstAppointment": "2019-09-06T14:42:31.414Z",
                "currentAppointment": "2019-09-06T14:42:31.414Z",
                "retirement": "2019-09-06T14:42:31.414Z",
                "yearsOfExperience": 0,
                "trainingsAttended": 0,
                "streamsTaught": 0,
                "gradeLevel": {
                    "name": "string",
                    "active": true,
                    "id": 0
                },
                "rank": {
                    "name": "string",
                    "active": true,
                    "id": 0
                },
                "postHeld": "string",
                "datePosted": "2019-09-06T14:42:31.414Z",
                "postingHistories": [
                    {
                        "school": {
                            "name": "string",
                            "coordinates": {
                                "elevation": 0,
                                "lattitudeNorth": 0,
                                "lattidtudeEast": 0,
                                "id": 0
                            },
                            "address": "string",
                            "town": "string",
                            "ward": "string",
                            "lga": {
                                "id": 0,
                                "name": "string",
                                "active": true
                            },
                            "email": "string",
                            "phone": "string",
                            "dateEstablished": "2019-09-06T14:42:31.414Z",
                            "location": {
                                "name": "string",
                                "id": 0
                            },
                            "record": {
                                "academicSession": {
                                    "name": "string",
                                    "active": true,
                                    "id": 0
                                },
                                "educationLevels": [
                                    {
                                        "name": "string",
                                        "active": true,
                                        "id": 0
                                    }
                                ],
                                "type": {
                                    "name": "string",
                                    "active": true,
                                    "id": 0
                                },
                                "operatesShiftSystem": true,
                                "sharesFacilities": true,
                                "sharedFacilitiesCount": 0,
                                "hasMultigradeTeachers": true,
                                "distanceFromTown": 0,
                                "distanceFromLGA": 0,
                                "studentsOutside1km": 0,
                                "schoolMix": {
                                    "name": "string",
                                    "active": true,
                                    "id": 0
                                },
                                "population": 0,
                                "populationBoys": 0,
                                "populationGirls": 0,
                                "hasBoarding": true,
                                "boardingBoys": 0,
                                "boardingGirls": 0,
                                "hasPerimeterFence": true,
                                "perimeterFenceNeedsRepair": true,
                                "hasSecurityPersonnel": true,
                                "securityPersonnelType": {
                                    "name": "string",
                                    "id": 0
                                },
                                "securityPersonnelCount": 0,
                                "hasLandEncroachment": true,
                                "hasSBMC": true,
                                "hasSIP": true,
                                "hasPlaygorund": true,
                                "hasSportsFacillity": true,
                                "parentForum": {
                                    "name": "string",
                                    "active": true,
                                    "id": 0
                                },
                                "lastInspection": "2019-09-06T14:42:31.414Z",
                                "inspectionCount": 0,
                                "studentTextbooksProvided": 0,
                                "teacherTextbooksProvided": 0,
                                "inspectionAuthority": {
                                    "name": "string",
                                    "active": true,
                                    "id": 0
                                },
                                "grants": [
                                    {
                                        "name": "string",
                                        "active": true,
                                        "id": 0
                                    }
                                ],
                                "ownership": {
                                    "name": "string",
                                    "active": true,
                                    "id": 0
                                },
                                "enrollmentCertificates": [
                                    {
                                        "certificate": {
                                            "name": "string",
                                            "active": true,
                                            "id": 0
                                        },
                                        "count": 0,
                                        "id": 0
                                    }
                                ],
                                "enrollment": [
                                    {
                                        "studentClass": {
                                            "name": "string",
                                            "active": true,
                                            "id": 0
                                        },
                                        "count": 0,
                                        "id": 0
                                    }
                                ],
                                "classRooms": [
                                    {
                                        "studentClass": {
                                            "name": "string",
                                            "active": true,
                                            "id": 0
                                        },
                                        "stream": {
                                            "name": "string",
                                            "active": true,
                                            "id": 0
                                        },
                                        "deskCount": 0,
                                        "hasWhiteBoard": true,
                                        "classHeldOutside": true,
                                        "id": 0
                                    }
                                ],
                                "facilities": [
                                    {
                                        "name": "string",
                                        "type": "string",
                                        "active": true,
                                        "id": 0
                                    }
                                ],
                                "powerSources": [
                                    {
                                        "name": "string",
                                        "active": true,
                                        "id": 0
                                    }
                                ],
                                "healthFacilities": [
                                    {
                                        "name": "string",
                                        "active": true,
                                        "id": 0
                                    }
                                ],
                                "id": 0
                            },
                            "active": true,
                            "id": 0
                        },
                        "startDate": "2019-09-06T14:42:31.414Z",
                        "endDate": "2019-09-06T14:42:31.414Z",
                        "comments": "string",
                        "id": 0
                    }
                ],
                "staffType": {
                    "name": "string",
                    "active": true,
                    "id": 0
                },
                "id": 0
            },
            "id": 0

        }
    }


}
console.warn(Biodata)
AsyncStorage.setItem("Biodata", { Biodata });
    //   const teacher = new Logic()
    //   teacher.TeacherBiodata('http://97.74.6.243/anambra/api/Teachers', Biodata)
    //   .then((res) => {
    //     if (res.status === 200)
    //     {
    //         this.props.navigation.navigate("Academic")
    //     }
    //   })
    //   .catch((error) => console.warn(error))
      
        
      }

handleChangeText = (inputName, text) => {
    this.setState({ [inputName]: text })
    console.warn([inputName])
    console.warn(text)
}

render() {

    return (
        <Container>


            <View style={{ width: '100%', backgroundColor: '#E6DC82', padding: 10 }}>
                <Text style={styles.headerText}>New Teacher Information</Text>
            </View>

            <Content>
                <View style={{ width: '85%', borderBottomColor: '#333', borderBottomWidth: 1, margin: 10, marginLeft: 30 }}>
                    <Text style={styles.subText}>Personal Details</Text>
                </View>

                <Form style={{ width: '75%', marginBottom: 40, alignSelf: 'center' }}>

                    <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                        <Text style={styles.labelText}>First Name</Text>
                        <TextInput onChangeText={text => this.handleChangeText('First_Name', text)} value={this.state.First_Name} style={styles.textInput} />
                    </View>



                    <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                        <Text style={styles.labelText}>Last Name</Text>
                        <TextInput onChangeText={text => this.handleChangeText('Last_Name', text)} value={this.state.Last_Name} style={styles.textInput} />
                    </View>


                    <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                        <Text style={styles.labelText}>Other Name</Text>
                        <TextInput onChangeText={text => this.handleChangeText('Other_Name', text)} value={this.state.Other_Name} style={styles.textInput} />
                    </View>




                    <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                        <Text style={styles.labelText}>Sex</Text>


                        <Picker
                            selectedValue={this.state.Sex} onValueChange={this.updateGender}
                            style={{ height: 35, width: 150, backgroundColor: '#f2f2f2' }}>
                            {this.state.Sexes.map((v, key) => {
                                return <Picker.Item label={v.gender} key={key} value={v.gender} />
                            })}
                        </Picker>
                    </View>


                    <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                        <Text style={styles.labelText}>Date of Birth</Text>
                        <DatePicker
                            defaultDate={new Date(2018, 4, 4)}
                            minimumDate={new Date(2018, 1, 1)}
                            maximumDate={new Date(2018, 12, 31)}
                            animationType={"slide"}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={true}
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
                        <Text style={styles.labelText}>State of Origin</Text>
                        <Picker
                            selectedValue={this.state.StateOrigin} onValueChange={this.updateStateOrigin}
                            style={{ height: 35, width: 150, backgroundColor: '#f2f2f2' }}>
                            {this.state.States.map((v, key) => {
                                return <Picker.Item label={v.name} key={key} value={v.name} />
                            })}
                        </Picker>
                    </View>


                    <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                        <Text style={styles.labelText}>L.G.A</Text>

                        <Picker
                            selectedValue={this.state.Lga} onValueChange={this.updateLga}
                            style={{ height: 35, width: 150, backgroundColor: '#f2f2f2' }}>
                            {this.state.Lgas.map((v, key) => {
                                return <Picker.Item label={v.name} key={key} value={v.name} />
                            })}
                        </Picker>
                    </View>

                    <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                        <Text style={styles.labelText}>Hometown</Text>
                        <TextInput onChangeText={text => this.handleChangeText('Hometown', text)} value={this.state.Hometown} style={styles.textInput} />
                    </View>

                    <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                        <Text style={styles.labelText}>Residential Address</Text>
                        <TextInput onChangeText={text => this.handleChangeText('Residential', text)} value={this.state.Residential} style={styles.textInput} />
                    </View>
                    <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                        <Text style={styles.labelText}>Do you live within the school ?</Text>
                        <Switch onValueChange={this.toggleliveIn}
                            value={this.state.liveIn} />
                    </View>

                    <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                        <Text style={styles.labelText}>Phone Number</Text>
                        <TextInput onChangeText={text => this.handleChangeText('Phone', text)} value={this.state.Phone} style={styles.textInput} />
                    </View>


                    <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                        <Text style={styles.labelText}>Next of Kin</Text>
                        <TextInput onChangeText={text => this.handleChangeText('NextofKin', text)} value={this.state.NextofKin} style={styles.textInput} />
                    </View>
                    <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                        <Text style={styles.labelText}>Next of Kin Phone Number</Text>
                        <TextInput onChangeText={text => this.handleChangeText('NextofKinPhone', text)} value={this.state.NextofKinPhone} style={styles.textInput} />
                    </View>

                    <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                        <Text style={styles.labelText}>Email</Text>
                        <TextInput onChangeText={text => this.handleChangeText('Email', text)} value={this.state.Email} style={styles.textInput} />
                    </View>


                    <View style={styles.buttonView}>
                        <Button style={styles.button} onPress={this.TeacherBiodata}>
                            <Text style={styles.buttonText}>Next</Text>
                        </Button>
                    </View>


                </Form>
            </Content>
        </Container>


    );
}
}
export default TeacherBiodata;

const styles = StyleSheet.create({
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
    buttonView: { width: '50%', alignSelf: 'flex-end', margin: '3%' },
    button: {
        backgroundColor: '#098BD3', color: '#fff', textAlign: 'center', paddingLeft: 15, width: '53%',
        marginRight: 10,
    },
    buttonText: { fontSize: 15, color: '#fff', alignSelf: 'center' },

    headerText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: '500', textTransform: 'capitalize', alignSelf: 'center' },
    subText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold', textTransform: 'capitalize', alignSelf: 'flex-start' },

    labelText: { width: '45%', height: 35, lineHeight: 35, textAlign: 'right', marginRight: 10, justifyContent: 'flex-end', alignItems: 'flex-end', fontSize: 15 },
    textInput: {
        width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15,
        borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7',
        color: '#000', flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',
    }
});