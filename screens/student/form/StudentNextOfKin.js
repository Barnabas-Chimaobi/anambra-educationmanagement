import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, KeyboardAvoidingView, Picker, Dimensions,Alert } from "react-native";
import { Container, Content, Form, Button,DatePicker,Switch} from 'native-base';
import { CheckBox } from 'react-native-elements';
import Logic from '../../../logic'
class StudentNextOfKin extends Component {

    constructor(props) {
        super(props);
        state = Dimensions.get("window");

        this.state = {
            selectedValue: '',
            chosenDate: new Date(),
            checked: false,
            checkedYes: false,
            isBoarding:false,
            Sexes: [],
            States: [],
            Lgas: [],
            Classes: [],
            Streams:[],
            Schools:[],
            SpecialNeeds:[],
            Relationships: [],
            Vulnerabilities: [],
            Biodata:{
                "person": {
                    "First_Name":"",
                    "Last_Name":"",
                    "Other_Name":"",
                    "name": "Somadina Eche",
                    "dateOfBirth": "1998-09-08",
                    "stateId": 1,
                    "lgaId": 1,
                    "alergy": "N/A",
                    "sexId": 1,
                    "hometown": "Manchester",
                    "address": "556 Holloway Road London",
                    "permanentAddress": "London",
                    "phone": "447031568998",
                    "email": "me@eche.com",
                    "nextOfKin": {
                        "name": "Josh Eche",
                        "phone": "565868638",
                        "email": "dad@eche.com",
                        "address": "Manchester"
                    },
                    "guardian": {
                        "name": "string",
                        "phone": "string",
                        "email": "string",
                        "address": "string",
                        "lgaId": 1,
                        "stateId": 1,
                        "anssidNumber": "string",
                        "occupation": "string",
                        "relationshipId": 1,
                      },

                },
                "studentRecords": [{
                    "academicSessionId": 1,
                    "studentClassId": 1,
                    "streamId": 1,
                    "isBoarding": true,
                    "distanceFromSchool": 0,
                    "schoolId": 1
                }],
                "previousEducations": [{
                    "school": "KYC School",
                    "reasonForLeaving": "Graduataed",
                    "studentClassId": 1
                }],
                "studentSpecialNeeds": [{
                    "specialNeedId": 1
                }],
                "studentVulnerabilities": [{
                    "vulnerabilityId": 1
                }]
            }
        }
        this.setDate = this.setDate.bind(this);
    }


    static navigationOptions =  {
        title: 'New Student',
        headerLeft: null
    }

    updateClass = (value) => {
        const {Biodata} = this.state;
        Biodata.studentRecords[0].studentClassId = value;
        this.setState({ Biodata : Biodata})
    }

    updateStream = (value) => {
        const {Biodata} = this.state;
        Biodata.studentRecords[0].streamId = value;
        this.setState({ Biodata : Biodata})
    }


    updateBording = (value) => {
        const {Biodata} = this.state;
        Biodata.studentRecords[0].isBoarding = value;
        this.setState({ Biodata : Biodata})
    }

    updateSpecialNeed = (value) => {
        const {Biodata} = this.state;
        Biodata.studentSpecialNeeds[0].specialNeedId = value;
        this.setState({ Biodata : Biodata})
    }

    updateVulnerability = (value) => {
        const {Biodata} = this.state;
        Biodata.studentVulnerabilities[0].vulnerabilityId = value;
        this.setState({ Biodata : Biodata})
    }

