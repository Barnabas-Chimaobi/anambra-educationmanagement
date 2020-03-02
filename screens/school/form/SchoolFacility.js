
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, KeyboardAvoidingView, Picker } from "react-native";
import { Container, Content, Form, Switch,Button} from 'native-base';
import Logic from '../../../logic';

class SchoolFacility extends Component {

    constructor(props) {
        super(props);
        this.state ={
            Lgas: [],
            SecuityTypes: [],
            schoolMixes: [],
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

        // lgas
        const lgas = new Logic()
        lgas.Lgas('http://97.74.6.243/anambra/state/4')
        .then((res) => {
            this.setState({Lgas: res.data})
        })
        .catch((error) => console.warn(error))

        const location = new Logic()
        location.Lgas('http://97.74.6.243/anambra/api/SecurityPersonnelTypes')
        .then((res) => {
            this.setState({SecuityTypes: res.data})
        })
        .catch((error) => console.warn(error))

        const schoolMix = new Logic()
        schoolMix.Lgas('http://97.74.6.243/anambra/api/SchoolTypes')
        .then((res) => {
            this.setState({schoolMixes: res.data})
        })
        .catch((error) => console.warn(error))

    }

    toggleLand = (value) => {
        const {Profile} = this.state;
        Profile.schoolRecord.hasLandEncroachment = value;
        this.setState({ Profile : Profile})
    }

    toggleSBMC = (value) => {
        const {Profile} = this.state;
        Profile.schoolRecord.hasSBMC = value;
        this.setState({ Profile : Profile})
    }

    toggleSIP = (value) => {
        const {Profile} = this.state;
        Profile.schoolRecord.hasSIP = value;
        this.setState({ Profile : Profile})
    }

    toggleFenceRepair = (value) => {
        const {Profile} = this.state;
        Profile.schoolRecord.perimeterFenceNeedsRepair = value;
        this.setState({ Profile : Profile})
    }

    toggleFence = (value) => {
        const {Profile} = this.state;
        Profile.schoolRecord.hasPerimeterFence = value;
        this.setState({ Profile : Profile})
    }

    togglesharesFacilities = (value) => {
        const {Profile} = this.state;
        Profile.schoolRecord.sharesFacilities = value;
        this.setState({ Profile : Profile})
    }

    toggleBoarding = (value) => {
        const {Profile} = this.state;
        Profile.schoolRecord.hasBoarding = value;
        this.setState({ Profile : Profile})
    }

    toggleSecurity = (value) => {
        const {Profile} = this.state;
        Profile.schoolRecord.hasSecurityPersonnel = value;
        this.setState({ Profile : Profile})
    }

    toggleMultigradeTeachers = (value) => {
        const {Profile} = this.state;
        Profile.schoolRecord.hasMultigradeTeachers = value;
        this.setState({ Profile : Profile})
    }

    handleProfileChangeText = (inputName, text) => {
        const {Profile} = this.state;
        Profile.schoolRecord[inputName] = text;
        this.setState({Profile:Profile });
    }

    updateSchoolMix = (value) => {
        const {Profile} = this.state;
        Profile.schoolRecord.schoolMixId = value;
        this.setState({ Profile : Profile})
    }

    updateSecurity = (value) => {
        const {Profile} = this.state;
        Profile.schoolRecord.securityPersonnelTypeId = value;
        this.setState({ Profile : Profile})
    }

    goBack = () =>{
        const {Profile} = this.state;
        this.props.navigation.navigate("Profile", {Profile});
    }

    nextPage = () =>{
        const {Profile} = this.state;
        this.props.navigation.navigate("Facility2", {Profile});
    }

    render() {
        return (


<KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>


            <Container>

                <View style={{ width: '100%', backgroundColor: '#E6DC82', padding: 10 }}>
                    <Text style={styles.headerText}>New School Information</Text>
                </View>

                <Content>

                <View style={{width: '85%', borderBottomColor: '#333', borderBottomWidth: 1, margin :10, marginLeft: 30}}>
                    <Text style={styles.subText}>Facilities &amp; Conditions</Text>
                </View>


                <Form style={{ width: '75%', marginBottom: 40, alignSelf: 'center' }}>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Are facilities shared with other schools?</Text>
                            <Switch onValueChange={this.togglesharesFacilities}
                                value={this.state.Profile.schoolRecord.sharesFacilities} />
                        </View>

                        {
                            this.state.Profile.schoolRecord.sharesFacilities
                            ?
                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelText}>How many schools share facilities?</Text>
                                <TextInput onChangeText={text => this.handleProfileChangeText('sharedFacilitiesCount', text)} value={this.state.Profile.schoolRecord.sharedFacilitiesCount} style={styles.textInput} />
                            </View>
                            :
                            null
                        }

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Is there multi-grade teaching in the school?</Text>
                            <Switch onValueChange={this.toggleMultigradeTeachers}
                                value={this.state.Profile.schoolRecord.hasMultigradeTeachers} />
                        </View>
                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Distance from catchment communities</Text>
                            <TextInput onChangeText={text => this.handleProfileChangeText('distanceFromTown', text)} value={this.state.Profile.schoolRecord.distanceFromTown} style={styles.textInput} />
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Distance from L.G.A Headquarters</Text>
                            <TextInput onChangeText={text => this.handleProfileChangeText('distanceFromLGA', text)} value={this.state.Profile.schoolRecord.distanceFromLGA} style={styles.textInput} />
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Number of students living over 1km from the school?</Text>
                            <TextInput keyboardType="number-pad" onChangeText={text => this.handleProfileChangeText('studentsOutside1km', text)} value={this.state.Profile.schoolRecord.studentsOutside1km} style={styles.textInput} />
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Is the school mixed or single sex?</Text>
                            <Picker selectedValue={this.state.Profile.schoolRecord.schoolMixId} onValueChange={(mix) => {this.updateSchoolMix(mix)}}
                                    style={styles.selectInput}>
                                    {this.state.schoolMixes.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                    })}
                            </Picker>
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>School population</Text>
                            <TextInput onChangeText={text => this.handleProfileChangeText('population', text)} value={this.state.Profile.schoolRecord.population} style={styles.textInput} />
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Male population</Text>
                            <TextInput onChangeText={text => this.handleProfileChangeText('populationBoys', text)} value={this.state.Profile.schoolRecord.populationBoys} style={styles.textInput} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Female population</Text>
                            <TextInput onChangeText={text => this.handleProfileChangeText('populationGirls', text)} value={this.state.Profile.schoolRecord.populationGirls} style={styles.textInput} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Are there boarding facilities?</Text>
                            <Switch onValueChange={this.toggleBoarding}
                                value={this.state.Profile.schoolRecord.hasBoarding} />
                        </View>

