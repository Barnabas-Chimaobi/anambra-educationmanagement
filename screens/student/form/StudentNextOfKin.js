import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView, Picker, Dimensions,Alert } from "react-native";
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
            NextOfkinName: '',
            NextOfkinPhone: '',
            NextOfkinAddress: '',
            GuardianName: '',
            GuardianState: '',
            GuardianLga: '',
            GuardianRelationship: '',
            GuardianAddress: '',
            GuardianPhone: '',
            GuardianEmail: '',
            GuardianANSSID: '',
            GuardianOccupation: '',
            StudentClass:'',
            Stream:'',
            SpecialNeed:'',
            Vulnerability:'',
            DistanceFromSchool: 0,
            SchoolId: '',
            biodata: {}
        }
        this.setDate = this.setDate.bind(this);
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

        const biodata = this.props.navigation.getParam('bioData', '');
        if (biodata){
            console.log("Biodata",biodata)
            this.setState({biodata: biodata});
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
        const lgas = new Logic()
        lgas.Lgas(`http://97.74.6.243/anambra/state/${stateId}`)

            .then((res) => {
                this.setState({ Lgas: res.data,GuardianState: stateId })
            })
            .catch((error) => console.warn(error))

    }

    updateLga = (GuardianLga) => {
        this.setState({ GuardianLga: GuardianLga })
    }

    updateRelationship = (GuardianRelationship) => {
        this.setState({ GuardianRelationship: GuardianRelationship })
    }

    handleChangeText = (inputName, text) => {
        this.setState({ [inputName]: text });
    }


    submitForm = () => {

        if (!this.state.GuardianName){
            alert("Guardian Name is compulsory!");
            return;
        }

        if (!this.state.GuardianState){
            alert("Guardian State of Origin is compulsory!");
            return;
        }

        if (!this.state.GuardianLga){
            alert("Guardian Lga is compulsory!");
            return;
        }

        if (!this.state.GuardianRelationship){
            alert("Guardian Relationship with pupil is compulsory!");
            return;
        }

        if (!this.state.GuardianAddress){
            alert("Guardian Address is compulsory!");
            return;
        }

        if (!this.state.GuardianPhone){
            alert("Guardian Phone Number is compulsory!");
            return;
        }

        if (!this.state.GuardianEmail){
            this.setState({GuardianEmail:'-'});
            return;
        }

        if (!this.state.GuardianANSSID){
            alert("Guardian ANSSID is compulsory!");
            return;
        }

        if (!this.state.GuardianOccupation){
            alert("Guardian Occupation is compulsory!");
            return;
        }

        if (!this.state.StudentClass){
            alert("Student Class is compulsory!");
            return;
        }

        if (!this.state.Stream){
            alert("Student Stream is compulsory!");
            return;
        }

        if (!this.state.DistanceFromSchool){
            alert("Distance From School is compulsory!");
            return;
        }

        const saveStudent = new Logic()
        const formData = {
            "person": {
                "name": this.state.biodata.name,
                "dateOfBirth": this.state.biodata.dateOfBirth,
                "stateId" :this.state.biodata.StateOrigin,
                "lgaId":this.state.biodata.Lga,
                "sexId":this.state.biodata.sex,
                "hometown": this.state.biodata.Hometown,
                "address": this.state.biodata.Residential,
                "phone": this.state.biodata.phone,
                "email": this.state.biodata.Email,
                "nextOfKin": {
                  "name": this.state.biodata.NextofKin,
                  "phone": this.state.biodata.NextofKinPhone,
                  "email": this.state.biodata.Email,
                  "address": this.state.biodata.Residential,
                },
            },
            "studentRecords": [
              {
                "academicSessionId": 1,
                "studentClassId": this.state.StudentClass,
                "streamId": this.state.Stream,
                "isBoarding": this.state.isBoarding,
                "distanceFromSchool": this.state.DistanceFromSchool,
                "schoolId": this.state.SchoolId,
              }
            ],
            "previousEducations": [
              {
                "schoolId":this.state.SchoolId,
                "reasonForLeaving": "-",
                "startDate": "2019-09-09",
                "endDate": "2019-09-09",
                "studentClassId": 1,
              }
            ],
            "studentSpecialNeeds": [
              {
                "specialNeedId": this.state.SpecialNeed,
              }
            ],
            "studentVulnerabilities": [
              {
                "vulnerabilityId": this.state.Vulnerability,
              }
            ],
          };

        console.log("Form Data",formData);
        saveStudent.StudentBiodata("http://97.74.6.243/anambra/api/Students",formData)
        .then((res) => {
            console.log(res);
            if (res.status == 201){
                alert("Record saved!");

            }
            this.props.navigation.navigate("Home");
        })
        .catch((error) => console.warn(error));

    }

    render() {
        return (

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
                                <TextInput onChangeText={text => this.handleChangeText('GuardianName', text)} value={this.state.GuardianName} style={styles.textInput} />
                        </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>State of Origin</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                  selectedValue={this.state.GuardianState} onValueChange={this.updateStateOrigin}
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
                                      selectedValue={this.state.GuardianLga} onValueChange={this.updateLga}
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
                                     selectedValue={this.state.GuardianRelationship} onValueChange={this.updateRelationship}
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
                                <TextInput onChangeText={text => this.handleChangeText('GuardianAddress', text)} value={this.state.GuardianAddress} style={styles.textInput} />
                        </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Phone Number</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <TextInput onChangeText={text => this.handleChangeText('GuardianPhone', text)} value={this.state.GuardianPhone} style={styles.textInput} />
                     </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Email</Text>
                                <TextInput onChangeText={text => this.handleChangeText('GuardianEmail', text)} value={this.state.GuardianEmail} style={styles.textInput} />
                   </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>ANSSID Number</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <TextInput onChangeText={text => this.handleChangeText('GuardianANSSID', text)} value={this.state.GuardianANSSID} style={styles.textInput} />
                    </View>
                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Occupation</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <TextInput onChangeText={text => this.handleChangeText('GuardianOccupation', text)} value={this.state.GuardianOccupation} style={styles.textInput} />
                     </View>

                     <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Class</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                  selectedValue={this.state.StudentClass} onValueChange={(Studentclass) =>{this.setState({StudentClass:Studentclass})}}
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
                                  selectedValue={this.state.Stream} onValueChange={(StudentStream) =>{this.setState({Stream:StudentStream})}}
                                  style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                   >
                                {this.state.Streams.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                                </Picker>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                    <Text style={styles.labelText}>Is Boarding student ?</Text>
                                    <Switch onValueChange={(boarding) => {this.setState({isBoarding:boarding})}}
                                value={this.state.isBoarding} />
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Special Need</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                  selectedValue={this.state.SpecialNeed} onValueChange={(SpecialNeed) =>{this.setState({SpecialNeed:SpecialNeed})}}
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
                                  selectedValue={this.state.Vulnerability} onValueChange={(StudentStream) =>{this.setState({Vulnerability:StudentStream})}}
                                  style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    >
                                {this.state.Vulnerabilities.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                                </Picker>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>School</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                  selectedValue={this.state.SchoolId} onValueChange={(School) =>{this.setState({SchoolId:School})}}
                                  style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    >
                                {this.state.Schools.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                                </Picker>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Distance From School</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <TextInput keyboardType="number-pad" onChangeText={text => this.handleChangeText('DistanceFromSchool', text)} value={this.state.DistanceFromSchool} style={styles.textInput} />
                            </View>


                            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                                <View style={styles.buttonView}>
                                    <Button block style={styles.button2} onPress={()=>{this.props.navigation.navigate("Biodata")}}>
                                            <Text style={styles.buttonText}>Previous</Text>
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
        );
    }
}
export default StudentNextOfKin;

const styles = StyleSheet.create({
    container: {flex: 1,justifyContent: "flex-start",backgroundColor:'#fff',alignItems: 'center'},
    buttonView:{width:'30%', alignSelf:'flex-end', margin:'3%'},
    button:{backgroundColor:'#098BD3'},
    button2:{backgroundColor:'#E6DC82'},
    Asterix:{
        color:'red',
        fontSize:15,
        fontWeight: 'bold'
    },
    buttonText:{fontSize:15, color:'#fff',alignSelf:'center'},
    inputView: { width: '100%',alignItems: 'stretch'},
    headerText:{fontSize:18, fontFamily: 'Roboto', fontWeight:'bold',textTransform:'capitalize', alignSelf:'center'},
    subText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold', textTransform: 'capitalize', alignSelf: 'flex-start' },
    labelText: { width: '45%', height: 35, lineHeight: 35, textAlign: 'right', marginRight: 10, justifyContent:'flex-end', alignItems: 'flex-end', fontSize: 15},
    textInput: {width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15,
                borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7',
                color: '#000', flex: 1,flexDirection: 'row',justifyContent: 'flex-end',alignItems: 'center',}
});