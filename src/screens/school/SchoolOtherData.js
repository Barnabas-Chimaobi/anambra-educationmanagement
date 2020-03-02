import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, KeyboardAvoidingView, Picker } from "react-native";
import { Container, Content, Form, Switch,Button,DatePicker} from 'native-base';
import { styles} from "../../constants/styles";
import { connect} from 'react-redux'
import * as  biodataActions from "../../actions/index";

class SchoolOtherData extends Component {

    constructor(props) {
        super(props);
    }


    static navigationOptions = {
        header: null,
    };

    componentDidMount() {
        // this.props.fetchStudentStreamsList();
        // this.props.fetchStudentClassesList();
        // this.props.fetchStudentStreamsList();
        this.props.fetchSchoolMixesList();
        this.props.fetchSchoolTypesList();
        this.props.fetchSecurityPersonnelTypesList();
        this.props.fetchInspectionAuthoritiesList();
        this.props.fetchOwnershipsList();
        this.props.fetchParentForumsList();
    }
    toggleLand = (value) => {
        this.props.addSchoolRecord("hasLandEncroachment",value);
    }

    toggleSBMC = (value) => {
        this.props.addSchoolRecord("hasSBMC",value);
    }

    toggleSIP = (value) => {
        this.props.addSchoolRecord("hasSIP",value);
    }

    toggleFenceRepair = (value) => {
        this.props.addSchoolRecord("perimeterFenceNeedsRepair",value);
    }

    setInspectionDate = (newDate) => {
        this.props.addSchoolRecord("lastInspection",newDate.toISOString());
    }

    toggleFence = (value) => {
        this.props.addSchoolRecord("hasPerimeterFence",value);
    }

    togglesharesFacilities = (value) => {
        this.props.addSchoolRecord("sharesFacilities",value);
    }

    toggleBoarding = (value) => {
        this.props.addSchoolRecord("hasBoarding",value);
    }

    toggleSecurity = (value) => {
        this.props.addSchoolRecord("hasSecurityPersonnel",value);
    }

    toggleMultigradeTeachers = (value) => {
        this.props.addSchoolRecord("hasMultigradeTeachers",value);
    }

    handleProfileChangeText = (inputName, text) => {
        this.props.addSchoolRecord(inputName,text);
    }

    updateSchoolMix = (value) => {
        this.props.addSchoolRecord("schoolMixId",value);
    }

    updateSecurity = (value) => {
        this.props.addSchoolRecord("securityPersonnelTypeId",value);
    }

    updateinspectionAuthorityId = (value) => {

        this.props.addSchoolRecord("inspectionAuthorityId",value);
    }

    updateownershipId= (value) => {

        this.props.addSchoolRecord("ownershipId",value);
    }

    updateparentForumId= (value) => {

        this.props.addSchoolRecord("parentForumId",value);
    }

    goBack = () =>{
        this.props.navigation.navigate("SchoolProfile");
    }

