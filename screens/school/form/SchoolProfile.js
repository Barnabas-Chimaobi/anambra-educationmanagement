import React, { Component } from "react";
import {View,Text,StyleSheet, KeyboardAvoidingView,TextInput,ScrollView, Picker} from "react-native";
import { Container, Content,DatePicker, Form, Button} from 'native-base';
import Logic from '../../../logic'

class SchoolProfile extends Component {

    constructor(props) {
        super(props);

        this.state ={
            Lgas: [],
            Locations: [],
            SchooTypes: [],
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

    static navigationOptions =  {
        title: 'New School',
        headerLeft: null
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
        location.Lgas('http://97.74.6.243/anambra/api/Locations')
        .then((res) => {
            this.setState({Locations: res.data})
        })
        .catch((error) => console.warn(error))

        const schoolType = new Logic()
        schoolType.Lgas('http://97.74.6.243/anambra/api/SchoolTypes')
        .then((res) => {
            this.setState({SchooTypes: res.data})
        })
        .catch((error) => console.warn(error))

    }


    nextPage = () =>{
        const {Profile} = this.state;
        this.props.navigation.navigate("Facility", {Profile});

    }

    updateLga = (Lga) => {
        const {Profile} = this.state;
        Profile.lgaId = Lga;
        this.setState({ Profile : Profile})
    }

    setEstablishedDate(newDate) {
        const {Profile} = this.state;
        Profile.dateEstablished = newDate.toISOString();
        this.setState({ Profile : Profile})
    }

    handleProfileChangeText = (inputName, text) => {
        const {Profile} = this.state;
        Profile[inputName] = text;
        this.setState({Profile:Profile });
    }

    handleCordChangeText = (inputName, text) => {
        const {Profile} = this.state;
        Profile.coordinates[inputName] = text;
        this.setState({Profile:Profile });
    }



    render() {
        return (
            <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>

            <Container>
                 <View style={{width: '100%',backgroundColor:'#E6DC82', padding :10}}>
                    <Text style={styles.headerText}>New School Information</Text>
                </View>

                    <Content>
                    <View style={{width: '85%', borderBottomColor: '#333', borderBottomWidth: 1, margin :10, marginLeft: 30}}>
                        <Text style={styles.subText}>School Profile</Text>
                    </View>


                    <Form style={{ width: '75%', marginBottom: 40, alignSelf: 'center' }}>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>School Name</Text>
                                <TextInput onChangeText={text => this.handleProfileChangeText('name', text)} value={this.state.Profile.name} style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Cordinates Elevation</Text>
                                <TextInput keyboardType="number-pad" onChangeText={text => this.handleCordChangeText('elevation', text)} value={this.state.Profile.coordinates.elevation} style={styles.textInput}/>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Cordinates Lattidtude East</Text>
                                <TextInput keyboardType="number-pad" onChangeText={text => this.handleCordChangeText('lattitudeNorth', text)} value={this.state.Profile.coordinates.lattitudeNorth} style={styles.textInput}/>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Cordinates Lattitude North</Text>
                                <TextInput keyboardType="number-pad" onChangeText={text => this.handleCordChangeText('lattidtudeEast', text)} value={this.state.Profile.coordinates.lattidtudeEast} style={styles.textInput}/>
                            </View>




                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Contact Address</Text>
                                <TextInput onChangeText={text => this.handleProfileChangeText('address', text)} value={this.state.Profile.address} style={styles.textInput}/>
                            </View>
                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Village/Town</Text>
                                <TextInput onChangeText={text => this.handleProfileChangeText('town', text)} value={this.state.Profile.town} style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Ward</Text>
                                <TextInput onChangeText={text => this.handleProfileChangeText('ward', text)} value={this.state.Profile.ward} style={styles.textInput}/>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>L.G.A</Text>
                                <Picker selectedValue={this.state.Profile.lgaId} onValueChange={(lga) => {this.updateLga(lga)}}
                                    style={styles.selectInput}>
                                    {this.state.Lgas.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                    })}
                            </Picker>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Email Address</Text>
                                <TextInput onChangeText={text => this.handleProfileChangeText('email', text)} value={this.state.Profile.email} style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>School Phone Number</Text>
                                <TextInput onChangeText={text => this.handleProfileChangeText('phone', text)} value={this.state.Profile.phone} style={styles.textInput}/>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Year of Establishment</Text>
                                <DatePicker
                                defaultDate={new Date(2005, 4, 4)}
                                minimumDate={new Date(1960, 1, 1)}
                                maximumDate={new Date()}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setEstablishedDate}
                                disabled={false}
                            />
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Location</Text>
                                <Picker selectedValue={this.state.Profile.locationId} onValueChange={(lga) => {this.updateLga(lga)}}
                                    style={styles.selectInput}>
                                    {this.state.Locations.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                    })}
                                </Picker>
                            </View>

                            {/* <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Levels of Education Offered</Text>
                                <TextInput onChangeText={text => this.handleProfileChangeText('name', text)} value={this.state.Profile.name} style={styles.textInput}/>
                            </View> */}

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Type of School</Text>
                                <Picker selectedValue={this.state.Profile.schoolRecord.schoolTypeId} onValueChange={(lga) => {this.updateLga(lga)}}
                                    style={styles.selectInput}>
                                    {this.state.SchooTypes.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                    })}
                                </Picker>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Does School Operate Shift</Text>
                                <Picker selectedValue={this.state.Profile.schoolRecord.operatesShiftSystem}
                                    style={styles.selectInput}
                                    onValueChange={()=>{}}>
                                 <Picker.Item label='Yes' value='1' />
                                 <Picker.Item label='No' value='0' />
                               </Picker>
                            </View>


                            <View style={styles.buttonView}>
                               <Button block style={styles.button} small primary  onPress={()=>{this.nextPage()}}>
                                    <Text style={styles.buttonText}>Next</Text>
                               </Button>
                            </View>


                    </Form>
                    </Content>
            </Container>

            </KeyboardAvoidingView>
        );
    }
}
export default SchoolProfile;

