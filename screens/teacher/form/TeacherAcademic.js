import React, { Component } from "react";
import {View,Text,StyleSheet, Image,TextInput,ScrollView, Picker, Alert} from "react-native";
import { Container, Content, Form, Button, DatePicker } from 'native-base';
import Logic from '../../../logic';
import MultiSelect from "../../../Components/MultiSelect";

class TeacherAcademic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Ranks: [],
            Grades: [],
            Types:[],
            Schools:[],
            Subjects:[],
            TeacherClasses:[],
            Qualification: '',
            Institutions: '',
            SubjectArea: '',
            SubjectTaught: '',
            DateOfFirstApt: '',
            DateOfPresentApt: '',
            ExpectedDateofRetirement: '',
            YearsOfExperience: '',
            GradeLevel: '',
            Rank: '',
            PostHeld: '',
            PostHeldYear: '',
            PostingHistoryDate: [],
            TypeOfStaff: '',
            ClassOfStaff: '',
            NoOfSubjects: '',
            NoOfStreams: '',
            NoOfTraining: '',
            schoolId: '',
            SubjectsTaught:[],
            biodata: {}
        }
    }


    componentDidMount(){

      const biodata = this.props.navigation.getParam('bioData', '');
      if (biodata){
          this.setState({biodata: biodata});
      }
      const gradelevels = new Logic()
      gradelevels.GradeLevels('http://97.74.6.243/anambra/api/GradeLevels')
      .then((res) => {
          this.setState({Grades: res.data})
     })
    .catch((error) => console.warn(error))

      const ranks = new Logic()
      ranks.Ranks('http://97.74.6.243/anambra/api/Ranks')
      .then((res) => {
          this.setState({Ranks: res.data})
        })
      .catch((error) => console.warn(error))

      const types = new Logic()
      types.StaffType('http://97.74.6.243/anambra/api/StaffTypes')
      .then((res) => {

          this.setState({Types: res.data})
     })
        .catch((error) => console.warn(error))

        const staffClass = new Logic()
        staffClass.StaffClass('http://97.74.6.243/anambra/api/StaffClasses')
        .then((res) => {

            this.setState({TeacherClasses: res.data})
      })
          .catch((error) => console.warn(error))

          const school = new Logic()
          school.StaffClass('http://97.74.6.243/anambra/api/Schools')
          .then((res) => {

              this.setState({Schools: res.data})
        })
            .catch((error) => console.warn(error))


            const subject = new Logic()
            subject.StaffClass('http://97.74.6.243/anambra/api/Subjects')
            .then((res) => {

                this.setState({Subjects: res.data})
          })
              .catch((error) => console.warn(error))

    }

    submitForm = () => {
        const saveTeacher = new Logic()
        const formData = {
            "person": {
              "name": this.state.biodata.name,
              "dateOfBirth": this.state.biodata.dateOfBirth,
              "stateId" :this.state.biodata.StateOrigin,
              "lgaId":this.state.biodata.Lga,
              "sexId":this.state.biodata.sex,
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
            "teacherRecord": {
              "AcademicSessionId": 1,
              "schoolId": this.state.schoolId,
              "onPremises": this.state.biodata.liveIn,
              "qualifications": [
                {
                  "courseName": this.state.Qualification,
                  "startDate": "2016-09-08", //this.state.biodata.Residential
                  "endDate": "2016-09-08", //this.state.biodata.Residential
                  "grade": "-", //this.state.biodata.Residential
                }
              ],
              "specialization": this.state.SubjectArea,
              "firstAppointment": this.state.DateOfFirstApt,
              "currentAppointment": this.state.DateOfPresentApt,
              "retirement": this.state.ExpectedDateofRetirement,
              "yearsOfExperience": this.state.YearsOfExperience,
              "trainingsAttended": this.state.NoOfTraining,
              "streamsTaught": this.state.NoOfStreams,
              "gradeLevelId": this.state.GradeLevel,
              "rankId": this.state.Rank,
              "postHeld": this.state.PostHeld,
              "datePosted": this.state.PostHeldYear,
              "postingHistories": [
                {

                  "schoolId": this.state.schoolId,
                  "startDate": this.state.PostHeldYear,
                  "endDate": this.state.PostHeldYear,
                  "comments": "-",
                }
                ],
                "staffTypeId": this.state.TypeOfStaff,
                "StaffClassId": this.state.ClassOfStaff,
                "teacherSubjects":[
                    {"subjectId": this.state.SubjectTaught},
                ],
            },
          };

        console.log("Form Data",formData);
        saveTeacher.TeacherBiodata("http://97.74.6.243/anambra/api/Teachers",formData)
        .then((res) => {
            console.log(res);
            if (res.status == 201){
                alert("Record saved!");
            }
            this.props.navigation.navigate("Home");
        })
        .catch((error) => console.warn(error));

    }



    setAppoitmentDate = (newDate) => {
        this.setState({ DateOfFirstApt: newDate.toISOString() });
    }

    setRetirementDate = (newDate) => {
        this.setState({ ExpectedDateofRetirement: newDate.toISOString() });
    }

    setPresentAppointmentDate = (newDate) => {
        this.setState({ DateOfPresentApt: newDate.toISOString() });
    }

    setPostedDate = (newDate) => {
        this.setState({ PostHeldYear: newDate.toISOString() });
    }

    handleChangeText = (inputName, text) => {
        this.setState({ [inputName]: text });
    }
    render() {



        return (

            <Container>

                    <View style={{backgroundColor:'#E6DC82', padding :10}}>
                        <Text style={styles.headerText}>New Teacher Information</Text>
                    </View>

                    <Content style={{width:'100%', backgroundColor:'rgba(255, 255, 255, 0.34)', padding: 20, margin: 10}}>


                        <View style={{width: '85%', borderBottomColor: '#333', borderBottomWidth: 1, margin :10, marginLeft: 30}}>
                            <Text style={styles.subText}>Academic Details</Text>
                        </View>

                        <Form style={{width:'75%',justifyContent:'center', alignSelf:'center'}}>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Highest Qualification</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <TextInput onChangeText={text => this.handleChangeText('Qualification',text)} value={this.state.Qualification} style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Institution Attended</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <TextInput onChangeText={text => this.handleChangeText('Institutions',text)} value={this.state.Institutions} style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Subject Area Specialisation</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <TextInput onChangeText={text => this.handleChangeText('SubjectArea',text)} value={this.state.SubjectArea} style={styles.textInput}/>
                            </View>
                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Date of First Appointment</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <DatePicker
                                defaultDate={new Date(2018, 4, 4)}
                                minimumDate={new Date(2018, 1, 1)}
                                maximumDate={new Date()}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setAppoitmentDate}
                                disabled={false}
                            />
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Date of Present Appointment</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <DatePicker
                                defaultDate={new Date(2018, 4, 4)}
                                minimumDate={new Date(2018, 1, 1)}
                                maximumDate={new Date()}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setPresentAppointmentDate}
                                disabled={false}
                            />
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Expected Retirement Date</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <DatePicker
                                defaultDate={new Date(2018, 4, 4)}
                                minimumDate={new Date(2018, 1, 1)}
                                maximumDate={new Date(2100, 1, 1)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setRetirementDate}
                                disabled={false}
                            />
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Years of Experience</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <TextInput  keyboardType="number-pad" onChangeText={text => this.handleChangeText('YearsOfExperience',text)} value={this.state.YearsOfExperience} style={styles.textInput}/>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>School</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                    selectedValue={this.state.schoolId} onValueChange={(schoolId) => {this.setState({ schoolId: schoolId })}}
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
                                        {this.state.Schools.map( (v,key)=>{
                                            return <Picker.Item label={v.name} key={key}  value={v.id} />
                                        })}
                                </Picker>
                            </View>

                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Grade Level</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                    selectedValue={this.state.GradeLevel} onValueChange={(level) => {this.setState({ GradeLevel: level })}}
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
                                        {this.state.Grades.map( (v,key)=>{
                                            return <Picker.Item label={v.name} key={key}  value={v.id} />
                                        })}
                                </Picker>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Rank</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                    selectedValue={this.state.Rank} onValueChange={(Rank) => {this.setState({ Rank: Rank })}}
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
                                        {this.state.Ranks.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                                </Picker>
                            </View>



                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Post Held in School</Text>
                                <TextInput onChangeText={text => this.handleChangeText('PostHeld',text)} value={this.state.PostHeld} style={styles.textInput}/>
                            </View>
                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Year Posted to School</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <DatePicker
                                defaultDate={new Date(2018, 4, 4)}
                                minimumDate={new Date(2018, 1, 1)}
                                maximumDate={new Date()}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setPostedDate}
                                disabled={false}
                                />
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Posting History with date</Text>
                                <TextInput onChangeText={text => this.handleChangeText('PostingHistoryDate',text)} value={this.state.PostingHistoryDate} style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Type of Staff</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                    selectedValue={this.state.TypeOfStaff} onValueChange={(TypeOfStaff) => {this.setState({ TypeOfStaff: TypeOfStaff })}}
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
                                        {this.state.Types.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                                </Picker>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Class of Staff</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                    selectedValue={this.state.ClassOfStaff} onValueChange={(ClassOfStaff) => {this.setState({ ClassOfStaff: ClassOfStaff })}}
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
                                        {this.state.TeacherClasses.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                                </Picker>
                            </View>



                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Subject taught</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <Picker
                                    selectedValue={this.state.SubjectTaught} onValueChange={(SubjectTaught) => {this.setState({ SubjectTaught: SubjectTaught })}}
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}>
                                        {this.state.Subjects.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.id} />
                                        })}
                                </Picker>
                            </View>


                            {/* <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Number of Subjects taught</Text>
                                <TextInput onChangeText={text => this.handleChangeText('NoOfSubjects',text)} value={this.state.NoOfSubjects}  style={styles.textInput}/>
                            </View> */}



                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Number of streams taught</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <TextInput keyboardType="number-pad" onChangeText={text => this.handleChangeText('NoOfStreams',text)} value={this.state.NoOfStreams}  style={styles.textInput}/>
                            </View>



                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Number of trainings attended</Text>
                            <Text style={styles.Asterix}>*</Text>
                                <TextInput keyboardType="number-pad" onChangeText={text => this.handleChangeText('NoOfTraining',text)} value={this.state.NoOfTraining}  style={styles.textInput}/>
                            </View>


                            <View style={{flexDirection:'row'}}>
                                <View style={styles.buttonView}>
                                    <Button block style={styles.button2} onPress={()=>{this.props.navigation.goBack()}}>
                                            <Text style={styles.buttonText}>Previous</Text>
                                    </Button>
                                </View>

                                <View style={styles.buttonView}>
                                    <Button block style={styles.button} onPress={()=>{ this.submitForm() }}>
                                            <Text style={styles.buttonText}>Save</Text>
                                    </Button>
                                </View>
                            </View>

                        </Form>
                    </Content>
            </Container>
        );
    }
}
export default TeacherAcademic;

