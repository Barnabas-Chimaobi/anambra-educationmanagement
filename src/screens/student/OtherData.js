import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, KeyboardAvoidingView, Picker, Dimensions,Alert, Platform, NetInfo } from "react-native";
import { Container, Content, Form, Button,DatePicker,Switch} from 'native-base';
import { styles} from "../../constants/styles";
import { connect } from 'react-redux'
import * as  biodataActions from "../../actions/index";

import { NavigationActions } from 'react-navigation';
class OtherData extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null,
    };

    componentDidMount() {

        if(!this.props.States){
            this.props.fetchStates();
        }

        this.props.fetchRelationshipsList();
        this.props.fetchSchoolList();
        this.props.fetchStudentClassesList();
        this.props.fetchStudentStreamsList();
        this.props.fetchSpecialNeedsList();
        this.props.fetchVulnerabilityList();

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

    updateClass = (value) => {
        this.props.addStudentRecdata("studentClassId", value);
    }

    updateStream = (value) => {
        this.props.addStudentRecdata("streamId", value);
    }


    updateBording = (value) => {
        this.props.addStudentRecdata("isBoarding", value);
    }

    updateSpecialNeed = (value) => {
        this.props.addStudentNeedsdata("specialNeedId", value);
    }

    updateVulnerability = (value) => {
        this.props.addStudentVulndata("vulnerabilityId", value);
    }

    updateSchool = (School) => {
        this.props.addStudentRecdata("schoolId", School);
    }

    updateStateOrigin = (StateOrigin) => {
        this.getLgaForState(StateOrigin);
    }

    getLgaForState = (stateId) => {
        console.log("stateId",stateId);
        this.props.updateGuardDataField("stateId", stateId);
        this.props.fetchLgasByState(stateId);

    }

    updateLga = (GuardianLga) => {
        this.props.updateGuardDataField("lgaId", GuardianLga);
    }

    updateRelationship = (value) => {
        this.props.updateGuardDataField("relationshipId", value);
    }

    handleBiodataChangeText = (inputName, text) => {
        this.props.updateBioDataField(inputName, text);
    }

    handleBioChangeText = (inputName, text) => {
        this.props.addStudentPrevdata(inputName, text);
    }

    handleSchoolChangeText = (inputName, text) => {
        this.props.addStudentRecdata(inputName, text);
    }

    handleGuardianChangeText = (inputName, text) => {
        this.props.updateGuardDataField(inputName, text);
    }

    handleChangeText = (inputName, text) => {
        this.props.updateNokDataField(inputName, text);
    }

    goBack = () =>{

        this.props.navigation.navigate("StudentBiodata");
    }

    submitForm = () => {


        if (!this.props.Biodata.guardian.name){
            alert("Guardian Name is compulsory!");
            return;
        }

        if (!this.props.Biodata.guardian.stateId){
            alert("Guardian State of Origin is compulsory!");
            return;
        }

        if (!this.props.Biodata.guardian.lgaId){
            alert("Guardian Lga is compulsory!");
            return;
        }

        if (!this.props.Biodata.guardian.relationshipId){
            alert("Guardian Relationship with pupil is compulsory!");
            return;
        }

        if (!this.props.Biodata.guardian.address){
            alert("Guardian Address is compulsory!");
            return;
        }

        if (!this.props.Biodata.guardian.phone){
            alert("Guardian Phone Number is compulsory!");
            return;
        }

        if (!this.props.Biodata.guardian.email){

        }
        else
        {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
            if(reg.test(this.props.Biodata.guardian.email) === false)
            {
                alert("Email is Not valid!");
                return;
            }
        }

        if (!this.props.Biodata.guardian.anssidNumber){
            alert("Guardian ANSSID is compulsory!");
            return;
        }

        if (!this.props.Biodata.guardian.occupation){
            alert("Guardian Occupation is compulsory!");
            return;
        }

        if (!this.props.Biodata.studentRecords[0].studentClassId){
            alert("Student Class is compulsory!");
            return;
        }

        if (!this.props.Biodata.studentRecords[0].streamId){
            alert("Student Stream is compulsory!");
            return;
        }

        // if (!this.props.Biodata.studentRecords[0].distanceFromSchool){
        //     alert("Distance From School is compulsory!");
        //     return;
        // }

        if(this.props.Biodata.id){
            alert("Record Updated!");
        }else{
            this.props.saveStudentDataAsync(this.props.Biodata)
            this.props.navigation.navigate("StudentBiodata");
            alert("Record Saved!");
        }


    }

    render() {
        return (
            <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>

            <Container>

            <View style={{width: '100%',backgroundColor:'#E6DC82', padding :10}}>
                <Text style={styles.headerText}>New Student Information</Text>
            </View>

            <Content>
            <View style={{width: '85%', borderBottomColor: '#333', borderBottomWidth: 1, margin :10, marginLeft: 30}}>
                    <Text style={styles.subText}>Student Other Details</Text>
            </View>

            <Form style={{ width: '75%', marginBottom: 40, alignSelf: 'center' }}>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Names of Parents/ Guardians</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <TextInput onChangeText={text => this.handleGuardianChangeText('name', text)} value={this.props.Biodata.guardian.name} style={styles.textInput} />
                        </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>State of Origin</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                  selectedValue={this.props.Biodata.guardian.stateId} onValueChange={(stateId)=>this.updateStateOrigin(stateId)}
                                  style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    >
                                {this.props.States.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                                </Picker>
                            </View>
                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>L.G.A</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                      selectedValue={this.props.Biodata.guardian.lgaId} onValueChange={(lga)=>this.updateLga(lga)}
                                      style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    >
                                        {this.props.Lgas.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                                </Picker>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Relationship with Pupil</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                     selectedValue={this.props.Biodata.guardian.relationshipId} onValueChange={(relationship) => {this.updateRelationship(relationship)}}
                                     style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    >
                                        {this.props.relationships.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                                </Picker>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Residential Address</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <TextInput onChangeText={text => this.handleGuardianChangeText('address', text)} value={this.props.Biodata.guardian.address} style={styles.textInput} />
                        </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Phone Number</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <TextInput keyboardType="numeric"  onChangeText={text => this.handleGuardianChangeText('phone', text)} value={`${this.props.Biodata.guardian.phone}`} style={styles.textInput} />
                     </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Email</Text>
                                <TextInput keyboardType="email-address" onChangeText={text => this.handleGuardianChangeText('email', text)} value={this.props.Biodata.guardian.email} style={styles.textInput} />
                   </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>ANSSID Number</Text>
                                <Text style={styles.Asterix}>*</Text>
                                <TextInput keyboardType="numeric" onChangeText={text => this.handleGuardianChangeText('anssidNumber', text)} value={this.props.Biodata.guardian.anssidNumber} style={styles.textInput} />
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Occupation</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <TextInput onChangeText={text => this.handleGuardianChangeText('occupation', text)} value={this.props.Biodata.guardian.occupation} style={styles.textInput} />
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Previous School</Text>
                                <Text style={styles.Asterix}>*</Text>
                                <TextInput onChangeText={text => this.handleBioChangeText('school', text)} value={this.props.Biodata.previousEducations[0].school} style={styles.textInput} />
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Reason for leaving Previous School</Text>
                                <Text style={styles.Asterix}>*</Text>
                                <TextInput onChangeText={text => this.handleBioChangeText('reasonForLeaving', text)} value={this.props.Biodata.previousEducations[0].reasonForLeaving} style={styles.textInput} />
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>School</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                  selectedValue={this.props.Biodata.studentRecords[0].schoolId} onValueChange={(School) =>{this.updateSchool(School)}}
                                  style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    >
                                {this.props.schools.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                                </Picker>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Distance From School (KM)</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <TextInput keyboardType="numeric"  onChangeText={text => this.handleSchoolChangeText('distanceFromSchool', text)} value={`${this.props.Biodata.studentRecords[0].distanceFromSchool}`} style={styles.textInput} />
                            </View>

                     <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Class</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                  selectedValue={this.props.Biodata.studentRecords[0].studentClassId} onValueChange={(Studentclass) =>{this.updateClass(Studentclass)}}
                                  style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    >
                                {this.props.studentClasses.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                                </Picker>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Stream</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                  selectedValue={this.props.Biodata.studentRecords[0].streamId} onValueChange={(StudentStream) =>{this.updateStream(StudentStream)}}
                                  style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                   >
                                {this.props.streams.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                                </Picker>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Is Boarding student ?</Text>
                                    <Switch onValueChange={(boarding) => {this.updateBording(boarding)}}
                                value={this.props.Biodata.studentRecords[0].isBoarding} />
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Special Need</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                  selectedValue={this.props.Biodata.studentSpecialNeeds[0].specialNeedId} onValueChange={(SpecialNeed) =>{this.updateSpecialNeed(SpecialNeed)}}
                                  style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    >
                                {this.props.specialNeeds.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                                </Picker>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Vulnerability</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                  selectedValue={this.props.Biodata.studentVulnerabilities[0].vulnerabilityId} onValueChange={(StudentStream) =>{this.updateVulnerability(StudentStream)}}
                                  style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    >
                                {this.props.vulnerabilities.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                                </Picker>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Allergy</Text>
                                <Text style={styles.Asterix}>*</Text>
                                <TextInput onChangeText={text => this.handleBiodataChangeText('alergy', text)} value={this.props.Biodata.person.alergy} style={styles.textInput} />
                            </View>




                            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                                <View style={styles.buttonView}>
                                    <Button block style={styles.button2} onPress={()=>{this.goBack()}}>
                                            <Text style={styles.button2Text}>Previous</Text>
                                    </Button>
                                </View>

                                <View style={styles.buttonView}>
                                    <Button block style={styles.button} onPress={()=>{ this.submitForm(), CheckConnectivity()}}>
                                            <Text style={styles.buttonText}>Submit</Text>
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
    Biodata: state.students,
    States:  state.utility.states,
    Lgas:  state.utility.lgas,
    genders:  state.utility.genders,
    relationships:  state.utility.relationships,
    schools:  state.utility.schools,
    studentClasses:  state.utility.studentClasses,
    streams:  state.utility.streams,
    specialNeeds:  state.utility.specialNeeds,
    vulnerabilities:  state.utility.vulnerabilities,
})

const mapDispatchToProps = (dispatch) => {
    return {
        updateBioDataField: (field,value) => dispatch(biodataActions.addStudentBiodata(field,value)),
        updateNokDataField: (field, value) => dispatch(biodataActions.addStudentNokdata(field, value)),
        updateGuardDataField: (field, value) => dispatch(biodataActions.addStudentGuarddata(field, value)),
        addStudentRecdata: (field, value) => dispatch(biodataActions.addStudentRecdata(field, value)),
        addStudentNeedsdata: (field, value) => dispatch(biodataActions.addStudentNeedsdata(field, value)),
        addStudentVulndata: (field, value) => dispatch(biodataActions.addStudentVulndata(field, value)),
        addStudentPrevdata: (field, value) => dispatch(biodataActions.addStudentPrevdata(field, value)),
        saveStudentDataAsync: (data) => dispatch(biodataActions.saveStudentDataAsync(data)),
        fetchStates: () => dispatch(biodataActions.fetchStatesList()),
        fetchLgasByState: (stateId) => dispatch(biodataActions.fetchStateLgasList(stateId)),
        fetchRelationshipsList: () => dispatch(biodataActions.fetchRelationshipsList()),
        fetchSchoolList: () => dispatch(biodataActions.fetchSchoolList()),
        fetchStudentClassesList: () => dispatch(biodataActions.fetchStudentClassesList()),
        fetchStudentStreamsList: () => dispatch(biodataActions.fetchStudentStreamsList()),
        fetchSpecialNeedsList: () => dispatch(biodataActions.fetchSpecialNeedsList()),
        fetchVulnerabilityList: () => dispatch(biodataActions.fetchVulnerabilityList()),
        fetchLgas: () => dispatch(biodataActions.fetchLgasList()),
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(OtherData);
