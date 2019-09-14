import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, KeyboardAvoidingView, Picker, Dimensions, Alert } from "react-native";
import { Container, Content, Form, Button, DatePicker, Switch } from 'native-base';
import { CheckBox } from 'react-native-elements'
import Logic from '../../../logic'
import { AsyncStorage } from 'react-native'

class TeacherBiodata extends Component {


    constructor(props) {
        super(props);
        // state = Dimensions.get("window");

        this.state = {
            Sexes: [],
            States: [],
            Lgas: [],
            SubjectNames: '',
            StreamNames: '',
            Biodata:{
                "person": {
                  "First_Name":"",
                  "Last_Name":"",
                  "Other_Name":"",
                  "name": "",
                  "dateOfBirth": "",
                  "stateId": 1,
                  "lgaId": 1,
                  "sexId": 1,
                  "alergy":"N/A",
                  "hometown": "",
                  "address": "",
                  "phone": "",
                  "email": "",
                  "nextOfKin": {
                    "name": "",
                    "phone": "",
                    "email": "",
                    "address": ""
                  }
                },
                "teacherRecord": {
                    "AcademicSessionId": 1,
                    "schoolId": 1,
                    "onPremises": true,
                    "teacherQualifications": [
                      {
                        "qualificationId": 1
                      }
                    ],
                    "teacherSubjects": [
                    ],
                  "teacherStreams": [
                  ],
                    "teacherSpecialization": [
                      {
                        "subjectAreaId": 1
                      }
                    ],
                    "teacherInstitutions": [
                    ],
                    "specialization": "Teaching",
                    "firstAppointment": "",
                    "currentAppointment": "",
                    "retirement": "",
                    "yearsOfExperience": 0,
                    "trainingsAttended": 0,
                    "streamsTaught": 1,
                    "gradeLevelId": 1,
                    "rankId": 1,
                    "postHeld": "Teacher",
                    "datePosted": "",
                    "postingHistories": [],
                    "staffTypeId": 1,
                    "StaffClassId": 1
                  }
            }
        }
        this.setDate = this.setDate.bind(this);



    }

    static navigationOptions =  {
        title: 'New Teacher',
        headerLeft: null
    }



    updateGender = (Sex) => {
        const {Biodata} = this.state;
        Biodata.person.sexId = Sex;
        this.setState({ Biodata : Biodata})
    }

    updateStateOrigin = (StateOrigin) => {
        //Call Method to load LGA for the selected state
        this.getLgaForState(StateOrigin);
    }

    getLgaForState = (stateId) => {
        const {Biodata} = this.state;
        Biodata.person.stateId = stateId;

        const lgas = new Logic()
        lgas.Lgas(`http://97.74.6.243/anambra/state/${stateId}`)

            .then((res) => {
                this.setState({ Lgas: res.data,Biodata: Biodata })
            })
            .catch((error) => console.warn(error))

    }

    updateLga = (Lga) => {
        const {Biodata} = this.state;
        Biodata.person.lgaId = Lga;
        this.setState({ Biodata : Biodata})
    }

    setDate = (newDate) => {
        const {Biodata} = this.state;
        Biodata.person.dateOfBirth = newDate.toISOString();
        this.setState({ Biodata : Biodata})
    }

    toggleliveIn = (value) => {
        const {Biodata} = this.state;
        Biodata.teacherRecord.onPremises = value;
        this.setState({ Biodata : Biodata})
    }

    componentWillUnmount() {
        // Important to stop updating state after unmount
        Dimensions.removeEventListener("change", this.handler);
    }

    componentDidMount() {
        const Biodata = this.props.navigation.getParam('Biodata', '');
        if (Biodata){
            this.setState({Biodata: Biodata});
        }

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
        lgas.Lgas('http://97.74.6.243/anambra/state/1')

            .then((res) => {
                this.setState({ Lgas: res.data })
            })
            .catch((error) => console.warn(error))

    }

    handleBioChangeText = (inputName, text) => {
        const {Biodata} = this.state;
        Biodata.person[inputName] = text;
        this.setState({Biodata:Biodata });
    }

    handleChangeText = (inputName, text) => {
        const {Biodata} = this.state;
        Biodata.person.nextOfKin[inputName] = text;
        this.setState({Biodata:Biodata });
    }

