import React, { Component } from "react";
import { View, Text, Modal, TouchableHighlight, TextInput, KeyboardAvoidingView, Picker ,Platform, NetInfo, Alert} from "react-native";
import { Container, Content, Form, Switch,Button} from 'native-base';
import { styles} from "../../constants/styles";
import { connect} from 'react-redux'
import * as  biodataActions from "../../actions/index";
import MultiSelect from "../../../Components/MultiSelect";



class SchoolFacility extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItems: [],
            FacilityModalVisible:false,
            HealthFacilityModalVisible:false,
            PowerModalVisible:false,
            GrantModalVisible:false,
            ClassModalVisible:false,
            StreamModalVisible:false,
            EduLevelModalVisible:false,
            schoolEducationLevels: [],
            schoolClasses: [],
            schoolStreams: [],
            schoolFacilities: [],
            schoolPowerSources: [],
            schoolHealthFacilities: [],
            schoolGrant: [],
        };
    }
    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
      };
    static navigationOptions = {
        header: null,
    };

    componentDidMount() {
        this.props.fetchStudentClassesList();
        this.props.fetchStudentStreamsList();
        this.props.fetchGrantsList();
        this.props.fetchFacilitiesList();
        this.props.fetchHealthFacilityList();
        this.props.fetchPowerSourcesList();
        this.props.fetchHealthFacilityList();
        this.props.fetchEducationLevelsList();
        this.setLoadedData();

            CheckConnectivity = () => {
                // For Android devices
                if (Platform.OS === "android") {
                  NetInfo.isConnected.fetch().then(isConnected => {
                    if (isConnected) {;
                    } else {
                      Alert.alert("No internet connection");
                    }
                  });
                } else {
                //   // For iOS devices
                //   NetInfo.isConnected.addEventListener(
                //     "connectionChange",
                //     this.handleFirstConnectivityChange
                //   );
                }
              };
        
    }

    setLoadedData = () => {
        if (this.props.Profile.schoolRecord.id > 0){

            const sClasses = this.props.Profile.schoolRecord.schoolClasses.map((data) => {
                return {
                    id: data.studentClass.id,
                    name: data.studentClass.name
                };
            });
            this.setState({schoolClasses:sClasses})

            const sStream = this.props.Profile.schoolRecord.schoolStreams.map((data) => {
                return {
                    id: data.stream.id,
                    name: data.stream.name
                };
            });
            this.setState({schoolStreams:sStream})

            const sFacility = this.props.Profile.schoolRecord.schoolFacilities.map((data) => {
                return {
                    id: data.facility.id,
                    name: data.facility.name
                };
            });
            this.setState({schoolFacilities:sFacility})

            const sPower = this.props.Profile.schoolRecord.schoolPowerSources.map((data) => {
                return {
                    id: data.powerSource.id,
                    name: data.powerSource.name
                };
            });
            this.setState({schoolPowerSources:sPower})

            const sHealth = this.props.Profile.schoolRecord.schoolHealthFacilities.map((data) => {
                return {
                    id: data.healthFacility.id,
                    name: data.healthFacility.name
                };
            });
            this.setState({schoolHealthFacilities:sHealth})

            const sGrant = this.props.Profile.schoolRecord.schoolGrant.map((data) => {
                return {
                    id: data.grant.id,
                    name: data.grant.name
                };
            });
            this.setState({schoolGrant:sGrant})

            const sEduLevel = this.props.Profile.schoolRecord.schoolEducationLevels.map((data) => {
                return {
                    id: data.educationLevel.id,
                    name: data.educationLevel.name
                };
            });
            this.setState({schoolEducationLevels:sEduLevel})
        }
        
    }

    setClassModalVisible(visible) {
        this.setState({ClassModalVisible: visible});
    }

    setStreamModalVisible(visible) {
        this.setState({StreamModalVisible: visible});
    }

    setFacilityModalVisible(visible) {
        this.setState({FacilityModalVisible: visible});
    }

    setPowerSourceModalVisible(visible) {
        this.setState({PowerModalVisible: visible});
    }

    setHealthFacilityModalVisible(visible) {
        this.setState({HealthFacilityModalVisible: visible});
    }

    setGrantsModalVisible(visible) {
        this.setState({GrantModalVisible: visible});
    }

    setEduLevelModalVisible(visible) {
        this.setState({EduLevelModalVisible: visible});
    }

    onSelectedClassItemsChange = (studentClassId,facility) => {
        let schoolClasses = this.state.schoolClasses;
        if(studentClassId){
            schoolClasses.push({id: studentClassId, name: facility});
            this.setState({schoolClasses:schoolClasses})
            this.props.addSchoolClasses({"studentClassId": studentClassId});
        }
    };

    onSelectedSteamrItemsChange = (streamId,facility) => {
        let schoolStreams = this.state.schoolStreams;
        if(streamId){
            schoolStreams.push({id: streamId, name: facility});
            this.setState({schoolStreams:schoolStreams})
            this.props.addSchoolStreams({"streamId": streamId});
        }
    };

    onSelectedFacilityItemsChange = (facilityId,facility) => {
        let schoolFacilities = this.state.schoolFacilities;
        if(facilityId){
            schoolFacilities.push({id: facilityId, name: facility});
            this.setState({schoolFacilities:schoolFacilities})
            this.props.addSchoolFacilities({"facilityId": facilityId, "imagePath": ""});
        }

    };

    onSelectedPowerItemsChange = (powerSourceId,powerSource) => {
        let schoolPowerSources = this.state.schoolPowerSources;
        if(powerSourceId){
            schoolPowerSources.push({id: powerSourceId, name: powerSource});
            this.setState({schoolPowerSources:schoolPowerSources})
            this.props.addSchoolPowerSources({"powerSourceId": powerSourceId});
        }

    };

    onSelectedHealthFacilityItemsChange = (healthFacilityId,healthFacility) => {
        let schoolHealthFacilities = this.state.schoolHealthFacilities;
        if(healthFacilityId)
        {
            schoolHealthFacilities.push({id: healthFacilityId, name: healthFacility});
            this.setState({schoolHealthFacilities:schoolHealthFacilities})
            this.props.addSchoolHealthFacilities({"healthFacilityId": healthFacilityId});

        }
    };


    onSelectedGrantItemsChange = (grantId,grantName) => {
        let schoolGrant = this.state.schoolGrant;
        if(grantId){
            schoolGrant.push({id: grantId, name: grantName});
            this.setState({schoolGrant:schoolGrant})
            this.props.addSchoolGrants({"grantId": grantId});
        }

    };

    onSelectedEduLevelItemsChange = (educationLevelId,educationLevel) => {
        let schoolEducationLevels = this.state.schoolEducationLevels;
        if(educationLevelId){
            schoolEducationLevels.push({id: educationLevelId, name: educationLevel});
            this.setState({schoolEducationLevels:schoolEducationLevels})
            this.props.addSchoolEducationLevels({"educationLevelId": educationLevelId});
        }

    };

    submit = () => {

        if (!this.props.Profile.schoolRecord.schoolEducationLevels[0]) {
            alert("Add Educational Levels!");
            return;
        }

        if (!this.props.Profile.schoolRecord.schoolGrant[0]) {
            alert("Add Grants !");
            return;
        }

        if (!this.props.Profile.schoolRecord.schoolFacilities[0]) {
            alert("Add Facilities !");
            return;
        }
        if (!this.props.Profile.schoolRecord.schoolPowerSources[0]) {
            alert("Add Power Source!");
            return;
        }
        if (!this.props.Profile.schoolRecord.schoolHealthFacilities[0]) {
            alert("Add Health Facility!");
            return;
        }
        if (!this.props.Profile.schoolRecord.schoolClasses[0]) {
            alert("Add Classes!");
            return;
        }
        if (!this.props.Profile.schoolRecord.schoolStreams[0]) {
            alert("Add Streams!");
            return;
        }



        if(this.props.Profile.id){
            alert("Record Updated!");
            this.props.navigation.navigate("School");
        }else{
            this.props.savechoolDataAsync(this.props.Profile)
            this.props.navigation.navigate("School");
            alert("Record Saved!");
             
        }
    

      
    }


    render() {
        return (
            this.props.Profile.schoolRecord ? 
            <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>
            <Container>

                <View style={{ backgroundColor: '#E6DC82', padding: 10 }}>
                    <Text style={styles.headerText}>New School Information</Text>
                </View>

                <Content >

                    <View style={{ width: '85%', borderBottomColor: '#333', borderBottomWidth: 1, margin: 10, marginLeft: 30 }}>
                        <Text style={styles.subText}>Facilities </Text>
                    </View>

                    <Form style={{ width: '75%', justifyContent: 'center', alignSelf: 'center' }}>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Education Level available</Text>
                            <TouchableHighlight style={{backgroundColor: '#F7F7F7' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setEduLevelModalVisible(true);}}>
                                        <Text style={{alignSelf:'center', fontSize: 15, backgroundColor:'#E6DC82'}}>Select Levels</Text>
                            </TouchableHighlight>
                        </View>
                        {
                            this.state.schoolEducationLevels.length > 0 ?
                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelTextCenter}>
                                    {
                                        this.state.schoolEducationLevels.map((level,key) => {
                                            return ( <Text key={key}
                                                style={styles.displayItems}
                                                >{level.name}, </Text> )
                                        })

                                    }
                                </Text>
                            </View>
                            : null
                        }


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Classes available</Text>
                            <TouchableHighlight style={{backgroundColor: '#F7F7F7' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setClassModalVisible(true);}}>
                                        <Text style={{alignSelf:'center', fontSize: 15, backgroundColor:'#E6DC82'}}>Select Classes</Text>
                            </TouchableHighlight>
                        </View>

                        {
                            this.state.schoolClasses.length > 0 ?
                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelTextCenter}>
                                    {
                                        this.state.schoolClasses.map((level,key) => {
                                            return ( <Text key={key}
                                                style={styles.displayItems}
                                                >{level.name}, </Text> )
                                        })

                                    }
                                </Text>
                            </View>
                            : null
                        }


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Streams available</Text>
                            <TouchableHighlight style={{backgroundColor: '#F7F7F7' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setStreamModalVisible(true);}}>
                                        <Text style={{alignSelf:'center', fontSize: 15, backgroundColor:'#E6DC82'}}>Select Streams</Text>
                            </TouchableHighlight>

                        </View>

                        {
                            this.state.schoolStreams.length > 0 ?
                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelTextCenter}>
                                    {
                                        this.state.schoolStreams.map((level,key) => {
                                            return ( <Text key={key}
                                                style={styles.displayItems}
                                                >{level.name}, </Text> )
                                        })

                                    }
                                </Text>
                            </View>
                            : null
                        }

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Facilities available</Text>
                            <TouchableHighlight style={{backgroundColor: '#F7F7F7' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setFacilityModalVisible(true);}}>
                                        <Text style={{alignSelf:'center', fontSize: 15, backgroundColor:'#E6DC82'}}>Select Facilities</Text>
                            </TouchableHighlight>

                        </View>

                        {
                            this.state.schoolFacilities.length > 0 ?
                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelTextCenter}>
                                    {
                                        this.state.schoolFacilities.map((level,key) => {
                                            return ( <Text key={key}
                                                style={styles.displayItems}
                                                >{level.name}, </Text> )
                                        })

                                    }
                                </Text>
                            </View>
                            : null
                        }



                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Power Source</Text>
                            <TouchableHighlight style={{backgroundColor: '#F7F7F7' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setPowerSourceModalVisible(true);}}>
                                        <Text style={{alignSelf:'center', fontSize: 15, backgroundColor:'#E6DC82'}}>Select Power Sources</Text>
                            </TouchableHighlight>
                        </View>
                        {
                            this.state.schoolPowerSources.length > 0 ?
                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelTextCenter}>
                                    {
                                        this.state.schoolPowerSources.map((level,key) => {
                                            return ( <Text key={key}
                                                style={styles.displayItems}
                                                >{level.name}, </Text> )
                                        })

                                    }
                                </Text>
                            </View>
                            : null
                        }
                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Health Facility</Text>
                            <TouchableHighlight style={{backgroundColor: '#F7F7F7' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setHealthFacilityModalVisible(true);}}>
                                        <Text style={{alignSelf:'center', fontSize: 15, backgroundColor:'#E6DC82'}}>Select Health Facilities</Text>
                            </TouchableHighlight>
                        </View>
                        {
                            this.state.schoolHealthFacilities.length > 0 ?
                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelTextCenter}>
                                    {
                                        this.state.schoolHealthFacilities.map((level,key) => {
                                            return ( <Text key={key}
                                                style={styles.displayItems}
                                                >{level.name}, </Text> )
                                        })

                                    }
                                </Text>
                            </View>
                            : null
                        }

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Grants Received</Text>
                            <TouchableHighlight style={{backgroundColor: '#F7F7F7' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setGrantsModalVisible(true);}}>
                                        <Text style={{alignSelf:'center', fontSize: 15, backgroundColor:'#E6DC82'}}>SelectGrants</Text>
                            </TouchableHighlight>
                        </View>
                        {
                            this.state.schoolGrant.length > 0 ?
                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelTextCenter}>
                                    {
                                        this.state.schoolGrant.map((level,key) => {
                                            return ( <Text key={key}
                                                style={styles.displayItems}
                                                >{level.name}, </Text> )
                                        })

                                    }
                                </Text>
                            </View>
                            : null
                        }

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelText}>Sports Facilities</Text>
                            <Switch onValueChange={(value) => this.props.addSchoolRecord("hasSportsFacillity",value)}
                                value={this.props.Profile.schoolRecord.hasSportsFacillity} />
                        </View>


                        <View style={{ margin: 15, alignSelf: 'flex-start' }}>
                            <Text style={styles.headerText}>Student/Teacher Book Provided</Text>
                            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, alignSelf: 'stretch' }} />
                        </View>

                        <View style={{ width: '100%', justifyContent: 'flex-end', alignSelf: 'center' }}>



                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelTextLong} >Number teacher textbooks </Text>
                                <TextInput keyboardType="numeric" onChangeText={text => this.props.addSchoolRecord('teacherTextbooksProvided', text)} value={`${this.props.Profile.schoolRecord.teacherTextbooksProvided}`} style={styles.textInput} />

                            </View>


                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelTextLong} >Number of student textbooks </Text>
                            <TextInput keyboardType="numeric" onChangeText={text => this.props.addSchoolRecord('studentTextbooksProvided', text)} value={`${this.props.Profile.schoolRecord.studentTextbooksProvided}`} style={styles.textInput} />

                            </View>


                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={styles.buttonView}>
                                <Button block style={styles.button2} onPress={() => { this.props.navigation.navigate("SchoolOtherData") }}>
                                    <Text style={styles.button2Text}>Previous</Text>
                                </Button>
                            </View>

                            <View style={styles.buttonView}>
                                <Button block style={styles.button} onPress={() => { this.submit(), CheckConnectivity() }}>
                                    <Text style={styles.buttonText}>Submit</Text>
                                </Button>
                            </View>
                        </View>

                    </Form>

                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.ClassModalVisible}
                        onRequestClose={() => {
                            this.setClassModalVisible(false);
                        }}>
                        <View>

                        <MultiSelect data={this.props.studentClasses} onSelectedItem={this.onSelectedClassItemsChange}  />

                            <TouchableHighlight style={{backgroundColor: '#098BD3' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setClassModalVisible(!this.state.ClassModalVisible);}}>
                                    <Text style={{alignSelf:'center', fontSize: 20}}>Confirm Selection</Text>
                            </TouchableHighlight>
                        </View>
                    </Modal>

                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.StreamModalVisible}
                        onRequestClose={() => {
                            this.setStreamModalVisible(false);
                        }}>
                        <View>

                        <MultiSelect data={this.props.streams} onSelectedItem={this.onSelectedSteamrItemsChange}  />

                            <TouchableHighlight style={{backgroundColor: '#098BD3' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setStreamModalVisible(!this.state.StreamModalVisible);}}>
                                    <Text style={{alignSelf:'center', fontSize: 20}}>Confirm Selection</Text>
                            </TouchableHighlight>
                        </View>
                    </Modal>

                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.FacilityModalVisible}
                        onRequestClose={() => {
                            this.setFacilityModalVisible(false);
                        }}>
                        <View>

                        <MultiSelect data={this.props.facilities} onSelectedItem={this.onSelectedFacilityItemsChange}  />

                            <TouchableHighlight style={{backgroundColor: '#098BD3' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setFacilityModalVisible(!this.state.FacilityModalVisible);}}>
                                    <Text style={{alignSelf:'center', fontSize: 20}}>Confirm Selection</Text>
                            </TouchableHighlight>
                        </View>
                    </Modal>


                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.PowerModalVisible}
                        onRequestClose={() => {
                            this.setPowerSourceModalVisible(false);
                        }}>
                        <View>

                        <MultiSelect data={this.props.powerSources} onSelectedItem={this.onSelectedPowerItemsChange}  />

                            <TouchableHighlight style={{backgroundColor: '#098BD3' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setPowerSourceModalVisible(!this.state.PowerModalVisible);}}>
                                    <Text style={{alignSelf:'center', fontSize: 20}}>Confirm Selection</Text>
                            </TouchableHighlight>
                        </View>
                    </Modal>


                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.HealthFacilityModalVisible}
                        onRequestClose={() => {
                            this.setHealthFacilityModalVisible(false);
                        }}>
                        <View>

                        <MultiSelect data={this.props.healthFacilities} onSelectedItem={this.onSelectedHealthFacilityItemsChange}  />

                            <TouchableHighlight style={{backgroundColor: '#098BD3' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setHealthFacilityModalVisible(!this.state.HealthFacilityModalVisible);}}>
                                    <Text style={{alignSelf:'center', fontSize: 20}}>Confirm Selection</Text>
                            </TouchableHighlight>
                        </View>
                    </Modal>

                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.GrantModalVisible}
                        onRequestClose={() => {
                            this.setGrantsModalVisible(false);
                        }}>
                        <View>

                        <MultiSelect data={this.props.grants} onSelectedItem={this.onSelectedGrantItemsChange}  />

                            <TouchableHighlight style={{backgroundColor: '#098BD3' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setGrantsModalVisible(!this.state.GrantModalVisible);}}>
                                    <Text style={{alignSelf:'center', fontSize: 20}}>Confirm Selection</Text>
                            </TouchableHighlight>
                        </View>
                    </Modal>

                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.EduLevelModalVisible}
                        onRequestClose={() => {
                            this.setEduLevelModalVisible(false);
                        }}>
                        <View>

                        <MultiSelect data={this.props.educationLevels} onSelectedItem={this.onSelectedEduLevelItemsChange}  />

                            <TouchableHighlight style={{backgroundColor: '#098BD3' , alignSelf:'center', margin: 5, padding: 10}} onPress={() => { this.setEduLevelModalVisible(!this.state.EduLevelModalVisible);}}>
                                    <Text style={{alignSelf:'center', fontSize: 20}}>Confirm Selection</Text>
                            </TouchableHighlight>
                        </View>
                    </Modal>


                </Content>
            </Container>
            </KeyboardAvoidingView>
       : null
        );
    }
}