                        {
                            this.state.Profile.schoolRecord.hasBoarding
                            ?
                            <View>
                                <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                    <Text style={styles.labelText}>How many boys?</Text>
                                    <TextInput onChangeText={text => this.handleProfileChangeText('boardingBoys', text)} value={this.state.Profile.schoolRecord.boardingBoys} style={styles.textInput} />
                                </View>

                                <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                    <Text style={styles.labelText}>How many girls?</Text>
                                    <TextInput onChangeText={text => this.handleProfileChangeText('boardingGirls', text)} value={this.state.Profile.schoolRecord.boardingGirls} style={styles.textInput} />
                                </View>
                            </View>
                            :
                            null
                        }

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Is there a fence around school ?</Text>
                            <Switch onValueChange={this.toggleFence}
                                value={this.state.Profile.schoolRecord.hasPerimeterFence} />
                        </View>

                        {
                            this.state.Profile.schoolRecord.hasPerimeterFence
                            ?
                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelText}>Does Fence Need Repair ?</Text>
                                <Switch onValueChange={this.toggleFenceRepair}
                                    value={this.state.Profile.schoolRecord.perimeterFenceNeedsRepair} />
                            </View>
                            :
                            null
                        }

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Availability of security personnel</Text>
                            <Switch onValueChange={this.toggleSecurity}
                                value={this.state.Profile.schoolRecord.hasSecurityPersonnel} />
                        </View>

                        {
                            this.state.Profile.schoolRecord.hasSecurityPersonnel ?
                            <View>

                                <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                    <Text style={styles.labelText}>Form of security</Text>
                                    <Picker selectedValue={this.state.Profile.schoolRecord.securityPersonnelTypeId} onValueChange={(sec) => {this.updateSecurity(sec)}}
                                    style={styles.selectInput}>
                                    {this.state.SecuityTypes.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                    })}
                                    </Picker>
                                </View>

                                <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                    <Text style={styles.labelText}>Number of security personnel</Text>
                                    <TextInput onChangeText={text => this.handleProfileChangeText('securityPersonnelCount', text)} value={this.state.Profile.schoolRecord.securityPersonnelCount} style={styles.textInput} />
                                </View>


                            </View>

                            :
                            null
                        }



                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Does the school have land encroachment?</Text>
                            <Switch onValueChange={this.toggleLand}
                                    value={this.state.Profile.schoolRecord.hasLandEncroachment} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Does the school have School Based Management Committee (SBMC)?</Text>
                            <Switch onValueChange={this.toggleSBMC}
                                    value={this.state.Profile.schoolRecord.hasSBMC} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Did the school prepare a School Improvement Plan (SIP) last year?</Text>
                            <Switch onValueChange={this.toggleSIP}
                                    value={this.state.Profile.schoolRecord.hasSIP} />
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={styles.buttonView}>
                                <Button block style={styles.button2} onPress={() => { this.goBack() }}>
                                    <Text style={styles.button2Text}>Previous</Text>
                                </Button>
                            </View>

                            <View style={styles.buttonView}>
                                <Button block style={styles.button} onPress={() => { this.nextPage() }}>
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
export default SchoolFacility;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "flex-start", backgroundColor: '#fff', alignItems: 'center' },
    // buttonView: { width: '30%', alignSelf: 'flex-end', margin: '3%' },
    // button: { backgroundColor: '#098BD3' },
    // button2: { backgroundColor: '#E6DC82' },
    // buttonText: { fontSize: 15, color: '#fff', alignSelf: 'center' },
    buttonView: { width: '20%', alignSelf: 'flex-end', margin: '3%' },
    button: { backgroundColor: '#098BD3' , alignContent: 'center'},
    button2: { backgroundColor: '#E6DC82' },
    button2Text: { fontSize: 15, color: '#000', alignSelf: 'center', fontWeight: '600' },
    buttonText: { fontSize: 15, color: '#fff', alignSelf: 'center', fontWeight: '600' },

    inputView: { width: '100%', alignItems: 'stretch' },

    headerText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: '500', textTransform: 'capitalize', alignSelf: 'center' },
    subText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold', textTransform: 'capitalize', alignSelf: 'flex-start' },

    // labelText: { maxWidth: '45%', minHeight: 35, lineHeight: 15, textAlign: 'right', marginRight: 10, justifyContent:'flex-end', alignItems: 'flex-end', fontSize: 15},
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