    nextPage = () =>{

        if (this.props.Profile.schoolRecord.distanceFromTown < 0) {
            alert("distance From Town  is compulsory!");
            return;
        }

        if (this.props.Profile.schoolRecord.distanceFromLGA < 0) {
            alert("distance From LGA  is compulsory!");
            return;
        }

        if (this.props.Profile.schoolRecord.hasSecurityPersonnel) {

            if (!this.props.Profile.schoolRecord.securityPersonnelCount) {
                alert("security Personnel Count  is compulsory!");
                return;
            }

        }
        if (!this.props.Profile.schoolRecord.lastInspection) {
            alert("last Inspection date  is compulsory!");
            return;
        }

        this.props.navigation.navigate("SchoolFacility");
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
                            <Text style={styles.labelTextLong}>Are facilities shared with other schools?</Text>
                            <Switch onValueChange={this.togglesharesFacilities}
                                value={this.props.Profile.schoolRecord.sharesFacilities} />
                        </View>

                        {
                            this.props.Profile.schoolRecord.sharesFacilities
                            ?
                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelTextLong}>How many schools share facilities?</Text>
                                <TextInput keyboardType="numeric" onChangeText={text => this.handleProfileChangeText('sharedFacilitiesCount', text)} value={`${this.props.Profile.schoolRecord.sharedFacilitiesCount}`} style={styles.textInput} />
                            </View>
                            :
                            null
                        }

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelTextLong}>Is there multi-grade teaching in the school?</Text>
                            <Switch onValueChange={this.toggleMultigradeTeachers}
                                value={this.props.Profile.schoolRecord.hasMultigradeTeachers} />
                        </View>
                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelTextLong}>Distance from  communities (KM)</Text>
                            <TextInput  keyboardType="numeric"  onChangeText={text => this.handleProfileChangeText('distanceFromTown', text)} value={`${this.props.Profile.schoolRecord.distanceFromTown}`} style={styles.textInput} />
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelTextLong}>Distance from L.G.A Headquarters (KM)</Text>
                            <TextInput  keyboardType="numeric" onChangeText={text => this.handleProfileChangeText('distanceFromLGA', text)} value={`${this.props.Profile.schoolRecord.distanceFromLGA}`} style={styles.textInput} />
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelTextLong}>Is the school mixed or single sex?</Text>
                            <Picker selectedValue={this.props.Profile.schoolRecord.schoolMixId} onValueChange={(mix) => {this.updateSchoolMix(mix)}}
                                    style={styles.picker}>
                                    {this.props.schoolMixes.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                    })}
                            </Picker>
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelTextLong}>Are there boarding facilities?</Text>
                            <Switch onValueChange={this.toggleBoarding}
                                value={this.props.Profile.schoolRecord.hasBoarding} />
                        </View>


                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelTextLong}>Is there a fence around school ?</Text>
                            <Switch onValueChange={this.toggleFence}
                                value={this.props.Profile.schoolRecord.hasPerimeterFence} />
                        </View>

                        {
                            this.props.Profile.schoolRecord.hasPerimeterFence
                            ?
                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelTextLong}>Does Fence Need Repair ?</Text>
                                <Switch onValueChange={this.toggleFenceRepair}
                                    value={this.props.Profile.schoolRecord.perimeterFenceNeedsRepair} />
                            </View>
                            :
                            null
                        }

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelTextLong}>Availability of security personnel</Text>
                            <Switch onValueChange={this.toggleSecurity}
                                value={this.props.Profile.schoolRecord.hasSecurityPersonnel} />
                        </View>

                        {
                            this.props.Profile.schoolRecord.hasSecurityPersonnel ?
                            <View>

                                <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                    <Text style={styles.labelTextLong}>Form of security</Text>
                                    <Picker selectedValue={this.props.Profile.schoolRecord.securityPersonnelTypeId} onValueChange={(sec) => {this.updateSecurity(sec)}}
                                    style={styles.picker}>
                                    {this.props.SecuityTypes.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                    })}
                                    </Picker>
                                </View>

                                <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                    <Text style={styles.labelTextLong}>Number of security personnel</Text>
                                    <TextInput  keyboardType="numeric" onChangeText={text => this.handleProfileChangeText('securityPersonnelCount', text)} value={`${this.props.Profile.schoolRecord.securityPersonnelCount}`} style={styles.textInput} />
                                </View>


                            </View>

                            :
                            null
                        }



                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelTextLong} >Does the school have land encroachment?</Text>
                            <Switch onValueChange={this.toggleLand}
                                    value={this.props.Profile.schoolRecord.hasLandEncroachment} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelTextLong} >Does the school have School Based Management Committee (SBMC)?</Text>
                            <Switch onValueChange={this.toggleSBMC}
                                    value={this.props.Profile.schoolRecord.hasSBMC} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                            <Text style={styles.labelTextLong}>Did the school prepare a School Improvement Plan last year?</Text>
                            <Switch onValueChange={this.toggleSIP}
                                    value={this.props.Profile.schoolRecord.hasSIP} />
                        </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                    <Text style={styles.labelTextLong}>Parent Forum</Text>
                                    <Picker selectedValue={this.props.Profile.schoolRecord.parentForumId} onValueChange={(sec) => {this.updateparentForumId(sec)}}
                                    style={styles.picker}>
                                    {this.props.parentForums.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                    })}
                                    </Picker>
                                </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                    <Text style={styles.labelTextLong}>School Ownership</Text>
                                    <Picker selectedValue={this.props.Profile.schoolRecord.ownershipId} onValueChange={(sec) => {this.updateownershipId(sec)}}
                                    style={styles.picker}>
                                    {this.props.ownerships.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                    })}
                                    </Picker>
                                </View>

                        <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                    <Text style={styles.labelTextLong}>Inspection Authority</Text>
                                    <Picker selectedValue={this.props.Profile.schoolRecord.inspectionAuthorityId} onValueChange={(sec) => {this.updateinspectionAuthorityId(sec)}}
                                    style={styles.picker}>
                                    {this.props.inspectionAuthorities.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                    })}
                                    </Picker>
                                </View>

                    <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                        <Text style={styles.labelTextLong}>Last Inspection</Text>
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
                        onDateChange={this.setInspectionDate}
                        disabled={false}
                    />
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


const mapStateToProps = state => ({
    Profile: state.schools,
    Lgas:  state.utility.lgas,
    Locations:  state.utility.locations,
    SchoolTypes: state.utility.schoolTypes,
    SecuityTypes: state.utility.secuityPersonnelTypes,
    schoolMixes: state.utility.schoolMixes,
    inspectionAuthorities: state.utility.inspectionAuthorities,
    ownerships: state.utility.ownerships,
    parentForums: state.utility.parentForums,
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

        fetchLgasByState: (stateId) => dispatch(biodataActions.fetchStateLgasList(stateId)),
        fetchStudentClassesList: () => dispatch(biodataActions.fetchStudentClassesList()),
        fetchStudentStreamsList: () => dispatch(biodataActions.fetchStudentStreamsList()),
        fetchSchoolList: () => dispatch(biodataActions.fetchSchoolList()),
        fetchOwnershipsList: () => dispatch(biodataActions.fetchOwnershipsList()),
        fetchParentForumsList: () => dispatch(biodataActions.fetchParentForumsList()),
        fetchInspectionAuthoritiesList: () => dispatch(biodataActions.fetchInspectionAuthoritiesList()),
        fetchSecurityPersonnelTypesList: () => dispatch(biodataActions.fetchSecurityPersonnelTypesList()),
        fetchSchoolMixesList: () => dispatch(biodataActions.fetchSchoolMixesList()),
        fetchSchoolTypesList: () => dispatch(biodataActions.fetchSchoolTypesList()),


    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(SchoolOtherData)

