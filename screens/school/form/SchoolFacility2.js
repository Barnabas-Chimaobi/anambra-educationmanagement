
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, KeyboardAvoidingView, Picker } from "react-native";
import { Container, Content, Form, Button, DatePicker,Switch} from 'native-base';
import Logic from '../../../logic';

class SchoolFacility2 extends Component {

    constructor(props) {
        super(props);
        this.state ={
            InspectionAuthorities: [],
            Grants: [],
            BirthCertificates: [],
            Ownerships: [],
            PTAs: [],
            Profile: {
                "name": "Almajeri School",
                "coordinatesId": 0,
                "coordinates": {
                  "elevation": 0,
                  "lattitudeNorth": 0,
                  "lattidtudeEast": 0,
                  "id": 0
                },
                "address": "string",
                "town": "string",
                "ward": "string",
                "lgaId": 0,
                "lga": {
                  "id": 0,
                  "state": {
                    "id": 0,
                    "name": "string",
                    "active": true
                  },
                  "name": "string",
                  "active": true
                },
                "email": "string",
                "phone": "string",
                "dateEstablished": "2019-09-14T08:08:29.182Z",
                "locationId": 0,
                "location": {
                  "name": "string",
                  "id": 0
                },
                "schoolRecordId": 0,
                "schoolRecord": {
                  "academicSessionId": 0,
                  "academicSession": {
                    "name": "string",
                    "active": true,
                    "id": 0
                  },
                  "schoolEducationLevels": [
                    {
                      "educationLevelId": 0,
                      "educationLevel": {
                        "name": "string",
                        "active": true,
                        "id": 0
                      },
                      "recordId": 0,
                      "id": 0
                    }
                  ],
                  "schoolTypeId": 0,
                  "schoolType": {
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
                  "schoolMixId": 0,
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
                  "securityPersonnelTypeId": 0,
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
                  "parentForumId": 0,
                  "parentForum": {
                    "name": "string",
                    "active": true,
                    "id": 0
                  },
                  "lastInspection": "2019-09-14T08:08:29.182Z",
                  "inspectionCount": 0,
                  "studentTextbooksProvided": 0,
                  "teacherTextbooksProvided": 0,
                  "inspectionAuthorityId": 0,
                  "inspectionAuthority": {
                    "name": "string",
                    "active": true,
                    "id": 0
                  },
                  "schoolGrant": [
                    {
                      "schoolRecordId": 0,
                      "grantId": 0,
                      "grant": {
                        "name": "string",
                        "active": true,
                        "id": 0
                      },
                      "id": 0
                    }
                  ],
                  "ownershipId": 0,
                  "ownership": {
                    "name": "string",
                    "active": true,
                    "id": 0
                  },
                  "enrollmentCertificates": [
                    {
                        "birthCertificateId": 1,
                        "count": 0
                      },
                      {
                          "birthCertificateId": 2,
                          "count": 0
                        },
                        {
                          "birthCertificateId": 3,
                          "count": 0
                        },
                        {
                          "birthCertificateId": 4,
                          "count": 0
                        },
                        {
                          "birthCertificateId": 5,
                          "count": 0
                        }
                  ],
                  "enrollment": [
                    {
                      "schoolRecordId": 0,
                      "studentClassId": 0,
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
                      "studentClassId": 0,
                      "studentClass": {
                        "name": "string",
                        "active": true,
                        "id": 0
                      },
                      "streamId": 0,
                      "stream": {
                        "name": "string",
                        "active": true,
                        "id": 0
                      },
                      "deskCount": 0,
                      "hasWhiteBoard": true,
                      "classHeldOutside": true,
                      "schoolRecordId": 0,
                      "id": 0
                    }
                  ],
                  "schoolFacilities": [
                    {
                      "facilityId": 0,
                      "facility": {
                        "name": "string",
                        "type": "string",
                        "active": true,
                        "id": 0
                      },
                      "schoolRecordId": 0,
                      "id": 0
                    }
                  ],
                  "schoolPowerSources": [
                    {
                      "powerSourceId": 0,
                      "powerSource": {
                        "name": "string",
                        "active": true,
                        "id": 0
                      },
                      "schoolRecordId": 0,
                      "id": 0
                    }
                  ],
                  "schoolHealthFacilities": [
                    {
                      "healthFacilityId": 0,
                      "healthFacility": {
                        "name": "string",
                        "active": true,
                        "id": 0
                      },
                      "schoolRecordId": 0,
                      "id": 0
                    }
                  ],
                  "headTeacherId": 0,
                  "headTeacher": {
                    "personId": 0,
                    "person": {
                      "name": "string",
                      "dateOfBirth": "2019-09-14T08:08:29.183Z",
                      "stateId": 0,
                      "state": {
                        "id": 0,
                        "name": "string",
                        "active": true
                      },
                      "lgaId": 0,
                      "lga": {
                        "id": 0,
                        "state": {
                          "id": 0,
                          "name": "string",
                          "active": true
                        },
                        "name": "string",
                        "active": true
                      },
                      "sexId": 0,
                      "sex": {
                        "gender": "string",
                        "active": true,
                        "id": 0
                      },
                      "hometown": "string",
                      "address": "string",
                      "permanentAddress": "string",
                      "alergy": "string",
                      "phone": "string",
                      "email": "string",
                      "nextOfKin": {
                        "name": "string",
                        "phone": "string",
                        "email": "string",
                        "address": "string",
                        "personId": 0,
                        "id": 0
                      },
                      "id": 0
                    },
                    "teacherRecordId": 0,
                    "teacherRecord": {
                      "academicSessionId": 0,
                      "academicSession": {
                        "name": "string",
                        "active": true,
                        "id": 0
                      },
                      "onPremises": true,
                      "teacherQualifications": [
                        {
                          "qualificationId": 0,
                          "qualification": {
                            "name": "string",
                            "active": true,
                            "id": 0
                          },
                          "teacherRecordId": 0,
                          "id": 0
                        }
                      ],
                      "teacherSubjects": [
                        {
                          "subjectId": 0,
                          "subject": {
                            "name": "string",
                            "active": true,
                            "id": 0
                          },
                          "teacherRecordId": 0,
                          "id": 0
                        }
                      ],
                      "teacherStreams": [
                        {
                          "streamId": 0,
                          "stream": {
                            "name": "string",
                            "active": true,
                            "id": 0
                          },
                          "teacherRecordId": 0,
                          "id": 0
                        }
                      ],
                      "teacherSpecialization": [
                        {
                          "subjectAreaId": 0,
                          "subject": {
                            "name": "string",
                            "active": true,
                            "id": 0
                          },
                          "teacherRecordId": 0,
                          "id": 0
                        }
                      ],
                      "teacherInstitutions": [
                        {
                          "institution": "string",
                          "date": "2019-09-14T08:08:29.183Z",
                          "teacherRecordId": 0,
                          "id": 0
                        }
                      ],
                      "firstAppointment": "2019-09-14T08:08:29.183Z",
                      "currentAppointment": "2019-09-14T08:08:29.183Z",
                      "retirement": "2019-09-14T08:08:29.183Z",
                      "yearsOfExperience": 0,
                      "trainingsAttended": 0,
                      "streamsTaught": 0,
                      "gradeLevelId": 0,
                      "gradeLevel": {
                        "name": "string",
                        "active": true,
                        "id": 0
                      },
                      "rankId": 0,
                      "rank": {
                        "name": "string",
                        "active": true,
                        "id": 0
                      },
                      "postHeld": "string",
                      "datePosted": "2019-09-14T08:08:29.183Z",
                      "postingHistories": [
                        {
                          "institution": "string",
                          "date": "2019-09-14T08:08:29.183Z",
                          "teacherRecordId": 0,
                          "id": 0
                        }
                      ],
                      "staffTypeId": 0,
                      "staffType": {
                        "name": "string",
                        "active": true,
                        "id": 0
                      },
                      "staffClassId": 0,
                      "staffClass": {
                        "name": "string",
                        "active": true,
                        "id": 0
                      },
                      "schoolId": 0,
                      "id": 0
                    },
                    "id": 0
                  },
                  "id": 0
                },
                "active": true,
                "id": 0
            }
        }
    }

    componentDidMount(){

        const Profile = this.props.navigation.getParam('Profile', '');
        if (Profile){
            this.setState({Profile: Profile});
        }

        // Ownerships
        const ownership = new Logic()
        ownership.Ownerships('http://97.74.6.243/anambra/api/Ownerships')
        .then((res) => {
            this.setState({Ownerships: res.data})
            // console.warn('lgas',this.state)
        })
        .catch((error) => console.warn(error))

        // inspection
        const inspection = new Logic()
        inspection.InspectionAuthorities('http://97.74.6.243/anambra/api/InspectionAuthorities')
        .then((res) => {
            this.setState({InspectionAuthorities: res.data})
            // console.warn('lgas',this.state)
        })
        .catch((error) => console.warn(error))


        // inspection
        const grants = new Logic()
        grants.Grants('http://97.74.6.243/anambra/api/Grants')
        .then((res) => {
            this.setState({Grants: res.data})
            // console.warn('lgas',this.state)
        })
        .catch((error) => console.warn(error))

        // inspection
        const pta = new Logic()
        pta.Grants('http://97.74.6.243/anambra/api/ParentForums')
        .then((res) => {
            this.setState({PTAs: res.data})
            // console.warn('lgas',this.state)
        })
        .catch((error) => console.warn(error))


        // BirthCertificates
        const certificates = new Logic()
        certificates.BirthCertificates('http://97.74.6.243/anambra/api/BirthCertificates')
        .then((res) => {
            this.setState({BirthCertificates: res.data})
            // console.warn('lgas',this.state)
        })
        .catch((error) => console.warn(error))


    }

    togglePTA = (value) => {
        const {Profile} = this.state;
        Profile.schoolRecord.hasLandEncroachment = value;
        this.setState({ Profile : Profile})
    }

    updatePTA = (field,value) => {
        const {Profile} = this.state;
        Profile.schoolRecord[field] = value;
        this.setState({ Profile : Profile})
    }

    updateGrant = (value) => {
        const {Profile} = this.state;
        Profile.schoolRecord.schoolGrant[0].grantId = value;
        this.setState({ Profile : Profile})
    }

    setInspectionDate(newDate) {
        const {Profile} = this.state;
        Profile.schoolRecord.lastInspection = newDate.toISOString();
        this.setState({ Profile : Profile})
    }


    updateCertificates = (id, count) => {
        const {Profile} = this.state;
        Profile.schoolRecord.enrollmentCertificates[id].count = count;
        this.setState({Profile:Profile });
    }



    goBack = () =>{
        const {Profile} = this.state;
        this.props.navigation.navigate("Facility", {Profile});
    }

    nextPage = () =>{
        const {Profile} = this.state;
        this.props.navigation.navigate("Facility3", {Profile});
    }

    handleProfileChangeText = (inputName, text) => {
        const {Profile} = this.state;
        Profile.schoolRecord[inputName] = text;
        this.setState({Profile:Profile });
    }


    render() {
        return (

<KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>

            <Container>

                <View style={{ backgroundColor: '#E6DC82', padding: 10 }}>
                    <Text style={styles.headerText}>New School Information</Text>
                </View>

                <Content>

                <View style={{width: '85%', borderBottomColor: '#333', borderBottomWidth: 1, margin :10, marginLeft: 30}}>
                    <Text style={styles.subText}>Facilities &amp; Conditions - Part 2</Text>
                </View>

                    <Form style={{ width: '75%', marginBottom: 40, alignSelf: 'center' }}>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Is there a Parent Teacher Association (PTA)?</Text>
                            <Picker selectedValue={this.state.Profile.schoolRecord.parentForumId} onValueChange={(mix) => {this.updatePTA("parentForumId",mix)}}
                                    style={styles.selectInput}>
                                    {this.state.PTAs.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                    })}
                            </Picker>
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Date of last inspection visit</Text>
                            <DatePicker
                                defaultDate={new Date(2018, 4, 4)}
                                minimumDate={new Date(1960, 1, 1)}
                                maximumDate={new Date(2018, 12, 31)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setInspectionDate}
                                disabled={false}
                            />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Number of Inspection Visits in the last academic year</Text>
                            <TextInput onChangeText={text => this.handleProfileChangeText('inspectionCount', text)} value={this.state.Profile.schoolRecord.inspectionCount} style={styles.textInput} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Which authority conducted the last inspection?</Text>
                            <Picker selectedValue={this.state.Profile.schoolRecord.inspectionAuthorityId} onValueChange={(mix) => {this.updatePTA("inspectionAuthorityId",mix)}}
                                    style={styles.selectInput}>
                                {this.state.InspectionAuthorities.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                            </Picker>

                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Has your school received grants in the last two academic sessions?</Text>
                            <Picker selectedValue={this.state.Profile.schoolRecord.schoolGrant[0].grantId} onValueChange={(mix) => {this.updateGrant(mix)}}
                                    style={styles.selectInput}>
                                {this.state.Grants.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                            </Picker>
                        </View>


                        {/* <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>If yes, what type of grants?</Text>
                            <TextInput onChangeText={text => this.handleProfileChangeText('sharedFacilitiesCount', text)} value={this.state.Profile.schoolRecord.sharedFacilitiesCount} style={styles.textInput} />
                        </View> */}

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Which tier of Governement owns the school?</Text>
                            <Picker selectedValue={this.state.Profile.schoolRecord.ownershipId} onValueChange={(mix) => {this.updatePTA("ownershipId",mix)}}
                                    style={styles.selectInput}>
                                {this.state.Ownerships.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                            </Picker>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>How many children were enrolled with birth certificates below:</Text>
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>NPOC:</Text>
                            <TextInput onChangeText={text => this.updateCertificates(0, text)} value={this.state.Profile.schoolRecord.enrollmentCertificates[0].count} style={styles.textInput} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Hospital:</Text>
                            <TextInput onChangeText={text => this.updateCertificates(1, text)} value={this.state.Profile.schoolRecord.enrollmentCertificates[1].count} style={styles.textInput} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>LGA:</Text>
                            <TextInput onChangeText={text => this.updateCertificates(2, text)} value={this.state.Profile.schoolRecord.enrollmentCertificates[2].count} style={styles.textInput} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Court:</Text>
                            <TextInput onChangeText={text => this.updateCertificates(3, text)} value={this.state.Profile.schoolRecord.enrollmentCertificates[3].count} style={styles.textInput} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Other:</Text>
                            <TextInput onChangeText={text => this.updateCertificates(4, text)} value={this.state.Profile.schoolRecord.enrollmentCertificates[4].count} style={styles.textInput} />
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>JSCE/SSCE for the previous academic year</Text>
                            <TextInput onChangeText={text => this.handleProfileChangeText('sharedFacilitiesCount', text)} value={this.state.Profile.schoolRecord.sharedFacilitiesCount} style={styles.textInput} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>How many classrooms are in the school?</Text>
                            <TextInput onChangeText={text => this.handleProfileChangeText('sharedFacilitiesCount', text)} value={this.state.Profile.schoolRecord.sharedFacilitiesCount} style={styles.textInput} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>How many classes are held outside?</Text>
                            <TextInput onChangeText={text => this.handleProfileChangeText('sharedFacilitiesCount', text)} value={this.state.Profile.schoolRecord.sharedFacilitiesCount} style={styles.textInput} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Does the school have good whiteboards
                            in all classes?</Text>
                            <TextInput onChangeText={text => this.handleProfileChangeText('sharedFacilitiesCount', text)} value={this.state.Profile.schoolRecord.sharedFacilitiesCount} style={styles.textInput} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Source of safe drinking water</Text>
                            <Picker
                                    style={styles.selectInput}
                                    onValueChange={()=>{}}>
                                 <Picker.Item label='Pipe-borne water' value='Pipe-borne water' />
                                 <Picker.Item label='Borehole' value='Borehole' />
                                 <Picker.Item label='Well' value='Well' />
                                 <Picker.Item label='Others' value='Others' />
                                 <Picker.Item label='No source of safe water' value='No source of safe water' />
                               </Picker>
                        </View>

                        <View style={{ flexDirection: 'row',  justifyContent: 'space-between'}}>
                            <View style={styles.buttonView}>
                                <Button block style={styles.button2} onPress={() => { this.props.navigation.navigate("Facility") }}>
                                    <Text style={styles.button2Text}>Previous</Text>
                                </Button>
                            </View>

                            <View style={styles.buttonView}>
                                <Button block style={styles.button} onPress={() => { this.props.navigation.navigate("Facility3") }}>
                                    <Text style={styles.buttonText}>Next</Text>
                                </Button>
                            </View>
                        </View>
                    </Form>
                </Content>
            </Container>
</KeyboardAvoidingView>
        );
    }
}
export default SchoolFacility2;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "flex-start", backgroundColor: '#fff', alignItems: 'center' },

    buttonView: { width: '20%', alignSelf: 'flex-end', margin: '3%' },
    button: { backgroundColor: '#098BD3' , alignContent: 'center'},
    button2: { backgroundColor: '#E6DC82' },
    button2Text: { fontSize: 15, color: '#000', alignSelf: 'center', fontWeight: '600' },
    buttonText: { fontSize: 15, color: '#fff', alignSelf: 'center', fontWeight: '600' },

    inputView: { width: '100%', alignItems: 'stretch' },

    headerText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: '500', textTransform: 'capitalize', alignSelf: 'center' },
    subText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold', textTransform: 'capitalize', alignSelf: 'flex-start' },

    labelText: { width: '45%', height: 35, lineHeight: 35, textAlign: 'right', marginRight: 10, justifyContent:'flex-end', alignItems: 'flex-end', fontSize: 15},
    textInput: {
        width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15,
        borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7',
        color: '#000', flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',
    },
    selectInput: {width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15,
                borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7',
                color: '#000', flex: 1,flexDirection: 'row',justifyContent: 'flex-end',alignItems: 'center',}
});