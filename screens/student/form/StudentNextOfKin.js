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
            Sexes: [],
            States: [],
            Lgas: [],
            Relationships: [],
            NextOfkinName: 'Emeka',
            NextOfkinPhone: '08065487989',
            NextOfkinAddress: 'Ifite Awka',
            GuardianName: 'Emeka',
            GuardianState: 'Abia State',
            GuardianLga: 'Aba North',
            GuardianRelationship: 'Father',
            GuardianAddress: 'Awka',
            GuardianPhone: '08065796468',
            GuardianEmail: 'none@gmail.com',
            GuardianANSSID: 'AN2238293',
            GuardianOccupation: 'Farmer',
            biodata: {}
        }
        this.setDate = this.setDate.bind(this);
    }

    onSelectedItemsChange = selectedItems => {
        this.setState({ selectedItems });
      };

    setDate(newDate) {
        this.setState({ chosenDate: newDate });
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
        lgas.Lgas('http://97.74.6.243/anambra/api/Lgas')
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
    }


    updateStateOrigin = (GuardianState) => {
        this.setState({ GuardianState: GuardianState })
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
        console.log("Submitting Form");
        const saveStudent = new Logic()
        const formData = {
            "person": {
              "name": this.state.biodata.name,
              "dateOfBirth": "2019-09-09",
              "stateId": 1,
              "lgaId": 1,
              "sexId": 1,
              "hometown": this.state.biodata.Hometown, //this.state.biodata.Hometown,
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
                "studentClassId": 1,
                "streamId": 1,
                "isBoarding": true,
                "distanceFromSchool": 0,
                "schoolId": 1,
              }
            ],
            "previousEducations": [
              {
                "schoolId": 1,
                "reasonForLeaving": "string",
                "startDate": "2019-09-09T17:27:12.873Z",
                "endDate": "2019-09-09T17:27:12.873Z",
                "studentClassId": 1,
              }
            ],
            "studentSpecialNeeds": [
              {
                "specialNeedId": 1,
              }
            ],
            "studentVulnerabilities": [
              {
                "vulnerabilityId": 1,
              }
            ],
          };

        console.log("Form Data",formData);
        saveStudent.StudentBiodata("http://97.74.6.243/anambra/api/Students",formData)
        .then((res) => {
            console.log(res);
            if (res.status == 201){

                this.props.navigation.navigate("Home");
            }
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
                    <Text style={styles.subText}>Guardian & Next of Kin Details</Text>
            </View>

            <Form style={{ width: '75%', marginBottom: 40, alignSelf: 'center' }}>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Next of Kin Name</Text>
                                <TextInput onChangeText={text => this.handleChangeText('NextOfkinName', text)} value={this.state.NextOfkinName} style={styles.textInput} />
                          </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Next of Kin Phone Number</Text>
                                <TextInput onChangeText={text => this.handleChangeText('NextOfkinPhone', text)} value={this.state.NextOfkinPhone} style={styles.textInput} />
                           </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Next of Kin Residential Address</Text>
                                <TextInput onChangeText={text => this.handleChangeText('NextOfkinAddress', text)} value={this.state.NextOfkinAddress} style={styles.textInput} />
                         </View>
                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Names of Parents/ Guardians</Text>
                                <TextInput onChangeText={text => this.handleChangeText('GuardianName', text)} value={this.state.GuardianName} style={styles.textInput} />
                        </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>State of Origin</Text>
                                <Picker
                                  selectedValue={this.state.GuardianState} onValueChange={this.updateStateOrigin}
                                  style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    onValueChange={()=>{}}>
                                {this.state.States.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.name} />
                                        })}
                                </Picker>
                            </View>
                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>L.G.A</Text>
                                <Picker
                                      selectedValue={this.state.GuardianLga} onValueChange={this.updateLga}
                                      style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    onValueChange={()=>{}}>
                                        {this.state.Lgas.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.name} />
                                        })}
                                </Picker>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Realtionship with Pupil</Text>
                                <Picker
                                     selectedValue={this.state.GuardianRelationship} onValueChange={this.updateRelationship}
                                     style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    onValueChange={()=>{}}>
                                        {this.state.Relationships.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.name} />
                                        })}
                                </Picker>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Residential Address</Text>
                                <TextInput onChangeText={text => this.handleChangeText('GuardianAddress', text)} value={this.state.GuardianAddress} style={styles.textInput} />
                        </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Phone Number</Text>
                                <TextInput onChangeText={text => this.handleChangeText('GuardianPhone', text)} value={this.state.GuardianPhone} style={styles.textInput} />
                     </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Email</Text>
                                <TextInput onChangeText={text => this.handleChangeText('GuardianEmail', text)} value={this.state.GuardianEmail} style={styles.textInput} />
                   </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>ANSSID Number</Text>
                                <TextInput onChangeText={text => this.handleChangeText('GuardianANSSID', text)} value={this.state.GuardianANSSID} style={styles.textInput} />
                    </View>
                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Occupation</Text>
                                <TextInput onChangeText={text => this.handleChangeText('GuardianOccupation', text)} value={this.state.GuardianOccupation} style={styles.textInput} />
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
    buttonText:{fontSize:15, color:'#fff',alignSelf:'center'},
    inputView: { width: '100%',alignItems: 'stretch'},
    headerText:{fontSize:18, fontFamily: 'Roboto', fontWeight:'bold',textTransform:'capitalize', alignSelf:'center'},
    subText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold', textTransform: 'capitalize', alignSelf: 'flex-start' },
    labelText: { width: '45%', height: 35, lineHeight: 35, textAlign: 'right', marginRight: 10, justifyContent:'flex-end', alignItems: 'flex-end', fontSize: 15},
    textInput: {width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15,
                borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7',
                color: '#000', flex: 1,flexDirection: 'row',justifyContent: 'flex-end',alignItems: 'center',}
});