const styles = StyleSheet.create({
    container: {flex: 1,justifyContent: "flex-start",backgroundColor:'#fff',alignItems: 'center'},
    // buttonView:{width:'30%', alignSelf:'flex-end', margin:'3%'},
    // button: { backgroundColor: '#098BD3', color: '#fff', textAlign: 'center', paddingLeft: 15, width: '25%',flex: 1,
    // flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', marginRight: 10, },
    buttonView: { width: '20%', alignSelf: 'flex-end', margin: '3%' },
    button: { backgroundColor: '#098BD3' , alignContent: 'center'},
    button2: { backgroundColor: '#E6DC82' },
    button2Text: { fontSize: 15, color: '#000', alignSelf: 'center', fontWeight: '600' },
    buttonText: { fontSize: 15, color: '#fff', alignSelf: 'center', fontWeight: '600' },

    // buttonText: { fontSize: 15, color: '#fff', textAlign: 'center', alignContent: 'center', alignSelf: 'center' },

    inputView: { width: '100%',alignItems: 'stretch'},

    headerText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: '500', textTransform: 'capitalize', alignSelf: 'center' },
    subText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold', textTransform: 'capitalize', alignSelf: 'flex-start' },

    labelText: { width: '45%', height: 35, lineHeight: 15, textAlign: 'right', marginRight: 10, justifyContent:'flex-end', alignItems: 'flex-end', fontSize: 15},
    textInput: {width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15,
                borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7',
                color: '#000', flex: 1,flexDirection: 'row',justifyContent: 'flex-end',alignItems: 'center'},

    selectInput: {width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15,
                borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7',
                color: '#000', flex: 1,flexDirection: 'row',justifyContent: 'flex-end',alignItems: 'center',}
});