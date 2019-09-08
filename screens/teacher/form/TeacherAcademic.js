import React, { Component } from "react";
import {View,Text,StyleSheet, Image,TextInput,ScrollView, Picker} from "react-native";
import { Container, Content, Form, Button, DatePicker } from 'native-base';
import Logic from '../../../logic'
class TeacherAcademic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Ranks: [],
            Grades: [],
            Types:[],
            TeacherClasses:[],
            selectedGradelvl: '',
            Qualification: 'BSC Education',
            Institutions: 'UNN',
            SubjectArea: 'English',
            SubjectTaught: 'English',
            DateOfFirstApt: '',
            DateOfPresentApt: '',
            ExpectedDateofRetirement: '',
            YearsOfExperience: '4',
            GradeLevel: 'GL04',
            Rank: 'Teacher',
            PostHeld: 'Head Teacher',
            PostHeldYear: 'Head Teacher',
            PostingHistoryDate: [],
            TypeOfStaff: 'Permanent',
            ClassOfStaff: 'Permanent',
            NoOfSubjects: '2',
            NoOfStreams: '2',
            NoOfTraining: '2',
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
    }

    submitForm = () => {
        console.log("Submitting Form");
        const saveTeacher = new Logic()
        const formData = {
            "person": {
              "name": this.state.biodata.name,
              "dateOfBirth":"2016-09-08", // this.state.biodata.dateOfBirth,
              "stateId" : 1,
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
            "teacherRecord": {
              "AcademicSessionId": 1,
              "schoolId": 1,
              "onPremises": this.state.biodata.liveIn,
              "qualifications": [
                {
                  "courseName": 'BSC Education', //this.state.biodata.Qualification
                  "startDate": "2016-09-08", //this.state.biodata.Residential
                  "endDate": "2016-09-08", //this.state.biodata.Residential
                  "grade": "Second Class", //this.state.biodata.Residential
                }
              ],
              "specialization": 'Teaching', //this.state.biodata.SubjectArea
              "firstAppointment": "2016-09-08", //this.state.biodata.Residential
              "currentAppointment": "2016-09-08", //this.state.biodata.Residential
              "retirement": "2016-09-08", //this.state.biodata.Residential
              "yearsOfExperience": 4, //this.state.biodata.YearsOfExperience
              "trainingsAttended": 3, //this.state.biodata.NoOfTraining
              "streamsTaught": 2, //this.state.biodata.NoOfStreams
              "gradeLevelId": 1,
              "rankId": 1,
              "postHeld": 'Head Teacher', //this.state.biodata.PostHeld
              "datePosted": "2019-09-08", //this.state.biodata.Residential
              "postingHistories": [
                {

                  "schoolId": 1,
                  "startDate": "2019-09-08", //this.state.biodata.Residential
                  "endDate": "2019-09-08", //this.state.biodata.Residential
                  "comments": "No Comments", //this.state.biodata.Residential
                }
                ],
                "staffTypeId": 1,
                "teacherSubjects":[
                    {"subjectId": 1},
                ],
            },
          };

        console.log("Form Data",formData);
        saveTeacher.TeacherBiodata("http://97.74.6.243/anambra/api/Teachers",formData)
        .then((res) => {
            console.log(res);
        })
        .catch((error) => console.warn(error));

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
                                <TextInput onChangeText={text => this.handleChangeText('Qualification',text)} value={this.state.Qualification} style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Institutions Attended</Text>
                                <TextInput onChangeText={text => this.handleChangeText('Institutions',text)} value={this.state.Institutions} style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Subject Area Specialisation</Text>
                                <TextInput onChangeText={text => this.handleChangeText('SubjectArea',text)} value={this.state.SubjectArea} style={styles.textInput}/>
                            </View>
                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Date of First Appointment</Text>
                                <DatePicker
                                defaultDate={new Date(2018, 4, 4)}
                                minimumDate={new Date(2018, 1, 1)}
                                maximumDate={new Date(2018, 12, 31)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setDate}
                                disabled={false}
                            />
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Expected Retirement Date</Text>
                                <DatePicker
                                defaultDate={new Date(2018, 4, 4)}
                                minimumDate={new Date(2018, 1, 1)}
                                maximumDate={new Date(2018, 12, 31)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={this.setDate}
                                disabled={false}
                            />
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Years of Experience</Text>
                                <TextInput onChangeText={text => this.handleChangeText('YearsOfExperience',text)} value={this.state.YearsOfExperience} style={styles.textInput}/>
                            </View>
                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Grade Level</Text>
                                <Picker
                                    selectedValue={this.state.selectedGradelvl}
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    onValueChange={()=>{}}>
                                        {this.state.Grades.map( (v,key)=>{
                                            return <Picker.Item label={v.name} key={key}  value={v.name} />
                                        })}
                                </Picker>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Rank</Text>
                                <Picker
                                    selectedValue={this.state.selectedRanklvl}
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    onValueChange={()=>{}}>
                                        {this.state.Ranks.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.name} />
                                        })}
                                </Picker>
                            </View>



                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Post Held in School</Text>
                                <TextInput onChangeText={text => this.handleChangeText('PostHeld',text)} value={this.state.PostHeld} style={styles.textInput}/>
                            </View>
                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Year Posted to School</Text>
                                <TextInput onChangeText={text => this.handleChangeText('PostHeldYear',text)} value={this.state.PostHeldYear} style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Posting History with date</Text>
                                <TextInput onChangeText={text => this.handleChangeText('PostingHistoryDate',text)} value={this.state.PostingHistoryDate} style={styles.textInput}/>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Type of Staff</Text>
                                <Picker
                                    selectedValue={this.state.selectedRanklvl}
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    onValueChange={()=>{}}>
                                        {this.state.Types.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.name} />
                                        })}
                                </Picker>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Class of Staff</Text>
                                <Picker
                                    selectedValue={this.state.selectedRanklvl}
                                    style={{height: 35, width: 150, backgroundColor: '#f2f2f2'}}
                                    onValueChange={()=>{}}>
                                        {this.state.TeacherClasses.map( (v, key)=>{
                                            return <Picker.Item label={v.name} key={key} value={v.name} />
                                        })}
                                </Picker>
                            </View>


                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Number of Subjects taught</Text>
                                <TextInput onChangeText={text => this.handleChangeText('NoOfSubjects',text)} value={this.state.NoOfSubjects}  style={styles.textInput}/>
                            </View>



                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Number of streams taught</Text>
                                <TextInput onChangeText={text => this.handleChangeText('NoOfStreams',text)} value={this.state.NoOfStreams}  style={styles.textInput}/>
                            </View>



                            <View style={{paddingTop: 5,margin:5, flexDirection:'row' }}>
                                <Text style={styles.labelText}>Number of trainings attended</Text>
                                <TextInput onChangeText={text => this.handleChangeText('NoOfTraining',text)} value={this.state.NoOfTraining}  style={styles.textInput}/>
                            </View>



                            <View style={{flexDirection:'row'}}>
                                <View style={styles.buttonView}>
                                    <Button block style={styles.button2} onPress={()=>{this.props.navigation.navigate("Biodata")}}>
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