    updateSchool = (School) => {
        const {Biodata} = this.state;
        Biodata.studentRecords[0].schoolId = School;
        this.setState({ Biodata : Biodata})
    }

    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
      };

    setDate(newDate) {
        this.setState({ chosenDate: newDate.toISOString() });
    };

    componentWillMount() {
        Dimensions.addEventListener("change", this.handler);
    };

    componentWillUnmount() {
        // Important to stop updating state after unmount
        Dimensions.removeEventListener("change", this.handler);
      };

    componentDidMount(){

        const Biodata = this.props.navigation.getParam('Biodata', '');
        if (Biodata){
            this.setState({Biodata: Biodata});
        }
         // sex
        const sexes = new Logic()
        sexes.Sexes('http://97.74.6.243/anambra/api/Sexes')
        .then((res) => {
            this.setState({Sexes: res.data})
            console.warn('sex',this.state)
        })
        .catch((error) => console.warn(error))

        // states
        const states = new Logic()
        states.States('http://97.74.6.243/anambra/api/States')
        .then((res) => {
            this.setState({States: res.data})
            // console.warn('states',this.state)
        })
        .catch((error) => console.warn(error))

        // lgas
        const lgas = new Logic()
        lgas.Lgas('http://97.74.6.243/anambra/state/1')
        .then((res) => {
            this.setState({Lgas: res.data})
            // console.warn('lgas',this.state)
        })
        .catch((error) => console.warn(error))

         // lgas
         const relationships = new Logic()
         relationships.Relationships('http://97.74.6.243/anambra/api/Relationships')
         .then((res) => {
             this.setState({Relationships: res.data})
         })
         .catch((error) => console.warn(error))

         const studentClass = new Logic()
         studentClass.Relationships('http://97.74.6.243/anambra/api/StudentClasses')
         .then((res) => {
             this.setState({Classes: res.data})
         })
         .catch((error) => console.warn(error))


         const studentStreams = new Logic()
         studentStreams.Relationships('http://97.74.6.243/anambra/api/Streams')
         .then((res) => {
             this.setState({Streams: res.data})
         })
         .catch((error) => console.warn(error))


         const SpecialNeed = new Logic()
         SpecialNeed.Relationships('http://97.74.6.243/anambra/api/SpecialNeeds')
         .then((res) => {
             this.setState({SpecialNeeds: res.data})
         })
         .catch((error) => console.warn(error))

         const Vulnerabilities = new Logic()
         Vulnerabilities.Relationships('http://97.74.6.243/anambra/api/Vulnerabilities')
         .then((res) => {
             this.setState({Vulnerabilities: res.data})
         })
         .catch((error) => console.warn(error))

         const school = new Logic()
         school.Relationships('http://97.74.6.243/anambra/api/Schools')
         .then((res) => {
             this.setState({Schools: res.data})
         })
         .catch((error) => console.warn(error))


    }


    updateStateOrigin = (StateOrigin) => {
        //Call Method to load LGA for the selected state
        this.getLgaForState(StateOrigin);
    }

    getLgaForState = (stateId) => {
        const {Biodata} = this.state;
        Biodata.person.guardian.stateId = stateId;

        const lgas = new Logic()
        lgas.Lgas(`http://97.74.6.243/anambra/state/${stateId}`)

            .then((res) => {
                this.setState({ Lgas: res.data,Biodata: Biodata })
            })
            .catch((error) => console.warn(error))

    }

    updateLga = (GuardianLga) => {
        const {Biodata} = this.state;
        Biodata.person.guardian.lgaId= GuardianLga;
        this.setState({Biodata:Biodata });
    }

    updateRelationship = (value) => {
        const {Biodata} = this.state;
        Biodata.person.guardian.relationshipId= value;
        this.setState({Biodata:Biodata });
    }

    handleBiodataChangeText = (inputName, text) => {
        const {Biodata} = this.state;
        Biodata.person[inputName] = text;
        this.setState({Biodata:Biodata });
    }

    handleBioChangeText = (inputName, text) => {
        const {Biodata} = this.state;
        Biodata.previousEducations[0][inputName] = text;
        this.setState({Biodata:Biodata });
    }

    handleSchoolChangeText = (inputName, text) => {
        const {Biodata} = this.state;
        Biodata.studentRecords[0][inputName] = text;
        this.setState({Biodata:Biodata });
    }

    handleGuardianChangeText = (inputName, text) => {
        const {Biodata} = this.state;
        Biodata.person.guardian[inputName] = text;
        this.setState({Biodata:Biodata });
    }

    handleChangeText = (inputName, text) => {
        const {Biodata} = this.state;
        Biodata.person.nextOfKin[inputName] = text;
        this.setState({Biodata:Biodata });
    }

    goBack = () =>{

        const {Biodata} = this.state;
        this.props.navigation.navigate("Biodata", {Biodata});

    }

    submitForm = () => {

        const {Biodata} = this.state;

        if (!this.state.Biodata.person.guardian.name){
            alert("Guardian Name is compulsory!");
            return;
        }

        if (!this.state.Biodata.person.guardian.stateId){
            alert("Guardian State of Origin is compulsory!");
            return;
        }

        if (!this.state.Biodata.person.guardian.lgaId){
            alert("Guardian Lga is compulsory!");
            return;
        }

        if (!this.state.Biodata.person.guardian.relationshipId){
            alert("Guardian Relationship with pupil is compulsory!");
            return;
        }

        if (!this.state.Biodata.person.guardian.address){
            alert("Guardian Address is compulsory!");
            return;
        }

        if (!this.state.Biodata.person.guardian.phone){
            alert("Guardian Phone Number is compulsory!");
            return;
        }


        if (!this.state.Biodata.person.guardian.email){

        }
        else
        {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
            if(reg.test(this.state.Biodata.person.guardian.email) === false)
            {
                alert("Email is Not valid!");
                return;
            }
        }

        if (!this.state.Biodata.person.guardian.anssidNumber){
            alert("Guardian ANSSID is compulsory!");
            return;
        }

        if (!this.state.Biodata.person.guardian.occupation){
            alert("Guardian Occupation is compulsory!");
            return;
        }

        if (!this.state.Biodata.studentRecords[0].studentClassId){
            alert("Student Class is compulsory!");
            return;
        }

        if (!this.state.Biodata.studentRecords[0].streamId){
            alert("Student Stream is compulsory!");
            return;
        }

        if (!this.state.Biodata.studentRecords[0].distanceFromSchool){
            alert("Distance From School is compulsory!");
            return;
        }

        const saveStudent = new Logic()

        saveStudent.StudentBiodata("http://97.74.6.243/anambra/api/Students",Biodata)
        .then((res) => {
            console.log(res);
            if (res.status == 201){
                alert("Record saved!");

            }
            this.props.navigation.navigate("Biodata");
        })
        .catch((error) => {
            alert("Student Name & Next of Kin Phone number already exists");
        });

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
                                <TextInput onChangeText={text => this.handleGuardianChangeText('name', text)} value={this.state.Biodata.person.guardian.name} style={styles.textInput} />
                        </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>State of Origin</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                  selectedValue={this.state.Biodata.person.guardian.stateId} onValueChange={(stateId)=>this.updateStateOrigin(stateId)}
                                  style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    >
                                {this.state.States.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                                </Picker>
                            </View>
                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>L.G.A</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                      selectedValue={this.state.Biodata.person.guardian.lgaId} onValueChange={(lga)=>this.updateLga(lga)}
                                      style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    >
                                        {this.state.Lgas.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                                </Picker>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Realtionship with Pupil</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                     selectedValue={this.state.Biodata.person.guardian.relationshipId} onValueChange={(relationship) => {this.updateRelationship(relationship)}}
                                     style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    >
                                        {this.state.Relationships.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                                </Picker>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Residential Address</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <TextInput onChangeText={text => this.handleGuardianChangeText('address', text)} value={this.state.Biodata.person.guardian.address} style={styles.textInput} />
                        </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Phone Number</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <TextInput keyboardType="number-pad" onChangeText={text => this.handleGuardianChangeText('phone', text)} value={this.state.Biodata.person.guardian.phone} style={styles.textInput} />
                     </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Email</Text>
                                <TextInput keyboardType="email-address" onChangeText={text => this.handleGuardianChangeText('email', text)} value={this.state.Biodata.person.guardian.email} style={styles.textInput} />
                   </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>ANSSID Number</Text>
                                <Text style={styles.Asterix}>*</Text>
                                <TextInput onChangeText={text => this.handleGuardianChangeText('anssidNumber', text)} value={this.state.Biodata.person.guardian.anssidNumber} style={styles.textInput} />
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Occupation</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <TextInput onChangeText={text => this.handleGuardianChangeText('occupation', text)} value={this.state.Biodata.person.guardian.occupation} style={styles.textInput} />
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Previous School</Text>
                                <Text style={styles.Asterix}>*</Text>
                                <TextInput onChangeText={text => this.handleBioChangeText('school', text)} value={this.state.Biodata.previousEducations[0].school} style={styles.textInput} />
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Reason for leaving Previous School</Text>
                                <Text style={styles.Asterix}>*</Text>
                                <TextInput onChangeText={text => this.handleBioChangeText('reasonForLeaving', text)} value={this.state.Biodata.previousEducations[0].reasonForLeaving} style={styles.textInput} />
                            </View>

                     <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Class</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                  selectedValue={this.state.Biodata.studentRecords[0].studentClassId} onValueChange={(Studentclass) =>{this.updateClass(Studentclass)}}
                                  style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    >
                                {this.state.Classes.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                                </Picker>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Stream</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                  selectedValue={this.state.Biodata.studentRecords[0].streamId} onValueChange={(StudentStream) =>{this.updateStream(StudentStream)}}
                                  style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                   >
                                {this.state.Streams.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                                </Picker>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Is Boarding student ?</Text>
                                    <Switch onValueChange={(boarding) => {this.updateBording(boarding)}}
                                value={this.state.Biodata.studentRecords[0].isBoarding} />
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Special Need</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                  selectedValue={this.state.Biodata.studentSpecialNeeds[0].specialNeedId} onValueChange={(SpecialNeed) =>{this.updateSpecialNeed(SpecialNeed)}}
                                  style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    >
                                {this.state.SpecialNeeds.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                                </Picker>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Vulnerability</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                  selectedValue={this.state.Biodata.studentVulnerabilities[0].vulnerabilityId} onValueChange={(StudentStream) =>{this.updateVulnerability(StudentStream)}}
                                  style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    >
                                {this.state.Vulnerabilities.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                                </Picker>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Allergy</Text>
                                <Text style={styles.Asterix}>*</Text>
                                <TextInput onChangeText={text => this.handleBiodataChangeText('alergy', text)} value={this.state.Biodata.person.alergy} style={styles.textInput} />
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>School</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                  selectedValue={this.state.SchoolId} onValueChange={(School) =>{this.updateSchool(School)}}
                                  style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    >
                                {this.state.Schools.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                                </Picker>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Distance From School (KM)</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <TextInput keyboardType="number-pad" onChangeText={text => this.handleSchoolChangeText('distanceFromSchool', text)} value={this.state.Biodata.studentRecords[0].distanceFromSchool} style={styles.textInput} />
                            </View>


                            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                                <View style={styles.buttonView}>
                                    <Button block style={styles.button2} onPress={()=>{this.goBack()}}>
                                            <Text style={styles.button2Text}>Previous</Text>
                                    </Button>
                                </View>

                                <View style={styles.buttonView}>
                                    <Button block style={styles.button} onPress={()=>{ this.submitForm() }}>
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
export default StudentNextOfKin;

const styles = StyleSheet.create({
    container: {flex: 1,justifyContent: "flex-start",backgroundColor:'#fff',alignItems: 'center'},

    buttonView: { width: '30%', alignSelf: 'flex-end', margin: '3%' },
    button: { backgroundColor: '#098BD3' },
    button2: { backgroundColor: '#E6DC82' },
    button2Text: { fontSize: 15, color: '#000', alignSelf: 'center', fontWeight: '600' },
    buttonText: { fontSize: 15, color: '#fff', alignSelf: 'center', fontWeight: '600' },

    // buttonView:{width:'30%', alignSelf:'flex-end', margin:'3%'},
    // button:{backgroundColor:'#098BD3'},
    // button2:{backgroundColor:'#E6DC82'},
    // buttonText:{fontSize:15, color:'#fff',alignSelf:'center'},

    Asterix:{
        color:'red',
        fontSize:15,
        fontWeight: 'bold'
    },
    inputView: { width: '100%',alignItems: 'stretch'},
    headerText:{fontSize:18, fontFamily: 'Roboto', fontWeight:'bold',textTransform:'capitalize', alignSelf:'center'},
    subText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold', textTransform: 'capitalize', alignSelf: 'flex-start' },
    labelText: { width: '45%', height: 35, lineHeight: 35, textAlign: 'right', marginRight: 10, justifyContent:'flex-end', alignItems: 'flex-end', fontSize: 15},
    textInput: {width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15,
                borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7',
                color: '#000', flex: 1,flexDirection: 'row',justifyContent: 'flex-end',alignItems: 'center',}
});