const mapStateToProps = state => ({

    Profile: state.schools,
    studentClasses:  state.utility.studentClasses,
    streams:  state.utility.streams,
    healthFacilities: state.utility.healthFacilities,
    powerSources: state.utility.powerSources,
    facilities: state.utility.facilities,
    grants: state.utility.grants,
    educationLevels: state.utility.educationLevels,

  })

  const mapDispatchToProps = (dispatch) => {
    return {
        addSchoolProfile: (field,value) => dispatch(biodataActions.addSchoolProfile(field,value)),
        addSchoolRecord: (field, value) => dispatch(biodataActions.addSchoolRecord(field, value)),
        addSchoolCordinates: (field, value) => dispatch(biodataActions.addSchoolCordinates(field, value)),
        addSchoolEducationLevels: (payload) => dispatch(biodataActions.addSchoolEducationLevels(payload)),
        addSchoolGrants: (payload) => dispatch(biodataActions.addSchoolGrants(payload)),
        addSchoolEnrolmentCertificates: (payload) => dispatch(biodataActions.addSchoolEnrolmentCertificates(payload)),
        addSchoolFacilities: (payload) => dispatch(biodataActions.addSchoolFacilities(payload)),
        addSchoolPowerSources: (payload) => dispatch(biodataActions.addSchoolPowerSources(payload)),
        addSchoolHealthFacilities: (payload) => dispatch(biodataActions.addSchoolHealthFacilities(payload)),
        addSchoolClasses: (payload) => dispatch(biodataActions.addSchoolClasses(payload)),
        addSchoolStreams: (payload) => dispatch(biodataActions.addSchoolStreams(payload)),
        savechoolDataAsync: (data) => dispatch(biodataActions.savechoolDataAsync(data)),

        fetchStudentClassesList: () => dispatch(biodataActions.fetchStudentClassesList()),
        fetchStudentStreamsList: () => dispatch(biodataActions.fetchStudentStreamsList()),
        fetchGrantsList: () => dispatch(biodataActions.fetchGrantsList()),

        fetchFacilitiesList: () => dispatch(biodataActions.fetchFacilitiesList()),
        fetchEducationLevelsList: () => dispatch(biodataActions.fetchEducationLevelsList()),
        fetchHealthFacilityList: () => dispatch(biodataActions.fetchHealthFacilityList()),
        fetchPowerSourcesList: () => dispatch(biodataActions.fetchPowerSourcesList()),
        fetchHealthFacilityList: () => dispatch(biodataActions.fetchHealthFacilityList()),

        resetForm : () => dispatch(biodataActions.resetForm()),

    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(SchoolFacility)