const styles = StyleSheet.create({
    container: {flex: 1,justifyContent: "flex-start",backgroundColor:'#fff',alignItems: 'center'},
    buttonView:{width:'50%', alignSelf:'flex-end', margin:'3%'},
    button: {
        backgroundColor: '#098BD3', color: '#fff', textAlign: 'center', paddingLeft: 15, width: '53%',
        marginRight: 10,
    },
    Asterix:{
        color:'red',
        fontSize:15,
        fontWeight: 'bold'
    },

    button2:{backgroundColor:'#E6DC82', color: '#fff', textAlign: 'center', paddingLeft: 15, width: '73%',
     marginRight: 10,},
    buttonText:{fontSize:15, color:'#fff',alignSelf:'center'},
    inputView: { width: '100%',alignItems: 'stretch'},
    headerText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: '500', textTransform: 'capitalize', alignSelf: 'center' },
    subText: { fontSize: 18, fontFamily: 'Roboto', fontWeight: 'bold', textTransform: 'capitalize', alignSelf: 'flex-start' },

    labelText: { width: '45%', height: 35, lineHeight: 18, textAlign: 'right', marginRight: 10, justifyContent: 'flex-end', alignItems: 'flex-end', fontSize: 15 },
    textInput: {
        width: '55%', height: 35, fontSize: 15, paddingLeft: 5, marginRight: 15,
        borderColor: '#F7F7F7', borderWidth: 1, backgroundColor: '#F7F7F7',
        color: '#000', flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',
    }

});