    checkInputFields = () => {

        if (!this.state.Biodata.person.First_Name && !this.state.Biodata.person.Last_Name){
            alert("First and Last Names are compulsory!");
            return;
        }

        const name = this.state.Biodata.person.First_Name + " " + this.state.Biodata.person.Last_Name+ " " + this.state.Biodata.person.Other_Name;
        const Biodata2 = this.state.Biodata;
        Biodata2.person.name = name;
        this.setState({Biodata:Biodata2 });

        if (!this.state.Biodata.person.dateOfBirth){
            alert("Date of Birth is compulsory!");
            return;
        }

        if (!this.state.Biodata.person.stateId && !this.state.Biodata.person.lgaId){
            alert("State of Origin & local government are compulsory!");
            return;
        }

        if (!this.state.Biodata.person.sexId){
            alert("sex is compulsory!");
            return;
        }

        if (!this.state.Biodata.person.hometown){
            alert("Hometown is compulsory!");
            return;
        }

        if (!this.state.Biodata.person.address){
            alert("Residential Address is compulsory!");
            return;
        }

        if (!this.state.Biodata.person.phone){
            alert("Phone number is compulsory!");
            return;
        }

        if (!this.state.Biodata.person.nextOfKin.name){
            alert("Next of Kin Name is compulsory!");
            return;
        }

        if (!this.state.Biodata.person.nextOfKin.phone){
            alert("Next of Kin Phone Number is compulsory!");
            return;
        }


        if (!this.state.Biodata.person.nextOfKin.address){
            alert("Next of Kin Adress is compulsory!");
            return;
        }

        if (!this.state.Biodata.person.email){
            // const {Biodata} = this.state;
            // Biodata.person.email = "-";
            // this.setState({ Biodata : Biodata})

        }
        else
        {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
            if(reg.test(this.state.Biodata.person.email) === false)
            {
                alert("Email is Not valid!");
                return;
            }
        }

        if (!this.state.Biodata.person.nextOfKin.email){
            // const {Biodata} = this.state;
            // Biodata.person.nextOfKin.email = "-";
            // this.setState({ Biodata : Biodata})

        }
        else
        {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
            if(reg.test(this.state.Biodata.person.nextOfKin.email) === false)
            {
                alert("Email is Not valid!");
                return;
            }
        }
        const {Biodata} = this.state;
        this.props.navigation.navigate("Academic", {Biodata});
    }

    render() {

        return (
            <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>
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
                                <Text style={styles.Asterix}>*</Text>
                                <TextInput onChangeText={text => this.handleBioChangeText('First_Name', text)} value={this.state.Biodata.person.First_Name} style={styles.textInput} />
                            </View>

                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelText}>Last Name</Text>
                                <Text style={styles.Asterix}>*</Text>
                                <TextInput onChangeText={text => this.handleBioChangeText('Last_Name', text)} value={this.state.Biodata.person.Last_Name} style={styles.textInput} />
                            </View>

                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelText}>Other Name</Text>
                                <TextInput onChangeText={text => this.handleBioChangeText('Other_Name', text)} value={this.state.Biodata.person.Other_Name} style={styles.textInput} />
                            </View>

                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelText}>Sex</Text>
                                <Text style={styles.Asterix}>*</Text>
                                <Picker
                                    selectedValue={this.state.Biodata.person.sexId} onValueChange={this.updateGender}
                                    style={{ height: 35, width: 150, backgroundColor: '#f2f2f2' }}>
                                    {this.state.Sexes.map((v, key) => {
                                        return <Picker.Item label={v.gender} key={key} value={v.id} />
                                    })}
                                </Picker>
                            </View>

                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelText}>Date of Birth</Text>
                                <Text style={styles.Asterix}>*</Text>
                                <DatePicker
                                    defaultDate={new Date(1950, 1, 1)}
                                    minimumDate={new Date(1950, 1, 1)}
                                    maximumDate={new Date()}
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
                                <Text style={styles.Asterix}>*</Text>
                                <Picker
                                    selectedValue={this.state.Biodata.person.stateId} onValueChange={this.updateStateOrigin}
                                    style={{ height: 35, width: 150, backgroundColor: '#f2f2f2' }}>
                                    {this.state.States.map((v, key) => {
                                        return <Picker.Item label={v.name} key={key} value={v.id} />
                                    })}
                                </Picker>
                            </View>

                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelText}>L.G.A</Text>
                                <Text style={styles.Asterix}>*</Text>

                                <Picker
                                    selectedValue={this.state.Biodata.person.lgaId} onValueChange={this.updateLga}
                                    style={{ height: 35, width: 150, backgroundColor: '#f2f2f2' }}>
                                    {this.state.Lgas.map((v, key) => {
                                        return <Picker.Item label={v.name} key={key} value={v.id} />
                                    })}
                                </Picker>
                            </View>

                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelText}>Hometown</Text>
                                <Text style={styles.Asterix}>*</Text>
                                <TextInput onChangeText={text => this.handleBioChangeText('hometown', text)} value={this.state.Biodata.person.hometown} style={styles.textInput} />
                            </View>

                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelText}>Residential Address</Text>
                                <Text style={styles.Asterix}>*</Text>
                                <TextInput onChangeText={text => this.handleBioChangeText('address', text)} value={this.state.Biodata.person.address} style={styles.textInput} />
                            </View>
                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelText}>Do you live within the school ?</Text>
                                <Switch onValueChange={this.toggleliveIn}
                                    value={this.state.Biodata.teacherRecord.onPremises} />
                            </View>

                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelText}>Phone Number</Text>
                                <Text style={styles.Asterix}>*</Text>
                                <TextInput  keyboardType="number-pad" onChangeText={text => this.handleBioChangeText('phone', text)} value={this.state.Biodata.person.phone} style={styles.textInput} />
                            </View>


                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelText}>Email</Text>
                                <TextInput  onChangeText={text => this.handleBioChangeText('email', text)} value={this.state.Biodata.person.email} style={styles.textInput} />
                            </View>


                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelText}>Next of Kin</Text>
                                <Text style={styles.Asterix}>*</Text>
                                <TextInput onChangeText={text => this.handleChangeText('name', text)} value={this.state.Biodata.person.nextOfKin.name} style={styles.textInput} />
                            </View>
                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelText}>Next of Kin Phone Number</Text>
                                <Text style={styles.Asterix}>*</Text>
                                <TextInput  keyboardType="number-pad" onChangeText={text => this.handleChangeText('phone', text)} value={this.state.Biodata.person.nextOfKin.phone} style={styles.textInput} />
                            </View>

                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelText}>Next of Kin Address</Text>
                                <Text style={styles.Asterix}>*</Text>
                                <TextInput onChangeText={text => this.handleChangeText('address', text)} value={this.state.Biodata.person.nextOfKin.address} style={styles.textInput} />
                            </View>

                            <View style={{ paddingTop: 5, margin: 5, flexDirection: 'row' }}>
                                <Text style={styles.labelText}>Email</Text>
                                <TextInput  onChangeText={text => this.handleChangeText('email', text)} value={this.state.Biodata.person.nextOfKin.email} style={styles.textInput} />
                            </View>


                            <View style={styles.buttonView}>
                                < Button block style={
                                    styles.button
                                }
                                    onPress={
                                        () => {
                                            this.checkInputFields()
                                        }}>
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
    Asterix:{
        color:'red',
        fontSize:15,
        fontWeight: 'bold'
    },
    buttonOne: {
        backgroundColor: '#E6DC82', color: '#fff', textAlign: 'center', paddingLeft: 15, width: '65%',
        alignSelf: 'flex-start', alignItems: 'center', marginRight: 10,
    },

    buttonView: { width: '20%', alignSelf: 'flex-end', margin: '3%' },
    button: { backgroundColor: '#098BD3' , alignContent: 'center'},
    button2: { backgroundColor: '#E6DC82' },
    button2Text: { fontSize: 15, color: '#000', alignSelf: 'center', fontWeight: '600' },
    buttonText: { fontSize: 15, color: '#fff', alignSelf: 'center', fontWeight: '600' },
    headerText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: '500', textTransform: 'capitalize', alignSelf: 'center' },
    subText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold', textTransform: 'capitalize', alignSelf: 'flex-start' },

    labelText: { width: '45%', height: 35, lineHeight: 15, textAlign: 'right', marginRight: 10, justifyContent: 'flex-end', alignItems: 'flex-end', fontSize: 15 },
    textInput: {
        width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15,
        borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7',
        color: '#000', flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',
    }
});
